// ---- Basic tokens

/** A Stella identifier satisfying the RegEx `[_a-zA-Z][\w!\-:?]*` */
export type Identifier = string;

export type Extension = `#${string}`;

/** It is currently not possible in TypeScript to represent "hexadecimal string" as a type */
type Hex = string;
export type MemoryAddress = `<0x${Hex}>`;

export enum ExtensionKeys {
  natural = 'natural',
  multiparam = 'multiparam',
  nullary = 'nullary',
  nested = 'nested',
  unit = 'unit',
  pairs = 'pairs',
  tuples = 'tuples',
  records = 'records',
  let = 'let',
  asc = 'asc',
  sum = 'sum',
  list = 'list',
}

export const ExtensionMap: Record<string, ExtensionKeys> = {
  'numeric-literals': ExtensionKeys.natural,
  'natural-literals': ExtensionKeys.natural,
  'multiparameter-functions': ExtensionKeys.multiparam,
  'nullary-functions': ExtensionKeys.nullary,
  'nested-function-declarations': ExtensionKeys.nested,
  'unit-type': ExtensionKeys.unit,
  'pairs': ExtensionKeys.pairs,
  'tuples': ExtensionKeys.tuples,
  'records': ExtensionKeys.records,
  'let-bindings': ExtensionKeys.let,
  'type-ascription': ExtensionKeys.asc,
  'sum-types': ExtensionKeys.sum,
  'lists': ExtensionKeys.list,
}

export type NaturalLiteralsExtension = { [ExtensionKeys.natural]: true }
export type MultiparamFunctionExtension = { [ExtensionKeys.multiparam]: true }
export type NullaryFunctionExtension = { [ExtensionKeys.nullary]: true }
export type NestedFunctionExtension = { [ExtensionKeys.nested]: true }
export type UnitTypeExtension = { [ExtensionKeys.unit]: true }
export type PairsExtension = { [ExtensionKeys.pairs]: true }
export type TuplesExtension = { [ExtensionKeys.tuples]: true }
export type RecordsExtension = { [ExtensionKeys.records]: true }
export type LetExtension = { [ExtensionKeys.let]: true }
export type AscExtension = { [ExtensionKeys.asc]: true }
export type SumExtension = { [ExtensionKeys.sum]: true }
export type ListExtension = { [ExtensionKeys.list]: true }

export type AllExtensions = 
  & NaturalLiteralsExtension
  & MultiparamFunctionExtension
  & NullaryFunctionExtension
  & NestedFunctionExtension
  & UnitTypeExtension
  & PairsExtension
  & TuplesExtension
  & RecordsExtension
  & LetExtension
  & AscExtension
  & SumExtension
  & ListExtension

export type Extensions = Partial<AllExtensions>

// TODO: document all nodes with JSDoc

// TODO: integrate language extensions in the types
// Examples:
/*
export type NullaryFunctionExtension = { nullary: true };
export type MultiparamFunctionExtension = { multiparam: true };
type ParamType<Extension = {}> = Extension extends MultiparamFunctionExtension &
  NullaryFunctionExtension
  ? ParamDecl[]
  : Extension extends NullaryFunctionExtension
  ? [] | [ParamDecl]
  : Extension extends MultiparamFunctionExtension
  ? ParamDecl[]
  : [ParamDecl];
type Param = ParamType<NullaryFunctionExtension>;
*/

// ---- Types

export const simpleTypes = ['TypeNat', 'TypeBool', 'TypeUnit', 'TypeTop', 'TypeBottom'] as const
type SimpleTypes = typeof simpleTypes[number]

type SimpleType<T extends SimpleTypes> = {
  type: T
}
export type TypeNat = SimpleType<'TypeNat'>
export type TypeBool = SimpleType<'TypeBool'>
export type TypeUnit = SimpleType<'TypeUnit'>
export type TypeTop = SimpleType<'TypeTop'>
export type TypeBottom = SimpleType<'TypeBottom'>

