import { Decl, Expr, Identifier, ParamDecl, PatternBinding, Type } from './ast'

export type TypeWithUndefined = Type | undefined // todo

// Inner utility type
export type TypeInferred<T extends TypeWithUndefined = TypeWithUndefined> = {
  type: 'Inferred'
  origin: Expr
  infer?: T
}

export function makeInferType(origin: Expr, infer?: TypeWithUndefined) {
  return {
    type: 'inferred',
    origin,
    infer,
  }
}

export type GeneralType = TypeWithUndefined | TypeInferred

export type GeneralDecl = Decl | ParamDecl

export type TypecheckExprExtra = {
  expectedType: Type | null
}
