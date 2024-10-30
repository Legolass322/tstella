import { DeclFun, Extension, ExtensionKeys, ExtensionMap, Extensions, Identifier, ParamDecl, Pattern, PatternBinding, Type } from "./ast";
import { Errors } from "./errors";
import { GeneralDecl } from "./types";

export const ContextSymbol = Symbol('ContextSymbol')

type ContextDecl = {
  name: Identifier
  declType: Type
  origin: GeneralDecl | PatternBinding | Pattern
  [ContextSymbol]: 'ContextDecl'
}

function isContextDecl(arg: unknown): arg is ContextDecl {
  return Boolean(
    typeof arg === 'object'
    && arg
    && arg.hasOwnProperty(ContextSymbol)
    && (arg as { [ContextSymbol]: unknown })[ContextSymbol] === 'ContextDecl'
  )
}

type CtxDeclParsable = ParamDecl | DeclFun

export class Context {
  public declarationStack: Record<Identifier, ContextDecl>[]
  public extensions: Extensions
  public hasMain: boolean

  constructor() {
    this.declarationStack = []
    this.extensions = {}
    this.hasMain = false
  }

  get lastDeclarationLayer() {
    return this.declarationStack.at(-1)
  }

  get isNestedScope() {
    return this.declarationStack.length > 1
  }

  propagateExtensions(exts: Extension[]) {
    for (const ext of exts) {
      const name = ExtensionMap[ext.slice(1)]
      if (name) {
        this.extensions[name] = true
      }
    }
  }

  isExtended(...key: ExtensionKeys[]) {
    return key.every(k => this.extensions[k])
  }

  isExtendedSome(...key: ExtensionKeys[]) {
    return key.some(k => this.extensions[k])
  }

  pushDeclarationLayer(arr: (ContextDecl | CtxDeclParsable)[]) {
    const prepared: ContextDecl[] = arr.map(decl => {
      if (isContextDecl(decl)) {
        return decl
      }
      return declToCtxDecl(decl)
    })
    const table: Record<Identifier, ContextDecl> = {}
    for (const ctxDecl of prepared) {
      table[ctxDecl.name] = ctxDecl
    }
    this.declarationStack.push(table)
  }

  popDeclarationLayer() {
    return this.declarationStack.pop()
  }

  addDeclarationToLayer(decl: (ContextDecl | CtxDeclParsable)) {
    if (!this.lastDeclarationLayer) {
      this.pushDeclarationLayer([])
    }
    
    if (isContextDecl(decl)) {
      this.lastDeclarationLayer![decl.name] = decl
      return
    }

    this.lastDeclarationLayer![decl.name] = declToCtxDecl(decl)
  }

  findDeclaration(name: Identifier) {
    for (let i = this.declarationStack.length - 1; i >= 0; i--) {
      const decl = this.declarationStack[i][name]
      if (decl) {
        return decl
      }
    }
    throw new Error(Errors.UNDEFINED_VARIABLE + ' ' + name)
  }
}

function declToCtxDecl(decl: CtxDeclParsable): ContextDecl {
  switch (decl.type) {
    case 'ParamDecl':
      return {
        name: decl.name,
        declType: decl.paramType,
        origin: decl,
        [ContextSymbol]: 'ContextDecl'
      }
    case 'DeclFun':
      return {
        name: decl.name,
        declType: {
          type: 'TypeFun',
          parametersTypes: decl.parameters.map(param => param.paramType),
          returnType: decl.returnType
        },
        origin: decl,
        [ContextSymbol]: 'ContextDecl'
      }
  }
}