/** Util type for return values */
// export type TypeUndefined = SimpleType<'TypeUndefined'>

export function makeSimpleType(type: SimpleTypes) {
  return {type}
}

export interface TypeFun {
  type: 'TypeFun';
  // TODO: handle multi-param and nullary extensions being enabled, and make [Type] (tuple type with 1 element) the default
  parametersTypes: Type[];
  returnType?: Type;
}

export function makeFunType(parametersTypes: Type[], returnType?: Type) {
  return {
    type: 'TypeFun',
    parametersTypes,
    returnType
  }
}

export interface TypeRec {
  type: 'TypeRec';
  var: Identifier;
  recType: Type;
}
export interface TypeSum {
  type: 'TypeSum';
  left: Type;
  right: Type;
}
export interface TypeTuple {
  type: 'TypeTuple';
  types: Type[];
}
export interface RecordFieldType {
  type: 'RecordFieldType';
  label: Identifier;
  fieldType: Type;
}
export interface TypeRecord {
  type: 'TypeRecord';
  fieldTypes: RecordFieldType[];
}
export interface VariantFieldType {
  type: 'VariantFieldType';
  label: Identifier;
  fieldType?: Type;
}
export interface TypeVariant {
  type: 'TypeVariant';
  fieldTypes: VariantFieldType[];
}
export interface TypeList {
  type: 'TypeList';
  types: Type[];
}
export interface TypeVar {
  type: 'TypeVar';
  name: Identifier;
}
export interface TypeRef {
  type: 'TypeRef';
  referredType: Type;
}
export interface TypeForAll {
  type: 'TypeForAll';
  typeVars: Identifier[];
  body: Type;
}

export type Type =
  | TypeNat
  | TypeBool
  | TypeUnit
  | TypeTop
  | TypeBottom
  | TypeFun
  | TypeRec
  | TypeSum
  | TypeTuple
  | TypeRecord
  | TypeVariant
  | TypeList
  | TypeVar
  | TypeRef
  | TypeForAll
  | RecordFieldType
  | VariantFieldType;

// ---- Expressions

export interface Cons {
  type: 'Cons';
  head: Expr;
  tail: Expr;
}
type UnaryFunction<T extends Exclude<string, T>> = {
  type: T;
  expr: Expr;
};
export type Succ = UnaryFunction<'Succ'>;
export type ListHead = UnaryFunction<'ListHead'>;
export type ListTail = UnaryFunction<'ListTail'>;
export type ListIsEmpty = UnaryFunction<'ListIsEmpty'>;
export type LogicalNot = UnaryFunction<'LogicalNot'>;
export type NatPred = UnaryFunction<'NatPred'>;
export type NatIsZero = UnaryFunction<'NatIsZero'>;
export type Fix = UnaryFunction<'Fix'>;
export interface ConstInt {
  type: 'ConstInt';
  value: number;
}
export interface ConstBool {
  type: 'ConstBool';
  value: boolean;
}
export interface ConstUnit {
  type: 'Unit';
}
export interface ConstMemory {
  type: 'ConstMemory';
  value: string;
}
export interface DotRecord {
  type: 'DotRecord';
  expr: Expr;
  label: Identifier;
}
export interface DotTuple {
  type: 'DotTuple';
  expr: Expr;
  index: number;
}
export interface NatRec {
  type: 'NatRec';
  n: Expr;
  initial: Expr;
  step: Expr;
}
export interface Var {
  type: 'Var';
  name: Identifier;
}
export type Inl = UnaryFunction<'Inl'>;
export type Inr = UnaryFunction<'Inr'>;
export interface Fold {
  type: 'Fold';
  foldedType: Type;
  expr: Expr;
}
export interface Unfold {
  type: 'Unfold';
  unfoldedType: Type;
  expr: Expr;
}
export interface Application {
  type: 'Application';
  function: Expr;
  // TODO: handle type without unary/multi-param extensions enabled
  arguments: Expr[];
}
export interface TypeApplication {
  type: 'TypeApplication';
  function: Expr;
  typeArguments: Type[];
}

