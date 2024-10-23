// Generated from stellaParser.g4 by ANTLR 4.13.2

import {ParseTreeVisitor} from 'antlr4';


import { Start_ProgramContext } from "./stellaParser.js";
import { Start_ExprContext } from "./stellaParser.js";
import { Start_TypeContext } from "./stellaParser.js";
import { ProgramContext } from "./stellaParser.js";
import { LanguageCoreContext } from "./stellaParser.js";
import { AnExtensionContext } from "./stellaParser.js";
import { DeclFunContext } from "./stellaParser.js";
import { DeclFunGenericContext } from "./stellaParser.js";
import { DeclTypeAliasContext } from "./stellaParser.js";
import { DeclExceptionTypeContext } from "./stellaParser.js";
import { DeclExceptionVariantContext } from "./stellaParser.js";
import { InlineAnnotationContext } from "./stellaParser.js";
import { ParamDeclContext } from "./stellaParser.js";
import { FoldContext } from "./stellaParser.js";
import { AddContext } from "./stellaParser.js";
import { IsZeroContext } from "./stellaParser.js";
import { VarContext } from "./stellaParser.js";
import { TypeAbstractionContext } from "./stellaParser.js";
import { DivideContext } from "./stellaParser.js";
import { LessThanContext } from "./stellaParser.js";
import { DotRecordContext } from "./stellaParser.js";
import { GreaterThanContext } from "./stellaParser.js";
import { EqualContext } from "./stellaParser.js";
import { ThrowContext } from "./stellaParser.js";
import { MultiplyContext } from "./stellaParser.js";
import { ConstMemoryContext } from "./stellaParser.js";
import { ListContext } from "./stellaParser.js";
import { TryCatchContext } from "./stellaParser.js";
import { HeadContext } from "./stellaParser.js";
import { NotEqualContext } from "./stellaParser.js";
import { ConstUnitContext } from "./stellaParser.js";
import { SequenceContext } from "./stellaParser.js";
import { ConstFalseContext } from "./stellaParser.js";
import { AbstractionContext } from "./stellaParser.js";
import { ConstIntContext } from "./stellaParser.js";
import { VariantContext } from "./stellaParser.js";
import { ConstTrueContext } from "./stellaParser.js";
import { SubtractContext } from "./stellaParser.js";
import { TypeCastContext } from "./stellaParser.js";
import { IfContext } from "./stellaParser.js";
import { ApplicationContext } from "./stellaParser.js";
import { DerefContext } from "./stellaParser.js";
import { IsEmptyContext } from "./stellaParser.js";
import { PanicContext } from "./stellaParser.js";
import { LessThanOrEqualContext } from "./stellaParser.js";
import { SuccContext } from "./stellaParser.js";
import { InlContext } from "./stellaParser.js";
import { GreaterThanOrEqualContext } from "./stellaParser.js";
import { InrContext } from "./stellaParser.js";
import { MatchContext } from "./stellaParser.js";
import { LogicNotContext } from "./stellaParser.js";
import { SRecordContext } from "./stellaParser.js";
import { ParenthesisedExprContext } from "./stellaParser.js";
import { TailContext } from "./stellaParser.js";
import { LogicAndContext } from "./stellaParser.js";
import { TypeApplicationContext } from "./stellaParser.js";
import { LetRecContext } from "./stellaParser.js";
import { LogicOrContext } from "./stellaParser.js";
import { TryWithContext } from "./stellaParser.js";
import { PredContext } from "./stellaParser.js";
import { TypeAscContext } from "./stellaParser.js";
import { NatRecContext } from "./stellaParser.js";
import { UnfoldContext } from "./stellaParser.js";
import { RefContext } from "./stellaParser.js";
import { DotTupleContext } from "./stellaParser.js";
import { FixContext } from "./stellaParser.js";
import { LetContext } from "./stellaParser.js";
import { AssignContext } from "./stellaParser.js";
import { TupleContext } from "./stellaParser.js";
import { ConsListContext } from "./stellaParser.js";
import { PatternBindingContext } from "./stellaParser.js";
import { BindingContext } from "./stellaParser.js";
import { MatchCaseContext } from "./stellaParser.js";
import { PatternVariantContext } from "./stellaParser.js";
import { PatternInlContext } from "./stellaParser.js";
import { PatternInrContext } from "./stellaParser.js";
import { PatternTupleContext } from "./stellaParser.js";
import { PatternRecordContext } from "./stellaParser.js";
import { PatternListContext } from "./stellaParser.js";
import { PatternConsContext } from "./stellaParser.js";
import { PatternFalseContext } from "./stellaParser.js";
import { PatternTrueContext } from "./stellaParser.js";
import { PatternUnitContext } from "./stellaParser.js";
import { PatternIntContext } from "./stellaParser.js";
import { PatternSuccContext } from "./stellaParser.js";
import { PatternVarContext } from "./stellaParser.js";
import { ParenthesisedPatternContext } from "./stellaParser.js";
import { LabelledPatternContext } from "./stellaParser.js";
import { TypeTupleContext } from "./stellaParser.js";
import { TypeTopContext } from "./stellaParser.js";
import { TypeBoolContext } from "./stellaParser.js";
import { TypeRefContext } from "./stellaParser.js";
import { TypeRecContext } from "./stellaParser.js";
import { TypeSumContext } from "./stellaParser.js";
import { TypeVarContext } from "./stellaParser.js";
import { TypeVariantContext } from "./stellaParser.js";
import { TypeUnitContext } from "./stellaParser.js";
import { TypeNatContext } from "./stellaParser.js";
import { TypeBottomContext } from "./stellaParser.js";
import { TypeParensContext } from "./stellaParser.js";
import { TypeFunContext } from "./stellaParser.js";
import { TypeForAllContext } from "./stellaParser.js";
import { TypeRecordContext } from "./stellaParser.js";
import { TypeListContext } from "./stellaParser.js";
import { RecordFieldTypeContext } from "./stellaParser.js";
import { VariantFieldTypeContext } from "./stellaParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `stellaParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class stellaParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `stellaParser.start_Program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart_Program?: (ctx: Start_ProgramContext) => Result;
	/**
	 * Visit a parse tree produced by `stellaParser.start_Expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart_Expr?: (ctx: Start_ExprContext) => Result;
	/**
	 * Visit a parse tree produced by `stellaParser.start_Type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart_Type?: (ctx: Start_TypeContext) => Result;
	/**
	 * Visit a parse tree produced by `stellaParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;
	/**
	 * Visit a parse tree produced by the `LanguageCore`
	 * labeled alternative in `stellaParser.languageDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLanguageCore?: (ctx: LanguageCoreContext) => Result;
	/**
	 * Visit a parse tree produced by the `AnExtension`
	 * labeled alternative in `stellaParser.extension`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnExtension?: (ctx: AnExtensionContext) => Result;
	/**
	 * Visit a parse tree produced by the `DeclFun`
	 * labeled alternative in `stellaParser.decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclFun?: (ctx: DeclFunContext) => Result;
	/**
	 * Visit a parse tree produced by the `DeclFunGeneric`
	 * labeled alternative in `stellaParser.decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclFunGeneric?: (ctx: DeclFunGenericContext) => Result;
	/**
	 * Visit a parse tree produced by the `DeclTypeAlias`
	 * labeled alternative in `stellaParser.decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclTypeAlias?: (ctx: DeclTypeAliasContext) => Result;
	/**
	 * Visit a parse tree produced by the `DeclExceptionType`
	 * labeled alternative in `stellaParser.decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclExceptionType?: (ctx: DeclExceptionTypeContext) => Result;
	/**
	 * Visit a parse tree produced by the `DeclExceptionVariant`
	 * labeled alternative in `stellaParser.decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclExceptionVariant?: (ctx: DeclExceptionVariantContext) => Result;
	/**
	 * Visit a parse tree produced by the `InlineAnnotation`
	 * labeled alternative in `stellaParser.annotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineAnnotation?: (ctx: InlineAnnotationContext) => Result;
	/**
	 * Visit a parse tree produced by `stellaParser.paramDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParamDecl?: (ctx: ParamDeclContext) => Result;
	/**
	 * Visit a parse tree produced by the `Fold`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFold?: (ctx: FoldContext) => Result;
	/**
	 * Visit a parse tree produced by the `Add`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdd?: (ctx: AddContext) => Result;
	/**
	 * Visit a parse tree produced by the `IsZero`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIsZero?: (ctx: IsZeroContext) => Result;
	/**
	 * Visit a parse tree produced by the `Var`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVar?: (ctx: VarContext) => Result;
	/**
	 * Visit a parse tree produced by the `TypeAbstraction`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeAbstraction?: (ctx: TypeAbstractionContext) => Result;
	/**
	 * Visit a parse tree produced by the `Divide`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDivide?: (ctx: DivideContext) => Result;
	/**
	 * Visit a parse tree produced by the `LessThan`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLessThan?: (ctx: LessThanContext) => Result;
	/**
	 * Visit a parse tree produced by the `DotRecord`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDotRecord?: (ctx: DotRecordContext) => Result;
	/**
	 * Visit a parse tree produced by the `GreaterThan`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGreaterThan?: (ctx: GreaterThanContext) => Result;
	/**
	 * Visit a parse tree produced by the `Equal`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqual?: (ctx: EqualContext) => Result;
	/**
	 * Visit a parse tree produced by the `Throw`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThrow?: (ctx: ThrowContext) => Result;
	/**
	 * Visit a parse tree produced by the `Multiply`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiply?: (ctx: MultiplyContext) => Result;
	/**
	 * Visit a parse tree produced by the `ConstMemory`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstMemory?: (ctx: ConstMemoryContext) => Result;
	/**
	 * Visit a parse tree produced by the `List`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList?: (ctx: ListContext) => Result;
	/**
	 * Visit a parse tree produced by the `TryCatch`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTryCatch?: (ctx: TryCatchContext) => Result;
	/**
	 * Visit a parse tree produced by the `Head`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHead?: (ctx: HeadContext) => Result;
	/**
	 * Visit a parse tree produced by the `NotEqual`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotEqual?: (ctx: NotEqualContext) => Result;
	/**
	 * Visit a parse tree produced by the `ConstUnit`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstUnit?: (ctx: ConstUnitContext) => Result;
	/**
	 * Visit a parse tree produced by the `Sequence`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSequence?: (ctx: SequenceContext) => Result;
	/**
	 * Visit a parse tree produced by the `ConstFalse`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstFalse?: (ctx: ConstFalseContext) => Result;
	/**
	 * Visit a parse tree produced by the `Abstraction`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbstraction?: (ctx: AbstractionContext) => Result;
	/**
	 * Visit a parse tree produced by the `ConstInt`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstInt?: (ctx: ConstIntContext) => Result;
	/**
	 * Visit a parse tree produced by the `Variant`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariant?: (ctx: VariantContext) => Result;
	/**
	 * Visit a parse tree produced by the `ConstTrue`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstTrue?: (ctx: ConstTrueContext) => Result;
	/**
	 * Visit a parse tree produced by the `Subtract`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubtract?: (ctx: SubtractContext) => Result;
	/**
	 * Visit a parse tree produced by the `TypeCast`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeCast?: (ctx: TypeCastContext) => Result;
	/**
	 * Visit a parse tree produced by the `If`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf?: (ctx: IfContext) => Result;
	/**
	 * Visit a parse tree produced by the `Application`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitApplication?: (ctx: ApplicationContext) => Result;
	/**
	 * Visit a parse tree produced by the `Deref`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeref?: (ctx: DerefContext) => Result;
	/**
	 * Visit a parse tree produced by the `IsEmpty`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIsEmpty?: (ctx: IsEmptyContext) => Result;
	/**
	 * Visit a parse tree produced by the `Panic`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPanic?: (ctx: PanicContext) => Result;
	/**
	 * Visit a parse tree produced by the `LessThanOrEqual`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLessThanOrEqual?: (ctx: LessThanOrEqualContext) => Result;
	/**
	 * Visit a parse tree produced by the `Succ`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSucc?: (ctx: SuccContext) => Result;
	/**
	 * Visit a parse tree produced by the `Inl`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInl?: (ctx: InlContext) => Result;
	/**
	 * Visit a parse tree produced by the `GreaterThanOrEqual`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGreaterThanOrEqual?: (ctx: GreaterThanOrEqualContext) => Result;
	/**
	 * Visit a parse tree produced by the `Inr`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInr?: (ctx: InrContext) => Result;
	/**
	 * Visit a parse tree produced by the `Match`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatch?: (ctx: MatchContext) => Result;
	/**
	 * Visit a parse tree produced by the `LogicNot`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicNot?: (ctx: LogicNotContext) => Result;
	/**
	 * Visit a parse tree produced by the `SRecord`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSRecord?: (ctx: SRecordContext) => Result;
	/**
	 * Visit a parse tree produced by the `ParenthesisedExpr`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesisedExpr?: (ctx: ParenthesisedExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `Tail`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTail?: (ctx: TailContext) => Result;
	/**
	 * Visit a parse tree produced by the `LogicAnd`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicAnd?: (ctx: LogicAndContext) => Result;
	/**
	 * Visit a parse tree produced by the `TypeApplication`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeApplication?: (ctx: TypeApplicationContext) => Result;
	/**
	 * Visit a parse tree produced by the `LetRec`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLetRec?: (ctx: LetRecContext) => Result;
	/**
	 * Visit a parse tree produced by the `LogicOr`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicOr?: (ctx: LogicOrContext) => Result;
	/**
	 * Visit a parse tree produced by the `TryWith`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTryWith?: (ctx: TryWithContext) => Result;
	/**
	 * Visit a parse tree produced by the `Pred`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPred?: (ctx: PredContext) => Result;
	/**
	 * Visit a parse tree produced by the `TypeAsc`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeAsc?: (ctx: TypeAscContext) => Result;
	/**
	 * Visit a parse tree produced by the `NatRec`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNatRec?: (ctx: NatRecContext) => Result;
	/**
	 * Visit a parse tree produced by the `Unfold`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnfold?: (ctx: UnfoldContext) => Result;
	/**
	 * Visit a parse tree produced by the `Ref`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRef?: (ctx: RefContext) => Result;
	/**
	 * Visit a parse tree produced by the `DotTuple`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDotTuple?: (ctx: DotTupleContext) => Result;
	/**
	 * Visit a parse tree produced by the `Fix`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFix?: (ctx: FixContext) => Result;
	/**
	 * Visit a parse tree produced by the `Let`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLet?: (ctx: LetContext) => Result;
	/**
	 * Visit a parse tree produced by the `Assign`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssign?: (ctx: AssignContext) => Result;
	/**
	 * Visit a parse tree produced by the `Tuple`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTuple?: (ctx: TupleContext) => Result;
	/**
	 * Visit a parse tree produced by the `ConsList`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConsList?: (ctx: ConsListContext) => Result;
	/**
	 * Visit a parse tree produced by `stellaParser.patternBinding`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternBinding?: (ctx: PatternBindingContext) => Result;
	/**
	 * Visit a parse tree produced by `stellaParser.binding`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinding?: (ctx: BindingContext) => Result;
	/**
	 * Visit a parse tree produced by `stellaParser.matchCase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatchCase?: (ctx: MatchCaseContext) => Result;
	/**
	 * Visit a parse tree produced by the `PatternVariant`
	 * labeled alternative in `stellaParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternVariant?: (ctx: PatternVariantContext) => Result;
	/**
	 * Visit a parse tree produced by the `PatternInl`
	 * labeled alternative in `stellaParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternInl?: (ctx: PatternInlContext) => Result;
	/**
	 * Visit a parse tree produced by the `PatternInr`
	 * labeled alternative in `stellaParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternInr?: (ctx: PatternInrContext) => Result;
	/**
	 * Visit a parse tree produced by the `PatternTuple`
	 * labeled alternative in `stellaParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternTuple?: (ctx: PatternTupleContext) => Result;
	/**
	 * Visit a parse tree produced by the `PatternRecord`
	 * labeled alternative in `stellaParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternRecord?: (ctx: PatternRecordContext) => Result;
	/**
	 * Visit a parse tree produced by the `PatternList`
	 * labeled alternative in `stellaParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternList?: (ctx: PatternListContext) => Result;
	/**
	 * Visit a parse tree produced by the `PatternCons`
	 * labeled alternative in `stellaParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternCons?: (ctx: PatternConsContext) => Result;
	/**
	 * Visit a parse tree produced by the `PatternFalse`
	 * labeled alternative in `stellaParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternFalse?: (ctx: PatternFalseContext) => Result;
	/**
	 * Visit a parse tree produced by the `PatternTrue`
	 * labeled alternative in `stellaParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternTrue?: (ctx: PatternTrueContext) => Result;
	/**
	 * Visit a parse tree produced by the `PatternUnit`
	 * labeled alternative in `stellaParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternUnit?: (ctx: PatternUnitContext) => Result;
	/**
	 * Visit a parse tree produced by the `PatternInt`
	 * labeled alternative in `stellaParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternInt?: (ctx: PatternIntContext) => Result;
	/**
	 * Visit a parse tree produced by the `PatternSucc`
	 * labeled alternative in `stellaParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternSucc?: (ctx: PatternSuccContext) => Result;
	/**
	 * Visit a parse tree produced by the `PatternVar`
	 * labeled alternative in `stellaParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternVar?: (ctx: PatternVarContext) => Result;
	/**
	 * Visit a parse tree produced by the `ParenthesisedPattern`
	 * labeled alternative in `stellaParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesisedPattern?: (ctx: ParenthesisedPatternContext) => Result;
	/**
	 * Visit a parse tree produced by `stellaParser.labelledPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabelledPattern?: (ctx: LabelledPatternContext) => Result;
	/**
	 * Visit a parse tree produced by the `TypeTuple`
	 * labeled alternative in `stellaParser.stellatype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeTuple?: (ctx: TypeTupleContext) => Result;
	/**
	 * Visit a parse tree produced by the `TypeTop`
	 * labeled alternative in `stellaParser.stellatype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeTop?: (ctx: TypeTopContext) => Result;
	/**
	 * Visit a parse tree produced by the `TypeBool`
	 * labeled alternative in `stellaParser.stellatype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeBool?: (ctx: TypeBoolContext) => Result;
	/**
	 * Visit a parse tree produced by the `TypeRef`
	 * labeled alternative in `stellaParser.stellatype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeRef?: (ctx: TypeRefContext) => Result;
	/**
	 * Visit a parse tree produced by the `TypeRec`
	 * labeled alternative in `stellaParser.stellatype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeRec?: (ctx: TypeRecContext) => Result;
	/**
	 * Visit a parse tree produced by the `TypeSum`
	 * labeled alternative in `stellaParser.stellatype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeSum?: (ctx: TypeSumContext) => Result;
	/**
	 * Visit a parse tree produced by the `TypeVar`
	 * labeled alternative in `stellaParser.stellatype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeVar?: (ctx: TypeVarContext) => Result;
	/**
	 * Visit a parse tree produced by the `TypeVariant`
	 * labeled alternative in `stellaParser.stellatype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeVariant?: (ctx: TypeVariantContext) => Result;
	/**
	 * Visit a parse tree produced by the `TypeUnit`
	 * labeled alternative in `stellaParser.stellatype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeUnit?: (ctx: TypeUnitContext) => Result;
	/**
	 * Visit a parse tree produced by the `TypeNat`
	 * labeled alternative in `stellaParser.stellatype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeNat?: (ctx: TypeNatContext) => Result;
	/**
	 * Visit a parse tree produced by the `TypeBottom`
	 * labeled alternative in `stellaParser.stellatype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeBottom?: (ctx: TypeBottomContext) => Result;
	/**
	 * Visit a parse tree produced by the `TypeParens`
	 * labeled alternative in `stellaParser.stellatype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParens?: (ctx: TypeParensContext) => Result;
	/**
	 * Visit a parse tree produced by the `TypeFun`
	 * labeled alternative in `stellaParser.stellatype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeFun?: (ctx: TypeFunContext) => Result;
	/**
	 * Visit a parse tree produced by the `TypeForAll`
	 * labeled alternative in `stellaParser.stellatype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeForAll?: (ctx: TypeForAllContext) => Result;
	/**
	 * Visit a parse tree produced by the `TypeRecord`
	 * labeled alternative in `stellaParser.stellatype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeRecord?: (ctx: TypeRecordContext) => Result;
	/**
	 * Visit a parse tree produced by the `TypeList`
	 * labeled alternative in `stellaParser.stellatype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeList?: (ctx: TypeListContext) => Result;
	/**
	 * Visit a parse tree produced by `stellaParser.recordFieldType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecordFieldType?: (ctx: RecordFieldTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `stellaParser.variantFieldType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariantFieldType?: (ctx: VariantFieldTypeContext) => Result;
}

