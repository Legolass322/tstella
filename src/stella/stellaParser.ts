// @ts-nocheck
// Generated from stellaParser.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import stellaParserListener from "./stellaParserListener.js";
import stellaParserVisitor from "./stellaParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class stellaParser extends Parser {
	public static readonly Surrogate_id_SYMB_0 = 1;
	public static readonly Surrogate_id_SYMB_1 = 2;
	public static readonly Surrogate_id_SYMB_2 = 3;
	public static readonly Surrogate_id_SYMB_3 = 4;
	public static readonly Surrogate_id_SYMB_4 = 5;
	public static readonly Surrogate_id_SYMB_5 = 6;
	public static readonly Surrogate_id_SYMB_6 = 7;
	public static readonly Surrogate_id_SYMB_7 = 8;
	public static readonly Surrogate_id_SYMB_8 = 9;
	public static readonly Surrogate_id_SYMB_9 = 10;
	public static readonly Surrogate_id_SYMB_10 = 11;
	public static readonly Surrogate_id_SYMB_11 = 12;
	public static readonly Surrogate_id_SYMB_12 = 13;
	public static readonly Surrogate_id_SYMB_13 = 14;
	public static readonly Surrogate_id_SYMB_14 = 15;
	public static readonly Surrogate_id_SYMB_15 = 16;
	public static readonly Surrogate_id_SYMB_16 = 17;
	public static readonly Surrogate_id_SYMB_17 = 18;
	public static readonly Surrogate_id_SYMB_18 = 19;
	public static readonly Surrogate_id_SYMB_19 = 20;
	public static readonly Surrogate_id_SYMB_20 = 21;
	public static readonly Surrogate_id_SYMB_21 = 22;
	public static readonly Surrogate_id_SYMB_22 = 23;
	public static readonly Surrogate_id_SYMB_23 = 24;
	public static readonly Surrogate_id_SYMB_24 = 25;
	public static readonly Surrogate_id_SYMB_25 = 26;
	public static readonly Surrogate_id_SYMB_26 = 27;
	public static readonly Surrogate_id_SYMB_27 = 28;
	public static readonly Surrogate_id_SYMB_28 = 29;
	public static readonly Surrogate_id_SYMB_29 = 30;
	public static readonly Surrogate_id_SYMB_30 = 31;
	public static readonly Surrogate_id_SYMB_31 = 32;
	public static readonly Surrogate_id_SYMB_32 = 33;
	public static readonly Surrogate_id_SYMB_33 = 34;
	public static readonly Surrogate_id_SYMB_34 = 35;
	public static readonly Surrogate_id_SYMB_35 = 36;
	public static readonly Surrogate_id_SYMB_36 = 37;
	public static readonly Surrogate_id_SYMB_37 = 38;
	public static readonly Surrogate_id_SYMB_38 = 39;
	public static readonly Surrogate_id_SYMB_39 = 40;
	public static readonly Surrogate_id_SYMB_40 = 41;
	public static readonly Surrogate_id_SYMB_41 = 42;
	public static readonly Surrogate_id_SYMB_42 = 43;
	public static readonly Surrogate_id_SYMB_43 = 44;
	public static readonly Surrogate_id_SYMB_44 = 45;
	public static readonly Surrogate_id_SYMB_45 = 46;
	public static readonly Surrogate_id_SYMB_46 = 47;
	public static readonly Surrogate_id_SYMB_47 = 48;
	public static readonly Surrogate_id_SYMB_48 = 49;
	public static readonly Surrogate_id_SYMB_49 = 50;
	public static readonly Surrogate_id_SYMB_50 = 51;
	public static readonly Surrogate_id_SYMB_51 = 52;
	public static readonly Surrogate_id_SYMB_52 = 53;
	public static readonly Surrogate_id_SYMB_53 = 54;
	public static readonly Surrogate_id_SYMB_54 = 55;
	public static readonly Surrogate_id_SYMB_55 = 56;
	public static readonly Surrogate_id_SYMB_56 = 57;
	public static readonly Surrogate_id_SYMB_57 = 58;
	public static readonly Surrogate_id_SYMB_58 = 59;
	public static readonly Surrogate_id_SYMB_59 = 60;
	public static readonly Surrogate_id_SYMB_60 = 61;
	public static readonly Surrogate_id_SYMB_61 = 62;
	public static readonly Surrogate_id_SYMB_62 = 63;
	public static readonly Surrogate_id_SYMB_63 = 64;
	public static readonly Surrogate_id_SYMB_64 = 65;
	public static readonly Surrogate_id_SYMB_65 = 66;
	public static readonly EXCEPTION = 67;
	public static readonly VARIANT = 68;
	public static readonly CAST = 69;
	public static readonly ASSIGN = 70;
	public static readonly REF_TYPE = 71;
	public static readonly REFERENCE = 72;
	public static readonly PANIC = 73;
	public static readonly THROW = 74;
	public static readonly TRY = 75;
	public static readonly CATCH = 76;
	public static readonly TOP_TYPE = 77;
	public static readonly BOTTOM_TYPE = 78;
	public static readonly GENERIC = 79;
	public static readonly FORALL = 80;
	public static readonly COMMENT_antlr_builtin = 81;
	public static readonly MULTICOMMENT_antlr_builtin = 82;
	public static readonly StellaIdent = 83;
	public static readonly ExtensionName = 84;
	public static readonly MemoryAddress = 85;
	public static readonly INTEGER = 86;
	public static readonly WS = 87;
	public static readonly ErrorToken = 88;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_start_Program = 0;
	public static readonly RULE_start_Expr = 1;
	public static readonly RULE_start_Type = 2;
	public static readonly RULE_program = 3;
	public static readonly RULE_languageDecl = 4;
	public static readonly RULE_extension = 5;
	public static readonly RULE_decl = 6;
	public static readonly RULE_annotation = 7;
	public static readonly RULE_paramDecl = 8;
	public static readonly RULE_expr = 9;
	public static readonly RULE_patternBinding = 10;
	public static readonly RULE_binding = 11;
	public static readonly RULE_matchCase = 12;
	public static readonly RULE_pattern = 13;
	public static readonly RULE_labelledPattern = 14;
	public static readonly RULE_stellatype = 15;
	public static readonly RULE_recordFieldType = 16;
	public static readonly RULE_variantFieldType = 17;
	public static readonly literalNames: (string | null)[] = [ null, "','", 
                                                            "';'", "'('", 
                                                            "')'", "'{'", 
                                                            "'}'", "'='", 
                                                            "':'", "'->'", 
                                                            "'=>'", "'|'", 
                                                            "'<|'", "'|>'", 
                                                            "'['", "']'", 
                                                            "'<'", "'<='", 
                                                            "'>'", "'>='", 
                                                            "'=='", "'!='", 
                                                            "'+'", "'-'", 
                                                            "'*'", "'/'", 
                                                            "'.'", "'List::head'", 
                                                            "'List::isempty'", 
                                                            "'List::tail'", 
                                                            "'Nat::pred'", 
                                                            "'Nat::iszero'", 
                                                            "'Nat::rec'", 
                                                            "'Bool'", "'Nat'", 
                                                            "'Unit'", "'and'", 
                                                            "'as'", "'cons'", 
                                                            "'core'", "'else'", 
                                                            "'extend'", 
                                                            "'false'", "'fix'", 
                                                            "'fn'", "'fold'", 
                                                            "'if'", "'in'", 
                                                            "'inl'", "'inline'", 
                                                            "'inr'", "'language'", 
                                                            "'let'", "'letrec'", 
                                                            "'match'", "'not'", 
                                                            "'or'", "'return'", 
                                                            "'succ'", "'then'", 
                                                            "'throws'", 
                                                            "'true'", "'type'", 
                                                            "'unfold'", 
                                                            "'unit'", "'with'", 
                                                            "'\\u00B5'", 
                                                            "'exception'", 
                                                            "'variant'", 
                                                            "'cast'", "':='", 
                                                            "'&'", "'new'", 
                                                            "'panic!'", 
                                                            "'throw'", "'try'", 
                                                            "'catch'", "'Top'", 
                                                            "'Bot'", "'generic'", 
                                                            "'forall'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "Surrogate_id_SYMB_0", 
                                                             "Surrogate_id_SYMB_1", 
                                                             "Surrogate_id_SYMB_2", 
                                                             "Surrogate_id_SYMB_3", 
                                                             "Surrogate_id_SYMB_4", 
                                                             "Surrogate_id_SYMB_5", 
                                                             "Surrogate_id_SYMB_6", 
                                                             "Surrogate_id_SYMB_7", 
                                                             "Surrogate_id_SYMB_8", 
                                                             "Surrogate_id_SYMB_9", 
                                                             "Surrogate_id_SYMB_10", 
                                                             "Surrogate_id_SYMB_11", 
                                                             "Surrogate_id_SYMB_12", 
                                                             "Surrogate_id_SYMB_13", 
                                                             "Surrogate_id_SYMB_14", 
                                                             "Surrogate_id_SYMB_15", 
                                                             "Surrogate_id_SYMB_16", 
                                                             "Surrogate_id_SYMB_17", 
                                                             "Surrogate_id_SYMB_18", 
                                                             "Surrogate_id_SYMB_19", 
                                                             "Surrogate_id_SYMB_20", 
                                                             "Surrogate_id_SYMB_21", 
                                                             "Surrogate_id_SYMB_22", 
                                                             "Surrogate_id_SYMB_23", 
                                                             "Surrogate_id_SYMB_24", 
                                                             "Surrogate_id_SYMB_25", 
                                                             "Surrogate_id_SYMB_26", 
                                                             "Surrogate_id_SYMB_27", 
                                                             "Surrogate_id_SYMB_28", 
                                                             "Surrogate_id_SYMB_29", 
                                                             "Surrogate_id_SYMB_30", 
                                                             "Surrogate_id_SYMB_31", 
                                                             "Surrogate_id_SYMB_32", 
                                                             "Surrogate_id_SYMB_33", 
                                                             "Surrogate_id_SYMB_34", 
                                                             "Surrogate_id_SYMB_35", 
                                                             "Surrogate_id_SYMB_36", 
                                                             "Surrogate_id_SYMB_37", 
                                                             "Surrogate_id_SYMB_38", 
                                                             "Surrogate_id_SYMB_39", 
                                                             "Surrogate_id_SYMB_40", 
                                                             "Surrogate_id_SYMB_41", 
                                                             "Surrogate_id_SYMB_42", 
                                                             "Surrogate_id_SYMB_43", 
                                                             "Surrogate_id_SYMB_44", 
                                                             "Surrogate_id_SYMB_45", 
                                                             "Surrogate_id_SYMB_46", 
                                                             "Surrogate_id_SYMB_47", 
                                                             "Surrogate_id_SYMB_48", 
                                                             "Surrogate_id_SYMB_49", 
                                                             "Surrogate_id_SYMB_50", 
                                                             "Surrogate_id_SYMB_51", 
                                                             "Surrogate_id_SYMB_52", 
                                                             "Surrogate_id_SYMB_53", 
                                                             "Surrogate_id_SYMB_54", 
                                                             "Surrogate_id_SYMB_55", 
                                                             "Surrogate_id_SYMB_56", 
                                                             "Surrogate_id_SYMB_57", 
                                                             "Surrogate_id_SYMB_58", 
                                                             "Surrogate_id_SYMB_59", 
                                                             "Surrogate_id_SYMB_60", 
                                                             "Surrogate_id_SYMB_61", 
                                                             "Surrogate_id_SYMB_62", 
                                                             "Surrogate_id_SYMB_63", 
                                                             "Surrogate_id_SYMB_64", 
                                                             "Surrogate_id_SYMB_65", 
                                                             "EXCEPTION", 
                                                             "VARIANT", 
                                                             "CAST", "ASSIGN", 
                                                             "REF_TYPE", 
                                                             "REFERENCE", 
                                                             "PANIC", "THROW", 
                                                             "TRY", "CATCH", 
                                                             "TOP_TYPE", 
                                                             "BOTTOM_TYPE", 
                                                             "GENERIC", 
                                                             "FORALL", "COMMENT_antlr_builtin", 
                                                             "MULTICOMMENT_antlr_builtin", 
                                                             "StellaIdent", 
                                                             "ExtensionName", 
                                                             "MemoryAddress", 
                                                             "INTEGER", 
                                                             "WS", "ErrorToken" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start_Program", "start_Expr", "start_Type", "program", "languageDecl", 
		"extension", "decl", "annotation", "paramDecl", "expr", "patternBinding", 
		"binding", "matchCase", "pattern", "labelledPattern", "stellatype", "recordFieldType", 
		"variantFieldType",
	];
	public get grammarFileName(): string { return "stellaParser.g4"; }
	public get literalNames(): (string | null)[] { return stellaParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return stellaParser.symbolicNames; }
	public get ruleNames(): string[] { return stellaParser.ruleNames; }
	public get serializedATN(): number[] { return stellaParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, stellaParser._ATN, stellaParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public start_Program(): Start_ProgramContext {
		let localctx: Start_ProgramContext = new Start_ProgramContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, stellaParser.RULE_start_Program);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 36;
			localctx._x = this.program();
			this.state = 37;
			this.match(stellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_Expr(): Start_ExprContext {
		let localctx: Start_ExprContext = new Start_ExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, stellaParser.RULE_start_Expr);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 39;
			localctx._x = this.expr(0);
			this.state = 40;
			this.match(stellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public start_Type(): Start_TypeContext {
		let localctx: Start_TypeContext = new Start_TypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, stellaParser.RULE_start_Type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 42;
			localctx._x = this.stellatype(0);
			this.state = 43;
			this.match(stellaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let localctx: ProgramContext = new ProgramContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, stellaParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 45;
			this.languageDecl();
			this.state = 49;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===41) {
				{
				{
				this.state = 46;
				localctx._extension = this.extension();
				localctx._extensions.push(localctx._extension);
				}
				}
				this.state = 51;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 55;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 8650785) !== 0) || _la===79) {
				{
				{
				this.state = 52;
				localctx._decl = this.decl();
				localctx._decls.push(localctx._decl);
				}
				}
				this.state = 57;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public languageDecl(): LanguageDeclContext {
		let localctx: LanguageDeclContext = new LanguageDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, stellaParser.RULE_languageDecl);
		try {
			localctx = new LanguageCoreContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 58;
			this.match(stellaParser.Surrogate_id_SYMB_50);
			this.state = 59;
			this.match(stellaParser.Surrogate_id_SYMB_38);
			this.state = 60;
			this.match(stellaParser.Surrogate_id_SYMB_1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public extension(): ExtensionContext {
		let localctx: ExtensionContext = new ExtensionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, stellaParser.RULE_extension);
		let _la: number;
		try {
			localctx = new AnExtensionContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 62;
			this.match(stellaParser.Surrogate_id_SYMB_40);
			this.state = 63;
			this.match(stellaParser.Surrogate_id_SYMB_64);
			this.state = 64;
			(localctx as AnExtensionContext)._ExtensionName = this.match(stellaParser.ExtensionName);
			(localctx as AnExtensionContext)._extensionNames.push((localctx as AnExtensionContext)._ExtensionName);
			this.state = 69;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1) {
				{
				{
				this.state = 65;
				this.match(stellaParser.Surrogate_id_SYMB_0);
				this.state = 66;
				(localctx as AnExtensionContext)._ExtensionName = this.match(stellaParser.ExtensionName);
				(localctx as AnExtensionContext)._extensionNames.push((localctx as AnExtensionContext)._ExtensionName);
				}
				}
				this.state = 71;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 72;
			this.match(stellaParser.Surrogate_id_SYMB_1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public decl(): DeclContext {
		let localctx: DeclContext = new DeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, stellaParser.RULE_decl);
		let _la: number;
		try {
			this.state = 188;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				localctx = new DeclFunContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 77;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===49) {
					{
					{
					this.state = 74;
					(localctx as DeclFunContext)._annotation = this.annotation();
					(localctx as DeclFunContext)._annotations.push((localctx as DeclFunContext)._annotation);
					}
					}
					this.state = 79;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 80;
				this.match(stellaParser.Surrogate_id_SYMB_43);
				this.state = 81;
				(localctx as DeclFunContext)._name = this.match(stellaParser.StellaIdent);
				this.state = 82;
				this.match(stellaParser.Surrogate_id_SYMB_2);
				this.state = 91;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===83) {
					{
					this.state = 83;
					(localctx as DeclFunContext)._paramDecl = this.paramDecl();
					(localctx as DeclFunContext)._paramDecls.push((localctx as DeclFunContext)._paramDecl);
					this.state = 88;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===1) {
						{
						{
						this.state = 84;
						this.match(stellaParser.Surrogate_id_SYMB_0);
						this.state = 85;
						(localctx as DeclFunContext)._paramDecl = this.paramDecl();
						(localctx as DeclFunContext)._paramDecls.push((localctx as DeclFunContext)._paramDecl);
						}
						}
						this.state = 90;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 93;
				this.match(stellaParser.Surrogate_id_SYMB_3);
				this.state = 96;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===9) {
					{
					this.state = 94;
					this.match(stellaParser.Surrogate_id_SYMB_8);
					this.state = 95;
					(localctx as DeclFunContext)._returnType = this.stellatype(0);
					}
				}

				this.state = 107;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===60) {
					{
					this.state = 98;
					this.match(stellaParser.Surrogate_id_SYMB_59);
					this.state = 99;
					(localctx as DeclFunContext)._stellatype = this.stellatype(0);
					(localctx as DeclFunContext)._throwTypes.push((localctx as DeclFunContext)._stellatype);
					this.state = 104;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===1) {
						{
						{
						this.state = 100;
						this.match(stellaParser.Surrogate_id_SYMB_0);
						this.state = 101;
						(localctx as DeclFunContext)._stellatype = this.stellatype(0);
						(localctx as DeclFunContext)._throwTypes.push((localctx as DeclFunContext)._stellatype);
						}
						}
						this.state = 106;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 109;
				this.match(stellaParser.Surrogate_id_SYMB_4);
				this.state = 113;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 8650785) !== 0) || _la===79) {
					{
					{
					this.state = 110;
					(localctx as DeclFunContext)._decl = this.decl();
					(localctx as DeclFunContext)._localDecls.push((localctx as DeclFunContext)._decl);
					}
					}
					this.state = 115;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 116;
				this.match(stellaParser.Surrogate_id_SYMB_56);
				this.state = 117;
				(localctx as DeclFunContext)._returnExpr = this.expr(0);
				this.state = 118;
				this.match(stellaParser.Surrogate_id_SYMB_5);
				}
				break;
			case 2:
				localctx = new DeclFunGenericContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 123;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===49) {
					{
					{
					this.state = 120;
					(localctx as DeclFunGenericContext)._annotation = this.annotation();
					(localctx as DeclFunGenericContext)._annotations.push((localctx as DeclFunGenericContext)._annotation);
					}
					}
					this.state = 125;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 126;
				this.match(stellaParser.GENERIC);
				this.state = 127;
				this.match(stellaParser.Surrogate_id_SYMB_43);
				this.state = 128;
				(localctx as DeclFunGenericContext)._name = this.match(stellaParser.StellaIdent);
				this.state = 129;
				this.match(stellaParser.Surrogate_id_SYMB_13);
				this.state = 133;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===83) {
					{
					{
					this.state = 130;
					(localctx as DeclFunGenericContext)._StellaIdent = this.match(stellaParser.StellaIdent);
					(localctx as DeclFunGenericContext)._generics.push((localctx as DeclFunGenericContext)._StellaIdent);
					}
					}
					this.state = 135;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 136;
				this.match(stellaParser.Surrogate_id_SYMB_14);
				this.state = 137;
				this.match(stellaParser.Surrogate_id_SYMB_2);
				this.state = 146;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===83) {
					{
					this.state = 138;
					(localctx as DeclFunGenericContext)._paramDecl = this.paramDecl();
					(localctx as DeclFunGenericContext)._paramDecls.push((localctx as DeclFunGenericContext)._paramDecl);
					this.state = 143;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===1) {
						{
						{
						this.state = 139;
						this.match(stellaParser.Surrogate_id_SYMB_0);
						this.state = 140;
						(localctx as DeclFunGenericContext)._paramDecl = this.paramDecl();
						(localctx as DeclFunGenericContext)._paramDecls.push((localctx as DeclFunGenericContext)._paramDecl);
						}
						}
						this.state = 145;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 148;
				this.match(stellaParser.Surrogate_id_SYMB_3);
				this.state = 151;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===9) {
					{
					this.state = 149;
					this.match(stellaParser.Surrogate_id_SYMB_8);
					this.state = 150;
					(localctx as DeclFunGenericContext)._returnType = this.stellatype(0);
					}
				}

				this.state = 162;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===60) {
					{
					this.state = 153;
					this.match(stellaParser.Surrogate_id_SYMB_59);
					this.state = 154;
					(localctx as DeclFunGenericContext)._stellatype = this.stellatype(0);
					(localctx as DeclFunGenericContext)._throwTypes.push((localctx as DeclFunGenericContext)._stellatype);
					this.state = 159;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===1) {
						{
						{
						this.state = 155;
						this.match(stellaParser.Surrogate_id_SYMB_0);
						this.state = 156;
						(localctx as DeclFunGenericContext)._stellatype = this.stellatype(0);
						(localctx as DeclFunGenericContext)._throwTypes.push((localctx as DeclFunGenericContext)._stellatype);
						}
						}
						this.state = 161;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 164;
				this.match(stellaParser.Surrogate_id_SYMB_4);
				this.state = 168;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 8650785) !== 0) || _la===79) {
					{
					{
					this.state = 165;
					(localctx as DeclFunGenericContext)._decl = this.decl();
					(localctx as DeclFunGenericContext)._localDecls.push((localctx as DeclFunGenericContext)._decl);
					}
					}
					this.state = 170;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 171;
				this.match(stellaParser.Surrogate_id_SYMB_56);
				this.state = 172;
				(localctx as DeclFunGenericContext)._returnExpr = this.expr(0);
				this.state = 173;
				this.match(stellaParser.Surrogate_id_SYMB_5);
				}
				break;
			case 3:
				localctx = new DeclTypeAliasContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 175;
				this.match(stellaParser.Surrogate_id_SYMB_61);
				this.state = 176;
				(localctx as DeclTypeAliasContext)._name = this.match(stellaParser.StellaIdent);
				this.state = 177;
				this.match(stellaParser.Surrogate_id_SYMB_6);
				this.state = 178;
				(localctx as DeclTypeAliasContext)._atype = this.stellatype(0);
				}
				break;
			case 4:
				localctx = new DeclExceptionTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 179;
				this.match(stellaParser.EXCEPTION);
				this.state = 180;
				this.match(stellaParser.Surrogate_id_SYMB_61);
				this.state = 181;
				this.match(stellaParser.Surrogate_id_SYMB_6);
				this.state = 182;
				(localctx as DeclExceptionTypeContext)._exceptionType = this.stellatype(0);
				}
				break;
			case 5:
				localctx = new DeclExceptionVariantContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 183;
				this.match(stellaParser.EXCEPTION);
				this.state = 184;
				this.match(stellaParser.VARIANT);
				this.state = 185;
				(localctx as DeclExceptionVariantContext)._name = this.match(stellaParser.StellaIdent);
				this.state = 186;
				this.match(stellaParser.Surrogate_id_SYMB_7);
				this.state = 187;
				(localctx as DeclExceptionVariantContext)._variantType = this.stellatype(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public annotation(): AnnotationContext {
		let localctx: AnnotationContext = new AnnotationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, stellaParser.RULE_annotation);
		try {
			localctx = new InlineAnnotationContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 190;
			this.match(stellaParser.Surrogate_id_SYMB_48);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public paramDecl(): ParamDeclContext {
		let localctx: ParamDeclContext = new ParamDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, stellaParser.RULE_paramDecl);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 192;
			localctx._name = this.match(stellaParser.StellaIdent);
			this.state = 193;
			this.match(stellaParser.Surrogate_id_SYMB_7);
			this.state = 194;
			localctx._paramType = this.stellatype(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExprContext = new ExprContext(this, this._ctx, _parentState);
		let _prevctx: ExprContext = localctx;
		let _startState: number = 18;
		this.enterRecursionRule(localctx, 18, stellaParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 427;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				{
				localctx = new ConstTrueContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 197;
				this.match(stellaParser.Surrogate_id_SYMB_60);
				}
				break;
			case 2:
				{
				localctx = new ConstFalseContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 198;
				this.match(stellaParser.Surrogate_id_SYMB_41);
				}
				break;
			case 3:
				{
				localctx = new ConstUnitContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 199;
				this.match(stellaParser.Surrogate_id_SYMB_63);
				}
				break;
			case 4:
				{
				localctx = new ConstIntContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 200;
				(localctx as ConstIntContext)._n = this.match(stellaParser.INTEGER);
				}
				break;
			case 5:
				{
				localctx = new ConstMemoryContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 201;
				(localctx as ConstMemoryContext)._mem = this.match(stellaParser.MemoryAddress);
				}
				break;
			case 6:
				{
				localctx = new VarContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 202;
				(localctx as VarContext)._name = this.match(stellaParser.StellaIdent);
				}
				break;
			case 7:
				{
				localctx = new PanicContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 203;
				this.match(stellaParser.PANIC);
				}
				break;
			case 8:
				{
				localctx = new ThrowContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 204;
				this.match(stellaParser.THROW);
				this.state = 205;
				this.match(stellaParser.Surrogate_id_SYMB_2);
				this.state = 206;
				(localctx as ThrowContext)._expr_ = this.expr(0);
				this.state = 207;
				this.match(stellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 9:
				{
				localctx = new TryCatchContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 209;
				this.match(stellaParser.TRY);
				this.state = 210;
				this.match(stellaParser.Surrogate_id_SYMB_4);
				this.state = 211;
				(localctx as TryCatchContext)._tryExpr = this.expr(0);
				this.state = 212;
				this.match(stellaParser.Surrogate_id_SYMB_5);
				this.state = 213;
				this.match(stellaParser.CATCH);
				this.state = 214;
				this.match(stellaParser.Surrogate_id_SYMB_4);
				this.state = 215;
				(localctx as TryCatchContext)._pat = this.pattern();
				this.state = 216;
				this.match(stellaParser.Surrogate_id_SYMB_9);
				this.state = 217;
				(localctx as TryCatchContext)._fallbackExpr = this.expr(0);
				this.state = 218;
				this.match(stellaParser.Surrogate_id_SYMB_5);
				}
				break;
			case 10:
				{
				localctx = new TryWithContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 220;
				this.match(stellaParser.TRY);
				this.state = 221;
				this.match(stellaParser.Surrogate_id_SYMB_4);
				this.state = 222;
				(localctx as TryWithContext)._tryExpr = this.expr(0);
				this.state = 223;
				this.match(stellaParser.Surrogate_id_SYMB_5);
				this.state = 224;
				this.match(stellaParser.Surrogate_id_SYMB_64);
				this.state = 225;
				this.match(stellaParser.Surrogate_id_SYMB_4);
				this.state = 226;
				(localctx as TryWithContext)._fallbackExpr = this.expr(0);
				this.state = 227;
				this.match(stellaParser.Surrogate_id_SYMB_5);
				}
				break;
			case 11:
				{
				localctx = new InlContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 229;
				this.match(stellaParser.Surrogate_id_SYMB_47);
				this.state = 230;
				this.match(stellaParser.Surrogate_id_SYMB_2);
				this.state = 231;
				(localctx as InlContext)._expr_ = this.expr(0);
				this.state = 232;
				this.match(stellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 12:
				{
				localctx = new InrContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 234;
				this.match(stellaParser.Surrogate_id_SYMB_49);
				this.state = 235;
				this.match(stellaParser.Surrogate_id_SYMB_2);
				this.state = 236;
				(localctx as InrContext)._expr_ = this.expr(0);
				this.state = 237;
				this.match(stellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 13:
				{
				localctx = new ConsListContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 239;
				this.match(stellaParser.Surrogate_id_SYMB_37);
				this.state = 240;
				this.match(stellaParser.Surrogate_id_SYMB_2);
				this.state = 241;
				(localctx as ConsListContext)._head = this.expr(0);
				this.state = 242;
				this.match(stellaParser.Surrogate_id_SYMB_0);
				this.state = 243;
				(localctx as ConsListContext)._tail = this.expr(0);
				this.state = 244;
				this.match(stellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 14:
				{
				localctx = new HeadContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 246;
				this.match(stellaParser.Surrogate_id_SYMB_26);
				this.state = 247;
				this.match(stellaParser.Surrogate_id_SYMB_2);
				this.state = 248;
				(localctx as HeadContext)._list = this.expr(0);
				this.state = 249;
				this.match(stellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 15:
				{
				localctx = new IsEmptyContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 251;
				this.match(stellaParser.Surrogate_id_SYMB_27);
				this.state = 252;
				this.match(stellaParser.Surrogate_id_SYMB_2);
				this.state = 253;
				(localctx as IsEmptyContext)._list = this.expr(0);
				this.state = 254;
				this.match(stellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 16:
				{
				localctx = new TailContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 256;
				this.match(stellaParser.Surrogate_id_SYMB_28);
				this.state = 257;
				this.match(stellaParser.Surrogate_id_SYMB_2);
				this.state = 258;
				(localctx as TailContext)._list = this.expr(0);
				this.state = 259;
				this.match(stellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 17:
				{
				localctx = new SuccContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 261;
				this.match(stellaParser.Surrogate_id_SYMB_57);
				this.state = 262;
				this.match(stellaParser.Surrogate_id_SYMB_2);
				this.state = 263;
				(localctx as SuccContext)._n = this.expr(0);
				this.state = 264;
				this.match(stellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 18:
				{
				localctx = new LogicNotContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 266;
				this.match(stellaParser.Surrogate_id_SYMB_54);
				this.state = 267;
				this.match(stellaParser.Surrogate_id_SYMB_2);
				this.state = 268;
				(localctx as LogicNotContext)._expr_ = this.expr(0);
				this.state = 269;
				this.match(stellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 19:
				{
				localctx = new PredContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 271;
				this.match(stellaParser.Surrogate_id_SYMB_29);
				this.state = 272;
				this.match(stellaParser.Surrogate_id_SYMB_2);
				this.state = 273;
				(localctx as PredContext)._n = this.expr(0);
				this.state = 274;
				this.match(stellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 20:
				{
				localctx = new IsZeroContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 276;
				this.match(stellaParser.Surrogate_id_SYMB_30);
				this.state = 277;
				this.match(stellaParser.Surrogate_id_SYMB_2);
				this.state = 278;
				(localctx as IsZeroContext)._n = this.expr(0);
				this.state = 279;
				this.match(stellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 21:
				{
				localctx = new FixContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 281;
				this.match(stellaParser.Surrogate_id_SYMB_42);
				this.state = 282;
				this.match(stellaParser.Surrogate_id_SYMB_2);
				this.state = 283;
				(localctx as FixContext)._expr_ = this.expr(0);
				this.state = 284;
				this.match(stellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 22:
				{
				localctx = new NatRecContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 286;
				this.match(stellaParser.Surrogate_id_SYMB_31);
				this.state = 287;
				this.match(stellaParser.Surrogate_id_SYMB_2);
				this.state = 288;
				(localctx as NatRecContext)._n = this.expr(0);
				this.state = 289;
				this.match(stellaParser.Surrogate_id_SYMB_0);
				this.state = 290;
				(localctx as NatRecContext)._initial = this.expr(0);
				this.state = 291;
				this.match(stellaParser.Surrogate_id_SYMB_0);
				this.state = 292;
				(localctx as NatRecContext)._step = this.expr(0);
				this.state = 293;
				this.match(stellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 23:
				{
				localctx = new FoldContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 295;
				this.match(stellaParser.Surrogate_id_SYMB_44);
				this.state = 296;
				this.match(stellaParser.Surrogate_id_SYMB_13);
				this.state = 297;
				(localctx as FoldContext)._type_ = this.stellatype(0);
				this.state = 298;
				this.match(stellaParser.Surrogate_id_SYMB_14);
				this.state = 299;
				(localctx as FoldContext)._expr_ = this.expr(33);
				}
				break;
			case 24:
				{
				localctx = new UnfoldContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 301;
				this.match(stellaParser.Surrogate_id_SYMB_62);
				this.state = 302;
				this.match(stellaParser.Surrogate_id_SYMB_13);
				this.state = 303;
				(localctx as UnfoldContext)._type_ = this.stellatype(0);
				this.state = 304;
				this.match(stellaParser.Surrogate_id_SYMB_14);
				this.state = 305;
				(localctx as UnfoldContext)._expr_ = this.expr(32);
				}
				break;
			case 25:
				{
				localctx = new RefContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 307;
				this.match(stellaParser.REFERENCE);
				this.state = 308;
				(localctx as RefContext)._expr_ = this.expr(26);
				}
				break;
			case 26:
				{
				localctx = new DerefContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 309;
				this.match(stellaParser.Surrogate_id_SYMB_23);
				this.state = 310;
				(localctx as DerefContext)._expr_ = this.expr(25);
				}
				break;
			case 27:
				{
				localctx = new AbstractionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 311;
				this.match(stellaParser.Surrogate_id_SYMB_43);
				this.state = 312;
				this.match(stellaParser.Surrogate_id_SYMB_2);
				this.state = 321;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===83) {
					{
					this.state = 313;
					(localctx as AbstractionContext)._paramDecl = this.paramDecl();
					(localctx as AbstractionContext)._paramDecls.push((localctx as AbstractionContext)._paramDecl);
					this.state = 318;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===1) {
						{
						{
						this.state = 314;
						this.match(stellaParser.Surrogate_id_SYMB_0);
						this.state = 315;
						(localctx as AbstractionContext)._paramDecl = this.paramDecl();
						(localctx as AbstractionContext)._paramDecls.push((localctx as AbstractionContext)._paramDecl);
						}
						}
						this.state = 320;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 323;
				this.match(stellaParser.Surrogate_id_SYMB_3);
				this.state = 324;
				this.match(stellaParser.Surrogate_id_SYMB_4);
				this.state = 325;
				this.match(stellaParser.Surrogate_id_SYMB_56);
				this.state = 326;
				(localctx as AbstractionContext)._returnExpr = this.expr(0);
				this.state = 327;
				this.match(stellaParser.Surrogate_id_SYMB_5);
				}
				break;
			case 28:
				{
				localctx = new TupleContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 329;
				this.match(stellaParser.Surrogate_id_SYMB_4);
				this.state = 338;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4177547304) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2767551553) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 6852353) !== 0)) {
					{
					this.state = 330;
					(localctx as TupleContext)._expr = this.expr(0);
					(localctx as TupleContext)._exprs.push((localctx as TupleContext)._expr);
					this.state = 335;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===1) {
						{
						{
						this.state = 331;
						this.match(stellaParser.Surrogate_id_SYMB_0);
						this.state = 332;
						(localctx as TupleContext)._expr = this.expr(0);
						(localctx as TupleContext)._exprs.push((localctx as TupleContext)._expr);
						}
						}
						this.state = 337;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 340;
				this.match(stellaParser.Surrogate_id_SYMB_5);
				}
				break;
			case 29:
				{
				localctx = new SRecordContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 341;
				this.match(stellaParser.Surrogate_id_SYMB_4);
				this.state = 342;
				(localctx as SRecordContext)._binding = this.binding();
				(localctx as SRecordContext)._bindings.push((localctx as SRecordContext)._binding);
				this.state = 347;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===1) {
					{
					{
					this.state = 343;
					this.match(stellaParser.Surrogate_id_SYMB_0);
					this.state = 344;
					(localctx as SRecordContext)._binding = this.binding();
					(localctx as SRecordContext)._bindings.push((localctx as SRecordContext)._binding);
					}
					}
					this.state = 349;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 350;
				this.match(stellaParser.Surrogate_id_SYMB_5);
				}
				break;
			case 30:
				{
				localctx = new VariantContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 352;
				this.match(stellaParser.Surrogate_id_SYMB_11);
				this.state = 353;
				(localctx as VariantContext)._label = this.match(stellaParser.StellaIdent);
				this.state = 356;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===7) {
					{
					this.state = 354;
					this.match(stellaParser.Surrogate_id_SYMB_6);
					this.state = 355;
					(localctx as VariantContext)._rhs = this.expr(0);
					}
				}

				this.state = 358;
				this.match(stellaParser.Surrogate_id_SYMB_12);
				}
				break;
			case 31:
				{
				localctx = new MatchContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 359;
				this.match(stellaParser.Surrogate_id_SYMB_53);
				this.state = 360;
				this.expr(0);
				this.state = 361;
				this.match(stellaParser.Surrogate_id_SYMB_4);
				this.state = 370;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 20520) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 76551185) !== 0) || _la===83 || _la===86) {
					{
					this.state = 362;
					(localctx as MatchContext)._matchCase = this.matchCase();
					(localctx as MatchContext)._cases.push((localctx as MatchContext)._matchCase);
					this.state = 367;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===11) {
						{
						{
						this.state = 363;
						this.match(stellaParser.Surrogate_id_SYMB_10);
						this.state = 364;
						(localctx as MatchContext)._matchCase = this.matchCase();
						(localctx as MatchContext)._cases.push((localctx as MatchContext)._matchCase);
						}
						}
						this.state = 369;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 372;
				this.match(stellaParser.Surrogate_id_SYMB_5);
				}
				break;
			case 32:
				{
				localctx = new ListContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 374;
				this.match(stellaParser.Surrogate_id_SYMB_13);
				this.state = 379;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4177547304) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2767551553) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 6852353) !== 0)) {
					{
					this.state = 375;
					(localctx as ListContext)._expr = this.expr(0);
					(localctx as ListContext)._exprs.push((localctx as ListContext)._expr);
					{
					this.state = 376;
					this.match(stellaParser.Surrogate_id_SYMB_0);
					this.state = 377;
					(localctx as ListContext)._expr = this.expr(0);
					(localctx as ListContext)._exprs.push((localctx as ListContext)._expr);
					}
					}
				}

				this.state = 381;
				this.match(stellaParser.Surrogate_id_SYMB_14);
				}
				break;
			case 33:
				{
				localctx = new IfContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 382;
				this.match(stellaParser.Surrogate_id_SYMB_45);
				this.state = 383;
				(localctx as IfContext)._condition = this.expr(0);
				this.state = 384;
				this.match(stellaParser.Surrogate_id_SYMB_58);
				this.state = 385;
				(localctx as IfContext)._thenExpr = this.expr(0);
				this.state = 386;
				this.match(stellaParser.Surrogate_id_SYMB_39);
				this.state = 387;
				(localctx as IfContext)._elseExpr = this.expr(6);
				}
				break;
			case 34:
				{
				localctx = new LetContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 389;
				this.match(stellaParser.Surrogate_id_SYMB_51);
				this.state = 390;
				(localctx as LetContext)._patternBinding = this.patternBinding();
				(localctx as LetContext)._patternBindings.push((localctx as LetContext)._patternBinding);
				this.state = 395;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===1) {
					{
					{
					this.state = 391;
					this.match(stellaParser.Surrogate_id_SYMB_0);
					this.state = 392;
					(localctx as LetContext)._patternBinding = this.patternBinding();
					(localctx as LetContext)._patternBindings.push((localctx as LetContext)._patternBinding);
					}
					}
					this.state = 397;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 398;
				this.match(stellaParser.Surrogate_id_SYMB_46);
				this.state = 399;
				(localctx as LetContext)._body = this.expr(5);
				}
				break;
			case 35:
				{
				localctx = new LetRecContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 401;
				this.match(stellaParser.Surrogate_id_SYMB_52);
				this.state = 402;
				(localctx as LetRecContext)._patternBinding = this.patternBinding();
				(localctx as LetRecContext)._patternBindings.push((localctx as LetRecContext)._patternBinding);
				this.state = 407;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===1) {
					{
					{
					this.state = 403;
					this.match(stellaParser.Surrogate_id_SYMB_0);
					this.state = 404;
					(localctx as LetRecContext)._patternBinding = this.patternBinding();
					(localctx as LetRecContext)._patternBindings.push((localctx as LetRecContext)._patternBinding);
					}
					}
					this.state = 409;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 410;
				this.match(stellaParser.Surrogate_id_SYMB_46);
				this.state = 411;
				(localctx as LetRecContext)._body = this.expr(4);
				}
				break;
			case 36:
				{
				localctx = new TypeAbstractionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 413;
				this.match(stellaParser.GENERIC);
				this.state = 414;
				this.match(stellaParser.Surrogate_id_SYMB_13);
				this.state = 418;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===83) {
					{
					{
					this.state = 415;
					(localctx as TypeAbstractionContext)._StellaIdent = this.match(stellaParser.StellaIdent);
					(localctx as TypeAbstractionContext)._generics.push((localctx as TypeAbstractionContext)._StellaIdent);
					}
					}
					this.state = 420;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 421;
				this.match(stellaParser.Surrogate_id_SYMB_14);
				this.state = 422;
				(localctx as TypeAbstractionContext)._expr_ = this.expr(3);
				}
				break;
			case 37:
				{
				localctx = new ParenthesisedExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 423;
				this.match(stellaParser.Surrogate_id_SYMB_2);
				this.state = 424;
				(localctx as ParenthesisedExprContext)._expr_ = this.expr(0);
				this.state = 425;
				this.match(stellaParser.Surrogate_id_SYMB_3);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 506;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 36, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 504;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 35, this._ctx) ) {
					case 1:
						{
						localctx = new MultiplyContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as MultiplyContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 429;
						if (!(this.precpred(this._ctx, 29))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 29)");
						}
						this.state = 430;
						this.match(stellaParser.Surrogate_id_SYMB_23);
						this.state = 431;
						(localctx as MultiplyContext)._right = this.expr(30);
						}
						break;
					case 2:
						{
						localctx = new DivideContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as DivideContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 432;
						if (!(this.precpred(this._ctx, 28))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 28)");
						}
						this.state = 433;
						this.match(stellaParser.Surrogate_id_SYMB_24);
						this.state = 434;
						(localctx as DivideContext)._right = this.expr(29);
						}
						break;
					case 3:
						{
						localctx = new LogicAndContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as LogicAndContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 435;
						if (!(this.precpred(this._ctx, 27))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 27)");
						}
						this.state = 436;
						this.match(stellaParser.Surrogate_id_SYMB_35);
						this.state = 437;
						(localctx as LogicAndContext)._right = this.expr(28);
						}
						break;
					case 4:
						{
						localctx = new AddContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as AddContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 438;
						if (!(this.precpred(this._ctx, 24))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
						}
						this.state = 439;
						this.match(stellaParser.Surrogate_id_SYMB_21);
						this.state = 440;
						(localctx as AddContext)._right = this.expr(25);
						}
						break;
					case 5:
						{
						localctx = new SubtractContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as SubtractContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 441;
						if (!(this.precpred(this._ctx, 23))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 23)");
						}
						this.state = 442;
						this.match(stellaParser.Surrogate_id_SYMB_22);
						this.state = 443;
						(localctx as SubtractContext)._right = this.expr(24);
						}
						break;
					case 6:
						{
						localctx = new LogicOrContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as LogicOrContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 444;
						if (!(this.precpred(this._ctx, 22))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 22)");
						}
						this.state = 445;
						this.match(stellaParser.Surrogate_id_SYMB_55);
						this.state = 446;
						(localctx as LogicOrContext)._right = this.expr(23);
						}
						break;
					case 7:
						{
						localctx = new LessThanContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as LessThanContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 447;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 448;
						this.match(stellaParser.Surrogate_id_SYMB_15);
						this.state = 449;
						(localctx as LessThanContext)._right = this.expr(14);
						}
						break;
					case 8:
						{
						localctx = new LessThanOrEqualContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as LessThanOrEqualContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 450;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 451;
						this.match(stellaParser.Surrogate_id_SYMB_16);
						this.state = 452;
						(localctx as LessThanOrEqualContext)._right = this.expr(13);
						}
						break;
					case 9:
						{
						localctx = new GreaterThanContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as GreaterThanContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 453;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 454;
						this.match(stellaParser.Surrogate_id_SYMB_17);
						this.state = 455;
						(localctx as GreaterThanContext)._right = this.expr(12);
						}
						break;
					case 10:
						{
						localctx = new GreaterThanOrEqualContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as GreaterThanOrEqualContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 456;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 457;
						this.match(stellaParser.Surrogate_id_SYMB_18);
						this.state = 458;
						(localctx as GreaterThanOrEqualContext)._right = this.expr(11);
						}
						break;
					case 11:
						{
						localctx = new EqualContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as EqualContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 459;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 460;
						this.match(stellaParser.Surrogate_id_SYMB_19);
						this.state = 461;
						(localctx as EqualContext)._right = this.expr(10);
						}
						break;
					case 12:
						{
						localctx = new NotEqualContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as NotEqualContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 462;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 463;
						this.match(stellaParser.Surrogate_id_SYMB_20);
						this.state = 464;
						(localctx as NotEqualContext)._right = this.expr(9);
						}
						break;
					case 13:
						{
						localctx = new AssignContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as AssignContext)._lhs = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 465;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 466;
						this.match(stellaParser.ASSIGN);
						this.state = 467;
						(localctx as AssignContext)._rhs = this.expr(8);
						}
						break;
					case 14:
						{
						localctx = new DotRecordContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as DotRecordContext)._expr_ = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 468;
						if (!(this.precpred(this._ctx, 57))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 57)");
						}
						this.state = 469;
						this.match(stellaParser.Surrogate_id_SYMB_25);
						this.state = 470;
						(localctx as DotRecordContext)._label = this.match(stellaParser.StellaIdent);
						}
						break;
					case 15:
						{
						localctx = new DotTupleContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as DotTupleContext)._expr_ = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 471;
						if (!(this.precpred(this._ctx, 56))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 56)");
						}
						this.state = 472;
						this.match(stellaParser.Surrogate_id_SYMB_25);
						this.state = 473;
						(localctx as DotTupleContext)._index = this.match(stellaParser.INTEGER);
						}
						break;
					case 16:
						{
						localctx = new ApplicationContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as ApplicationContext)._fun = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 474;
						if (!(this.precpred(this._ctx, 31))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 31)");
						}
						this.state = 475;
						this.match(stellaParser.Surrogate_id_SYMB_2);
						this.state = 484;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4177547304) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2767551553) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 6852353) !== 0)) {
							{
							this.state = 476;
							(localctx as ApplicationContext)._expr = this.expr(0);
							(localctx as ApplicationContext)._args.push((localctx as ApplicationContext)._expr);
							this.state = 481;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la===1) {
								{
								{
								this.state = 477;
								this.match(stellaParser.Surrogate_id_SYMB_0);
								this.state = 478;
								(localctx as ApplicationContext)._expr = this.expr(0);
								(localctx as ApplicationContext)._args.push((localctx as ApplicationContext)._expr);
								}
								}
								this.state = 483;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
						}

						this.state = 486;
						this.match(stellaParser.Surrogate_id_SYMB_3);
						}
						break;
					case 17:
						{
						localctx = new TypeApplicationContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as TypeApplicationContext)._fun = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 487;
						if (!(this.precpred(this._ctx, 30))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 30)");
						}
						this.state = 488;
						this.match(stellaParser.Surrogate_id_SYMB_13);
						{
						this.state = 489;
						(localctx as TypeApplicationContext)._stellatype = this.stellatype(0);
						(localctx as TypeApplicationContext)._types.push((localctx as TypeApplicationContext)._stellatype);
						}
						this.state = 490;
						this.match(stellaParser.Surrogate_id_SYMB_14);
						}
						break;
					case 18:
						{
						localctx = new TypeAscContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as TypeAscContext)._expr_ = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 492;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 493;
						this.match(stellaParser.Surrogate_id_SYMB_36);
						this.state = 494;
						(localctx as TypeAscContext)._type_ = this.stellatype(0);
						}
						break;
					case 19:
						{
						localctx = new TypeCastContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as TypeCastContext)._expr_ = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 495;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 496;
						this.match(stellaParser.CAST);
						this.state = 497;
						this.match(stellaParser.Surrogate_id_SYMB_36);
						this.state = 498;
						(localctx as TypeCastContext)._type_ = this.stellatype(0);
						}
						break;
					case 20:
						{
						localctx = new SequenceContext(this, new ExprContext(this, _parentctx, _parentState));
						(localctx as SequenceContext)._expr1 = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_expr);
						this.state = 499;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 500;
						this.match(stellaParser.Surrogate_id_SYMB_1);
						this.state = 502;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 34, this._ctx) ) {
						case 1:
							{
							this.state = 501;
							(localctx as SequenceContext)._expr2 = this.expr(0);
							}
							break;
						}
						}
						break;
					}
					}
				}
				this.state = 508;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 36, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public patternBinding(): PatternBindingContext {
		let localctx: PatternBindingContext = new PatternBindingContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, stellaParser.RULE_patternBinding);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 509;
			localctx._pat = this.pattern();
			this.state = 510;
			this.match(stellaParser.Surrogate_id_SYMB_6);
			this.state = 511;
			localctx._rhs = this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public binding(): BindingContext {
		let localctx: BindingContext = new BindingContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, stellaParser.RULE_binding);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 513;
			localctx._name = this.match(stellaParser.StellaIdent);
			this.state = 514;
			this.match(stellaParser.Surrogate_id_SYMB_6);
			this.state = 515;
			localctx._rhs = this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public matchCase(): MatchCaseContext {
		let localctx: MatchCaseContext = new MatchCaseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, stellaParser.RULE_matchCase);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 517;
			localctx._pattern_ = this.pattern();
			this.state = 518;
			this.match(stellaParser.Surrogate_id_SYMB_9);
			this.state = 519;
			localctx._expr_ = this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public pattern(): PatternContext {
		let localctx: PatternContext = new PatternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, stellaParser.RULE_pattern);
		let _la: number;
		try {
			this.state = 595;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				localctx = new PatternVariantContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 521;
				this.match(stellaParser.Surrogate_id_SYMB_11);
				this.state = 522;
				(localctx as PatternVariantContext)._label = this.match(stellaParser.StellaIdent);
				this.state = 525;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===7) {
					{
					this.state = 523;
					this.match(stellaParser.Surrogate_id_SYMB_6);
					this.state = 524;
					(localctx as PatternVariantContext)._pattern_ = this.pattern();
					}
				}

				this.state = 527;
				this.match(stellaParser.Surrogate_id_SYMB_12);
				}
				break;
			case 2:
				localctx = new PatternInlContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 528;
				this.match(stellaParser.Surrogate_id_SYMB_47);
				this.state = 529;
				this.match(stellaParser.Surrogate_id_SYMB_2);
				this.state = 530;
				(localctx as PatternInlContext)._pattern_ = this.pattern();
				this.state = 531;
				this.match(stellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 3:
				localctx = new PatternInrContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 533;
				this.match(stellaParser.Surrogate_id_SYMB_49);
				this.state = 534;
				this.match(stellaParser.Surrogate_id_SYMB_2);
				this.state = 535;
				(localctx as PatternInrContext)._pattern_ = this.pattern();
				this.state = 536;
				this.match(stellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 4:
				localctx = new PatternTupleContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 538;
				this.match(stellaParser.Surrogate_id_SYMB_4);
				this.state = 547;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 20520) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 76551185) !== 0) || _la===83 || _la===86) {
					{
					this.state = 539;
					(localctx as PatternTupleContext)._pattern = this.pattern();
					(localctx as PatternTupleContext)._patterns.push((localctx as PatternTupleContext)._pattern);
					this.state = 544;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===1) {
						{
						{
						this.state = 540;
						this.match(stellaParser.Surrogate_id_SYMB_0);
						this.state = 541;
						(localctx as PatternTupleContext)._pattern = this.pattern();
						(localctx as PatternTupleContext)._patterns.push((localctx as PatternTupleContext)._pattern);
						}
						}
						this.state = 546;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 549;
				this.match(stellaParser.Surrogate_id_SYMB_5);
				}
				break;
			case 5:
				localctx = new PatternRecordContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 550;
				this.match(stellaParser.Surrogate_id_SYMB_4);
				this.state = 559;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===83) {
					{
					this.state = 551;
					(localctx as PatternRecordContext)._labelledPattern = this.labelledPattern();
					(localctx as PatternRecordContext)._patterns.push((localctx as PatternRecordContext)._labelledPattern);
					this.state = 556;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===1) {
						{
						{
						this.state = 552;
						this.match(stellaParser.Surrogate_id_SYMB_0);
						this.state = 553;
						(localctx as PatternRecordContext)._labelledPattern = this.labelledPattern();
						(localctx as PatternRecordContext)._patterns.push((localctx as PatternRecordContext)._labelledPattern);
						}
						}
						this.state = 558;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 561;
				this.match(stellaParser.Surrogate_id_SYMB_5);
				}
				break;
			case 6:
				localctx = new PatternListContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 562;
				this.match(stellaParser.Surrogate_id_SYMB_13);
				this.state = 571;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 20520) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 76551185) !== 0) || _la===83 || _la===86) {
					{
					this.state = 563;
					(localctx as PatternListContext)._pattern = this.pattern();
					(localctx as PatternListContext)._patterns.push((localctx as PatternListContext)._pattern);
					this.state = 568;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===1) {
						{
						{
						this.state = 564;
						this.match(stellaParser.Surrogate_id_SYMB_0);
						this.state = 565;
						(localctx as PatternListContext)._pattern = this.pattern();
						(localctx as PatternListContext)._patterns.push((localctx as PatternListContext)._pattern);
						}
						}
						this.state = 570;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 573;
				this.match(stellaParser.Surrogate_id_SYMB_14);
				}
				break;
			case 7:
				localctx = new PatternConsContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 574;
				this.match(stellaParser.Surrogate_id_SYMB_37);
				this.state = 575;
				this.match(stellaParser.Surrogate_id_SYMB_2);
				this.state = 576;
				(localctx as PatternConsContext)._head = this.pattern();
				this.state = 577;
				this.match(stellaParser.Surrogate_id_SYMB_0);
				this.state = 578;
				(localctx as PatternConsContext)._tail = this.pattern();
				this.state = 579;
				this.match(stellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 8:
				localctx = new PatternFalseContext(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 581;
				this.match(stellaParser.Surrogate_id_SYMB_41);
				}
				break;
			case 9:
				localctx = new PatternTrueContext(this, localctx);
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 582;
				this.match(stellaParser.Surrogate_id_SYMB_60);
				}
				break;
			case 10:
				localctx = new PatternUnitContext(this, localctx);
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 583;
				this.match(stellaParser.Surrogate_id_SYMB_63);
				}
				break;
			case 11:
				localctx = new PatternIntContext(this, localctx);
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 584;
				(localctx as PatternIntContext)._n = this.match(stellaParser.INTEGER);
				}
				break;
			case 12:
				localctx = new PatternSuccContext(this, localctx);
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 585;
				this.match(stellaParser.Surrogate_id_SYMB_57);
				this.state = 586;
				this.match(stellaParser.Surrogate_id_SYMB_2);
				this.state = 587;
				(localctx as PatternSuccContext)._pattern_ = this.pattern();
				this.state = 588;
				this.match(stellaParser.Surrogate_id_SYMB_3);
				}
				break;
			case 13:
				localctx = new PatternVarContext(this, localctx);
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 590;
				(localctx as PatternVarContext)._name = this.match(stellaParser.StellaIdent);
				}
				break;
			case 14:
				localctx = new ParenthesisedPatternContext(this, localctx);
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 591;
				this.match(stellaParser.Surrogate_id_SYMB_2);
				this.state = 592;
				(localctx as ParenthesisedPatternContext)._pattern_ = this.pattern();
				this.state = 593;
				this.match(stellaParser.Surrogate_id_SYMB_3);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public labelledPattern(): LabelledPatternContext {
		let localctx: LabelledPatternContext = new LabelledPatternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, stellaParser.RULE_labelledPattern);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 597;
			localctx._label = this.match(stellaParser.StellaIdent);
			this.state = 598;
			this.match(stellaParser.Surrogate_id_SYMB_6);
			this.state = 599;
			localctx._pattern_ = this.pattern();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public stellatype(): StellatypeContext;
	public stellatype(_p: number): StellatypeContext;
	// @RuleVersion(0)
	public stellatype(_p?: number): StellatypeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: StellatypeContext = new StellatypeContext(this, this._ctx, _parentState);
		let _prevctx: StellatypeContext = localctx;
		let _startState: number = 30;
		this.enterRecursionRule(localctx, 30, stellaParser.RULE_stellatype, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 689;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				{
				localctx = new TypeBoolContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 602;
				this.match(stellaParser.Surrogate_id_SYMB_32);
				}
				break;
			case 2:
				{
				localctx = new TypeNatContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 603;
				this.match(stellaParser.Surrogate_id_SYMB_33);
				}
				break;
			case 3:
				{
				localctx = new TypeFunContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 604;
				this.match(stellaParser.Surrogate_id_SYMB_43);
				this.state = 605;
				this.match(stellaParser.Surrogate_id_SYMB_2);
				this.state = 614;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 20520) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2055) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 153633) !== 0)) {
					{
					this.state = 606;
					(localctx as TypeFunContext)._stellatype = this.stellatype(0);
					(localctx as TypeFunContext)._paramTypes.push((localctx as TypeFunContext)._stellatype);
					this.state = 611;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===1) {
						{
						{
						this.state = 607;
						this.match(stellaParser.Surrogate_id_SYMB_0);
						this.state = 608;
						(localctx as TypeFunContext)._stellatype = this.stellatype(0);
						(localctx as TypeFunContext)._paramTypes.push((localctx as TypeFunContext)._stellatype);
						}
						}
						this.state = 613;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 616;
				this.match(stellaParser.Surrogate_id_SYMB_3);
				this.state = 617;
				this.match(stellaParser.Surrogate_id_SYMB_8);
				this.state = 618;
				(localctx as TypeFunContext)._returnType = this.stellatype(14);
				}
				break;
			case 4:
				{
				localctx = new TypeForAllContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 619;
				this.match(stellaParser.FORALL);
				this.state = 623;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===83) {
					{
					{
					this.state = 620;
					(localctx as TypeForAllContext)._StellaIdent = this.match(stellaParser.StellaIdent);
					(localctx as TypeForAllContext)._types.push((localctx as TypeForAllContext)._StellaIdent);
					}
					}
					this.state = 625;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 626;
				this.match(stellaParser.Surrogate_id_SYMB_25);
				this.state = 627;
				(localctx as TypeForAllContext)._type_ = this.stellatype(13);
				}
				break;
			case 5:
				{
				localctx = new TypeRecContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 628;
				this.match(stellaParser.Surrogate_id_SYMB_65);
				this.state = 629;
				(localctx as TypeRecContext)._var_ = this.match(stellaParser.StellaIdent);
				this.state = 630;
				this.match(stellaParser.Surrogate_id_SYMB_25);
				this.state = 631;
				(localctx as TypeRecContext)._type_ = this.stellatype(12);
				}
				break;
			case 6:
				{
				localctx = new TypeTupleContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 632;
				this.match(stellaParser.Surrogate_id_SYMB_4);
				this.state = 641;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 20520) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2055) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 153633) !== 0)) {
					{
					this.state = 633;
					(localctx as TypeTupleContext)._stellatype = this.stellatype(0);
					(localctx as TypeTupleContext)._types.push((localctx as TypeTupleContext)._stellatype);
					this.state = 638;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===1) {
						{
						{
						this.state = 634;
						this.match(stellaParser.Surrogate_id_SYMB_0);
						this.state = 635;
						(localctx as TypeTupleContext)._stellatype = this.stellatype(0);
						(localctx as TypeTupleContext)._types.push((localctx as TypeTupleContext)._stellatype);
						}
						}
						this.state = 640;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 643;
				this.match(stellaParser.Surrogate_id_SYMB_5);
				}
				break;
			case 7:
				{
				localctx = new TypeRecordContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 644;
				this.match(stellaParser.Surrogate_id_SYMB_4);
				this.state = 645;
				(localctx as TypeRecordContext)._recordFieldType = this.recordFieldType();
				(localctx as TypeRecordContext)._fieldTypes.push((localctx as TypeRecordContext)._recordFieldType);
				this.state = 650;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===1) {
					{
					{
					this.state = 646;
					this.match(stellaParser.Surrogate_id_SYMB_0);
					this.state = 647;
					(localctx as TypeRecordContext)._recordFieldType = this.recordFieldType();
					(localctx as TypeRecordContext)._fieldTypes.push((localctx as TypeRecordContext)._recordFieldType);
					}
					}
					this.state = 652;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 653;
				this.match(stellaParser.Surrogate_id_SYMB_5);
				}
				break;
			case 8:
				{
				localctx = new TypeVariantContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 655;
				this.match(stellaParser.Surrogate_id_SYMB_11);
				this.state = 664;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===83) {
					{
					this.state = 656;
					(localctx as TypeVariantContext)._variantFieldType = this.variantFieldType();
					(localctx as TypeVariantContext)._fieldTypes.push((localctx as TypeVariantContext)._variantFieldType);
					this.state = 661;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===1) {
						{
						{
						this.state = 657;
						this.match(stellaParser.Surrogate_id_SYMB_0);
						this.state = 658;
						(localctx as TypeVariantContext)._variantFieldType = this.variantFieldType();
						(localctx as TypeVariantContext)._fieldTypes.push((localctx as TypeVariantContext)._variantFieldType);
						}
						}
						this.state = 663;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 666;
				this.match(stellaParser.Surrogate_id_SYMB_12);
				}
				break;
			case 9:
				{
				localctx = new TypeListContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 667;
				this.match(stellaParser.Surrogate_id_SYMB_13);
				this.state = 676;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 20520) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2055) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 153633) !== 0)) {
					{
					this.state = 668;
					(localctx as TypeListContext)._stellatype = this.stellatype(0);
					(localctx as TypeListContext)._types.push((localctx as TypeListContext)._stellatype);
					this.state = 673;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===1) {
						{
						{
						this.state = 669;
						this.match(stellaParser.Surrogate_id_SYMB_0);
						this.state = 670;
						(localctx as TypeListContext)._stellatype = this.stellatype(0);
						(localctx as TypeListContext)._types.push((localctx as TypeListContext)._stellatype);
						}
						}
						this.state = 675;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 678;
				this.match(stellaParser.Surrogate_id_SYMB_14);
				}
				break;
			case 10:
				{
				localctx = new TypeUnitContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 679;
				this.match(stellaParser.Surrogate_id_SYMB_34);
				}
				break;
			case 11:
				{
				localctx = new TypeTopContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 680;
				this.match(stellaParser.TOP_TYPE);
				}
				break;
			case 12:
				{
				localctx = new TypeRefContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 681;
				this.match(stellaParser.REF_TYPE);
				this.state = 682;
				(localctx as TypeRefContext)._type_ = this.stellatype(4);
				}
				break;
			case 13:
				{
				localctx = new TypeBottomContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 683;
				this.match(stellaParser.BOTTOM_TYPE);
				}
				break;
			case 14:
				{
				localctx = new TypeVarContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 684;
				(localctx as TypeVarContext)._name = this.match(stellaParser.StellaIdent);
				}
				break;
			case 15:
				{
				localctx = new TypeParensContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 685;
				this.match(stellaParser.Surrogate_id_SYMB_2);
				this.state = 686;
				(localctx as TypeParensContext)._type_ = this.stellatype(0);
				this.state = 687;
				this.match(stellaParser.Surrogate_id_SYMB_3);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 696;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 56, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new TypeSumContext(this, new StellatypeContext(this, _parentctx, _parentState));
					(localctx as TypeSumContext)._left = _prevctx;
					this.pushNewRecursionContext(localctx, _startState, stellaParser.RULE_stellatype);
					this.state = 691;
					if (!(this.precpred(this._ctx, 11))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
					}
					this.state = 692;
					this.match(stellaParser.Surrogate_id_SYMB_21);
					this.state = 693;
					(localctx as TypeSumContext)._right = this.stellatype(12);
					}
					}
				}
				this.state = 698;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 56, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public recordFieldType(): RecordFieldTypeContext {
		let localctx: RecordFieldTypeContext = new RecordFieldTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, stellaParser.RULE_recordFieldType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 699;
			localctx._label = this.match(stellaParser.StellaIdent);
			this.state = 700;
			this.match(stellaParser.Surrogate_id_SYMB_7);
			this.state = 701;
			localctx._type_ = this.stellatype(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variantFieldType(): VariantFieldTypeContext {
		let localctx: VariantFieldTypeContext = new VariantFieldTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, stellaParser.RULE_variantFieldType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 703;
			localctx._label = this.match(stellaParser.StellaIdent);
			this.state = 706;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===8) {
				{
				this.state = 704;
				this.match(stellaParser.Surrogate_id_SYMB_7);
				this.state = 705;
				localctx._type_ = this.stellatype(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 9:
			return this.expr_sempred(localctx as ExprContext, predIndex);
		case 15:
			return this.stellatype_sempred(localctx as StellatypeContext, predIndex);
		}
		return true;
	}
	private expr_sempred(localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 29);
		case 1:
			return this.precpred(this._ctx, 28);
		case 2:
			return this.precpred(this._ctx, 27);
		case 3:
			return this.precpred(this._ctx, 24);
		case 4:
			return this.precpred(this._ctx, 23);
		case 5:
			return this.precpred(this._ctx, 22);
		case 6:
			return this.precpred(this._ctx, 13);
		case 7:
			return this.precpred(this._ctx, 12);
		case 8:
			return this.precpred(this._ctx, 11);
		case 9:
			return this.precpred(this._ctx, 10);
		case 10:
			return this.precpred(this._ctx, 9);
		case 11:
			return this.precpred(this._ctx, 8);
		case 12:
			return this.precpred(this._ctx, 7);
		case 13:
			return this.precpred(this._ctx, 57);
		case 14:
			return this.precpred(this._ctx, 56);
		case 15:
			return this.precpred(this._ctx, 31);
		case 16:
			return this.precpred(this._ctx, 30);
		case 17:
			return this.precpred(this._ctx, 21);
		case 18:
			return this.precpred(this._ctx, 20);
		case 19:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private stellatype_sempred(localctx: StellatypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 20:
			return this.precpred(this._ctx, 11);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,88,709,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,1,0,1,0,1,0,1,1,1,1,1,1,1,2,1,2,1,2,1,3,1,3,5,3,48,8,3,10,3,12,3,51,
	9,3,1,3,5,3,54,8,3,10,3,12,3,57,9,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,
	5,5,68,8,5,10,5,12,5,71,9,5,1,5,1,5,1,6,5,6,76,8,6,10,6,12,6,79,9,6,1,6,
	1,6,1,6,1,6,1,6,1,6,5,6,87,8,6,10,6,12,6,90,9,6,3,6,92,8,6,1,6,1,6,1,6,
	3,6,97,8,6,1,6,1,6,1,6,1,6,5,6,103,8,6,10,6,12,6,106,9,6,3,6,108,8,6,1,
	6,1,6,5,6,112,8,6,10,6,12,6,115,9,6,1,6,1,6,1,6,1,6,1,6,5,6,122,8,6,10,
	6,12,6,125,9,6,1,6,1,6,1,6,1,6,1,6,5,6,132,8,6,10,6,12,6,135,9,6,1,6,1,
	6,1,6,1,6,1,6,5,6,142,8,6,10,6,12,6,145,9,6,3,6,147,8,6,1,6,1,6,1,6,3,6,
	152,8,6,1,6,1,6,1,6,1,6,5,6,158,8,6,10,6,12,6,161,9,6,3,6,163,8,6,1,6,1,
	6,5,6,167,8,6,10,6,12,6,170,9,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,
	1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,189,8,6,1,7,1,7,1,8,1,8,1,8,1,8,1,9,1,9,
	1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,
	1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,
	1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,
	1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,
	1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,
	1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,
	1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,5,9,317,8,9,10,9,12,9,320,9,9,3,
	9,322,8,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,5,9,334,8,9,10,9,12,9,
	337,9,9,3,9,339,8,9,1,9,1,9,1,9,1,9,1,9,5,9,346,8,9,10,9,12,9,349,9,9,1,
	9,1,9,1,9,1,9,1,9,1,9,3,9,357,8,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,5,9,366,8,
	9,10,9,12,9,369,9,9,3,9,371,8,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,380,8,9,
	1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,5,9,394,8,9,10,9,12,9,397,
	9,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,5,9,406,8,9,10,9,12,9,409,9,9,1,9,1,9,1,
	9,1,9,1,9,1,9,5,9,417,8,9,10,9,12,9,420,9,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,
	428,8,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,
	1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,
	1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,5,9,480,
	8,9,10,9,12,9,483,9,9,3,9,485,8,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,
	9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,503,8,9,5,9,505,8,9,10,9,12,9,508,9,9,1,10,
	1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,
	13,3,13,526,8,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,
	1,13,1,13,1,13,1,13,5,13,543,8,13,10,13,12,13,546,9,13,3,13,548,8,13,1,
	13,1,13,1,13,1,13,1,13,5,13,555,8,13,10,13,12,13,558,9,13,3,13,560,8,13,
	1,13,1,13,1,13,1,13,1,13,5,13,567,8,13,10,13,12,13,570,9,13,3,13,572,8,
	13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,
	1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,596,8,13,1,14,1,14,1,14,1,
	14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,5,15,610,8,15,10,15,12,15,613,
	9,15,3,15,615,8,15,1,15,1,15,1,15,1,15,1,15,5,15,622,8,15,10,15,12,15,625,
	9,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,5,15,637,8,15,10,
	15,12,15,640,9,15,3,15,642,8,15,1,15,1,15,1,15,1,15,1,15,5,15,649,8,15,
	10,15,12,15,652,9,15,1,15,1,15,1,15,1,15,1,15,1,15,5,15,660,8,15,10,15,
	12,15,663,9,15,3,15,665,8,15,1,15,1,15,1,15,1,15,1,15,5,15,672,8,15,10,
	15,12,15,675,9,15,3,15,677,8,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,
	1,15,1,15,1,15,3,15,690,8,15,1,15,1,15,1,15,5,15,695,8,15,10,15,12,15,698,
	9,15,1,16,1,16,1,16,1,16,1,17,1,17,1,17,3,17,707,8,17,1,17,0,2,18,30,18,
	0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,0,0,829,0,36,1,0,0,0,2,
	39,1,0,0,0,4,42,1,0,0,0,6,45,1,0,0,0,8,58,1,0,0,0,10,62,1,0,0,0,12,188,
	1,0,0,0,14,190,1,0,0,0,16,192,1,0,0,0,18,427,1,0,0,0,20,509,1,0,0,0,22,
	513,1,0,0,0,24,517,1,0,0,0,26,595,1,0,0,0,28,597,1,0,0,0,30,689,1,0,0,0,
	32,699,1,0,0,0,34,703,1,0,0,0,36,37,3,6,3,0,37,38,5,0,0,1,38,1,1,0,0,0,
	39,40,3,18,9,0,40,41,5,0,0,1,41,3,1,0,0,0,42,43,3,30,15,0,43,44,5,0,0,1,
	44,5,1,0,0,0,45,49,3,8,4,0,46,48,3,10,5,0,47,46,1,0,0,0,48,51,1,0,0,0,49,
	47,1,0,0,0,49,50,1,0,0,0,50,55,1,0,0,0,51,49,1,0,0,0,52,54,3,12,6,0,53,
	52,1,0,0,0,54,57,1,0,0,0,55,53,1,0,0,0,55,56,1,0,0,0,56,7,1,0,0,0,57,55,
	1,0,0,0,58,59,5,51,0,0,59,60,5,39,0,0,60,61,5,2,0,0,61,9,1,0,0,0,62,63,
	5,41,0,0,63,64,5,65,0,0,64,69,5,84,0,0,65,66,5,1,0,0,66,68,5,84,0,0,67,
	65,1,0,0,0,68,71,1,0,0,0,69,67,1,0,0,0,69,70,1,0,0,0,70,72,1,0,0,0,71,69,
	1,0,0,0,72,73,5,2,0,0,73,11,1,0,0,0,74,76,3,14,7,0,75,74,1,0,0,0,76,79,
	1,0,0,0,77,75,1,0,0,0,77,78,1,0,0,0,78,80,1,0,0,0,79,77,1,0,0,0,80,81,5,
	44,0,0,81,82,5,83,0,0,82,91,5,3,0,0,83,88,3,16,8,0,84,85,5,1,0,0,85,87,
	3,16,8,0,86,84,1,0,0,0,87,90,1,0,0,0,88,86,1,0,0,0,88,89,1,0,0,0,89,92,
	1,0,0,0,90,88,1,0,0,0,91,83,1,0,0,0,91,92,1,0,0,0,92,93,1,0,0,0,93,96,5,
	4,0,0,94,95,5,9,0,0,95,97,3,30,15,0,96,94,1,0,0,0,96,97,1,0,0,0,97,107,
	1,0,0,0,98,99,5,60,0,0,99,104,3,30,15,0,100,101,5,1,0,0,101,103,3,30,15,
	0,102,100,1,0,0,0,103,106,1,0,0,0,104,102,1,0,0,0,104,105,1,0,0,0,105,108,
	1,0,0,0,106,104,1,0,0,0,107,98,1,0,0,0,107,108,1,0,0,0,108,109,1,0,0,0,
	109,113,5,5,0,0,110,112,3,12,6,0,111,110,1,0,0,0,112,115,1,0,0,0,113,111,
	1,0,0,0,113,114,1,0,0,0,114,116,1,0,0,0,115,113,1,0,0,0,116,117,5,57,0,
	0,117,118,3,18,9,0,118,119,5,6,0,0,119,189,1,0,0,0,120,122,3,14,7,0,121,
	120,1,0,0,0,122,125,1,0,0,0,123,121,1,0,0,0,123,124,1,0,0,0,124,126,1,0,
	0,0,125,123,1,0,0,0,126,127,5,79,0,0,127,128,5,44,0,0,128,129,5,83,0,0,
	129,133,5,14,0,0,130,132,5,83,0,0,131,130,1,0,0,0,132,135,1,0,0,0,133,131,
	1,0,0,0,133,134,1,0,0,0,134,136,1,0,0,0,135,133,1,0,0,0,136,137,5,15,0,
	0,137,146,5,3,0,0,138,143,3,16,8,0,139,140,5,1,0,0,140,142,3,16,8,0,141,
	139,1,0,0,0,142,145,1,0,0,0,143,141,1,0,0,0,143,144,1,0,0,0,144,147,1,0,
	0,0,145,143,1,0,0,0,146,138,1,0,0,0,146,147,1,0,0,0,147,148,1,0,0,0,148,
	151,5,4,0,0,149,150,5,9,0,0,150,152,3,30,15,0,151,149,1,0,0,0,151,152,1,
	0,0,0,152,162,1,0,0,0,153,154,5,60,0,0,154,159,3,30,15,0,155,156,5,1,0,
	0,156,158,3,30,15,0,157,155,1,0,0,0,158,161,1,0,0,0,159,157,1,0,0,0,159,
	160,1,0,0,0,160,163,1,0,0,0,161,159,1,0,0,0,162,153,1,0,0,0,162,163,1,0,
	0,0,163,164,1,0,0,0,164,168,5,5,0,0,165,167,3,12,6,0,166,165,1,0,0,0,167,
	170,1,0,0,0,168,166,1,0,0,0,168,169,1,0,0,0,169,171,1,0,0,0,170,168,1,0,
	0,0,171,172,5,57,0,0,172,173,3,18,9,0,173,174,5,6,0,0,174,189,1,0,0,0,175,
	176,5,62,0,0,176,177,5,83,0,0,177,178,5,7,0,0,178,189,3,30,15,0,179,180,
	5,67,0,0,180,181,5,62,0,0,181,182,5,7,0,0,182,189,3,30,15,0,183,184,5,67,
	0,0,184,185,5,68,0,0,185,186,5,83,0,0,186,187,5,8,0,0,187,189,3,30,15,0,
	188,77,1,0,0,0,188,123,1,0,0,0,188,175,1,0,0,0,188,179,1,0,0,0,188,183,
	1,0,0,0,189,13,1,0,0,0,190,191,5,49,0,0,191,15,1,0,0,0,192,193,5,83,0,0,
	193,194,5,8,0,0,194,195,3,30,15,0,195,17,1,0,0,0,196,197,6,9,-1,0,197,428,
	5,61,0,0,198,428,5,42,0,0,199,428,5,64,0,0,200,428,5,86,0,0,201,428,5,85,
	0,0,202,428,5,83,0,0,203,428,5,73,0,0,204,205,5,74,0,0,205,206,5,3,0,0,
	206,207,3,18,9,0,207,208,5,4,0,0,208,428,1,0,0,0,209,210,5,75,0,0,210,211,
	5,5,0,0,211,212,3,18,9,0,212,213,5,6,0,0,213,214,5,76,0,0,214,215,5,5,0,
	0,215,216,3,26,13,0,216,217,5,10,0,0,217,218,3,18,9,0,218,219,5,6,0,0,219,
	428,1,0,0,0,220,221,5,75,0,0,221,222,5,5,0,0,222,223,3,18,9,0,223,224,5,
	6,0,0,224,225,5,65,0,0,225,226,5,5,0,0,226,227,3,18,9,0,227,228,5,6,0,0,
	228,428,1,0,0,0,229,230,5,48,0,0,230,231,5,3,0,0,231,232,3,18,9,0,232,233,
	5,4,0,0,233,428,1,0,0,0,234,235,5,50,0,0,235,236,5,3,0,0,236,237,3,18,9,
	0,237,238,5,4,0,0,238,428,1,0,0,0,239,240,5,38,0,0,240,241,5,3,0,0,241,
	242,3,18,9,0,242,243,5,1,0,0,243,244,3,18,9,0,244,245,5,4,0,0,245,428,1,
	0,0,0,246,247,5,27,0,0,247,248,5,3,0,0,248,249,3,18,9,0,249,250,5,4,0,0,
	250,428,1,0,0,0,251,252,5,28,0,0,252,253,5,3,0,0,253,254,3,18,9,0,254,255,
	5,4,0,0,255,428,1,0,0,0,256,257,5,29,0,0,257,258,5,3,0,0,258,259,3,18,9,
	0,259,260,5,4,0,0,260,428,1,0,0,0,261,262,5,58,0,0,262,263,5,3,0,0,263,
	264,3,18,9,0,264,265,5,4,0,0,265,428,1,0,0,0,266,267,5,55,0,0,267,268,5,
	3,0,0,268,269,3,18,9,0,269,270,5,4,0,0,270,428,1,0,0,0,271,272,5,30,0,0,
	272,273,5,3,0,0,273,274,3,18,9,0,274,275,5,4,0,0,275,428,1,0,0,0,276,277,
	5,31,0,0,277,278,5,3,0,0,278,279,3,18,9,0,279,280,5,4,0,0,280,428,1,0,0,
	0,281,282,5,43,0,0,282,283,5,3,0,0,283,284,3,18,9,0,284,285,5,4,0,0,285,
	428,1,0,0,0,286,287,5,32,0,0,287,288,5,3,0,0,288,289,3,18,9,0,289,290,5,
	1,0,0,290,291,3,18,9,0,291,292,5,1,0,0,292,293,3,18,9,0,293,294,5,4,0,0,
	294,428,1,0,0,0,295,296,5,45,0,0,296,297,5,14,0,0,297,298,3,30,15,0,298,
	299,5,15,0,0,299,300,3,18,9,33,300,428,1,0,0,0,301,302,5,63,0,0,302,303,
	5,14,0,0,303,304,3,30,15,0,304,305,5,15,0,0,305,306,3,18,9,32,306,428,1,
	0,0,0,307,308,5,72,0,0,308,428,3,18,9,26,309,310,5,24,0,0,310,428,3,18,
	9,25,311,312,5,44,0,0,312,321,5,3,0,0,313,318,3,16,8,0,314,315,5,1,0,0,
	315,317,3,16,8,0,316,314,1,0,0,0,317,320,1,0,0,0,318,316,1,0,0,0,318,319,
	1,0,0,0,319,322,1,0,0,0,320,318,1,0,0,0,321,313,1,0,0,0,321,322,1,0,0,0,
	322,323,1,0,0,0,323,324,5,4,0,0,324,325,5,5,0,0,325,326,5,57,0,0,326,327,
	3,18,9,0,327,328,5,6,0,0,328,428,1,0,0,0,329,338,5,5,0,0,330,335,3,18,9,
	0,331,332,5,1,0,0,332,334,3,18,9,0,333,331,1,0,0,0,334,337,1,0,0,0,335,
	333,1,0,0,0,335,336,1,0,0,0,336,339,1,0,0,0,337,335,1,0,0,0,338,330,1,0,
	0,0,338,339,1,0,0,0,339,340,1,0,0,0,340,428,5,6,0,0,341,342,5,5,0,0,342,
	347,3,22,11,0,343,344,5,1,0,0,344,346,3,22,11,0,345,343,1,0,0,0,346,349,
	1,0,0,0,347,345,1,0,0,0,347,348,1,0,0,0,348,350,1,0,0,0,349,347,1,0,0,0,
	350,351,5,6,0,0,351,428,1,0,0,0,352,353,5,12,0,0,353,356,5,83,0,0,354,355,
	5,7,0,0,355,357,3,18,9,0,356,354,1,0,0,0,356,357,1,0,0,0,357,358,1,0,0,
	0,358,428,5,13,0,0,359,360,5,54,0,0,360,361,3,18,9,0,361,370,5,5,0,0,362,
	367,3,24,12,0,363,364,5,11,0,0,364,366,3,24,12,0,365,363,1,0,0,0,366,369,
	1,0,0,0,367,365,1,0,0,0,367,368,1,0,0,0,368,371,1,0,0,0,369,367,1,0,0,0,
	370,362,1,0,0,0,370,371,1,0,0,0,371,372,1,0,0,0,372,373,5,6,0,0,373,428,
	1,0,0,0,374,379,5,14,0,0,375,376,3,18,9,0,376,377,5,1,0,0,377,378,3,18,
	9,0,378,380,1,0,0,0,379,375,1,0,0,0,379,380,1,0,0,0,380,381,1,0,0,0,381,
	428,5,15,0,0,382,383,5,46,0,0,383,384,3,18,9,0,384,385,5,59,0,0,385,386,
	3,18,9,0,386,387,5,40,0,0,387,388,3,18,9,6,388,428,1,0,0,0,389,390,5,52,
	0,0,390,395,3,20,10,0,391,392,5,1,0,0,392,394,3,20,10,0,393,391,1,0,0,0,
	394,397,1,0,0,0,395,393,1,0,0,0,395,396,1,0,0,0,396,398,1,0,0,0,397,395,
	1,0,0,0,398,399,5,47,0,0,399,400,3,18,9,5,400,428,1,0,0,0,401,402,5,53,
	0,0,402,407,3,20,10,0,403,404,5,1,0,0,404,406,3,20,10,0,405,403,1,0,0,0,
	406,409,1,0,0,0,407,405,1,0,0,0,407,408,1,0,0,0,408,410,1,0,0,0,409,407,
	1,0,0,0,410,411,5,47,0,0,411,412,3,18,9,4,412,428,1,0,0,0,413,414,5,79,
	0,0,414,418,5,14,0,0,415,417,5,83,0,0,416,415,1,0,0,0,417,420,1,0,0,0,418,
	416,1,0,0,0,418,419,1,0,0,0,419,421,1,0,0,0,420,418,1,0,0,0,421,422,5,15,
	0,0,422,428,3,18,9,3,423,424,5,3,0,0,424,425,3,18,9,0,425,426,5,4,0,0,426,
	428,1,0,0,0,427,196,1,0,0,0,427,198,1,0,0,0,427,199,1,0,0,0,427,200,1,0,
	0,0,427,201,1,0,0,0,427,202,1,0,0,0,427,203,1,0,0,0,427,204,1,0,0,0,427,
	209,1,0,0,0,427,220,1,0,0,0,427,229,1,0,0,0,427,234,1,0,0,0,427,239,1,0,
	0,0,427,246,1,0,0,0,427,251,1,0,0,0,427,256,1,0,0,0,427,261,1,0,0,0,427,
	266,1,0,0,0,427,271,1,0,0,0,427,276,1,0,0,0,427,281,1,0,0,0,427,286,1,0,
	0,0,427,295,1,0,0,0,427,301,1,0,0,0,427,307,1,0,0,0,427,309,1,0,0,0,427,
	311,1,0,0,0,427,329,1,0,0,0,427,341,1,0,0,0,427,352,1,0,0,0,427,359,1,0,
	0,0,427,374,1,0,0,0,427,382,1,0,0,0,427,389,1,0,0,0,427,401,1,0,0,0,427,
	413,1,0,0,0,427,423,1,0,0,0,428,506,1,0,0,0,429,430,10,29,0,0,430,431,5,
	24,0,0,431,505,3,18,9,30,432,433,10,28,0,0,433,434,5,25,0,0,434,505,3,18,
	9,29,435,436,10,27,0,0,436,437,5,36,0,0,437,505,3,18,9,28,438,439,10,24,
	0,0,439,440,5,22,0,0,440,505,3,18,9,25,441,442,10,23,0,0,442,443,5,23,0,
	0,443,505,3,18,9,24,444,445,10,22,0,0,445,446,5,56,0,0,446,505,3,18,9,23,
	447,448,10,13,0,0,448,449,5,16,0,0,449,505,3,18,9,14,450,451,10,12,0,0,
	451,452,5,17,0,0,452,505,3,18,9,13,453,454,10,11,0,0,454,455,5,18,0,0,455,
	505,3,18,9,12,456,457,10,10,0,0,457,458,5,19,0,0,458,505,3,18,9,11,459,
	460,10,9,0,0,460,461,5,20,0,0,461,505,3,18,9,10,462,463,10,8,0,0,463,464,
	5,21,0,0,464,505,3,18,9,9,465,466,10,7,0,0,466,467,5,70,0,0,467,505,3,18,
	9,8,468,469,10,57,0,0,469,470,5,26,0,0,470,505,5,83,0,0,471,472,10,56,0,
	0,472,473,5,26,0,0,473,505,5,86,0,0,474,475,10,31,0,0,475,484,5,3,0,0,476,
	481,3,18,9,0,477,478,5,1,0,0,478,480,3,18,9,0,479,477,1,0,0,0,480,483,1,
	0,0,0,481,479,1,0,0,0,481,482,1,0,0,0,482,485,1,0,0,0,483,481,1,0,0,0,484,
	476,1,0,0,0,484,485,1,0,0,0,485,486,1,0,0,0,486,505,5,4,0,0,487,488,10,
	30,0,0,488,489,5,14,0,0,489,490,3,30,15,0,490,491,5,15,0,0,491,505,1,0,
	0,0,492,493,10,21,0,0,493,494,5,37,0,0,494,505,3,30,15,0,495,496,10,20,
	0,0,496,497,5,69,0,0,497,498,5,37,0,0,498,505,3,30,15,0,499,500,10,1,0,
	0,500,502,5,2,0,0,501,503,3,18,9,0,502,501,1,0,0,0,502,503,1,0,0,0,503,
	505,1,0,0,0,504,429,1,0,0,0,504,432,1,0,0,0,504,435,1,0,0,0,504,438,1,0,
	0,0,504,441,1,0,0,0,504,444,1,0,0,0,504,447,1,0,0,0,504,450,1,0,0,0,504,
	453,1,0,0,0,504,456,1,0,0,0,504,459,1,0,0,0,504,462,1,0,0,0,504,465,1,0,
	0,0,504,468,1,0,0,0,504,471,1,0,0,0,504,474,1,0,0,0,504,487,1,0,0,0,504,
	492,1,0,0,0,504,495,1,0,0,0,504,499,1,0,0,0,505,508,1,0,0,0,506,504,1,0,
	0,0,506,507,1,0,0,0,507,19,1,0,0,0,508,506,1,0,0,0,509,510,3,26,13,0,510,
	511,5,7,0,0,511,512,3,18,9,0,512,21,1,0,0,0,513,514,5,83,0,0,514,515,5,
	7,0,0,515,516,3,18,9,0,516,23,1,0,0,0,517,518,3,26,13,0,518,519,5,10,0,
	0,519,520,3,18,9,0,520,25,1,0,0,0,521,522,5,12,0,0,522,525,5,83,0,0,523,
	524,5,7,0,0,524,526,3,26,13,0,525,523,1,0,0,0,525,526,1,0,0,0,526,527,1,
	0,0,0,527,596,5,13,0,0,528,529,5,48,0,0,529,530,5,3,0,0,530,531,3,26,13,
	0,531,532,5,4,0,0,532,596,1,0,0,0,533,534,5,50,0,0,534,535,5,3,0,0,535,
	536,3,26,13,0,536,537,5,4,0,0,537,596,1,0,0,0,538,547,5,5,0,0,539,544,3,
	26,13,0,540,541,5,1,0,0,541,543,3,26,13,0,542,540,1,0,0,0,543,546,1,0,0,
	0,544,542,1,0,0,0,544,545,1,0,0,0,545,548,1,0,0,0,546,544,1,0,0,0,547,539,
	1,0,0,0,547,548,1,0,0,0,548,549,1,0,0,0,549,596,5,6,0,0,550,559,5,5,0,0,
	551,556,3,28,14,0,552,553,5,1,0,0,553,555,3,28,14,0,554,552,1,0,0,0,555,
	558,1,0,0,0,556,554,1,0,0,0,556,557,1,0,0,0,557,560,1,0,0,0,558,556,1,0,
	0,0,559,551,1,0,0,0,559,560,1,0,0,0,560,561,1,0,0,0,561,596,5,6,0,0,562,
	571,5,14,0,0,563,568,3,26,13,0,564,565,5,1,0,0,565,567,3,26,13,0,566,564,
	1,0,0,0,567,570,1,0,0,0,568,566,1,0,0,0,568,569,1,0,0,0,569,572,1,0,0,0,
	570,568,1,0,0,0,571,563,1,0,0,0,571,572,1,0,0,0,572,573,1,0,0,0,573,596,
	5,15,0,0,574,575,5,38,0,0,575,576,5,3,0,0,576,577,3,26,13,0,577,578,5,1,
	0,0,578,579,3,26,13,0,579,580,5,4,0,0,580,596,1,0,0,0,581,596,5,42,0,0,
	582,596,5,61,0,0,583,596,5,64,0,0,584,596,5,86,0,0,585,586,5,58,0,0,586,
	587,5,3,0,0,587,588,3,26,13,0,588,589,5,4,0,0,589,596,1,0,0,0,590,596,5,
	83,0,0,591,592,5,3,0,0,592,593,3,26,13,0,593,594,5,4,0,0,594,596,1,0,0,
	0,595,521,1,0,0,0,595,528,1,0,0,0,595,533,1,0,0,0,595,538,1,0,0,0,595,550,
	1,0,0,0,595,562,1,0,0,0,595,574,1,0,0,0,595,581,1,0,0,0,595,582,1,0,0,0,
	595,583,1,0,0,0,595,584,1,0,0,0,595,585,1,0,0,0,595,590,1,0,0,0,595,591,
	1,0,0,0,596,27,1,0,0,0,597,598,5,83,0,0,598,599,5,7,0,0,599,600,3,26,13,
	0,600,29,1,0,0,0,601,602,6,15,-1,0,602,690,5,33,0,0,603,690,5,34,0,0,604,
	605,5,44,0,0,605,614,5,3,0,0,606,611,3,30,15,0,607,608,5,1,0,0,608,610,
	3,30,15,0,609,607,1,0,0,0,610,613,1,0,0,0,611,609,1,0,0,0,611,612,1,0,0,
	0,612,615,1,0,0,0,613,611,1,0,0,0,614,606,1,0,0,0,614,615,1,0,0,0,615,616,
	1,0,0,0,616,617,5,4,0,0,617,618,5,9,0,0,618,690,3,30,15,14,619,623,5,80,
	0,0,620,622,5,83,0,0,621,620,1,0,0,0,622,625,1,0,0,0,623,621,1,0,0,0,623,
	624,1,0,0,0,624,626,1,0,0,0,625,623,1,0,0,0,626,627,5,26,0,0,627,690,3,
	30,15,13,628,629,5,66,0,0,629,630,5,83,0,0,630,631,5,26,0,0,631,690,3,30,
	15,12,632,641,5,5,0,0,633,638,3,30,15,0,634,635,5,1,0,0,635,637,3,30,15,
	0,636,634,1,0,0,0,637,640,1,0,0,0,638,636,1,0,0,0,638,639,1,0,0,0,639,642,
	1,0,0,0,640,638,1,0,0,0,641,633,1,0,0,0,641,642,1,0,0,0,642,643,1,0,0,0,
	643,690,5,6,0,0,644,645,5,5,0,0,645,650,3,32,16,0,646,647,5,1,0,0,647,649,
	3,32,16,0,648,646,1,0,0,0,649,652,1,0,0,0,650,648,1,0,0,0,650,651,1,0,0,
	0,651,653,1,0,0,0,652,650,1,0,0,0,653,654,5,6,0,0,654,690,1,0,0,0,655,664,
	5,12,0,0,656,661,3,34,17,0,657,658,5,1,0,0,658,660,3,34,17,0,659,657,1,
	0,0,0,660,663,1,0,0,0,661,659,1,0,0,0,661,662,1,0,0,0,662,665,1,0,0,0,663,
	661,1,0,0,0,664,656,1,0,0,0,664,665,1,0,0,0,665,666,1,0,0,0,666,690,5,13,
	0,0,667,676,5,14,0,0,668,673,3,30,15,0,669,670,5,1,0,0,670,672,3,30,15,
	0,671,669,1,0,0,0,672,675,1,0,0,0,673,671,1,0,0,0,673,674,1,0,0,0,674,677,
	1,0,0,0,675,673,1,0,0,0,676,668,1,0,0,0,676,677,1,0,0,0,677,678,1,0,0,0,
	678,690,5,15,0,0,679,690,5,35,0,0,680,690,5,77,0,0,681,682,5,71,0,0,682,
	690,3,30,15,4,683,690,5,78,0,0,684,690,5,83,0,0,685,686,5,3,0,0,686,687,
	3,30,15,0,687,688,5,4,0,0,688,690,1,0,0,0,689,601,1,0,0,0,689,603,1,0,0,
	0,689,604,1,0,0,0,689,619,1,0,0,0,689,628,1,0,0,0,689,632,1,0,0,0,689,644,
	1,0,0,0,689,655,1,0,0,0,689,667,1,0,0,0,689,679,1,0,0,0,689,680,1,0,0,0,
	689,681,1,0,0,0,689,683,1,0,0,0,689,684,1,0,0,0,689,685,1,0,0,0,690,696,
	1,0,0,0,691,692,10,11,0,0,692,693,5,22,0,0,693,695,3,30,15,12,694,691,1,
	0,0,0,695,698,1,0,0,0,696,694,1,0,0,0,696,697,1,0,0,0,697,31,1,0,0,0,698,
	696,1,0,0,0,699,700,5,83,0,0,700,701,5,8,0,0,701,702,3,30,15,0,702,33,1,
	0,0,0,703,706,5,83,0,0,704,705,5,8,0,0,705,707,3,30,15,0,706,704,1,0,0,
	0,706,707,1,0,0,0,707,35,1,0,0,0,58,49,55,69,77,88,91,96,104,107,113,123,
	133,143,146,151,159,162,168,188,318,321,335,338,347,356,367,370,379,395,
	407,418,427,481,484,502,504,506,525,544,547,556,559,568,571,595,611,614,
	623,638,641,650,661,664,673,676,689,696,706];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!stellaParser.__ATN) {
			stellaParser.__ATN = new ATNDeserializer().deserialize(stellaParser._serializedATN);
		}

		return stellaParser.__ATN;
	}


	static DecisionsToDFA = stellaParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class Start_ProgramContext extends ParserRuleContext {
	public _x!: ProgramContext;
	constructor(parser?: stellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(stellaParser.EOF, 0);
	}
	public program(): ProgramContext {
		return this.getTypedRuleContext(ProgramContext, 0) as ProgramContext;
	}
    public get ruleIndex(): number {
    	return stellaParser.RULE_start_Program;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterStart_Program) {
	 		listener.enterStart_Program(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitStart_Program) {
	 		listener.exitStart_Program(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitStart_Program) {
			return visitor.visitStart_Program(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Start_ExprContext extends ParserRuleContext {
	public _x!: ExprContext;
	constructor(parser?: stellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(stellaParser.EOF, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return stellaParser.RULE_start_Expr;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterStart_Expr) {
	 		listener.enterStart_Expr(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitStart_Expr) {
	 		listener.exitStart_Expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitStart_Expr) {
			return visitor.visitStart_Expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Start_TypeContext extends ParserRuleContext {
	public _x!: StellatypeContext;
	constructor(parser?: stellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(stellaParser.EOF, 0);
	}
	public stellatype(): StellatypeContext {
		return this.getTypedRuleContext(StellatypeContext, 0) as StellatypeContext;
	}
    public get ruleIndex(): number {
    	return stellaParser.RULE_start_Type;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterStart_Type) {
	 		listener.enterStart_Type(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitStart_Type) {
	 		listener.exitStart_Type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitStart_Type) {
			return visitor.visitStart_Type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProgramContext extends ParserRuleContext {
	public _extension!: ExtensionContext;
	public _extensions: ExtensionContext[] = [];
	public _decl!: DeclContext;
	public _decls: DeclContext[] = [];
	constructor(parser?: stellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public languageDecl(): LanguageDeclContext {
		return this.getTypedRuleContext(LanguageDeclContext, 0) as LanguageDeclContext;
	}
	public extension_list(): ExtensionContext[] {
		return this.getTypedRuleContexts(ExtensionContext) as ExtensionContext[];
	}
	public extension(i: number): ExtensionContext {
		return this.getTypedRuleContext(ExtensionContext, i) as ExtensionContext;
	}
	public decl_list(): DeclContext[] {
		return this.getTypedRuleContexts(DeclContext) as DeclContext[];
	}
	public decl(i: number): DeclContext {
		return this.getTypedRuleContext(DeclContext, i) as DeclContext;
	}
    public get ruleIndex(): number {
    	return stellaParser.RULE_program;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterProgram) {
	 		listener.enterProgram(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitProgram) {
	 		listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LanguageDeclContext extends ParserRuleContext {
	constructor(parser?: stellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return stellaParser.RULE_languageDecl;
	}
	public override copyFrom(ctx: LanguageDeclContext): void {
		super.copyFrom(ctx);
	}
}
export class LanguageCoreContext extends LanguageDeclContext {
	constructor(parser: stellaParser, ctx: LanguageDeclContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_50(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_50, 0);
	}
	public Surrogate_id_SYMB_38(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_38, 0);
	}
	public Surrogate_id_SYMB_1(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_1, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterLanguageCore) {
	 		listener.enterLanguageCore(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitLanguageCore) {
	 		listener.exitLanguageCore(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitLanguageCore) {
			return visitor.visitLanguageCore(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExtensionContext extends ParserRuleContext {
	constructor(parser?: stellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return stellaParser.RULE_extension;
	}
	public override copyFrom(ctx: ExtensionContext): void {
		super.copyFrom(ctx);
	}
}
export class AnExtensionContext extends ExtensionContext {
	public _ExtensionName!: Token;
	public _extensionNames: Token[] = [];
	constructor(parser: stellaParser, ctx: ExtensionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_40(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_40, 0);
	}
	public Surrogate_id_SYMB_64(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_64, 0);
	}
	public Surrogate_id_SYMB_1(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_1, 0);
	}
	public ExtensionName_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.ExtensionName);
	}
	public ExtensionName(i: number): TerminalNode {
		return this.getToken(stellaParser.ExtensionName, i);
	}
	public Surrogate_id_SYMB_0_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.Surrogate_id_SYMB_0);
	}
	public Surrogate_id_SYMB_0(i: number): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_0, i);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterAnExtension) {
	 		listener.enterAnExtension(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitAnExtension) {
	 		listener.exitAnExtension(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitAnExtension) {
			return visitor.visitAnExtension(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclContext extends ParserRuleContext {
	constructor(parser?: stellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return stellaParser.RULE_decl;
	}
	public override copyFrom(ctx: DeclContext): void {
		super.copyFrom(ctx);
	}
}
export class DeclTypeAliasContext extends DeclContext {
	public _name!: Token;
	public _atype!: StellatypeContext;
	constructor(parser: stellaParser, ctx: DeclContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_61(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_61, 0);
	}
	public Surrogate_id_SYMB_6(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_6, 0);
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(stellaParser.StellaIdent, 0);
	}
	public stellatype(): StellatypeContext {
		return this.getTypedRuleContext(StellatypeContext, 0) as StellatypeContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterDeclTypeAlias) {
	 		listener.enterDeclTypeAlias(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitDeclTypeAlias) {
	 		listener.exitDeclTypeAlias(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitDeclTypeAlias) {
			return visitor.visitDeclTypeAlias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DeclExceptionTypeContext extends DeclContext {
	public _exceptionType!: StellatypeContext;
	constructor(parser: stellaParser, ctx: DeclContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public EXCEPTION(): TerminalNode {
		return this.getToken(stellaParser.EXCEPTION, 0);
	}
	public Surrogate_id_SYMB_61(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_61, 0);
	}
	public Surrogate_id_SYMB_6(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_6, 0);
	}
	public stellatype(): StellatypeContext {
		return this.getTypedRuleContext(StellatypeContext, 0) as StellatypeContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterDeclExceptionType) {
	 		listener.enterDeclExceptionType(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitDeclExceptionType) {
	 		listener.exitDeclExceptionType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitDeclExceptionType) {
			return visitor.visitDeclExceptionType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DeclFunContext extends DeclContext {
	public _annotation!: AnnotationContext;
	public _annotations: AnnotationContext[] = [];
	public _name!: Token;
	public _paramDecl!: ParamDeclContext;
	public _paramDecls: ParamDeclContext[] = [];
	public _returnType!: StellatypeContext;
	public _stellatype!: StellatypeContext;
	public _throwTypes: StellatypeContext[] = [];
	public _decl!: DeclContext;
	public _localDecls: DeclContext[] = [];
	public _returnExpr!: ExprContext;
	constructor(parser: stellaParser, ctx: DeclContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_43(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_43, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
	}
	public Surrogate_id_SYMB_4(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_4, 0);
	}
	public Surrogate_id_SYMB_56(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_56, 0);
	}
	public Surrogate_id_SYMB_5(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_5, 0);
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(stellaParser.StellaIdent, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public Surrogate_id_SYMB_8(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_8, 0);
	}
	public Surrogate_id_SYMB_59(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_59, 0);
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
	public paramDecl_list(): ParamDeclContext[] {
		return this.getTypedRuleContexts(ParamDeclContext) as ParamDeclContext[];
	}
	public paramDecl(i: number): ParamDeclContext {
		return this.getTypedRuleContext(ParamDeclContext, i) as ParamDeclContext;
	}
	public stellatype_list(): StellatypeContext[] {
		return this.getTypedRuleContexts(StellatypeContext) as StellatypeContext[];
	}
	public stellatype(i: number): StellatypeContext {
		return this.getTypedRuleContext(StellatypeContext, i) as StellatypeContext;
	}
	public decl_list(): DeclContext[] {
		return this.getTypedRuleContexts(DeclContext) as DeclContext[];
	}
	public decl(i: number): DeclContext {
		return this.getTypedRuleContext(DeclContext, i) as DeclContext;
	}
	public Surrogate_id_SYMB_0_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.Surrogate_id_SYMB_0);
	}
	public Surrogate_id_SYMB_0(i: number): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_0, i);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterDeclFun) {
	 		listener.enterDeclFun(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitDeclFun) {
	 		listener.exitDeclFun(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitDeclFun) {
			return visitor.visitDeclFun(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DeclExceptionVariantContext extends DeclContext {
	public _name!: Token;
	public _variantType!: StellatypeContext;
	constructor(parser: stellaParser, ctx: DeclContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public EXCEPTION(): TerminalNode {
		return this.getToken(stellaParser.EXCEPTION, 0);
	}
	public VARIANT(): TerminalNode {
		return this.getToken(stellaParser.VARIANT, 0);
	}
	public Surrogate_id_SYMB_7(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_7, 0);
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(stellaParser.StellaIdent, 0);
	}
	public stellatype(): StellatypeContext {
		return this.getTypedRuleContext(StellatypeContext, 0) as StellatypeContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterDeclExceptionVariant) {
	 		listener.enterDeclExceptionVariant(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitDeclExceptionVariant) {
	 		listener.exitDeclExceptionVariant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitDeclExceptionVariant) {
			return visitor.visitDeclExceptionVariant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DeclFunGenericContext extends DeclContext {
	public _annotation!: AnnotationContext;
	public _annotations: AnnotationContext[] = [];
	public _name!: Token;
	public _StellaIdent!: Token;
	public _generics: Token[] = [];
	public _paramDecl!: ParamDeclContext;
	public _paramDecls: ParamDeclContext[] = [];
	public _returnType!: StellatypeContext;
	public _stellatype!: StellatypeContext;
	public _throwTypes: StellatypeContext[] = [];
	public _decl!: DeclContext;
	public _localDecls: DeclContext[] = [];
	public _returnExpr!: ExprContext;
	constructor(parser: stellaParser, ctx: DeclContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public GENERIC(): TerminalNode {
		return this.getToken(stellaParser.GENERIC, 0);
	}
	public Surrogate_id_SYMB_43(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_43, 0);
	}
	public Surrogate_id_SYMB_13(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_13, 0);
	}
	public Surrogate_id_SYMB_14(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_14, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
	}
	public Surrogate_id_SYMB_4(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_4, 0);
	}
	public Surrogate_id_SYMB_56(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_56, 0);
	}
	public Surrogate_id_SYMB_5(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_5, 0);
	}
	public StellaIdent_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.StellaIdent);
	}
	public StellaIdent(i: number): TerminalNode {
		return this.getToken(stellaParser.StellaIdent, i);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public Surrogate_id_SYMB_8(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_8, 0);
	}
	public Surrogate_id_SYMB_59(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_59, 0);
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
	public paramDecl_list(): ParamDeclContext[] {
		return this.getTypedRuleContexts(ParamDeclContext) as ParamDeclContext[];
	}
	public paramDecl(i: number): ParamDeclContext {
		return this.getTypedRuleContext(ParamDeclContext, i) as ParamDeclContext;
	}
	public stellatype_list(): StellatypeContext[] {
		return this.getTypedRuleContexts(StellatypeContext) as StellatypeContext[];
	}
	public stellatype(i: number): StellatypeContext {
		return this.getTypedRuleContext(StellatypeContext, i) as StellatypeContext;
	}
	public decl_list(): DeclContext[] {
		return this.getTypedRuleContexts(DeclContext) as DeclContext[];
	}
	public decl(i: number): DeclContext {
		return this.getTypedRuleContext(DeclContext, i) as DeclContext;
	}
	public Surrogate_id_SYMB_0_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.Surrogate_id_SYMB_0);
	}
	public Surrogate_id_SYMB_0(i: number): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_0, i);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterDeclFunGeneric) {
	 		listener.enterDeclFunGeneric(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitDeclFunGeneric) {
	 		listener.exitDeclFunGeneric(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitDeclFunGeneric) {
			return visitor.visitDeclFunGeneric(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationContext extends ParserRuleContext {
	constructor(parser?: stellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return stellaParser.RULE_annotation;
	}
	public override copyFrom(ctx: AnnotationContext): void {
		super.copyFrom(ctx);
	}
}
export class InlineAnnotationContext extends AnnotationContext {
	constructor(parser: stellaParser, ctx: AnnotationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_48(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_48, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterInlineAnnotation) {
	 		listener.enterInlineAnnotation(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitInlineAnnotation) {
	 		listener.exitInlineAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitInlineAnnotation) {
			return visitor.visitInlineAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamDeclContext extends ParserRuleContext {
	public _name!: Token;
	public _paramType!: StellatypeContext;
	constructor(parser?: stellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Surrogate_id_SYMB_7(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_7, 0);
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(stellaParser.StellaIdent, 0);
	}
	public stellatype(): StellatypeContext {
		return this.getTypedRuleContext(StellatypeContext, 0) as StellatypeContext;
	}
    public get ruleIndex(): number {
    	return stellaParser.RULE_paramDecl;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterParamDecl) {
	 		listener.enterParamDecl(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitParamDecl) {
	 		listener.exitParamDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitParamDecl) {
			return visitor.visitParamDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parser?: stellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return stellaParser.RULE_expr;
	}
	public override copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class FoldContext extends ExprContext {
	public _type_!: StellatypeContext;
	public _expr_!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_44(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_44, 0);
	}
	public Surrogate_id_SYMB_13(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_13, 0);
	}
	public Surrogate_id_SYMB_14(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_14, 0);
	}
	public stellatype(): StellatypeContext {
		return this.getTypedRuleContext(StellatypeContext, 0) as StellatypeContext;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterFold) {
	 		listener.enterFold(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitFold) {
	 		listener.exitFold(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitFold) {
			return visitor.visitFold(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddContext extends ExprContext {
	public _left!: ExprContext;
	public _right!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_21(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_21, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterAdd) {
	 		listener.enterAdd(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitAdd) {
	 		listener.exitAdd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitAdd) {
			return visitor.visitAdd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IsZeroContext extends ExprContext {
	public _n!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_30(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_30, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterIsZero) {
	 		listener.enterIsZero(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitIsZero) {
	 		listener.exitIsZero(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitIsZero) {
			return visitor.visitIsZero(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VarContext extends ExprContext {
	public _name!: Token;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(stellaParser.StellaIdent, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterVar) {
	 		listener.enterVar(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitVar) {
	 		listener.exitVar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitVar) {
			return visitor.visitVar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeAbstractionContext extends ExprContext {
	public _StellaIdent!: Token;
	public _generics: Token[] = [];
	public _expr_!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public GENERIC(): TerminalNode {
		return this.getToken(stellaParser.GENERIC, 0);
	}
	public Surrogate_id_SYMB_13(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_13, 0);
	}
	public Surrogate_id_SYMB_14(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_14, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public StellaIdent_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.StellaIdent);
	}
	public StellaIdent(i: number): TerminalNode {
		return this.getToken(stellaParser.StellaIdent, i);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterTypeAbstraction) {
	 		listener.enterTypeAbstraction(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitTypeAbstraction) {
	 		listener.exitTypeAbstraction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitTypeAbstraction) {
			return visitor.visitTypeAbstraction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DivideContext extends ExprContext {
	public _left!: ExprContext;
	public _right!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_24(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_24, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterDivide) {
	 		listener.enterDivide(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitDivide) {
	 		listener.exitDivide(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitDivide) {
			return visitor.visitDivide(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LessThanContext extends ExprContext {
	public _left!: ExprContext;
	public _right!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_15(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_15, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterLessThan) {
	 		listener.enterLessThan(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitLessThan) {
	 		listener.exitLessThan(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitLessThan) {
			return visitor.visitLessThan(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DotRecordContext extends ExprContext {
	public _expr_!: ExprContext;
	public _label!: Token;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_25(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_25, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(stellaParser.StellaIdent, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterDotRecord) {
	 		listener.enterDotRecord(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitDotRecord) {
	 		listener.exitDotRecord(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitDotRecord) {
			return visitor.visitDotRecord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GreaterThanContext extends ExprContext {
	public _left!: ExprContext;
	public _right!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_17(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_17, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterGreaterThan) {
	 		listener.enterGreaterThan(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitGreaterThan) {
	 		listener.exitGreaterThan(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitGreaterThan) {
			return visitor.visitGreaterThan(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqualContext extends ExprContext {
	public _left!: ExprContext;
	public _right!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_19(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_19, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterEqual) {
	 		listener.enterEqual(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitEqual) {
	 		listener.exitEqual(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitEqual) {
			return visitor.visitEqual(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ThrowContext extends ExprContext {
	public _expr_!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public THROW(): TerminalNode {
		return this.getToken(stellaParser.THROW, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterThrow) {
	 		listener.enterThrow(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitThrow) {
	 		listener.exitThrow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitThrow) {
			return visitor.visitThrow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiplyContext extends ExprContext {
	public _left!: ExprContext;
	public _right!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_23(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_23, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterMultiply) {
	 		listener.enterMultiply(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitMultiply) {
	 		listener.exitMultiply(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitMultiply) {
			return visitor.visitMultiply(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConstMemoryContext extends ExprContext {
	public _mem!: Token;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public MemoryAddress(): TerminalNode {
		return this.getToken(stellaParser.MemoryAddress, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterConstMemory) {
	 		listener.enterConstMemory(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitConstMemory) {
	 		listener.exitConstMemory(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitConstMemory) {
			return visitor.visitConstMemory(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ListContext extends ExprContext {
	public _expr!: ExprContext;
	public _exprs: ExprContext[] = [];
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_13(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_13, 0);
	}
	public Surrogate_id_SYMB_14(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_14, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public Surrogate_id_SYMB_0(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_0, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterList) {
	 		listener.enterList(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitList) {
	 		listener.exitList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitList) {
			return visitor.visitList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TryCatchContext extends ExprContext {
	public _tryExpr!: ExprContext;
	public _pat!: PatternContext;
	public _fallbackExpr!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TRY(): TerminalNode {
		return this.getToken(stellaParser.TRY, 0);
	}
	public Surrogate_id_SYMB_4_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.Surrogate_id_SYMB_4);
	}
	public Surrogate_id_SYMB_4(i: number): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_4, i);
	}
	public Surrogate_id_SYMB_5_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.Surrogate_id_SYMB_5);
	}
	public Surrogate_id_SYMB_5(i: number): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_5, i);
	}
	public CATCH(): TerminalNode {
		return this.getToken(stellaParser.CATCH, 0);
	}
	public Surrogate_id_SYMB_9(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_9, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterTryCatch) {
	 		listener.enterTryCatch(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitTryCatch) {
	 		listener.exitTryCatch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitTryCatch) {
			return visitor.visitTryCatch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class HeadContext extends ExprContext {
	public _list!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_26(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_26, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterHead) {
	 		listener.enterHead(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitHead) {
	 		listener.exitHead(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitHead) {
			return visitor.visitHead(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NotEqualContext extends ExprContext {
	public _left!: ExprContext;
	public _right!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_20(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_20, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterNotEqual) {
	 		listener.enterNotEqual(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitNotEqual) {
	 		listener.exitNotEqual(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitNotEqual) {
			return visitor.visitNotEqual(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConstUnitContext extends ExprContext {
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_63(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_63, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterConstUnit) {
	 		listener.enterConstUnit(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitConstUnit) {
	 		listener.exitConstUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitConstUnit) {
			return visitor.visitConstUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SequenceContext extends ExprContext {
	public _expr1!: ExprContext;
	public _expr2!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_1(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_1, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterSequence) {
	 		listener.enterSequence(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitSequence) {
	 		listener.exitSequence(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitSequence) {
			return visitor.visitSequence(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConstFalseContext extends ExprContext {
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_41(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_41, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterConstFalse) {
	 		listener.enterConstFalse(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitConstFalse) {
	 		listener.exitConstFalse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitConstFalse) {
			return visitor.visitConstFalse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AbstractionContext extends ExprContext {
	public _paramDecl!: ParamDeclContext;
	public _paramDecls: ParamDeclContext[] = [];
	public _returnExpr!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_43(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_43, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
	}
	public Surrogate_id_SYMB_4(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_4, 0);
	}
	public Surrogate_id_SYMB_56(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_56, 0);
	}
	public Surrogate_id_SYMB_5(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_5, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public paramDecl_list(): ParamDeclContext[] {
		return this.getTypedRuleContexts(ParamDeclContext) as ParamDeclContext[];
	}
	public paramDecl(i: number): ParamDeclContext {
		return this.getTypedRuleContext(ParamDeclContext, i) as ParamDeclContext;
	}
	public Surrogate_id_SYMB_0_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.Surrogate_id_SYMB_0);
	}
	public Surrogate_id_SYMB_0(i: number): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_0, i);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterAbstraction) {
	 		listener.enterAbstraction(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitAbstraction) {
	 		listener.exitAbstraction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitAbstraction) {
			return visitor.visitAbstraction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConstIntContext extends ExprContext {
	public _n!: Token;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INTEGER(): TerminalNode {
		return this.getToken(stellaParser.INTEGER, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterConstInt) {
	 		listener.enterConstInt(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitConstInt) {
	 		listener.exitConstInt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitConstInt) {
			return visitor.visitConstInt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VariantContext extends ExprContext {
	public _label!: Token;
	public _rhs!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_11(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_11, 0);
	}
	public Surrogate_id_SYMB_12(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_12, 0);
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(stellaParser.StellaIdent, 0);
	}
	public Surrogate_id_SYMB_6(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_6, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterVariant) {
	 		listener.enterVariant(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitVariant) {
	 		listener.exitVariant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitVariant) {
			return visitor.visitVariant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConstTrueContext extends ExprContext {
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_60(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_60, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterConstTrue) {
	 		listener.enterConstTrue(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitConstTrue) {
	 		listener.exitConstTrue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitConstTrue) {
			return visitor.visitConstTrue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubtractContext extends ExprContext {
	public _left!: ExprContext;
	public _right!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_22(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_22, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterSubtract) {
	 		listener.enterSubtract(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitSubtract) {
	 		listener.exitSubtract(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitSubtract) {
			return visitor.visitSubtract(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeCastContext extends ExprContext {
	public _expr_!: ExprContext;
	public _type_!: StellatypeContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CAST(): TerminalNode {
		return this.getToken(stellaParser.CAST, 0);
	}
	public Surrogate_id_SYMB_36(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_36, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public stellatype(): StellatypeContext {
		return this.getTypedRuleContext(StellatypeContext, 0) as StellatypeContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterTypeCast) {
	 		listener.enterTypeCast(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitTypeCast) {
	 		listener.exitTypeCast(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitTypeCast) {
			return visitor.visitTypeCast(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IfContext extends ExprContext {
	public _condition!: ExprContext;
	public _thenExpr!: ExprContext;
	public _elseExpr!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_45(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_45, 0);
	}
	public Surrogate_id_SYMB_58(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_58, 0);
	}
	public Surrogate_id_SYMB_39(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_39, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterIf) {
	 		listener.enterIf(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitIf) {
	 		listener.exitIf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitIf) {
			return visitor.visitIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ApplicationContext extends ExprContext {
	public _fun!: ExprContext;
	public _expr!: ExprContext;
	public _args: ExprContext[] = [];
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public Surrogate_id_SYMB_0_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.Surrogate_id_SYMB_0);
	}
	public Surrogate_id_SYMB_0(i: number): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_0, i);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterApplication) {
	 		listener.enterApplication(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitApplication) {
	 		listener.exitApplication(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitApplication) {
			return visitor.visitApplication(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DerefContext extends ExprContext {
	public _expr_!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_23(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_23, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterDeref) {
	 		listener.enterDeref(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitDeref) {
	 		listener.exitDeref(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitDeref) {
			return visitor.visitDeref(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IsEmptyContext extends ExprContext {
	public _list!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_27(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_27, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterIsEmpty) {
	 		listener.enterIsEmpty(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitIsEmpty) {
	 		listener.exitIsEmpty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitIsEmpty) {
			return visitor.visitIsEmpty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PanicContext extends ExprContext {
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public PANIC(): TerminalNode {
		return this.getToken(stellaParser.PANIC, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterPanic) {
	 		listener.enterPanic(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitPanic) {
	 		listener.exitPanic(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitPanic) {
			return visitor.visitPanic(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LessThanOrEqualContext extends ExprContext {
	public _left!: ExprContext;
	public _right!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_16(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_16, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterLessThanOrEqual) {
	 		listener.enterLessThanOrEqual(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitLessThanOrEqual) {
	 		listener.exitLessThanOrEqual(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitLessThanOrEqual) {
			return visitor.visitLessThanOrEqual(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SuccContext extends ExprContext {
	public _n!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_57(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_57, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterSucc) {
	 		listener.enterSucc(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitSucc) {
	 		listener.exitSucc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitSucc) {
			return visitor.visitSucc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InlContext extends ExprContext {
	public _expr_!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_47(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_47, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterInl) {
	 		listener.enterInl(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitInl) {
	 		listener.exitInl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitInl) {
			return visitor.visitInl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GreaterThanOrEqualContext extends ExprContext {
	public _left!: ExprContext;
	public _right!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_18(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_18, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterGreaterThanOrEqual) {
	 		listener.enterGreaterThanOrEqual(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitGreaterThanOrEqual) {
	 		listener.exitGreaterThanOrEqual(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitGreaterThanOrEqual) {
			return visitor.visitGreaterThanOrEqual(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InrContext extends ExprContext {
	public _expr_!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_49(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_49, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterInr) {
	 		listener.enterInr(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitInr) {
	 		listener.exitInr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitInr) {
			return visitor.visitInr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MatchContext extends ExprContext {
	public _matchCase!: MatchCaseContext;
	public _cases: MatchCaseContext[] = [];
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_53(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_53, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public Surrogate_id_SYMB_4(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_4, 0);
	}
	public Surrogate_id_SYMB_5(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_5, 0);
	}
	public matchCase_list(): MatchCaseContext[] {
		return this.getTypedRuleContexts(MatchCaseContext) as MatchCaseContext[];
	}
	public matchCase(i: number): MatchCaseContext {
		return this.getTypedRuleContext(MatchCaseContext, i) as MatchCaseContext;
	}
	public Surrogate_id_SYMB_10_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.Surrogate_id_SYMB_10);
	}
	public Surrogate_id_SYMB_10(i: number): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_10, i);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterMatch) {
	 		listener.enterMatch(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitMatch) {
	 		listener.exitMatch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitMatch) {
			return visitor.visitMatch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicNotContext extends ExprContext {
	public _expr_!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_54(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_54, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterLogicNot) {
	 		listener.enterLogicNot(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitLogicNot) {
	 		listener.exitLogicNot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitLogicNot) {
			return visitor.visitLogicNot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SRecordContext extends ExprContext {
	public _binding!: BindingContext;
	public _bindings: BindingContext[] = [];
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_4(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_4, 0);
	}
	public Surrogate_id_SYMB_5(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_5, 0);
	}
	public binding_list(): BindingContext[] {
		return this.getTypedRuleContexts(BindingContext) as BindingContext[];
	}
	public binding(i: number): BindingContext {
		return this.getTypedRuleContext(BindingContext, i) as BindingContext;
	}
	public Surrogate_id_SYMB_0_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.Surrogate_id_SYMB_0);
	}
	public Surrogate_id_SYMB_0(i: number): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_0, i);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterSRecord) {
	 		listener.enterSRecord(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitSRecord) {
	 		listener.exitSRecord(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitSRecord) {
			return visitor.visitSRecord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesisedExprContext extends ExprContext {
	public _expr_!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterParenthesisedExpr) {
	 		listener.enterParenthesisedExpr(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitParenthesisedExpr) {
	 		listener.exitParenthesisedExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitParenthesisedExpr) {
			return visitor.visitParenthesisedExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TailContext extends ExprContext {
	public _list!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_28(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_28, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterTail) {
	 		listener.enterTail(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitTail) {
	 		listener.exitTail(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitTail) {
			return visitor.visitTail(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicAndContext extends ExprContext {
	public _left!: ExprContext;
	public _right!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_35(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_35, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterLogicAnd) {
	 		listener.enterLogicAnd(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitLogicAnd) {
	 		listener.exitLogicAnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitLogicAnd) {
			return visitor.visitLogicAnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeApplicationContext extends ExprContext {
	public _fun!: ExprContext;
	public _stellatype!: StellatypeContext;
	public _types: StellatypeContext[] = [];
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_13(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_13, 0);
	}
	public Surrogate_id_SYMB_14(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_14, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public stellatype(): StellatypeContext {
		return this.getTypedRuleContext(StellatypeContext, 0) as StellatypeContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterTypeApplication) {
	 		listener.enterTypeApplication(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitTypeApplication) {
	 		listener.exitTypeApplication(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitTypeApplication) {
			return visitor.visitTypeApplication(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LetRecContext extends ExprContext {
	public _patternBinding!: PatternBindingContext;
	public _patternBindings: PatternBindingContext[] = [];
	public _body!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_52(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_52, 0);
	}
	public Surrogate_id_SYMB_46(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_46, 0);
	}
	public patternBinding_list(): PatternBindingContext[] {
		return this.getTypedRuleContexts(PatternBindingContext) as PatternBindingContext[];
	}
	public patternBinding(i: number): PatternBindingContext {
		return this.getTypedRuleContext(PatternBindingContext, i) as PatternBindingContext;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public Surrogate_id_SYMB_0_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.Surrogate_id_SYMB_0);
	}
	public Surrogate_id_SYMB_0(i: number): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_0, i);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterLetRec) {
	 		listener.enterLetRec(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitLetRec) {
	 		listener.exitLetRec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitLetRec) {
			return visitor.visitLetRec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicOrContext extends ExprContext {
	public _left!: ExprContext;
	public _right!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_55(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_55, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterLogicOr) {
	 		listener.enterLogicOr(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitLogicOr) {
	 		listener.exitLogicOr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitLogicOr) {
			return visitor.visitLogicOr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TryWithContext extends ExprContext {
	public _tryExpr!: ExprContext;
	public _fallbackExpr!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TRY(): TerminalNode {
		return this.getToken(stellaParser.TRY, 0);
	}
	public Surrogate_id_SYMB_4_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.Surrogate_id_SYMB_4);
	}
	public Surrogate_id_SYMB_4(i: number): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_4, i);
	}
	public Surrogate_id_SYMB_5_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.Surrogate_id_SYMB_5);
	}
	public Surrogate_id_SYMB_5(i: number): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_5, i);
	}
	public Surrogate_id_SYMB_64(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_64, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterTryWith) {
	 		listener.enterTryWith(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitTryWith) {
	 		listener.exitTryWith(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitTryWith) {
			return visitor.visitTryWith(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PredContext extends ExprContext {
	public _n!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_29(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_29, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterPred) {
	 		listener.enterPred(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitPred) {
	 		listener.exitPred(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitPred) {
			return visitor.visitPred(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeAscContext extends ExprContext {
	public _expr_!: ExprContext;
	public _type_!: StellatypeContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_36(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_36, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public stellatype(): StellatypeContext {
		return this.getTypedRuleContext(StellatypeContext, 0) as StellatypeContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterTypeAsc) {
	 		listener.enterTypeAsc(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitTypeAsc) {
	 		listener.exitTypeAsc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitTypeAsc) {
			return visitor.visitTypeAsc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NatRecContext extends ExprContext {
	public _n!: ExprContext;
	public _initial!: ExprContext;
	public _step!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_31(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_31, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_0_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.Surrogate_id_SYMB_0);
	}
	public Surrogate_id_SYMB_0(i: number): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_0, i);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterNatRec) {
	 		listener.enterNatRec(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitNatRec) {
	 		listener.exitNatRec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitNatRec) {
			return visitor.visitNatRec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnfoldContext extends ExprContext {
	public _type_!: StellatypeContext;
	public _expr_!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_62(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_62, 0);
	}
	public Surrogate_id_SYMB_13(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_13, 0);
	}
	public Surrogate_id_SYMB_14(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_14, 0);
	}
	public stellatype(): StellatypeContext {
		return this.getTypedRuleContext(StellatypeContext, 0) as StellatypeContext;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterUnfold) {
	 		listener.enterUnfold(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitUnfold) {
	 		listener.exitUnfold(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitUnfold) {
			return visitor.visitUnfold(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RefContext extends ExprContext {
	public _expr_!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public REFERENCE(): TerminalNode {
		return this.getToken(stellaParser.REFERENCE, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterRef) {
	 		listener.enterRef(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitRef) {
	 		listener.exitRef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitRef) {
			return visitor.visitRef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DotTupleContext extends ExprContext {
	public _expr_!: ExprContext;
	public _index!: Token;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_25(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_25, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public INTEGER(): TerminalNode {
		return this.getToken(stellaParser.INTEGER, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterDotTuple) {
	 		listener.enterDotTuple(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitDotTuple) {
	 		listener.exitDotTuple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitDotTuple) {
			return visitor.visitDotTuple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FixContext extends ExprContext {
	public _expr_!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_42(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_42, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterFix) {
	 		listener.enterFix(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitFix) {
	 		listener.exitFix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitFix) {
			return visitor.visitFix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LetContext extends ExprContext {
	public _patternBinding!: PatternBindingContext;
	public _patternBindings: PatternBindingContext[] = [];
	public _body!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_51(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_51, 0);
	}
	public Surrogate_id_SYMB_46(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_46, 0);
	}
	public patternBinding_list(): PatternBindingContext[] {
		return this.getTypedRuleContexts(PatternBindingContext) as PatternBindingContext[];
	}
	public patternBinding(i: number): PatternBindingContext {
		return this.getTypedRuleContext(PatternBindingContext, i) as PatternBindingContext;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public Surrogate_id_SYMB_0_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.Surrogate_id_SYMB_0);
	}
	public Surrogate_id_SYMB_0(i: number): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_0, i);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterLet) {
	 		listener.enterLet(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitLet) {
	 		listener.exitLet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitLet) {
			return visitor.visitLet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssignContext extends ExprContext {
	public _lhs!: ExprContext;
	public _rhs!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(stellaParser.ASSIGN, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterAssign) {
	 		listener.enterAssign(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitAssign) {
	 		listener.exitAssign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitAssign) {
			return visitor.visitAssign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TupleContext extends ExprContext {
	public _expr!: ExprContext;
	public _exprs: ExprContext[] = [];
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_4(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_4, 0);
	}
	public Surrogate_id_SYMB_5(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_5, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public Surrogate_id_SYMB_0_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.Surrogate_id_SYMB_0);
	}
	public Surrogate_id_SYMB_0(i: number): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_0, i);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterTuple) {
	 		listener.enterTuple(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitTuple) {
	 		listener.exitTuple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitTuple) {
			return visitor.visitTuple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConsListContext extends ExprContext {
	public _head!: ExprContext;
	public _tail!: ExprContext;
	constructor(parser: stellaParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_37(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_37, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_0(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_0, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterConsList) {
	 		listener.enterConsList(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitConsList) {
	 		listener.exitConsList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitConsList) {
			return visitor.visitConsList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatternBindingContext extends ParserRuleContext {
	public _pat!: PatternContext;
	public _rhs!: ExprContext;
	constructor(parser?: stellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Surrogate_id_SYMB_6(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_6, 0);
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return stellaParser.RULE_patternBinding;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterPatternBinding) {
	 		listener.enterPatternBinding(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitPatternBinding) {
	 		listener.exitPatternBinding(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitPatternBinding) {
			return visitor.visitPatternBinding(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BindingContext extends ParserRuleContext {
	public _name!: Token;
	public _rhs!: ExprContext;
	constructor(parser?: stellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Surrogate_id_SYMB_6(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_6, 0);
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(stellaParser.StellaIdent, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return stellaParser.RULE_binding;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterBinding) {
	 		listener.enterBinding(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitBinding) {
	 		listener.exitBinding(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitBinding) {
			return visitor.visitBinding(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MatchCaseContext extends ParserRuleContext {
	public _pattern_!: PatternContext;
	public _expr_!: ExprContext;
	constructor(parser?: stellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Surrogate_id_SYMB_9(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_9, 0);
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return stellaParser.RULE_matchCase;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterMatchCase) {
	 		listener.enterMatchCase(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitMatchCase) {
	 		listener.exitMatchCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitMatchCase) {
			return visitor.visitMatchCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatternContext extends ParserRuleContext {
	constructor(parser?: stellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return stellaParser.RULE_pattern;
	}
	public override copyFrom(ctx: PatternContext): void {
		super.copyFrom(ctx);
	}
}
export class PatternConsContext extends PatternContext {
	public _head!: PatternContext;
	public _tail!: PatternContext;
	constructor(parser: stellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_37(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_37, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_0(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_0, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
	}
	public pattern_list(): PatternContext[] {
		return this.getTypedRuleContexts(PatternContext) as PatternContext[];
	}
	public pattern(i: number): PatternContext {
		return this.getTypedRuleContext(PatternContext, i) as PatternContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterPatternCons) {
	 		listener.enterPatternCons(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitPatternCons) {
	 		listener.exitPatternCons(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitPatternCons) {
			return visitor.visitPatternCons(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PatternTupleContext extends PatternContext {
	public _pattern!: PatternContext;
	public _patterns: PatternContext[] = [];
	constructor(parser: stellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_4(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_4, 0);
	}
	public Surrogate_id_SYMB_5(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_5, 0);
	}
	public pattern_list(): PatternContext[] {
		return this.getTypedRuleContexts(PatternContext) as PatternContext[];
	}
	public pattern(i: number): PatternContext {
		return this.getTypedRuleContext(PatternContext, i) as PatternContext;
	}
	public Surrogate_id_SYMB_0_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.Surrogate_id_SYMB_0);
	}
	public Surrogate_id_SYMB_0(i: number): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_0, i);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterPatternTuple) {
	 		listener.enterPatternTuple(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitPatternTuple) {
	 		listener.exitPatternTuple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitPatternTuple) {
			return visitor.visitPatternTuple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PatternListContext extends PatternContext {
	public _pattern!: PatternContext;
	public _patterns: PatternContext[] = [];
	constructor(parser: stellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_13(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_13, 0);
	}
	public Surrogate_id_SYMB_14(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_14, 0);
	}
	public pattern_list(): PatternContext[] {
		return this.getTypedRuleContexts(PatternContext) as PatternContext[];
	}
	public pattern(i: number): PatternContext {
		return this.getTypedRuleContext(PatternContext, i) as PatternContext;
	}
	public Surrogate_id_SYMB_0_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.Surrogate_id_SYMB_0);
	}
	public Surrogate_id_SYMB_0(i: number): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_0, i);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterPatternList) {
	 		listener.enterPatternList(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitPatternList) {
	 		listener.exitPatternList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitPatternList) {
			return visitor.visitPatternList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PatternRecordContext extends PatternContext {
	public _labelledPattern!: LabelledPatternContext;
	public _patterns: LabelledPatternContext[] = [];
	constructor(parser: stellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_4(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_4, 0);
	}
	public Surrogate_id_SYMB_5(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_5, 0);
	}
	public labelledPattern_list(): LabelledPatternContext[] {
		return this.getTypedRuleContexts(LabelledPatternContext) as LabelledPatternContext[];
	}
	public labelledPattern(i: number): LabelledPatternContext {
		return this.getTypedRuleContext(LabelledPatternContext, i) as LabelledPatternContext;
	}
	public Surrogate_id_SYMB_0_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.Surrogate_id_SYMB_0);
	}
	public Surrogate_id_SYMB_0(i: number): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_0, i);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterPatternRecord) {
	 		listener.enterPatternRecord(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitPatternRecord) {
	 		listener.exitPatternRecord(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitPatternRecord) {
			return visitor.visitPatternRecord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PatternVariantContext extends PatternContext {
	public _label!: Token;
	public _pattern_!: PatternContext;
	constructor(parser: stellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_11(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_11, 0);
	}
	public Surrogate_id_SYMB_12(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_12, 0);
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(stellaParser.StellaIdent, 0);
	}
	public Surrogate_id_SYMB_6(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_6, 0);
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterPatternVariant) {
	 		listener.enterPatternVariant(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitPatternVariant) {
	 		listener.exitPatternVariant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitPatternVariant) {
			return visitor.visitPatternVariant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PatternIntContext extends PatternContext {
	public _n!: Token;
	constructor(parser: stellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INTEGER(): TerminalNode {
		return this.getToken(stellaParser.INTEGER, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterPatternInt) {
	 		listener.enterPatternInt(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitPatternInt) {
	 		listener.exitPatternInt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitPatternInt) {
			return visitor.visitPatternInt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PatternInrContext extends PatternContext {
	public _pattern_!: PatternContext;
	constructor(parser: stellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_49(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_49, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterPatternInr) {
	 		listener.enterPatternInr(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitPatternInr) {
	 		listener.exitPatternInr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitPatternInr) {
			return visitor.visitPatternInr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PatternTrueContext extends PatternContext {
	constructor(parser: stellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_60(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_60, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterPatternTrue) {
	 		listener.enterPatternTrue(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitPatternTrue) {
	 		listener.exitPatternTrue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitPatternTrue) {
			return visitor.visitPatternTrue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PatternInlContext extends PatternContext {
	public _pattern_!: PatternContext;
	constructor(parser: stellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_47(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_47, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterPatternInl) {
	 		listener.enterPatternInl(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitPatternInl) {
	 		listener.exitPatternInl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitPatternInl) {
			return visitor.visitPatternInl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PatternVarContext extends PatternContext {
	public _name!: Token;
	constructor(parser: stellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(stellaParser.StellaIdent, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterPatternVar) {
	 		listener.enterPatternVar(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitPatternVar) {
	 		listener.exitPatternVar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitPatternVar) {
			return visitor.visitPatternVar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesisedPatternContext extends PatternContext {
	public _pattern_!: PatternContext;
	constructor(parser: stellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterParenthesisedPattern) {
	 		listener.enterParenthesisedPattern(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitParenthesisedPattern) {
	 		listener.exitParenthesisedPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitParenthesisedPattern) {
			return visitor.visitParenthesisedPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PatternSuccContext extends PatternContext {
	public _pattern_!: PatternContext;
	constructor(parser: stellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_57(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_57, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterPatternSucc) {
	 		listener.enterPatternSucc(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitPatternSucc) {
	 		listener.exitPatternSucc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitPatternSucc) {
			return visitor.visitPatternSucc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PatternFalseContext extends PatternContext {
	constructor(parser: stellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_41(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_41, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterPatternFalse) {
	 		listener.enterPatternFalse(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitPatternFalse) {
	 		listener.exitPatternFalse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitPatternFalse) {
			return visitor.visitPatternFalse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PatternUnitContext extends PatternContext {
	constructor(parser: stellaParser, ctx: PatternContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_63(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_63, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterPatternUnit) {
	 		listener.enterPatternUnit(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitPatternUnit) {
	 		listener.exitPatternUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitPatternUnit) {
			return visitor.visitPatternUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabelledPatternContext extends ParserRuleContext {
	public _label!: Token;
	public _pattern_!: PatternContext;
	constructor(parser?: stellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Surrogate_id_SYMB_6(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_6, 0);
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(stellaParser.StellaIdent, 0);
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
    public get ruleIndex(): number {
    	return stellaParser.RULE_labelledPattern;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterLabelledPattern) {
	 		listener.enterLabelledPattern(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitLabelledPattern) {
	 		listener.exitLabelledPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitLabelledPattern) {
			return visitor.visitLabelledPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StellatypeContext extends ParserRuleContext {
	constructor(parser?: stellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return stellaParser.RULE_stellatype;
	}
	public override copyFrom(ctx: StellatypeContext): void {
		super.copyFrom(ctx);
	}
}
export class TypeTupleContext extends StellatypeContext {
	public _stellatype!: StellatypeContext;
	public _types: StellatypeContext[] = [];
	constructor(parser: stellaParser, ctx: StellatypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_4(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_4, 0);
	}
	public Surrogate_id_SYMB_5(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_5, 0);
	}
	public stellatype_list(): StellatypeContext[] {
		return this.getTypedRuleContexts(StellatypeContext) as StellatypeContext[];
	}
	public stellatype(i: number): StellatypeContext {
		return this.getTypedRuleContext(StellatypeContext, i) as StellatypeContext;
	}
	public Surrogate_id_SYMB_0_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.Surrogate_id_SYMB_0);
	}
	public Surrogate_id_SYMB_0(i: number): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_0, i);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterTypeTuple) {
	 		listener.enterTypeTuple(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitTypeTuple) {
	 		listener.exitTypeTuple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitTypeTuple) {
			return visitor.visitTypeTuple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeTopContext extends StellatypeContext {
	constructor(parser: stellaParser, ctx: StellatypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TOP_TYPE(): TerminalNode {
		return this.getToken(stellaParser.TOP_TYPE, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterTypeTop) {
	 		listener.enterTypeTop(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitTypeTop) {
	 		listener.exitTypeTop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitTypeTop) {
			return visitor.visitTypeTop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeBoolContext extends StellatypeContext {
	constructor(parser: stellaParser, ctx: StellatypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_32(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_32, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterTypeBool) {
	 		listener.enterTypeBool(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitTypeBool) {
	 		listener.exitTypeBool(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitTypeBool) {
			return visitor.visitTypeBool(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeRefContext extends StellatypeContext {
	public _type_!: StellatypeContext;
	constructor(parser: stellaParser, ctx: StellatypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public REF_TYPE(): TerminalNode {
		return this.getToken(stellaParser.REF_TYPE, 0);
	}
	public stellatype(): StellatypeContext {
		return this.getTypedRuleContext(StellatypeContext, 0) as StellatypeContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterTypeRef) {
	 		listener.enterTypeRef(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitTypeRef) {
	 		listener.exitTypeRef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitTypeRef) {
			return visitor.visitTypeRef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeRecContext extends StellatypeContext {
	public _var_!: Token;
	public _type_!: StellatypeContext;
	constructor(parser: stellaParser, ctx: StellatypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_65(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_65, 0);
	}
	public Surrogate_id_SYMB_25(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_25, 0);
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(stellaParser.StellaIdent, 0);
	}
	public stellatype(): StellatypeContext {
		return this.getTypedRuleContext(StellatypeContext, 0) as StellatypeContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterTypeRec) {
	 		listener.enterTypeRec(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitTypeRec) {
	 		listener.exitTypeRec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitTypeRec) {
			return visitor.visitTypeRec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeSumContext extends StellatypeContext {
	public _left!: StellatypeContext;
	public _right!: StellatypeContext;
	constructor(parser: stellaParser, ctx: StellatypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_21(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_21, 0);
	}
	public stellatype_list(): StellatypeContext[] {
		return this.getTypedRuleContexts(StellatypeContext) as StellatypeContext[];
	}
	public stellatype(i: number): StellatypeContext {
		return this.getTypedRuleContext(StellatypeContext, i) as StellatypeContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterTypeSum) {
	 		listener.enterTypeSum(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitTypeSum) {
	 		listener.exitTypeSum(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitTypeSum) {
			return visitor.visitTypeSum(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeVarContext extends StellatypeContext {
	public _name!: Token;
	constructor(parser: stellaParser, ctx: StellatypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(stellaParser.StellaIdent, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterTypeVar) {
	 		listener.enterTypeVar(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitTypeVar) {
	 		listener.exitTypeVar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitTypeVar) {
			return visitor.visitTypeVar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeVariantContext extends StellatypeContext {
	public _variantFieldType!: VariantFieldTypeContext;
	public _fieldTypes: VariantFieldTypeContext[] = [];
	constructor(parser: stellaParser, ctx: StellatypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_11(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_11, 0);
	}
	public Surrogate_id_SYMB_12(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_12, 0);
	}
	public variantFieldType_list(): VariantFieldTypeContext[] {
		return this.getTypedRuleContexts(VariantFieldTypeContext) as VariantFieldTypeContext[];
	}
	public variantFieldType(i: number): VariantFieldTypeContext {
		return this.getTypedRuleContext(VariantFieldTypeContext, i) as VariantFieldTypeContext;
	}
	public Surrogate_id_SYMB_0_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.Surrogate_id_SYMB_0);
	}
	public Surrogate_id_SYMB_0(i: number): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_0, i);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterTypeVariant) {
	 		listener.enterTypeVariant(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitTypeVariant) {
	 		listener.exitTypeVariant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitTypeVariant) {
			return visitor.visitTypeVariant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeUnitContext extends StellatypeContext {
	constructor(parser: stellaParser, ctx: StellatypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_34(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_34, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterTypeUnit) {
	 		listener.enterTypeUnit(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitTypeUnit) {
	 		listener.exitTypeUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitTypeUnit) {
			return visitor.visitTypeUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeNatContext extends StellatypeContext {
	constructor(parser: stellaParser, ctx: StellatypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_33(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_33, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterTypeNat) {
	 		listener.enterTypeNat(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitTypeNat) {
	 		listener.exitTypeNat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitTypeNat) {
			return visitor.visitTypeNat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeBottomContext extends StellatypeContext {
	constructor(parser: stellaParser, ctx: StellatypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public BOTTOM_TYPE(): TerminalNode {
		return this.getToken(stellaParser.BOTTOM_TYPE, 0);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterTypeBottom) {
	 		listener.enterTypeBottom(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitTypeBottom) {
	 		listener.exitTypeBottom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitTypeBottom) {
			return visitor.visitTypeBottom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeParensContext extends StellatypeContext {
	public _type_!: StellatypeContext;
	constructor(parser: stellaParser, ctx: StellatypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
	}
	public stellatype(): StellatypeContext {
		return this.getTypedRuleContext(StellatypeContext, 0) as StellatypeContext;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterTypeParens) {
	 		listener.enterTypeParens(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitTypeParens) {
	 		listener.exitTypeParens(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitTypeParens) {
			return visitor.visitTypeParens(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeFunContext extends StellatypeContext {
	public _stellatype!: StellatypeContext;
	public _paramTypes: StellatypeContext[] = [];
	public _returnType!: StellatypeContext;
	constructor(parser: stellaParser, ctx: StellatypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_43(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_43, 0);
	}
	public Surrogate_id_SYMB_2(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_2, 0);
	}
	public Surrogate_id_SYMB_3(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_3, 0);
	}
	public Surrogate_id_SYMB_8(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_8, 0);
	}
	public stellatype_list(): StellatypeContext[] {
		return this.getTypedRuleContexts(StellatypeContext) as StellatypeContext[];
	}
	public stellatype(i: number): StellatypeContext {
		return this.getTypedRuleContext(StellatypeContext, i) as StellatypeContext;
	}
	public Surrogate_id_SYMB_0_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.Surrogate_id_SYMB_0);
	}
	public Surrogate_id_SYMB_0(i: number): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_0, i);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterTypeFun) {
	 		listener.enterTypeFun(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitTypeFun) {
	 		listener.exitTypeFun(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitTypeFun) {
			return visitor.visitTypeFun(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeForAllContext extends StellatypeContext {
	public _StellaIdent!: Token;
	public _types: Token[] = [];
	public _type_!: StellatypeContext;
	constructor(parser: stellaParser, ctx: StellatypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public FORALL(): TerminalNode {
		return this.getToken(stellaParser.FORALL, 0);
	}
	public Surrogate_id_SYMB_25(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_25, 0);
	}
	public stellatype(): StellatypeContext {
		return this.getTypedRuleContext(StellatypeContext, 0) as StellatypeContext;
	}
	public StellaIdent_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.StellaIdent);
	}
	public StellaIdent(i: number): TerminalNode {
		return this.getToken(stellaParser.StellaIdent, i);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterTypeForAll) {
	 		listener.enterTypeForAll(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitTypeForAll) {
	 		listener.exitTypeForAll(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitTypeForAll) {
			return visitor.visitTypeForAll(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeRecordContext extends StellatypeContext {
	public _recordFieldType!: RecordFieldTypeContext;
	public _fieldTypes: RecordFieldTypeContext[] = [];
	constructor(parser: stellaParser, ctx: StellatypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_4(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_4, 0);
	}
	public Surrogate_id_SYMB_5(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_5, 0);
	}
	public recordFieldType_list(): RecordFieldTypeContext[] {
		return this.getTypedRuleContexts(RecordFieldTypeContext) as RecordFieldTypeContext[];
	}
	public recordFieldType(i: number): RecordFieldTypeContext {
		return this.getTypedRuleContext(RecordFieldTypeContext, i) as RecordFieldTypeContext;
	}
	public Surrogate_id_SYMB_0_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.Surrogate_id_SYMB_0);
	}
	public Surrogate_id_SYMB_0(i: number): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_0, i);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterTypeRecord) {
	 		listener.enterTypeRecord(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitTypeRecord) {
	 		listener.exitTypeRecord(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitTypeRecord) {
			return visitor.visitTypeRecord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeListContext extends StellatypeContext {
	public _stellatype!: StellatypeContext;
	public _types: StellatypeContext[] = [];
	constructor(parser: stellaParser, ctx: StellatypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Surrogate_id_SYMB_13(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_13, 0);
	}
	public Surrogate_id_SYMB_14(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_14, 0);
	}
	public stellatype_list(): StellatypeContext[] {
		return this.getTypedRuleContexts(StellatypeContext) as StellatypeContext[];
	}
	public stellatype(i: number): StellatypeContext {
		return this.getTypedRuleContext(StellatypeContext, i) as StellatypeContext;
	}
	public Surrogate_id_SYMB_0_list(): TerminalNode[] {
	    	return this.getTokens(stellaParser.Surrogate_id_SYMB_0);
	}
	public Surrogate_id_SYMB_0(i: number): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_0, i);
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterTypeList) {
	 		listener.enterTypeList(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitTypeList) {
	 		listener.exitTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitTypeList) {
			return visitor.visitTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RecordFieldTypeContext extends ParserRuleContext {
	public _label!: Token;
	public _type_!: StellatypeContext;
	constructor(parser?: stellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Surrogate_id_SYMB_7(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_7, 0);
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(stellaParser.StellaIdent, 0);
	}
	public stellatype(): StellatypeContext {
		return this.getTypedRuleContext(StellatypeContext, 0) as StellatypeContext;
	}
    public get ruleIndex(): number {
    	return stellaParser.RULE_recordFieldType;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterRecordFieldType) {
	 		listener.enterRecordFieldType(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitRecordFieldType) {
	 		listener.exitRecordFieldType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitRecordFieldType) {
			return visitor.visitRecordFieldType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariantFieldTypeContext extends ParserRuleContext {
	public _label!: Token;
	public _type_!: StellatypeContext;
	constructor(parser?: stellaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public StellaIdent(): TerminalNode {
		return this.getToken(stellaParser.StellaIdent, 0);
	}
	public Surrogate_id_SYMB_7(): TerminalNode {
		return this.getToken(stellaParser.Surrogate_id_SYMB_7, 0);
	}
	public stellatype(): StellatypeContext {
		return this.getTypedRuleContext(StellatypeContext, 0) as StellatypeContext;
	}
    public get ruleIndex(): number {
    	return stellaParser.RULE_variantFieldType;
	}
	public enterRule(listener: stellaParserListener): void {
	    if(listener.enterVariantFieldType) {
	 		listener.enterVariantFieldType(this);
		}
	}
	public exitRule(listener: stellaParserListener): void {
	    if(listener.exitVariantFieldType) {
	 		listener.exitVariantFieldType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: stellaParserVisitor<Result>): Result {
		if (visitor.visitVariantFieldType) {
			return visitor.visitVariantFieldType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
