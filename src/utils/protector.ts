export function protector(_argument: never, error?: string) {
  console.error('should never be called')
  throw new Error(error ?? 'Unexpected')
}
