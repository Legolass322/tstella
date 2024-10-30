import { type Decl, type DeclFun, type Expr, type Program, type Type, makeFunType, ExtensionKeys, RecordFieldType, simpleTypes, TYPE_NAT, TYPE_BOOL, TYPE_UNIT, makeTuple, TypeSum, TYPE_BOTTOM, TYPE_TOP, Succ, NatPred, NatIsZero, NatRec, Add, Multiply, ConstInt, ConstBool, If, LogicalAnd, LogicalNot, LogicalOr, List, Cons, ListHead, ListTail, ListIsEmpty, Abstraction, Application, Inl, Inr, DotTuple, Tuple, DotRecord, SRecord, Subtract, Divide, Pattern, PatternBinding, PatternVariant } from './ast'
import { Context, ContextSymbol } from './context'
import { Errors, TCSimpleError, TCNotSupportedError } from './errors'
import { TypecheckExprExtra } from './types'
import { protector, thrower } from './utils'

export function typecheckProgram(ast: Program) {
  const ctx = new Context()

  ctx.propagateExtensions(ast.extensions)

  // Global scope
  ctx.pushDeclarationLayer([])

  for (const decl of ast.declarations) {
    typecheckDecl(decl, ctx)
  }

  if (!ctx.hasMain) {
    throw new Error(Errors.MISSING_MAIN)
  }
}

function typecheckDecl(decl: Decl, ctx: Context) {
  const declType = decl.type
  switch (declType) {
    case 'DeclFun':
      typecheckFunctionDecl(decl, ctx)
      break
    case 'DeclFunGeneric':
    case 'DeclExceptionType':
    case 'DeclExceptionVariant':
    case 'DeclTypeAlias':
      console.error('unimplemeted typecheckProgram')
      break
    default:
      protector(declType, 'Unknown declaration type')
  }
}

function typecheckFunctionDecl(decl: DeclFun, ctx: Context) {
  console.log(`Checking the function "${decl.name}"...`);

  if (decl.name === 'main') {
    if (ctx.hasMain) {
      throw new Error(Errors.MAIN_ALREADY_EXISTS)
    }
    ctx.hasMain = true
  }

  ctx.addDeclarationToLayer(decl)

  ctx.pushDeclarationLayer(decl.parameters)

  thrower([
    [!ctx.isExtended(ExtensionKeys.multiparam) && decl.parameters.length > 1, Errors.INCORRECT_NUMBER_OF_ARGUMENTS],
    [!ctx.isExtended(ExtensionKeys.nullary) && !decl.parameters.length, Errors.INCORRECT_NUMBER_OF_ARGUMENTS],
  ])

  if (ctx.isExtended(ExtensionKeys.nested)) {
    decl.nestedDeclarations.forEach(decl => {
      typecheckDecl(decl, ctx)
    })
  }

  const returnType = typecheckExpr(decl.returnValue, ctx, {expectedType: decl.returnType ?? null})
  if (decl.returnType === undefined || returnType === undefined) {
    // todo
    throw new Error()
  }
  verifyTypesMatch(decl.returnType, returnType, ctx)

  ctx.popDeclarationLayer()
}

