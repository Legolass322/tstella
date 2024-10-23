import { makeSimpleType, type Decl, type DeclFun, type Expr, type Identifier, type ParamDecl, type Program, type Type, makeFunType, TypeNat, TypeBool, ExtensionKeys, RecordFieldType, Pattern } from './ast'
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

function typecheckExpr(expr: Expr, ctx: Context): Type {
  const type = expr.type
  switch (type) {
    case 'NatPred':
    case 'Succ':
      const expectedPredSucc = makeSimpleType('TypeNat')
      const inner = typecheckExpr(expr.expr, ctx)
      verifyTypesMatch(expectedPredSucc, inner, ctx)
      return expectedPredSucc
    case 'ConstBool':
      return makeSimpleType('TypeBool')
    case 'ConstInt':
      if (expr.value < 0) {
        throw new Error(Errors.ILLEGAL_NEGATIVE_LITERAL)
      }
      if (expr.value > 1 && !ctx.isExtended(ExtensionKeys.natural)) {
        throw new Error('todo ConstInt natural')
      }
      return makeSimpleType('TypeNat')
    case 'NatIsZero':
      const expectedIsZero = makeSimpleType('TypeNat')
      const innerIsZero = typecheckExpr(expr.expr, ctx)
      verifyTypesMatch(expectedIsZero, innerIsZero, ctx)
      return makeSimpleType('TypeBool')
    case 'NatRec':
      const from = expr.n
      const initial = expr.initial
      const step = expr.step

      verifyTypesMatch(makeSimpleType('TypeNat'), typecheckExpr(from, ctx), ctx)
      
      const initialType = typecheckExpr(initial, ctx)
      const stepType = typecheckExpr(step, ctx)

      verifyTypesMatch(
        {
          type: 'TypeFun',
          parametersTypes: [makeSimpleType('TypeNat')],
          returnType: {
            type: 'TypeFun',
            parametersTypes: [initialType],
            returnType: initialType
          }
        },
        stepType,
        ctx,
      )

      return initialType
    case 'If':
      const conditionType = makeSimpleType('TypeBool')
      const actualConditionType = typecheckExpr(expr.condition, ctx)
      verifyTypesMatch(conditionType, actualConditionType, ctx)
      const thenType = typecheckExpr(expr.thenExpr, ctx)
      const elseType = typecheckExpr(expr.elseExpr, ctx)
      verifyTypesMatch(thenType, elseType, ctx)
      return thenType
    case 'Application':
      const { function: func, arguments: args } = expr
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
        const argType = typecheckExpr(args[i], ctx)
        const expectedArgType = funcType.parametersTypes[i]
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

      ctx.pushDeclarationLayer(parameters)
      const returnType = typecheckExpr(returnValue, ctx)
      ctx.popDeclarationLayer()

      return {
        type: 'TypeFun',
        parametersTypes: parameters.map(param => param.paramType),
        returnType: returnType
      }
    case 'Var':
      const declarationOfVar = ctx.findDeclaration(expr.name)
      // todo
      return declarationOfVar.declType
    case 'Sequence':
      const { expr1, expr2 } = expr
      const expr1Type = typecheckExpr(expr1, ctx)
      if (expr2) {
        const expr2Type = typecheckExpr(expr2, ctx)
        return expr2Type
      }
      return expr1Type
    case 'Unit':
      // todo
      thrower([[!ctx.isExtended(ExtensionKeys.unit), 'no #unit - unsupported']])
      return makeSimpleType('TypeUnit')
    case 'Tuple':
      thrower([
        [expr.exprs.length === 2 && !ctx.isExtendedSome(ExtensionKeys.tuples, ExtensionKeys.pairs), 'no #pairs - unsupported'],
        [!ctx.isExtended(ExtensionKeys.tuples), 'no #tuple - unsupported'],
      ])
      const tupleExprTypes = expr.exprs.map(e => typecheckExpr(e, ctx))
      return {
        type: 'TypeTuple',
        types: tupleExprTypes,
      }
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
    default:
      console.log(expr)
      throw new Error(`unexpected: ${type}`)
    // protector(type, 'Unknown expression type')
  }
}

function verifyTypesMatch(expected: Type, actual: Type, ctx: Context) {
  if (expected.type === 'TypeFun' && actual.type !== 'TypeFun') {
    throw new Error(Errors.NOT_A_FUNCTION)
  }
  if (expected.type !== 'TypeFun' && actual.type === 'TypeFun') {
    throw new Error(Errors.UNEXPECTED_LAMBDA)
  }
  if (expected.type === actual.type) {
    if (expected.type === 'TypeFun' && actual.type === 'TypeFun') {
      try {
        // todo: nullary, multiparam
        verifyTypesMatch(
          expected.parametersTypes[0],
          actual.parametersTypes[0],
          ctx,
        )
      } catch {
        throw new Error(Errors.UNEXPECTED_TYPE_FOR_PARAMETER)
      }
      if (expected.returnType === undefined || actual.returnType === undefined) {
        // todo
        if (expected.returnType !== actual.returnType) {
          throw new Error(Errors.UNEXPECTED_TYPE_FOR_EXPRESSION + ': cannot match return type')
        }

        return
      }
      verifyTypesMatch(expected.returnType, actual.returnType, ctx)
    }
  } else {
    throw new Error(Errors.UNEXPECTED_TYPE_FOR_EXPRESSION)
  }
}
