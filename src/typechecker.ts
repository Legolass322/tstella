import { type Decl, type DeclFun, type Expr, type Program, type Type, makeFunType, ExtensionKeys, RecordFieldType, simpleTypes, TYPE_NAT, TYPE_BOOL, TYPE_UNIT, makeTuple, TypeSum, TYPE_TOP, Succ, NatPred, NatIsZero, NatRec, Add, Multiply, ConstInt, ConstBool, If, LogicalAnd, LogicalNot, LogicalOr, List, Cons, ListHead, ListTail, ListIsEmpty, Abstraction, Application, Inl, Inr, DotTuple, Tuple, DotRecord, SRecord, Subtract, Divide, Pattern, PatternBinding, PatternVariant, ConstMemory, Reference, Dereference, Assignment, makeRefType, Throw, Panic, TryWith, TryCatch } from './ast'
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
    case 'DeclExceptionType':
      ctx.exceptionType = decl.exceptionType
      break
    case 'DeclFunGeneric':
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
    [!ctx.isExtendedSome(ExtensionKeys.multiparam, ExtensionKeys.curring) && decl.parameters.length > 1, Errors.INCORRECT_NUMBER_OF_ARGUMENTS],
    [!ctx.isExtended(ExtensionKeys.nullary) && !decl.parameters.length, Errors.INCORRECT_NUMBER_OF_ARGUMENTS],
  ])

  if (ctx.isExtended(ExtensionKeys.nested)) {
    decl.nestedDeclarations.forEach(decl => {
      typecheckDecl(decl, ctx)
    })
  }

  const returnType = typecheckExpr(decl.returnValue, ctx, { expectedType: decl.returnType ?? null })
  if (decl.returnType === undefined || returnType === undefined) {
    throw new TCSimpleError(Errors.MUST_RETURN)
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
    case 'Assignment':
    case 'ConstMemory':
    case 'Reference':
    case 'Dereference':
      return typecheckMemoryRelatedExpr(expr, ctx, extra)
    case 'Throw':
    case 'Panic':
    case 'TryCatch':
    case 'TryWith':
      return typecheckErrorRelatedExpr(expr, ctx, extra)
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
      thrower([[!ctx.isExtended(ExtensionKeys.variants), new TCNotSupportedError(expr, ExtensionKeys.variants)]])
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
      const fieldType = typecheckExpr(value, ctx, { expectedType: field.fieldType! })
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
        throw new TCSimpleError(Errors.UNEXPECTED_PATTERN_FOR_TYPE)
      }
      ctx.pushDeclarationLayer([])
      checkPattern(pattern.pattern, pattern.type === 'PatternInl' ? type.left : type.right, ctx, origin)
      ctx.popDeclarationLayer()
      return
    case 'PatternVariant':
      if (type.type !== 'TypeVariant') {
        throw new TCSimpleError(Errors.UNEXPECTED_PATTERN_FOR_TYPE)
      }
      const { label, pattern: innerPattern } = pattern
      const { fieldTypes } = type
      const field = fieldTypes.find((field) => field.label === label)
      if (!field) {
        throw new TCSimpleError(Errors.UNEXPECTED_PATTERN_FOR_TYPE)
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
      throw new TCSimpleError(Errors.UNEXPECTED_TYPE_FOR_EXPRESSION)
    case expected.type !== 'TypeVariant' && actual.type === 'TypeVariant':
      throw new TCSimpleError(Errors.UNEXPECTED_VARIANT)
    case expected.type === 'TypeVariant' && actual.type === 'TypeVariant':
      const actualFields = actual.fieldTypes
      for (const { label, fieldType } of expected.fieldTypes) {
        const actualField = actualFields.find((f) => f.label === label)
        if (!actualField) {
          // Expected a field but did not find it
          throw new TCSimpleError(Errors.UNEXPECTED_TYPE_FOR_EXPRESSION)
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
        throw new TCSimpleError(Errors.UNEXPECTED_VARIANT_LABEL)
      }
      return

    /** SUMS */
    case expected.type === 'TypeSum' && actual.type !== 'TypeSum':
      throw new TCSimpleError(Errors.UNEXPECTED_TYPE_FOR_EXPRESSION)
    case expected.type !== 'TypeSum' && actual.type === 'TypeSum':
      throw new TCSimpleError(Errors.UNEXPECTED_INJECTION)
    case expected.type === 'TypeSum' && actual.type === 'TypeSum':
      verifyTypesMatch(expected.left, actual.left, ctx)
      verifyTypesMatch(expected.right, actual.right, ctx)
      return

    /** LISTS */
    case expected.type === 'TypeList' && actual.type !== 'TypeList':
      throw new TCSimpleError(Errors.UNEXPECTED_TYPE_FOR_EXPRESSION)
    case expected.type !== 'TypeList' && actual.type === 'TypeList':
      throw new TCSimpleError(Errors.UNEXPECTED_LIST)
    case expected.type === 'TypeList' && actual.type === 'TypeList':
      thrower([[!expected.types.length || !actual.types.length, new TCSimpleError(Errors.AMBIGUOUS_LIST_TYPE)]])
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
            if (expected.returnType !== actual.returnType) throw new TCSimpleError(Errors.UNEXPECTED_TYPE_FOR_EXPRESSION)
            return
          }
          if (expected.returnType.type !== actual.returnType.type) {
            throw new TCSimpleError(Errors.UNEXPECTED_TYPE_FOR_EXPRESSION)
          }
          return
        case !ctx.isExtended(ExtensionKeys.curring):
          if (expected.parametersTypes.length !== actual.parametersTypes.length) {
            throw new TCSimpleError(Errors.INCORRECT_NUMBER_OF_ARGUMENTS)
          }
          return
        case expected.parametersTypes.length > actual.parametersTypes.length:
          actual.parametersTypes.forEach((param, i) => {
            const expectedParam = expected.parametersTypes[i]
            verifyTypesMatch(expectedParam, param, ctx)
          })
          if (!actual.returnType) {
            throw new TCSimpleError(Errors.INCORRECT_NUMBER_OF_ARGUMENTS, ['Actual function does not cover all parameters of expected'])
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
            throw new TCSimpleError(Errors.INCORRECT_NUMBER_OF_ARGUMENTS, ['Actual function goes out of bound of expected parameters'])
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
      throw new TCSimpleError(Errors.NOT_A_TUPLE)
    case expected.type !== 'TypeTuple' && actual.type === 'TypeTuple':
      throw new TCSimpleError(Errors.UNEXPECTED_TUPLE)
    case expected.type === 'TypeTuple' && actual.type === 'TypeTuple':
      if (expected.types.length !== actual.types.length) {
        throw new TCSimpleError(
          Errors.INCORRECT_TUPLE_BOUNDS,
          [`expected ${expected.types.length}`, `got ${actual.types.length}`],
          { delim: ', ' }
        )
      }

      expected.types.forEach((param, i) => {
        const actualParam = actual.types[i]
        verifyTypesMatch(param, actualParam, ctx)
      })
      return

    /** RECORDS */
    case expected.type === 'TypeRecord' && actual.type !== 'TypeRecord':
      throw new TCSimpleError(Errors.NOT_A_RECORD)
    case expected.type !== 'TypeRecord' && actual.type === 'TypeRecord':
      throw new TCSimpleError(Errors.UNEXPECTED_RECORD)
    case expected.type === 'TypeRecord' && actual.type === 'TypeRecord':
      const missing: string[] = []
      const ok: { fieldType: Type, actualParam: RecordFieldType, label: string }[] = []

      expected.fieldTypes.forEach((param) => {
        const { label, fieldType } = param
        const actualParam = actual.fieldTypes.find(ft => ft.label === label)
        if (!actualParam) {
          missing.push(label)
        } else {
          ok.push({ fieldType, actualParam, label })
        }
      })

      if (missing.length) {
        throw new TCSimpleError(Errors.MISSING_RECORD_FIELDS, ['Missing fields', missing.join(', ')])
      }

      const unexpected = actual.fieldTypes.filter(ft => !ok.find(okFt => okFt.label === ft.label))
      if (unexpected.length) {
        throw new TCSimpleError(Errors.UNEXPECTED_RECORD_FIELDS, ['Unexpected fields', unexpected.join(', ')])
      }

      ok.forEach(({ fieldType, actualParam }) => {
        verifyTypesMatch(fieldType, actualParam.fieldType, ctx)
      })
      return

    /** SIMPLE TYPES */
    case (simpleTypes as unknown as string[]).includes(expected.type) && (simpleTypes as unknown as string[]).includes(actual.type):
      if (expected.type !== actual.type) throw new TCSimpleError(Errors.UNEXPECTED_TYPE_FOR_EXPRESSION)
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
      const { left, right } = expr
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
      if (!expectedType) {
        throw new TCSimpleError(Errors.AMBIGUOUS_LIST_TYPE)
      }
      if (expectedType.type !== 'TypeList') {
        throw new TCSimpleError(Errors.UNEXPECTED_LIST)
      }
      if (!expectedType.types.length) {
        throw new TCSimpleError(Errors.AMBIGUOUS_LIST_TYPE)
      }
      const expectedItemType = expectedType.types[0]

      if (!expr.exprs.length) {
        return {
          type: 'TypeList',
          types: [expectedItemType]
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
      if (!expectedType) {
        throw new TCSimpleError(Errors.AMBIGUOUS_LIST_TYPE)
      }
      if (expectedType.type !== 'TypeList') {
        throw new TCSimpleError(Errors.UNEXPECTED_LIST)
      }
      if (!expectedType.types.length) {
        throw new TCSimpleError(Errors.AMBIGUOUS_LIST_TYPE)
      }
      const expectedConsItemType = expectedType.types[0]
      const headType = typecheckExpr(expr.head, ctx, { expectedType: expectedConsItemType })
      const tailType = typecheckExpr(expr.tail, ctx, { expectedType: { type: 'TypeList', types: [expectedConsItemType] } })
      if (tailType.type !== 'TypeList') {
        throw new TCSimpleError(Errors.NOT_A_LIST)
      }
      verifyTypesMatch(headType, expectedConsItemType, ctx)
      return {
        type: 'TypeList',
        types: [expectedConsItemType]
      }
    case 'ListHead':
      const listHeadListType = typecheckExpr(expr.expr, ctx, extra)
      if (listHeadListType.type !== 'TypeList') {
        throw new TCSimpleError(Errors.NOT_A_LIST)
      }
      if (!listHeadListType.types.length) {
        throw new TCSimpleError(Errors.AMBIGUOUS_LIST_TYPE)
      }
      return listHeadListType.types[0]
    case 'ListTail':
      const listTailListType = typecheckExpr(expr.expr, ctx, extra)
      if (listTailListType.type !== 'TypeList') {
        throw new TCSimpleError(Errors.NOT_A_LIST)
      }
      return listTailListType
    case 'ListIsEmpty':
      const ListIsEmptyListType = typecheckExpr(expr.expr, ctx, extra)
      if (ListIsEmptyListType.type !== 'TypeList') {
        throw new TCSimpleError(Errors.NOT_A_LIST)
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
      // todo: extra?
      const funcType = typecheckExpr(func, ctx)

      if (funcType.type !== 'TypeFun') {
        throw new Error(Errors.NOT_A_FUNCTION)
      }
      thrower([
        [!ctx.isExtendedSome(ExtensionKeys.multiparam, ExtensionKeys.curring) && args.length > 1, Errors.INCORRECT_NUMBER_OF_ARGUMENTS],
        [!ctx.isExtended(ExtensionKeys.nullary) && !args.length, Errors.INCORRECT_NUMBER_OF_ARGUMENTS],
      ])
      for (let i = 0; i < Math.min(args.length, funcType.parametersTypes.length); i++) {
        const expectedArgType = funcType.parametersTypes[i]
        const argType = typecheckExpr(args[i], ctx, { expectedType: expectedArgType })
        verifyTypesMatch(expectedArgType, argType, ctx)
      }

      let overflowedArgs: Expr[] = args.slice(funcType.parametersTypes.length)
      let rType = funcType.returnType
      if (ctx.isExtended(ExtensionKeys.curring) && overflowedArgs.length) {
        while (overflowedArgs.length) {
          if (rType?.type !== 'TypeFun') {
            throw new TCSimpleError(Errors.INCORRECT_NUMBER_OF_ARGUMENTS)
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
            return rType.returnType!
          } else {
            return makeFunType(
              rType.parametersTypes.slice(processedArgs),
              rType.returnType
            )
          }
        }
      } else if (!ctx.isExtended(ExtensionKeys.curring) && overflowedArgs.length) {
        throw new TCSimpleError(Errors.INCORRECT_NUMBER_OF_ARGUMENTS)
      }
      return rType!
    case 'Abstraction':
      const { parameters, returnValue } = expr

      thrower([
        [!ctx.isExtended(ExtensionKeys.multiparam) && parameters.length > 1, Errors.INCORRECT_NUMBER_OF_ARGUMENTS],
        [!ctx.isExtended(ExtensionKeys.nullary) && !parameters.length, Errors.INCORRECT_NUMBER_OF_ARGUMENTS],
      ])

      ctx.pushDeclarationLayer(parameters)
      const expectedReturnType = extra?.expectedType ? extra.expectedType.type === 'TypeFun' ? extra.expectedType.returnType : null : null
      const returnType = typecheckExpr(returnValue, ctx, { expectedType: expectedReturnType ?? null })
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
      thrower([[!ctx.isExtended(ExtensionKeys.sum), new TCNotSupportedError(expr, ExtensionKeys.sum)]])

      if (!expectedType) {
        throw new TCSimpleError(Errors.AMBIGUOUS_SUM_TYPE)
      }
      if (expectedType.type !== 'TypeSum') {
        throw new TCSimpleError(Errors.UNEXPECTED_SUM)
      }
      const arg = expr.type === 'Inl' ? 'left' : 'right'
      const complementArg = expr.type !== 'Inl' ? 'left' : 'right'
      const expectedTypePart = expectedType[arg]
      const expectedTypeComplement = expectedType[complementArg]
      const inffered = typecheckExpr(expr.expr, ctx, { expectedType: expectedTypePart })
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
      const firstCondition = expr.exprs.length === 2 && !ctx.isExtendedSome(ExtensionKeys.tuples, ExtensionKeys.pairs)
      const secondCondition = expr.exprs.length !== 2 && !ctx.isExtendedSome(ExtensionKeys.tuples)
      if (firstCondition || secondCondition) {
        throw new TCNotSupportedError(expr, ExtensionKeys.tuples, ExtensionKeys.pairs)
      }
      const tupleExprTypes = expr.exprs.map(e => typecheckExpr(e, ctx))
      return makeTuple(tupleExprTypes)
    case 'DotTuple': {
      thrower([[
        !ctx.isExtendedSome(ExtensionKeys.tuples, ExtensionKeys.pairs),
        new TCNotSupportedError(expr, ExtensionKeys.tuples, ExtensionKeys.pairs),
      ]])
      const tupleType = typecheckExpr(expr.expr, ctx)
      if (tupleType.type !== 'TypeTuple') {
        throw new TCSimpleError(Errors.UNEXPECTED_TUPLE)
      }
      thrower([
        [tupleType.types.length < expr.index, new TCSimpleError(Errors.TUPLE_INDEX_OUT_OF_BOUNDS)],
      ])
      const firstCondition = tupleType.types.length === 2 && !ctx.isExtendedSome(ExtensionKeys.tuples, ExtensionKeys.pairs)
      const secondCondition = tupleType.types.length !== 2 && !ctx.isExtendedSome(ExtensionKeys.tuples)
      if (firstCondition || secondCondition) {
        throw new TCNotSupportedError(expr, ExtensionKeys.tuples, ExtensionKeys.pairs)
      }
      return tupleType.types[expr.index - 1]
    }
    default:
      protector(expr, 'typecheckTupleRelatedExpr')
      throw new Error()
  }
}

type RecordRelatedExpr = SRecord | DotRecord
function typecheckRecordRelatedExpr<T extends RecordRelatedExpr, _E = Exclude<RecordRelatedExpr, T>>(expr: T, ctx: Context, extra?: TypecheckExprExtra): Type {
  switch (expr.type) {
    case 'SRecord':
      thrower([[!ctx.isExtended(ExtensionKeys.records), new TCNotSupportedError(expr, ExtensionKeys.records)]])
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
      thrower([[!ctx.isExtended(ExtensionKeys.records), new TCNotSupportedError(expr, ExtensionKeys.records)]])
      const recordType = typecheckExpr(expr.expr, ctx, extra)
      if (recordType.type !== 'TypeRecord') {
        throw new TCSimpleError(Errors.UNEXPECTED_RECORD)
      }
      const field = recordType.fieldTypes.find(r => r.label === expr.label)
      if (!field) {
        throw new TCSimpleError(Errors.MISSING_RECORD_FIELDS, [`Missing .${expr.label}`])
      }
      return field.fieldType
    default:
      protector(expr, 'typecheckRecordRelatedExpr')
      throw new Error()
  }
}

type MemoryRelatedExpr = ConstMemory | Dereference | Reference | Assignment
function typecheckMemoryRelatedExpr<T extends MemoryRelatedExpr, _E = Exclude<MemoryRelatedExpr, T>>(expr: T, ctx: Context, extra?: TypecheckExprExtra): Type {
  const expectedType = extra?.expectedType ?? null
  switch (expr.type) {
    case 'ConstMemory': 
      if (!expectedType) {
        throw new TCSimpleError(Errors.AMBIGUOUS_REFERENCE_TYPE)
      }
      if (expectedType.type !== 'TypeRef') {
        throw new TCSimpleError(Errors.UNEXPECTED_MEMORY_ADDRESS)
      }
      return expectedType
    case 'Reference':
      const { expr: initialValue } = expr
      let eType = expectedType

      if (expectedType && expectedType.type === 'TypeRef') {
        eType = expectedType.referredType
      }
      const exprType = typecheckExpr(initialValue, ctx, {expectedType: eType})
      return makeRefType(exprType)
    case 'Dereference': 
      const { expr: reference } = expr
      const refType = typecheckExpr(
        reference,
        ctx,
        {expectedType: expectedType && makeRefType(expectedType)}
      )
      if (refType.type !== 'TypeRef') {
        throw new TCSimpleError(Errors.NOT_A_REFERENCE)
      }
      return refType.referredType
    case 'Assignment': 
      const { lhs, rhs } = expr
      const lhsType = typecheckExpr(lhs, ctx)
      if (lhsType.type !== 'TypeRef') {
        throw new TCSimpleError(Errors.NOT_A_REFERENCE)
      }
      const rhsType = typecheckExpr(rhs, ctx, {expectedType: lhsType.referredType})
      verifyTypesMatch(rhsType, lhsType.referredType, ctx)
      return TYPE_UNIT
    default:
      protector(expr, 'typecheckMemoryRelatedExpr')
      throw new Error()
  }
}

type ErrorRelatedExpr = Panic | Throw | TryWith | TryCatch
function typecheckErrorRelatedExpr<T extends ErrorRelatedExpr, _E = Exclude<ErrorRelatedExpr, T>>(expr: T, ctx: Context, extra?: TypecheckExprExtra): Type {
  const expectedType = extra?.expectedType ?? null
  switch (expr.type) {
    case 'Panic': 
      if (!expectedType) {
        throw new TCSimpleError(Errors.AMBIGUOUS_PANIC_TYPE)
      }
      return expectedType
    case 'Throw': 
      if (!ctx.exceptionType) {
        throw new TCSimpleError(Errors.EXCEPTION_TYPE_NOT_DECLARED)
      }
      if (!expectedType) {
        throw new TCSimpleError(Errors.AMBIGUOUS_THROW_TYPE)
      }
      const { expr: thrownValue } = expr
      const valueType = typecheckExpr(thrownValue, ctx, {expectedType: ctx.exceptionType})
      verifyTypesMatch(ctx.exceptionType, valueType, ctx)
      return expectedType
    case 'TryWith': {
      const { tryExpr, fallbackExpr } = expr
      const tryType = typecheckExpr(tryExpr, ctx, {expectedType})
      const fallbackType = typecheckExpr(fallbackExpr, ctx, {expectedType})
      verifyTypesMatch(tryType, fallbackType, ctx)
      return tryType
    }
    case 'TryCatch': {
      const { tryExpr, pattern, fallbackExpr } = expr
      const tryType = typecheckExpr(tryExpr, ctx, {expectedType})
      if (ctx.exceptionType == null) {
        throw new TCSimpleError(Errors.EXCEPTION_TYPE_NOT_DECLARED)
      }
      ctx.pushDeclarationLayer([])
      checkPattern(pattern, ctx.exceptionType, ctx)
      const fallbackType = typecheckExpr(
        fallbackExpr,
        ctx,
        {expectedType},
      )
      verifyTypesMatch(tryType, fallbackType, ctx)
      ctx.popDeclarationLayer()
      return tryType
    }
    default:
      protector(expr, 'typecheckErrorRelatedExpr')
      throw new Error()
  }
}