function typecheckExpr(expr: Expr, ctx: Context, extra?: TypecheckExprExtra): Type {
  const type = expr.type
  const expectedType = extra?.expectedType ?? null
  switch (type) {
    case 'Succ':
    case 'NatPred':
    case 'NatRec':
    case 'NatIsZero':
    case 'Add':
    case 'Multiply':
    case 'ConstInt':
    case 'Subtract':
    case 'Divide':
      return typecheckNatRelatedExpr(expr, ctx, extra)
    case 'ConstBool':
    case 'LogicalAnd':
    case 'LogicalNot':
    case 'LogicalOr':
    case 'If':
      return typecheckBoolRelatedExpr(expr, ctx, extra)
    case 'Abstraction':
    case 'Application':
      return typecheckARelatedExpr(expr, ctx, extra)
    case 'Tuple':
    case 'DotTuple':
      return typecheckTupleRelatedExpr(expr, ctx, extra)
    case 'SRecord':
    case 'DotRecord':
      return typecheckRecordRelatedExpr(expr, ctx, extra)
    case 'Inl':
    case 'Inr':
      return typecheckSumRelatedExpr(expr, ctx, extra)
    case 'List':
    case 'Cons':
    case 'ListHead':
    case 'ListTail':
    case 'ListIsEmpty':
      return typecheckListRelatedExpr(expr, ctx, extra)
    case 'TypeAscription':
      const innerType = typecheckExpr(expr.expr, ctx, { expectedType: expr.ascribedType })
      verifyTypesMatch(innerType, expr.ascribedType, ctx)
      return expr.ascribedType
    case 'Match':
      const { cases, expr: expression } = expr
      const exprType = typecheckExpr(expression, ctx, extra)
      thrower([
        [!cases.length, new TCSimpleError(Errors.ILLEGAL_EMPTY_MATCHING)],
        [!isExhaustiveMatching(exprType, cases.map(c => c.pattern)), new TCSimpleError(Errors.NONEXHAUSTIVE_MATCH_PATTERNS)]
      ])

      let caseBodyInferredType = expectedType

      ctx.pushDeclarationLayer([])
      for (const cs of cases) {
        checkPattern(cs.pattern, exprType, ctx)
        const inferredType = typecheckExpr(cs.expr, ctx, extra)
        if (caseBodyInferredType) {
          verifyTypesMatch(caseBodyInferredType, inferredType, ctx)
        } else {
          caseBodyInferredType = inferredType
        }
      }
      ctx.popDeclarationLayer()
    
      return caseBodyInferredType!
    case 'Var':
      const declarationOfVar = ctx.findDeclaration(expr.name)
      return declarationOfVar.declType
    case 'Sequence':
      const { expr1, expr2 } = expr
      const expr1Type = typecheckExpr(expr1, ctx, extra)
      if (expr2) {
        const expr2Type = typecheckExpr(expr2, ctx, extra)
        return expr2Type
      }
      return expr1Type
    case 'Unit':
      thrower([[!ctx.isExtended(ExtensionKeys.unit), new TCNotSupportedError(expr, ExtensionKeys.unit)]])
      return TYPE_UNIT
    case 'Let':
      ctx.pushDeclarationLayer([])
      const pbs = expr.patternBindings
      for (const pb of pbs) {
        if (pb.pattern.type === 'PatternVar') {
          const name = pb.pattern.name
          const type = typecheckExpr(pb.rhs, ctx, extra)
          ctx.addDeclarationToLayer({
            name,
            declType: type,
            origin: pb,
            [ContextSymbol]: 'ContextDecl'
          })
        }
      }
      const letType = typecheckExpr(expr.body, ctx, extra)
      ctx.popDeclarationLayer()
      return letType
    case 'Variant':
      if (!expectedType) {
        throw new TCSimpleError(Errors.AMBIGUOUS_VARIANT_TYPE)
      }
      if (expectedType.type !== 'TypeVariant') {
        throw new TCSimpleError(Errors.UNEXPECTED_VARIANT)
      }
      const { label, expr: value } = expr
      const field = expectedType.fieldTypes.find(
        (field) => field.label === label
      )
      if (field === undefined) {
        throw new Error(Errors.UNEXPECTED_VARIANT_LABEL)
      }
      const fieldType = typecheckExpr(value, ctx, {expectedType: field.fieldType!})
      verifyTypesMatch(field.fieldType!, fieldType, ctx)
      return expectedType
    default:
      console.log(expr)
      throw new Error(`unexpected: ${type}`)
    // protector(type, 'Unknown expression type')
  }
}

function checkPattern(pattern: Pattern, type: Type, ctx: Context, origin?: Pattern | PatternBinding) {
  switch (pattern.type) {
    case 'PatternVar': 
      ctx.addDeclarationToLayer({
        name: pattern.name,
        declType: type,
        origin: origin ?? pattern,
        [ContextSymbol]: 'ContextDecl'
      })
      return
    case 'PatternInl':
    case 'PatternInr':
      if (type.type !== 'TypeSum') {
        throw new Error(Errors.UNEXPECTED_PATTERN_FOR_TYPE)
      }
      ctx.pushDeclarationLayer([])
      checkPattern(pattern.pattern, pattern.type === 'PatternInl' ? type.left : type.right, ctx, origin)
      ctx.popDeclarationLayer()
      return
    case 'PatternVariant':
      if (type.type !== 'TypeVariant') {
        throw new Error(Errors.UNEXPECTED_PATTERN_FOR_TYPE)
      }
      const { label, pattern: innerPattern } = pattern
      const { fieldTypes } = type
      const field = fieldTypes.find((field) => field.label === label)
      if (!field) {
        throw new Error(Errors.UNEXPECTED_PATTERN_FOR_TYPE)
      }
      return checkPattern(innerPattern!, field.fieldType!, ctx, origin)
    default:
      throw new Error('Unimplemented')
  }
}

