import { Expr, ExtensionKeys, ExtensionMap } from "./ast";

export enum Errors {
  UNEXPECTED_TYPE_FOR_PARAMETER = 'UNEXPECTED_TYPE_FOR_PARAMETER',
  UNEXPECTED_TYPE_FOR_EXPRESSION = 'UNEXPECTED_TYPE_FOR_EXPRESSION',
  UNEXPECTED_LAMBDA = 'UNEXPECTED_LAMBDA',
  NOT_A_FUNCTION = 'NOT_A_FUNCTION',
  UNDEFINED_VARIABLE = 'UNDEFINED_VARIABLE',
  MISSING_MAIN = 'MISSING_MAIN',
  INCORRECT_NUMBER_OF_ARGUMENTS = 'INCORRECT_NUMBER_OF_ARGUMENTS',
  ILLEGAL_NEGATIVE_LITERAL = 'ILLEGAL_NEGATIVE_LITERAL',
  TUPLE_INDEX_OUT_OF_BOUNDS = 'TUPLE_INDEX_OUT_OF_BOUNDS',
  /** Matching without cases */
  ILLEGAL_EMPTY_MATCHING = 'ILLEGAL_EMPTY_MATCHING',
  UNEXPECTED_PATTERN_FOR_TYPE = 'UNEXPECTED_PATTERN_FOR_TYPE',
  /** Match should cover all possible cases for type */
  NONEXHAUSTIVE_MATCH_PATTERNS = 'NONEXHAUSTIVE_MATCH_PATTERNS',
  /** Got variant without expected type */
  AMBIGUOUS_VARIANT_TYPE = 'AMBIGUOUS_VARIANT_TYPE',
  UNEXPECTED_VARIANT = 'UNEXPECTED_VARIANT',
  UNEXPECTED_VARIANT_LABEL = 'UNEXPECTED_VARIANT_LABEL',

  MAIN_ALREADY_EXISTS = 'MAIN_ALREADY_EXISTS',
  /** Expr is not supported without extenssion */
  NOT_SUPPORTED = 'NOT_SUPPORTED',
}

type TCSimpleErrorOptions = {
  delim?: string
}

export class TCSimpleError extends Error {
  constructor(key: Errors, extra?: unknown[], options: TCSimpleErrorOptions = {delim: ': '}) {
    const attrs = [key, ...(extra ?? [])]
    super(attrs.join(options.delim))
  }
}

export class TCNotSupportedError extends TCSimpleError {
  constructor(expr: Expr, ...keys: ExtensionKeys[]) {
    const entries = Object.entries(ExtensionMap)
    const need = `probably you need: ${keys.map(key => `#${entries.find(e => e[1] === key[0])}`).join(', ')}`
    super(Errors.NOT_SUPPORTED, [JSON.stringify(expr), need], {delim: '\n'})
  }
}