export interface TypeAscription {
  type: 'TypeAscription';
  expr: Expr;
  ascribedType: Type;
}
type BinaryOp<T extends Exclude<string, T>> = {
  type: T;
  left: Expr;
  right: Expr;
};
export type Multiply = BinaryOp<'Multiply'>;
export type Divide = BinaryOp<'Divide'>;
export type LogicalAnd = BinaryOp<'LogicalAnd'>;
export type Add = BinaryOp<'Add'>;
export type Subtract = BinaryOp<'Subtract'>;
export type LogicalOr = BinaryOp<'LogicalOr'>;

export interface Abstraction {
  type: 'Abstraction';
  // TODO: handle type without unary/multi-param extensions enabled
  parameters: ParamDecl[];
  returnValue: Expr;
}
export interface TypeAbstraction {
  type: 'TypeAbstraction';
  typeParams: Identifier[];
  expr: Expr;
}

export interface Tuple {
  type: 'Tuple';
  exprs: Expr[];
}
export interface Binding {
  type: 'Binding';
  name: Identifier;
  expr: Expr;
}
export interface SRecord {
  type: 'SRecord';
  bindings: Binding[];
}
export interface Variant {
  type: 'Variant';
  label: Identifier;
  expr: Expr;
}
export interface MatchCase {
  type: 'MatchCase';
  pattern: Pattern;
  expr: Expr;
}
export interface Match {
  type: 'Match';
  expr: Expr;
  cases: MatchCase[];
}
export interface List {
  type: 'List';
  exprs: Expr[];
}
export type LessThan = BinaryOp<'LessThan'>;
export type LessThanOrEqual = BinaryOp<'LessThanOrEqual'>;
export type GreaterThan = BinaryOp<'GreaterThan'>;
export type GreaterThanOrEqual = BinaryOp<'GreaterThanOrEqual'>;
export type Equal = BinaryOp<'Equal'>;
export type NotEqual = BinaryOp<'NotEqual'>;
export interface Assignment {
  type: 'Assignment';
  lhs: Expr;
  rhs: Expr;
}
export interface TypeCast {
  type: 'TypeCast';
  expr: Expr;
  castType: Type;
}
export interface Reference {
  type: 'Reference';
  expr: Expr;
}
export interface Dereference {
  type: 'Dereference';
  expr: Expr;
}
export interface Panic {
  type: 'Panic';
}
export type Throw = UnaryFunction<'Throw'>;
export interface TryCatch {
  type: 'TryCatch';
  tryExpr: Expr;
  pattern: Pattern;
  fallbackExpr: Expr;
}
export interface TryWith {
  type: 'TryWith';
  tryExpr: Expr;
  fallbackExpr: Expr;
}
export interface If {
  type: 'If';
  condition: Expr;
  thenExpr: Expr;
  elseExpr: Expr;
}
export interface Let {
  type: 'Let';
  patternBindings: PatternBinding[];
  body: Expr;
}
export interface LetRec {
  type: 'LetRec';
  patternBindings: PatternBinding[];
  body: Expr;
}
export interface Sequence {
  type: 'Sequence';
  expr1: Expr;
  expr2?: Expr;
}