function isExhaustiveMatching(type: Type, patterns: Pattern[]): boolean {
  const types = patterns.map((pattern) => pattern.type)
  if (types.some((type) => type === 'PatternVar')) return true
  switch (type.type) {
    case 'TypeSum':
      return types.includes('PatternInl') && types.includes('PatternInr')
    case 'TypeVariant':
      const { fieldTypes } = type
      const usedPatternLabels = (patterns as PatternVariant[]).map(
        (pattern) => pattern.label
      )
      for (const { label } of fieldTypes) {
        if (!usedPatternLabels.includes(label)) {
          return false
        }
      }
      return true
    default:
      return false
  }
}

function verifyTypesMatch(expected: Type, actual: Type, ctx: Context) {
  switch (true) {
    /** VARIANTS */
    case expected.type === 'TypeVariant' && actual.type !== 'TypeVariant':
      // todo
      throw new Error()
    case expected.type !== 'TypeVariant' && actual.type === 'TypeVariant':
      // todo
      throw new Error()
    case expected.type === 'TypeVariant' && actual.type === 'TypeVariant':
      const actualFields = actual.fieldTypes
      for (const { label, fieldType } of expected.fieldTypes) {
        const actualField = actualFields.find((f) => f.label === label)
        if (!actualField) {
          // Expected a field but did not find it
          throw new Error(Errors.UNEXPECTED_TYPE_FOR_EXPRESSION)
        }
        verifyTypesMatch(fieldType!, actualField.fieldType!, ctx)
      }
      if (
        actualFields.some(
          (field) =>
            !expected.fieldTypes.some(
              (exField) => exField.label === field.label
            )
        )
      ) {
        // There is an actual field that was not expected
        throw new Error(Errors.UNEXPECTED_VARIANT_LABEL)
      }
      return

    /** SUMS */
    case expected.type === 'TypeSum' && actual.type !== 'TypeSum':
      // todo
      throw new Error()
    case expected.type !== 'TypeSum' && actual.type === 'TypeSum':
      // todo
      throw new Error()
    case expected.type === 'TypeSum' && actual.type === 'TypeSum':
      // todo: check subtyping
      verifyTypesMatch(expected.left, actual.left, ctx)
      verifyTypesMatch(expected.right, actual.right, ctx)
      return

    /** LISTS */
    case expected.type === 'TypeList' && actual.type !== 'TypeList':
      // todo
      throw new Error()
    case expected.type !== 'TypeList' && actual.type === 'TypeList':
      // todo
      throw new Error()
    case expected.type === 'TypeList' && actual.type === 'TypeList':
      // todo: check subtyping
      thrower([[!expected.types.length || !actual.types.length, 'unexpected empty lists types']])
      verifyTypesMatch(expected.types[0], actual.types[0], ctx)
      return

    /** FUNCTIONS */
    case expected.type === 'TypeFun' && actual.type !== 'TypeFun':
      throw new Error(Errors.NOT_A_FUNCTION)
    case expected.type !== 'TypeFun' && actual.type === 'TypeFun':
      throw new Error(Errors.UNEXPECTED_LAMBDA)
    case expected.type === 'TypeFun' && actual.type === 'TypeFun':
      switch (true) {
        case expected.parametersTypes.length === actual.parametersTypes.length:
          expected.parametersTypes.forEach((param, i) => {
            const actualParam = actual.parametersTypes[i]
            verifyTypesMatch(param, actualParam, ctx)
          })
          if (expected.returnType === undefined || actual.returnType === undefined) {
            // todo
            if (expected.returnType !== actual.returnType) throw new Error()
            return
          }
          if (expected.returnType.type !== actual.returnType.type) {
            // todo
            throw new Error()
          }
          return
        // todo: check curring
        case expected.parametersTypes.length > actual.parametersTypes.length:
          actual.parametersTypes.forEach((param, i) => {
            const expectedParam = expected.parametersTypes[i]
            verifyTypesMatch(expectedParam, param, ctx)
          })
          if (!actual.returnType) {
            // todo
            throw new Error()
          }
          verifyTypesMatch(
            makeFunType(expected.parametersTypes.slice(actual.parametersTypes.length), expected.returnType),
            actual.returnType,
            ctx
          )
          return
        case expected.parametersTypes.length < actual.parametersTypes.length:
          expected.parametersTypes.forEach((param, i) => {
            const actualParam = actual.parametersTypes[i]
            verifyTypesMatch(param, actualParam, ctx)
          })
          if (!expected.returnType) {
            // todo
            throw new Error()
          }
          verifyTypesMatch(
            expected.returnType,
            makeFunType(actual.parametersTypes.slice(expected.parametersTypes.length), actual.returnType),
            ctx
          )
          return
      }
      return

    /** TUPLES */
    case expected.type === 'TypeTuple' && actual.type !== 'TypeTuple':
      // todo
      throw new Error()
    case expected.type !== 'TypeTuple' && actual.type === 'TypeTuple':
      // todo
      throw new Error()
    case expected.type === 'TypeTuple' && actual.type === 'TypeTuple':
      if (expected.types.length !== actual.types.length) {
        // todo
        throw new Error()
      }

      expected.types.forEach((param, i) => {
        const actualParam = actual.types[i]
        verifyTypesMatch(param, actualParam, ctx)
      })
      return

    /** RECORDS */
    case expected.type === 'TypeRecord' && actual.type !== 'TypeRecord':
      // todo
      throw new Error()
    case expected.type !== 'TypeRecord' && actual.type === 'TypeRecord':
      // todo
      throw new Error()
    case expected.type === 'TypeRecord' && actual.type === 'TypeRecord':
      expected.fieldTypes.forEach((param) => {
        const { label, fieldType } = param
        const actualParam = actual.fieldTypes.find(ft => ft.label === label)
        if (!actualParam) {
          // todo
          throw new Error()
        }
        verifyTypesMatch(fieldType, actualParam.fieldType, ctx)
      })
      return

    // todo: check subtyping?
    // ctx.isExtended()

    /** SIMPLE TYPES */
    case (simpleTypes as unknown as string[]).includes(expected.type) && (simpleTypes as unknown as string[]).includes(actual.type):
      // todo
      if (expected.type !== actual.type) throw new Error()
      return
  }

  throw new Error('Unexpected')
}

