type Routable = string
type Handler = Function


export class Router<AllRoutes extends Routable, HandledRoutes extends Routable = never, Unhandled = Exclude<AllRoutes, HandledRoutes>> {
    protected handlers: {
        [route: Routable]: Handler
    }
    
    constructor() {
        this.handlers = {}
    }

    addHandler<T extends Exclude<AllRoutes, HandledRoutes>>(routes: T | T[], handler: Handler) {
        if (typeof routes === 'object' && Array.isArray(routes)) {
            routes.forEach(route => {
                this.handlers[route] = handler
            })
        } else {
            this.handlers[routes] = handler
        }
        
        return this as Router<AllRoutes, HandledRoutes | T>
    }

    case<T extends HandledRoutes>(route: T) {
        return this.handlers[route]
    }
}

export type RPHelper<R extends Router<Routable, Routable, never>> = R extends Router<Routable, Routable, infer U> ? U extends never ? never : U : 1
export function routerProtector<RP extends never>() {}

// const r = new Router<'A'>()
//     .addHandler('A', () => {})
// routerProtector<RPHelper<typeof r>>()