export type Expr =
  | DotRecord
  | DotTuple
  | ConstBool
  | ConstUnit
  | ConstInt
  | ConstMemory
  | Var
  | Inl
  | Inr
  | Cons
  | ListHead
  | ListIsEmpty
  | ListTail
  | Succ
  | LogicalNot
  | NatPred
  | NatIsZero
  | Fix
  | NatRec
  | Fold
  | Unfold
  | Application
  | TypeApplication
  | Multiply
  | Divide
  | LogicalAnd
  | Add
  | Subtract
  | LogicalOr
  | TypeAscription
  | Abstraction
  | TypeAbstraction
  | Tuple
  | SRecord
  | Variant
  | Match
  | List
  | LessThan
  | LessThanOrEqual
  | GreaterThan
  | GreaterThanOrEqual
  | Equal
  | NotEqual
  | Assignment
  | TypeCast
  | Reference
  | Dereference
  | Panic
  | Throw
  | TryCatch
  | TryWith
  | If
  | Let
  | LetRec
  | Sequence;

// ---- Patterns

export interface PatternBinding {
  type: 'PatternBinding';
  pattern: Pattern;
  rhs: Expr;
}

export interface PatternVariant {
  type: 'PatternVariant';
  label: Identifier;
  pattern?: Pattern;
}
export interface PatternInl {
  type: 'PatternInl';
  pattern: Pattern;
}
export interface PatternInr {
  type: 'PatternInr';
  pattern: Pattern;
}
export interface PatternTuple {
  type: 'PatternTuple';
  patterns: Pattern[];
}
export interface LabelledPattern {
  type: 'LabelledPattern';
  label: Identifier;
  pattern: Pattern;
}
export interface PatternRecord {
  type: 'PatternRecord';
  patterns: LabelledPattern[];
}
export interface PatternList {
  type: 'PatternList';
  patterns: Pattern[];
}
export interface PatternCons {
  type: 'PatternCons';
  head: Pattern;
  tail: Pattern;
}
export interface PatternFalse {
  type: 'PatternFalse';
}
export interface PatternTrue {
  type: 'PatternTrue';
}
export interface PatternUnit {
  type: 'PatternUnit';
}
export interface PatternInt {
  type: 'PatternInt';
  value: number;
}
export interface PatternSucc {
  type: 'PatternSucc';
  value: Pattern;
}
export interface PatternVar {
  type: 'PatternVar';
  name: Identifier;
}

export type Pattern =
  | PatternVariant
  | PatternInl
  | PatternInr
  | PatternTuple
  | LabelledPattern
  | PatternRecord
  | PatternList
  | PatternCons
  | PatternFalse
  | PatternTrue
  | PatternUnit
  | PatternInt
  | PatternSucc
  | PatternVar;

// ---- Declarations

export interface ParamDecl {
  type: 'ParamDecl';
  name: Identifier;
  paramType: Type;
}

type Annotation = string;

export interface DeclFun {
  type: 'DeclFun';
  annotations: Annotation[];
  name: Identifier;
  returnType?: Type;
  /** Only present if the `#exceptions` extension is enabled */
  throwTypes: Type[];
  /** Only present if the `#nested-function-declarations` extension is enabled */
  nestedDeclarations: Decl[];
  // TODO: handle multi-param and nullary extensions being enabled, and make [ParamDecl] (tuple type with 1 element) the default
  parameters: ParamDecl[];
  returnValue: Expr;
}

export interface DeclFunGeneric extends Omit<DeclFun, 'type'> {
  type: 'DeclFunGeneric';
  typeParams: Identifier[];
}

export interface DeclTypeAlias {
  type: 'DeclTypeAlias';
  alias: Identifier;
  aliasedType: Type;
}

export interface DeclExceptionType {
  type: 'DeclExceptionType';
  exceptionType: Type;
}

export interface DeclExceptionVariant {
  type: 'DeclExceptionVariant';
  name: Identifier;
  variantType: Type;
}

export type Decl =
  | DeclFun
  | DeclFunGeneric
  | DeclTypeAlias
  | DeclExceptionType
  | DeclExceptionVariant;

// ----- Program

export interface Program {
  type: 'Program';
  extensions: Extension[];
  declarations: Decl[];
}

export type Node =
  | Program
  | Decl
  | Expr
  | ParamDecl
  | Type
  | Binding
  | PatternBinding
  | MatchCase
  | Pattern;