type NatRelatedExpr = Succ | NatPred | NatIsZero | NatRec | Add | Multiply | Subtract | Divide | ConstInt
function typecheckNatRelatedExpr<T extends NatRelatedExpr, _E = Exclude<NatRelatedExpr, T>>(expr: T, ctx: Context, extra?: TypecheckExprExtra): Type {
  switch (expr.type) {
    case 'NatPred':
    case 'Succ':
      const inner = typecheckExpr(expr.expr, ctx, extra)
      verifyTypesMatch(TYPE_NAT, inner, ctx)
      return TYPE_NAT
    case 'Add':
    case 'Multiply':
    case 'Subtract':
    case 'Divide':
      const {left, right} = expr
      const leftType = typecheckExpr(left, ctx, extra)
      const rightType = typecheckExpr(right, ctx, extra)
      verifyTypesMatch(TYPE_NAT, leftType, ctx)
      verifyTypesMatch(TYPE_NAT, rightType, ctx)
      return TYPE_NAT
    case 'ConstInt':
      if (expr.value < 0) {
        throw new TCSimpleError(Errors.ILLEGAL_NEGATIVE_LITERAL)
      }
      if (expr.value > 1 && !ctx.isExtended(ExtensionKeys.natural)) {
        throw new TCNotSupportedError(expr, ExtensionKeys.natural)
      }
      return TYPE_NAT
    case 'NatIsZero':
      const innerIsZero = typecheckExpr(expr.expr, ctx, { expectedType: TYPE_NAT })
      verifyTypesMatch(TYPE_NAT, innerIsZero, ctx)
      return TYPE_BOOL
    case 'NatRec':
      const from = expr.n
      const initial = expr.initial
      const step = expr.step

      verifyTypesMatch(TYPE_NAT, typecheckExpr(from, ctx), ctx)

      const initialType = typecheckExpr(initial, ctx)
      const stepType = typecheckExpr(step, ctx)

      verifyTypesMatch(
        makeFunType([TYPE_NAT], makeFunType([initialType], initialType)),
        stepType,
        ctx,
      )
      return initialType
    default:
      protector(expr, 'typecheckNatRelatedExpr')
      throw new Error()
  }
}

