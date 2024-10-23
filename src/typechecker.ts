import { makeSimpleType, type Decl, type DeclFun, type Expr, type Identifier, type ParamDecl, type Program, type Type, makeFunType, TypeNat, TypeBool, ExtensionKeys } from './ast'
import { Context } from './context'
import { Errors } from './errors'
import { protector } from './utils'

export function typecheckProgram(ast: Program) {
  const ctx = new Context()

  ctx.propagateExtensions(ast.extensions)

  for (const decl of ast.declarations) {
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

  if (!ctx.hasMain) {
    throw new Error(Errors.MISSING_MAIN)
  }
}


function typecheckFunctionDecl(decl: DeclFun, ctx: Context) {
  console.log(`Checking the function "${decl.name}"...`);

  /**
   * todo:
   * #nested-function-declarations
   * #nullary-functions
   * #multiparameter-functions
  */

  if (decl.name === 'main') {
    if (ctx.hasMain) {
      throw new Error(Errors.MAIN_ALREADY_EXISTS)
    }
    ctx.hasMain = true
  }

  ctx.pushDeclarationLayer([decl])

  // todo: check for nestedDeclarations
  // decl.nestedDeclarations

  ctx.pushDeclarationLayer(decl.parameters)
  const returnType = typecheckExpr(decl.returnValue, ctx)
  if (decl.returnType === undefined || returnType === undefined) {
    
  }
  verifyTypesMatch(decl.returnType, returnType, ctx)
  ctx.declarationStack.pop()

  ctx.declarationStack.pop()
}

/**
 * Checks that expr node contains well-typed nodes 
 * and result is mathing with resultType
 * @param expr 
 * @param resultType
 * @param ctx
 */
function typecheckExpr(expr: Expr, ctx: Context): Type {
  const isInferring = resultType?.type === 'Inferred'

  const type = expr.type
  switch (type) {
    case 'NatPred': // todo: strange naming
    case 'Succ':
      const typeMismatchError = () => {
        throw new Error('todo')
      }
      setOnInferring(resultType, makeSimpleType('TypeNat'), typeMismatchError)
      if (!isNat(resultType)) {
        typeMismatchError()
      }
      typecheckExpr(expr.expr, makeSimpleType('TypeNat'), ctx)
      break
    case 'If':
      typecheckExpr(expr.condition, makeSimpleType('TypeBool'), ctx)
      typecheckExpr(expr.thenExpr, resultType, ctx)
      typecheckExpr(expr.elseExpr, resultType, ctx)
      break
    case 'Application':
      // todo: nullary and multi arg functions
      const inferringArgs = expr.arguments.map(arg => makeInferType(arg))
      // typecheckExpr(expr.function, makeFunType([], resultType), ctx)
      break
    default:
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
