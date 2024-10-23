type ThrowItem = [boolean, string | Error]

export function thrower(throws: ThrowItem[]) {
    for (const t of throws) {
        const [flag, err] = t
        if (flag) {
            if (typeof err === 'string') {
                throw new Error(err)
            }
            throw err
        }
    }
}