type BoolRelatedExpr = ConstBool | If | LogicalAnd | LogicalNot | LogicalOr
function typecheckBoolRelatedExpr<T extends BoolRelatedExpr, _E = Exclude<BoolRelatedExpr, T>>(expr: T, ctx: Context, extra?: TypecheckExprExtra): Type {
  switch (expr.type) {
    case 'ConstBool':
      return TYPE_BOOL
    case 'LogicalAnd':
    case 'LogicalOr':
      const { left, right } = expr
      const leftType = typecheckExpr(left, ctx, extra)
      const rightType = typecheckExpr(right, ctx, extra)
      verifyTypesMatch(TYPE_BOOL, leftType, ctx)
      verifyTypesMatch(TYPE_BOOL, rightType, ctx)
      return TYPE_BOOL
    case 'If':
      const actualConditionType = typecheckExpr(expr.condition, ctx, { expectedType: TYPE_BOOL })
      verifyTypesMatch(TYPE_BOOL, actualConditionType, ctx)
      const thenType = typecheckExpr(expr.thenExpr, ctx, extra)
      const elseType = typecheckExpr(expr.elseExpr, ctx, extra)
      verifyTypesMatch(thenType, elseType, ctx)
      return thenType
    case 'LogicalNot':
      const not = typecheckExpr(expr.expr, ctx, extra)
      verifyTypesMatch(TYPE_BOOL, not, ctx)
      return TYPE_BOOL
    default:
      protector(expr, 'typecheckBoolRelatedExpr')
      throw new Error()
  }
}

type ListRelatedExpr = List | Cons | ListHead | ListTail | ListIsEmpty
function typecheckListRelatedExpr<T extends ListRelatedExpr, _E = Exclude<ListRelatedExpr, T>>(expr: T, ctx: Context, extra?: TypecheckExprExtra): Type {
  const expectedType = extra?.expectedType ?? null
  switch (expr.type) {
    case 'List':
      // todo: check list type for details to implement
      // todo: expect here type. Check with subtyping
      if (!expectedType) {
        throw new Error()
      }
      if (expectedType.type !== 'TypeList') {
        throw new Error()
      }
      if (!expectedType.types.length) {
        // todo: unexpected to not have at least one type
        throw new Error()
      }
      const expectedItemType = expectedType.types[0]

      if (!expr.exprs.length) {
        return {
          type: 'TypeList',
          types: [TYPE_TOP]
        }
      }

      for (const item of expr.exprs) {
        const itemType = typecheckExpr(item, ctx, { expectedType: expectedItemType })
        verifyTypesMatch(expectedItemType, itemType, ctx)
      }
      return {
        type: 'TypeList',
        types: [expectedItemType]
      }
    case 'Cons':
      // todo: check list type for details to implement
      // todo: expect here type. Check with subtyping
      if (!expectedType) {
        throw new Error()
      }
      if (expectedType.type !== 'TypeList') {
        throw new Error()
      }
      if (!expectedType.types.length) {
        // todo: unexpected to not have at least one type
        throw new Error()
      }
      const expectedConsItemType = expectedType.types[0]
      const headType = typecheckExpr(expr.head, ctx, { expectedType: expectedConsItemType })
      const tailType = typecheckExpr(expr.tail, ctx, { expectedType: { type: 'TypeList', types: [expectedConsItemType] } })
      if (tailType.type !== 'TypeList') {
        // todo
        throw new Error()
      }
      verifyTypesMatch(headType, expectedConsItemType, ctx)
      return {
        type: 'TypeList',
        types: [expectedConsItemType]
      }
    case 'ListHead':
      const listHeadListType = typecheckExpr(expr.expr, ctx, extra)
      if (listHeadListType.type !== 'TypeList') {
        // todo
        throw new Error()
      }
      if (!listHeadListType.types.length) {
        // todo
        throw new Error()
      }
      return listHeadListType.types[0]
    case 'ListTail':
      const listTailListType = typecheckExpr(expr.expr, ctx, extra)
      if (listTailListType.type !== 'TypeList') {
        // todo
        throw new Error()
      }
      return listTailListType
    case 'ListIsEmpty':
      const ListIsEmptyListType = typecheckExpr(expr.expr, ctx, extra)
      if (ListIsEmptyListType.type !== 'TypeList') {
        // todo
        throw new Error()
      }
      return TYPE_BOOL
    default:
      protector(expr, 'typecheckListRelatedExpr')
      throw new Error()
  }
}

