import { type Decl, type DeclFun, type Expr, type Program, type Type, makeFunType, ExtensionKeys, RecordFieldType, simpleTypes, TYPE_NAT, TYPE_BOOL, TYPE_UNIT, makeTuple, TypeSum, TYPE_BOTTOM, TYPE_TOP } from './ast'
import { Context, ContextSymbol } from './context'
import { Errors } from './errors'
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

  const returnType = typecheckExpr(decl.returnValue, ctx)
  if (decl.returnType === undefined || returnType === undefined) {
    // todo
    throw new Error
  }
  if (decl.returnType !== undefined || decl.returnType !== undefined) {
    verifyTypesMatch(decl.returnType, returnType, ctx)
  }

  ctx.popDeclarationLayer()
}

type TypecheckExprExtra = {
  expectedType: Type | null
}

function typecheckExpr(expr: Expr, ctx: Context, extra?: TypecheckExprExtra): Type {
  const type = expr.type
  const expectedType = extra?.expectedType ?? null
  switch (type) {
    case 'NatPred':
    case 'Succ':
      const inner = typecheckExpr(expr.expr, ctx, extra)
      verifyTypesMatch(TYPE_NAT, inner, ctx)
      return TYPE_NAT
    case 'ConstBool':
      return TYPE_BOOL
    case 'ConstInt':
      if (expr.value < 0) {
        throw new Error(Errors.ILLEGAL_NEGATIVE_LITERAL)
      }
      if (expr.value > 1 && !ctx.isExtended(ExtensionKeys.natural)) {
        throw new Error('todo ConstInt natural')
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
    case 'If':
      const actualConditionType = typecheckExpr(expr.condition, ctx, { expectedType: TYPE_BOOL })
      verifyTypesMatch(TYPE_BOOL, actualConditionType, ctx)
      const thenType = typecheckExpr(expr.thenExpr, ctx, extra)
      const elseType = typecheckExpr(expr.elseExpr, ctx, extra)
      verifyTypesMatch(thenType, elseType, ctx)
      return thenType
    case 'Application':
      const { function: func, arguments: args } = expr
      // todo: extra
      const funcType = typecheckExpr(func, ctx)

      if (funcType.type !== 'TypeFun') {
        throw new Error(Errors.NOT_A_FUNCTION)
      }
      thrower([
        [args.length > funcType.parametersTypes.length, Errors.INCORRECT_NUMBER_OF_ARGUMENTS],
        [!ctx.isExtended(ExtensionKeys.multiparam) && args.length > 1, Errors.INCORRECT_NUMBER_OF_ARGUMENTS],
        [!ctx.isExtended(ExtensionKeys.nullary) && !args.length, Errors.INCORRECT_NUMBER_OF_ARGUMENTS],
      ])
      for (let i = 0; i < args.length; i++) {
        const expectedArgType = funcType.parametersTypes[i]
        const argType = typecheckExpr(args[i], ctx, { expectedType: expectedArgType })
        verifyTypesMatch(expectedArgType, argType, ctx)
      }
      // todo
      return funcType.returnType!
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
    case 'Var':
      const declarationOfVar = ctx.findDeclaration(expr.name)
      // todo
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
      // todo
      thrower([[!ctx.isExtended(ExtensionKeys.unit), 'no #unit - unsupported']])
      return TYPE_UNIT
    case 'Tuple':
      thrower([
        [expr.exprs.length === 2 && !ctx.isExtendedSome(ExtensionKeys.tuples, ExtensionKeys.pairs), 'no #pairs - unsupported'],
        [!ctx.isExtended(ExtensionKeys.tuples), 'no #tuple - unsupported'],
      ])
      const tupleExprTypes = expr.exprs.map(e => typecheckExpr(e, ctx))
      return makeTuple(tupleExprTypes)
    case 'DotTuple':
      thrower([[!ctx.isExtendedSome(ExtensionKeys.tuples, ExtensionKeys.pairs), 'no #tuple - unsupported']])
      const tupleType = typecheckExpr(expr.expr, ctx)
      if (tupleType.type !== 'TypeTuple') {
        // todo
        throw new Error()
      }
      thrower([
        [tupleType.types.length !== 2 && !ctx.isExtended(ExtensionKeys.tuples), 'no #tuple - unsupported'],
        [tupleType.types.length <= expr.index, 'tuple out of bound'],
      ])
      return tupleType.types[expr.index]
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
    case 'Let':
      ctx.pushDeclarationLayer([])
      const pbs = expr.patternBindings
      for (const pb of pbs) {
        if (pb.pattern.type === 'PatternVar') {
          const name = pb.pattern.name
          const type = typecheckExpr(pb.rhs, ctx)
          ctx.addDeclarationToLayer({
            name,
            declType: type,
            origin: pb,
            [ContextSymbol]: 'ContextDecl'
          })
        }
      }
      const letType = typecheckExpr(expr.body, ctx)
      ctx.popDeclarationLayer()
      return letType
    case 'TypeAscription':
      const innerType = typecheckExpr(expr.expr, ctx, { expectedType: expr.ascribedType })
      verifyTypesMatch(innerType, expr.ascribedType, ctx)
      return expr.ascribedType
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
      console.log(expr)
      throw new Error(`unexpected: ${type}`)
    // protector(type, 'Unknown expression type')
  }
}

function verifyTypesMatch(expected: Type, actual: Type, ctx: Context) {
  switch (true) {
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
