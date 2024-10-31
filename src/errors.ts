import { Expr, ExtensionKeys, ExtensionMap } from "./ast";

export enum Errors {
  UNEXPECTED_TYPE_FOR_PARAMETER = 'UNEXPECTED_TYPE_FOR_PARAMETER',
  /** Type does not match expression */
  UNEXPECTED_TYPE_FOR_EXPRESSION = 'UNEXPECTED_TYPE_FOR_EXPRESSION',
  UNEXPECTED_LAMBDA = 'UNEXPECTED_LAMBDA',
  NOT_A_FUNCTION = 'NOT_A_FUNCTION',
  NOT_A_TUPLE = 'NOT_A_TUPLE',
  NOT_A_RECORD = 'NOT_A_RECORD',
  NOT_A_LIST = 'NOT_A_LIST',
  NOT_A_REFERENCE = 'NOT_A_REFERENCE',
  UNDEFINED_VARIABLE = 'UNDEFINED_VARIABLE',
  MISSING_MAIN = 'MISSING_MAIN',
  INCORRECT_NUMBER_OF_ARGUMENTS = 'INCORRECT_NUMBER_OF_ARGUMENTS',
  ILLEGAL_NEGATIVE_LITERAL = 'ILLEGAL_NEGATIVE_LITERAL',
  TUPLE_INDEX_OUT_OF_BOUNDS = 'TUPLE_INDEX_OUT_OF_BOUNDS',
  /** Matching without cases */
  ILLEGAL_EMPTY_MATCHING = 'ILLEGAL_EMPTY_MATCHING',
  /** Pattern covers label or smt else which is not presented in the type */
  UNEXPECTED_PATTERN_FOR_TYPE = 'UNEXPECTED_PATTERN_FOR_TYPE',
  /** Match should cover all possible cases for type */
  NONEXHAUSTIVE_MATCH_PATTERNS = 'NONEXHAUSTIVE_MATCH_PATTERNS',
  /** Got variant without expected type */
  AMBIGUOUS_VARIANT_TYPE = 'AMBIGUOUS_VARIANT_TYPE',
  /** Got variant while expecting something else */
  UNEXPECTED_VARIANT = 'UNEXPECTED_VARIANT',
  /** Got variant with unexpected label */
  UNEXPECTED_VARIANT_LABEL = 'UNEXPECTED_VARIANT_LABEL',
  /** Got sum while expecting something else */
  UNEXPECTED_INJECTION = 'UNEXPECTED_INJECTION',
  /** Got list while expecting something else */
  UNEXPECTED_LIST = 'UNEXPECTED_LIST',
  /** Got sum while expecting something else */
  UNEXPECTED_SUM = 'UNEXPECTED_SUM',
  /** Got record while expecting something else */
  UNEXPECTED_RECORD = 'UNEXPECTED_RECORD',
  /** Got tuple while expecting something else */
  UNEXPECTED_TUPLE = 'UNEXPECTED_TUPLE',
  /** It is impossible to typecheck an expression of a list type because the type of its elements is unknown */
  AMBIGUOUS_LIST_TYPE = 'AMBIGUOUS_LIST_TYPE',
  /** It is impossible to typecheck an expression of a sum type because the type of its elements is unknown */
  AMBIGUOUS_SUM_TYPE = 'AMBIGUOUS_SUM_TYPE',
  /** Record is missing one or more of the expected fields */
  MISSING_RECORD_FIELDS = 'MISSING_RECORD_FIELDS',
  /** Record has one or more unexpected fields */
  UNEXPECTED_RECORD_FIELDS = 'UNEXPECTED_RECORD_FIELDS',
  /** Got reference without expected type */
  AMBIGUOUS_REFERENCE_TYPE = 'AMBIGUOUS_REFERENCE_TYPE',
  /** Got memory while expecting something else */
  UNEXPECTED_MEMORY_ADDRESS = 'UNEXPECTED_MEMORY_ADDRESS',
  /** Got panic without expected type */
  AMBIGUOUS_PANIC_TYPE = 'AMBIGUOUS_PANIC_TYPE',
  EXCEPTION_TYPE_NOT_DECLARED = 'EXCEPTION_TYPE_NOT_DECLARED',
  AMBIGUOUS_THROW_TYPE = 'AMBIGUOUS_THROW_TYPE',

  /** Duplicated main declaration */
  MAIN_ALREADY_EXISTS = 'MAIN_ALREADY_EXISTS',
  /** Expr is not supported without extenssion */
  NOT_SUPPORTED = 'NOT_SUPPORTED',
  /** Function must return value */
  MUST_RETURN = 'MUST_RETURN',
  /** Got tuple with different length */
  INCORRECT_TUPLE_BOUNDS = 'INCORRECT_TUPLE_BOUNDS',
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