type ARelatedExpr = Application | Abstraction
function typecheckARelatedExpr<T extends ARelatedExpr, _E = Exclude<ARelatedExpr, T>>(expr: T, ctx: Context, extra?: TypecheckExprExtra): Type {
  switch (expr.type) {
    case 'Application':
      const { function: func, arguments: args } = expr
      // todo: extra
      const funcType = typecheckExpr(func, ctx)

      if (funcType.type !== 'TypeFun') {
        throw new Error(Errors.NOT_A_FUNCTION)
      }
      thrower([
        [!ctx.isExtended(ExtensionKeys.multiparam) && args.length > 1, Errors.INCORRECT_NUMBER_OF_ARGUMENTS],
        [!ctx.isExtended(ExtensionKeys.nullary) && !args.length, Errors.INCORRECT_NUMBER_OF_ARGUMENTS],
      ])
      for (let i = 0; i < Math.min(args.length, funcType.parametersTypes.length); i++) {
        const expectedArgType = funcType.parametersTypes[i]
        const argType = typecheckExpr(args[i], ctx, { expectedType: expectedArgType })
        verifyTypesMatch(expectedArgType, argType, ctx)
      }
      // todo: curring
      // if (ctx.isExtend(...curring))...
      let overflowedArgs: Expr[] = args.slice(funcType.parametersTypes.length)
      let rType = funcType.returnType
      if (true && overflowedArgs.length) {
        while (overflowedArgs.length) {
          if (rType?.type !== 'TypeFun') {
            // todo
            throw new Error(Errors.INCORRECT_NUMBER_OF_ARGUMENTS)
          }
          const processedArgs = Math.min(overflowedArgs.length, rType.parametersTypes.length)
          for (let i = 0; i < processedArgs; i++) {
            const expectedArgType = rType.parametersTypes[i]
            const argType = typecheckExpr(overflowedArgs[i], ctx, { expectedType: expectedArgType })
            verifyTypesMatch(expectedArgType, argType, ctx)
          }

          overflowedArgs = overflowedArgs.slice(rType.parametersTypes.length)
          if (overflowedArgs.length) {
            rType = rType.returnType
          } else if (processedArgs === rType.parametersTypes.length) {
            // todo
            return rType.returnType!
          } else {
            return makeFunType(
              rType.parametersTypes.slice(processedArgs),
              rType.returnType
            )
          }
        }
      } else if (false && overflowedArgs.length) {
        // todo
        throw new Error(Errors.INCORRECT_NUMBER_OF_ARGUMENTS)
      }
      // todo
      return rType!
    case 'Abstraction':
      const { parameters, returnValue } = expr

      thrower([
        [!ctx.isExtended(ExtensionKeys.multiparam) && parameters.length > 1, Errors.INCORRECT_NUMBER_OF_ARGUMENTS],
        [!ctx.isExtended(ExtensionKeys.nullary) && !parameters.length, Errors.INCORRECT_NUMBER_OF_ARGUMENTS],
      ])

      // todo: extra
      ctx.pushDeclarationLayer(parameters)
      const returnType = typecheckExpr(returnValue, ctx)
      ctx.popDeclarationLayer()

      return makeFunType(parameters.map(param => param.paramType), returnType)
    default:
      protector(expr, 'typecheckARelatedExpr')
      throw new Error()
  }
}

