import { Context } from '../context'

type BaseTransformer<Base, T> = (base: Base) => T

class ContextAndBaseEntity<Base> {
  protected ctx: Context
  protected base: Base

  constructor(ctx: Context, base: Base) {
    this.ctx = ctx
    this.base = base
  }
}

export type BlockPath<Base, Transform> = Transform | BaseTransformer<Base, boolean>
export type BlockHandler<Base> = (ctx: Context, base: Base) => void
export type BlockOptions<Base, Transform> = {
  onAddPathTransform?: BaseTransformer<Base, Transform>
}
export class Block<Base, Transform = never> extends ContextAndBaseEntity<Base> {
  protected handler: BlockHandler<Base>
  protected onAddPathTransform?: BaseTransformer<Base, Transform>

  protected paths: BlockPath<Base, Transform>[]
  
  constructor(ctx: Context, base: Base, options?: BlockOptions<Base, Transform>) {
    super(ctx, base)
    this.handler = () => {
      throw new Error('Block handler unimplemented')
    }
    this.paths = []
    this.onAddPathTransform = options?.onAddPathTransform
  }

  addPaths(...paths: BlockPath<Base, Transform>[]) {
    this.paths.push(...paths)
    return this
  }

  setHandler(handler: BlockHandler<Base>) {
    this.handler = handler
    return this
  }

  run() {
    
  }
}

export class Builder<T> extends ContextAndBaseEntity<T> {
  protected blocks: Block<T>[]
  
  constructor(ctx: Context, base: T) {
    super(ctx, base)
    this.blocks = []
  }
}