type SumRelatedExpr = Inl | Inr
function typecheckSumRelatedExpr<T extends SumRelatedExpr, _E = Exclude<SumRelatedExpr, T>>(expr: T, ctx: Context, extra?: TypecheckExprExtra): Type {
  const expectedType = extra?.expectedType ?? null
  switch (expr.type) {
    case 'Inl':
    case 'Inr':
      thrower([[!ctx.isExtended(ExtensionKeys.sum), 'unsupported - no #sum-types']])

      // todo, expect here type. Check with subtyping
      if (!expectedType) {
        throw new Error()
      }
      if (expectedType.type !== 'TypeSum') {
        throw new Error()
      }
      const arg = expr.type === 'Inl' ? 'left' : 'right'
      const complementArg = expr.type !== 'Inl' ? 'left' : 'right'
      const expectedTypePart = expectedType[arg]
      const expectedTypeComplement = expectedType[complementArg]
      const inffered = typecheckExpr(expr.expr, ctx, { expectedType: expectedTypePart })
      // todo
      return {
        type: 'TypeSum',
        [arg]: inffered,
        [complementArg]: expectedTypeComplement,
      } as unknown as TypeSum
    default:
      protector(expr, 'typecheckSumRelatedExpr')
      throw new Error()
  }
}

type TupleRelatedExpr = Tuple | DotTuple
function typecheckTupleRelatedExpr<T extends TupleRelatedExpr, _E = Exclude<TupleRelatedExpr, T>>(expr: T, ctx: Context, extra?: TypecheckExprExtra): Type {
  switch (expr.type) {
    case 'Tuple':
      thrower([
        [
          expr.exprs.length === 2 && !ctx.isExtendedSome(ExtensionKeys.tuples, ExtensionKeys.pairs),
          new TCNotSupportedError(expr, ExtensionKeys.tuples, ExtensionKeys.pairs),
        ],
        [!ctx.isExtended(ExtensionKeys.tuples), new TCNotSupportedError(expr, ExtensionKeys.tuples)],
      ])
      const tupleExprTypes = expr.exprs.map(e => typecheckExpr(e, ctx))
      return makeTuple(tupleExprTypes)
    case 'DotTuple':
      thrower([[
        !ctx.isExtendedSome(ExtensionKeys.tuples, ExtensionKeys.pairs),
        new TCNotSupportedError(expr, ExtensionKeys.tuples, ExtensionKeys.pairs),
      ]])
      const tupleType = typecheckExpr(expr.expr, ctx)
      if (tupleType.type !== 'TypeTuple') {
        // todo
        throw new Error()
      }
      thrower([
        [
          tupleType.types.length !== 2 && !ctx.isExtended(ExtensionKeys.tuples),
          new TCNotSupportedError(expr, ExtensionKeys.tuples),
        ],
        [tupleType.types.length < expr.index, new TCSimpleError(Errors.TUPLE_INDEX_OUT_OF_BOUNDS)],
      ])
      return tupleType.types[expr.index - 1]
    default:
      protector(expr, 'typecheckTupleRelatedExpr')
      throw new Error()
  }
}

type RecordRelatedExpr = SRecord | DotRecord
function typecheckRecordRelatedExpr<T extends RecordRelatedExpr, _E = Exclude<RecordRelatedExpr, T>>(expr: T, ctx: Context, extra?: TypecheckExprExtra): Type {
  switch (expr.type) {
    case 'SRecord':
      thrower([[!ctx.isExtended(ExtensionKeys.records), 'no #records - unsupported']])
      const fields: RecordFieldType[] = expr.bindings.map(binding => ({
        type: 'RecordFieldType',
        label: binding.name,
        fieldType: typecheckExpr(binding.expr, ctx)
      }))
      return {
        type: 'TypeRecord',
        fieldTypes: fields,
      }
    case 'DotRecord':
      thrower([[!ctx.isExtended(ExtensionKeys.records), 'no #records - unsupported']])
      const recordType = typecheckExpr(expr.expr, ctx)
      if (recordType.type !== 'TypeRecord') {
        // todo
        throw new Error()
      }
      const field = recordType.fieldTypes.find(r => r.label === expr.label)
      if (!field) {
        // todo
        throw new Error()
      }
      return field.fieldType
    default:
      protector(expr, 'typecheckRecordRelatedExpr')
      throw new Error()
  }
}
