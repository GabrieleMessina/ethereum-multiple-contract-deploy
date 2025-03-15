// Generated from d:/Users/gabry/Universita/ing_sis_dis/remix/vscode_extension/ethereummultipledeploy/src/antlr/SolidityParser.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class SolidityParser extends antlr.Parser {
    public static readonly ReservedKeywords = 1;
    public static readonly Abstract = 2;
    public static readonly Address = 3;
    public static readonly Anonymous = 4;
    public static readonly As = 5;
    public static readonly Assembly = 6;
    public static readonly Bool = 7;
    public static readonly Break = 8;
    public static readonly Bytes = 9;
    public static readonly Calldata = 10;
    public static readonly Catch = 11;
    public static readonly Constant = 12;
    public static readonly Constructor = 13;
    public static readonly Continue = 14;
    public static readonly Contract = 15;
    public static readonly Delete = 16;
    public static readonly Do = 17;
    public static readonly Else = 18;
    public static readonly Emit = 19;
    public static readonly Enum = 20;
    public static readonly Error = 21;
    public static readonly Event = 22;
    public static readonly External = 23;
    public static readonly Fallback = 24;
    public static readonly FalseLiteral = 25;
    public static readonly Fixed = 26;
    public static readonly FixedBytes = 27;
    public static readonly For = 28;
    public static readonly From = 29;
    public static readonly Function = 30;
    public static readonly Global = 31;
    public static readonly Hex = 32;
    public static readonly If = 33;
    public static readonly Immutable = 34;
    public static readonly Import = 35;
    public static readonly Indexed = 36;
    public static readonly Interface = 37;
    public static readonly Internal = 38;
    public static readonly Is = 39;
    public static readonly Library = 40;
    public static readonly Mapping = 41;
    public static readonly Memory = 42;
    public static readonly Modifier = 43;
    public static readonly New = 44;
    public static readonly SubDenomination = 45;
    public static readonly Override = 46;
    public static readonly Payable = 47;
    public static readonly Pragma = 48;
    public static readonly Private = 49;
    public static readonly Public = 50;
    public static readonly Pure = 51;
    public static readonly Receive = 52;
    public static readonly Return = 53;
    public static readonly Returns = 54;
    public static readonly Revert = 55;
    public static readonly SignedIntegerType = 56;
    public static readonly Storage = 57;
    public static readonly String = 58;
    public static readonly Struct = 59;
    public static readonly Transient = 60;
    public static readonly TrueLiteral = 61;
    public static readonly Try = 62;
    public static readonly Type = 63;
    public static readonly Ufixed = 64;
    public static readonly Unchecked = 65;
    public static readonly Unicode = 66;
    public static readonly UnsignedIntegerType = 67;
    public static readonly Using = 68;
    public static readonly View = 69;
    public static readonly Virtual = 70;
    public static readonly While = 71;
    public static readonly LParen = 72;
    public static readonly RParen = 73;
    public static readonly LBrack = 74;
    public static readonly RBrack = 75;
    public static readonly LBrace = 76;
    public static readonly RBrace = 77;
    public static readonly Colon = 78;
    public static readonly Semicolon = 79;
    public static readonly Period = 80;
    public static readonly Conditional = 81;
    public static readonly DoubleArrow = 82;
    public static readonly RightArrow = 83;
    public static readonly Assign = 84;
    public static readonly AssignBitOr = 85;
    public static readonly AssignBitXor = 86;
    public static readonly AssignBitAnd = 87;
    public static readonly AssignShl = 88;
    public static readonly AssignSar = 89;
    public static readonly AssignShr = 90;
    public static readonly AssignAdd = 91;
    public static readonly AssignSub = 92;
    public static readonly AssignMul = 93;
    public static readonly AssignDiv = 94;
    public static readonly AssignMod = 95;
    public static readonly Comma = 96;
    public static readonly Or = 97;
    public static readonly And = 98;
    public static readonly BitOr = 99;
    public static readonly BitXor = 100;
    public static readonly BitAnd = 101;
    public static readonly Shl = 102;
    public static readonly Sar = 103;
    public static readonly Shr = 104;
    public static readonly Add = 105;
    public static readonly Sub = 106;
    public static readonly Mul = 107;
    public static readonly Div = 108;
    public static readonly Mod = 109;
    public static readonly Exp = 110;
    public static readonly Equal = 111;
    public static readonly NotEqual = 112;
    public static readonly LessThan = 113;
    public static readonly GreaterThan = 114;
    public static readonly LessThanOrEqual = 115;
    public static readonly GreaterThanOrEqual = 116;
    public static readonly Not = 117;
    public static readonly BitNot = 118;
    public static readonly Inc = 119;
    public static readonly Dec = 120;
    public static readonly DoubleQuote = 121;
    public static readonly SingleQuote = 122;
    public static readonly NonEmptyStringLiteral = 123;
    public static readonly EmptyStringLiteral = 124;
    public static readonly UnicodeStringLiteral = 125;
    public static readonly HexString = 126;
    public static readonly HexNumber = 127;
    public static readonly OctalNumber = 128;
    public static readonly DecimalNumber = 129;
    public static readonly DecimalNumberFollowedByIdentifier = 130;
    public static readonly Identifier = 131;
    public static readonly WS = 132;
    public static readonly COMMENT = 133;
    public static readonly LINE_COMMENT = 134;
    public static readonly AssemblyDialect = 135;
    public static readonly AssemblyLBrace = 136;
    public static readonly AssemblyFlagString = 137;
    public static readonly AssemblyBlockLParen = 138;
    public static readonly AssemblyBlockRParen = 139;
    public static readonly AssemblyBlockComma = 140;
    public static readonly AssemblyBlockWS = 141;
    public static readonly AssemblyBlockCOMMENT = 142;
    public static readonly AssemblyBlockLINE_COMMENT = 143;
    public static readonly YulBreak = 144;
    public static readonly YulCase = 145;
    public static readonly YulContinue = 146;
    public static readonly YulDefault = 147;
    public static readonly YulFalse = 148;
    public static readonly YulFor = 149;
    public static readonly YulFunction = 150;
    public static readonly YulIf = 151;
    public static readonly YulLeave = 152;
    public static readonly YulLet = 153;
    public static readonly YulSwitch = 154;
    public static readonly YulTrue = 155;
    public static readonly YulHex = 156;
    public static readonly YulEVMBuiltin = 157;
    public static readonly YulLBrace = 158;
    public static readonly YulRBrace = 159;
    public static readonly YulLParen = 160;
    public static readonly YulRParen = 161;
    public static readonly YulAssign = 162;
    public static readonly YulPeriod = 163;
    public static readonly YulComma = 164;
    public static readonly YulArrow = 165;
    public static readonly YulIdentifier = 166;
    public static readonly YulHexNumber = 167;
    public static readonly YulDecimalNumber = 168;
    public static readonly YulStringLiteral = 169;
    public static readonly YulHexStringLiteral = 170;
    public static readonly YulWS = 171;
    public static readonly YulCOMMENT = 172;
    public static readonly YulLINE_COMMENT = 173;
    public static readonly PragmaToken = 174;
    public static readonly PragmaSemicolon = 175;
    public static readonly PragmaWS = 176;
    public static readonly PragmaCOMMENT = 177;
    public static readonly PragmaLINE_COMMENT = 178;
    public static readonly RULE_sourceUnit = 0;
    public static readonly RULE_pragmaDirective = 1;
    public static readonly RULE_importDirective = 2;
    public static readonly RULE_importAliases = 3;
    public static readonly RULE_path = 4;
    public static readonly RULE_symbolAliases = 5;
    public static readonly RULE_contractDefinition = 6;
    public static readonly RULE_interfaceDefinition = 7;
    public static readonly RULE_libraryDefinition = 8;
    public static readonly RULE_inheritanceSpecifierList = 9;
    public static readonly RULE_inheritanceSpecifier = 10;
    public static readonly RULE_contractBodyElement = 11;
    public static readonly RULE_namedArgument = 12;
    public static readonly RULE_callArgumentList = 13;
    public static readonly RULE_identifierPath = 14;
    public static readonly RULE_modifierInvocation = 15;
    public static readonly RULE_visibility = 16;
    public static readonly RULE_parameterList = 17;
    public static readonly RULE_parameterDeclaration = 18;
    public static readonly RULE_constructorDefinition = 19;
    public static readonly RULE_stateMutability = 20;
    public static readonly RULE_overrideSpecifier = 21;
    public static readonly RULE_functionDefinition = 22;
    public static readonly RULE_modifierDefinition = 23;
    public static readonly RULE_fallbackFunctionDefinition = 24;
    public static readonly RULE_receiveFunctionDefinition = 25;
    public static readonly RULE_structDefinition = 26;
    public static readonly RULE_structMember = 27;
    public static readonly RULE_enumDefinition = 28;
    public static readonly RULE_userDefinedValueTypeDefinition = 29;
    public static readonly RULE_stateVariableDeclaration = 30;
    public static readonly RULE_constantVariableDeclaration = 31;
    public static readonly RULE_eventParameter = 32;
    public static readonly RULE_eventDefinition = 33;
    public static readonly RULE_errorParameter = 34;
    public static readonly RULE_errorDefinition = 35;
    public static readonly RULE_userDefinableOperator = 36;
    public static readonly RULE_usingDirective = 37;
    public static readonly RULE_usingAliases = 38;
    public static readonly RULE_typeName = 39;
    public static readonly RULE_elementaryTypeName = 40;
    public static readonly RULE_addressPayable = 41;
    public static readonly RULE_functionTypeName = 42;
    public static readonly RULE_variableDeclaration = 43;
    public static readonly RULE_dataLocation = 44;
    public static readonly RULE_expression = 45;
    public static readonly RULE_assignOp = 46;
    public static readonly RULE_tupleExpression = 47;
    public static readonly RULE_inlineArrayExpression = 48;
    public static readonly RULE_identifier = 49;
    public static readonly RULE_literal = 50;
    public static readonly RULE_literalWithSubDenomination = 51;
    public static readonly RULE_boolLiteral = 52;
    public static readonly RULE_stringLiteral = 53;
    public static readonly RULE_hexStringLiteral = 54;
    public static readonly RULE_unicodeStringLiteral = 55;
    public static readonly RULE_numberLiteral = 56;
    public static readonly RULE_block = 57;
    public static readonly RULE_uncheckedBlock = 58;
    public static readonly RULE_statement = 59;
    public static readonly RULE_simpleStatement = 60;
    public static readonly RULE_ifStatement = 61;
    public static readonly RULE_forStatement = 62;
    public static readonly RULE_whileStatement = 63;
    public static readonly RULE_doWhileStatement = 64;
    public static readonly RULE_continueStatement = 65;
    public static readonly RULE_breakStatement = 66;
    public static readonly RULE_tryStatement = 67;
    public static readonly RULE_catchClause = 68;
    public static readonly RULE_returnStatement = 69;
    public static readonly RULE_emitStatement = 70;
    public static readonly RULE_revertStatement = 71;
    public static readonly RULE_assemblyStatement = 72;
    public static readonly RULE_assemblyFlags = 73;
    public static readonly RULE_variableDeclarationList = 74;
    public static readonly RULE_variableDeclarationTuple = 75;
    public static readonly RULE_variableDeclarationStatement = 76;
    public static readonly RULE_expressionStatement = 77;
    public static readonly RULE_mappingType = 78;
    public static readonly RULE_mappingKeyType = 79;
    public static readonly RULE_yulStatement = 80;
    public static readonly RULE_yulBlock = 81;
    public static readonly RULE_yulVariableDeclaration = 82;
    public static readonly RULE_yulAssignment = 83;
    public static readonly RULE_yulIfStatement = 84;
    public static readonly RULE_yulForStatement = 85;
    public static readonly RULE_yulSwitchCase = 86;
    public static readonly RULE_yulSwitchStatement = 87;
    public static readonly RULE_yulFunctionDefinition = 88;
    public static readonly RULE_yulPath = 89;
    public static readonly RULE_yulFunctionCall = 90;
    public static readonly RULE_yulbool = 91;
    public static readonly RULE_yulLiteral = 92;
    public static readonly RULE_yulExpression = 93;

    public static readonly literalNames = [
        null, null, "'abstract'", "'address'", "'anonymous'", "'as'", "'assembly'", 
        "'bool'", null, "'bytes'", "'calldata'", "'catch'", "'constant'", 
        "'constructor'", null, "'contract'", "'delete'", "'do'", "'else'", 
        "'emit'", "'enum'", "'error'", "'event'", "'external'", "'fallback'", 
        null, null, null, null, "'from'", null, "'global'", null, null, 
        "'immutable'", "'import'", "'indexed'", "'interface'", "'internal'", 
        "'is'", "'library'", "'mapping'", "'memory'", "'modifier'", "'new'", 
        null, "'override'", "'payable'", "'pragma'", "'private'", "'public'", 
        "'pure'", "'receive'", "'return'", "'returns'", "'revert'", null, 
        "'storage'", "'string'", "'struct'", "'transient'", null, "'try'", 
        "'type'", null, "'unchecked'", "'unicode'", null, "'using'", "'view'", 
        "'virtual'", "'while'", null, null, "'['", "']'", null, null, "':'", 
        null, null, "'?'", "'=>'", null, "'='", "'|='", "'^='", "'&='", 
        "'<<='", "'>>='", "'>>>='", "'+='", "'-='", "'*='", "'/='", "'%='", 
        null, "'||'", "'&&'", "'|'", "'^'", "'&'", "'<<'", "'>>'", "'>>>'", 
        "'+'", "'-'", "'*'", "'/'", "'%'", "'**'", "'=='", "'!='", "'<'", 
        "'>'", "'<='", "'>='", "'!'", "'~'", "'++'", "'--'", "'\"'", "'''", 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, "'\"evmasm\"'", null, null, null, null, null, null, null, 
        null, null, "'case'", null, "'default'", null, null, null, null, 
        "'leave'", "'let'", "'switch'", null, null, null, null, null, null, 
        null, "':='"
    ];

    public static readonly symbolicNames = [
        null, "ReservedKeywords", "Abstract", "Address", "Anonymous", "As", 
        "Assembly", "Bool", "Break", "Bytes", "Calldata", "Catch", "Constant", 
        "Constructor", "Continue", "Contract", "Delete", "Do", "Else", "Emit", 
        "Enum", "Error", "Event", "External", "Fallback", "FalseLiteral", 
        "Fixed", "FixedBytes", "For", "From", "Function", "Global", "Hex", 
        "If", "Immutable", "Import", "Indexed", "Interface", "Internal", 
        "Is", "Library", "Mapping", "Memory", "Modifier", "New", "SubDenomination", 
        "Override", "Payable", "Pragma", "Private", "Public", "Pure", "Receive", 
        "Return", "Returns", "Revert", "SignedIntegerType", "Storage", "String", 
        "Struct", "Transient", "TrueLiteral", "Try", "Type", "Ufixed", "Unchecked", 
        "Unicode", "UnsignedIntegerType", "Using", "View", "Virtual", "While", 
        "LParen", "RParen", "LBrack", "RBrack", "LBrace", "RBrace", "Colon", 
        "Semicolon", "Period", "Conditional", "DoubleArrow", "RightArrow", 
        "Assign", "AssignBitOr", "AssignBitXor", "AssignBitAnd", "AssignShl", 
        "AssignSar", "AssignShr", "AssignAdd", "AssignSub", "AssignMul", 
        "AssignDiv", "AssignMod", "Comma", "Or", "And", "BitOr", "BitXor", 
        "BitAnd", "Shl", "Sar", "Shr", "Add", "Sub", "Mul", "Div", "Mod", 
        "Exp", "Equal", "NotEqual", "LessThan", "GreaterThan", "LessThanOrEqual", 
        "GreaterThanOrEqual", "Not", "BitNot", "Inc", "Dec", "DoubleQuote", 
        "SingleQuote", "NonEmptyStringLiteral", "EmptyStringLiteral", "UnicodeStringLiteral", 
        "HexString", "HexNumber", "OctalNumber", "DecimalNumber", "DecimalNumberFollowedByIdentifier", 
        "Identifier", "WS", "COMMENT", "LINE_COMMENT", "AssemblyDialect", 
        "AssemblyLBrace", "AssemblyFlagString", "AssemblyBlockLParen", "AssemblyBlockRParen", 
        "AssemblyBlockComma", "AssemblyBlockWS", "AssemblyBlockCOMMENT", 
        "AssemblyBlockLINE_COMMENT", "YulBreak", "YulCase", "YulContinue", 
        "YulDefault", "YulFalse", "YulFor", "YulFunction", "YulIf", "YulLeave", 
        "YulLet", "YulSwitch", "YulTrue", "YulHex", "YulEVMBuiltin", "YulLBrace", 
        "YulRBrace", "YulLParen", "YulRParen", "YulAssign", "YulPeriod", 
        "YulComma", "YulArrow", "YulIdentifier", "YulHexNumber", "YulDecimalNumber", 
        "YulStringLiteral", "YulHexStringLiteral", "YulWS", "YulCOMMENT", 
        "YulLINE_COMMENT", "PragmaToken", "PragmaSemicolon", "PragmaWS", 
        "PragmaCOMMENT", "PragmaLINE_COMMENT"
    ];
    public static readonly ruleNames = [
        "sourceUnit", "pragmaDirective", "importDirective", "importAliases", 
        "path", "symbolAliases", "contractDefinition", "interfaceDefinition", 
        "libraryDefinition", "inheritanceSpecifierList", "inheritanceSpecifier", 
        "contractBodyElement", "namedArgument", "callArgumentList", "identifierPath", 
        "modifierInvocation", "visibility", "parameterList", "parameterDeclaration", 
        "constructorDefinition", "stateMutability", "overrideSpecifier", 
        "functionDefinition", "modifierDefinition", "fallbackFunctionDefinition", 
        "receiveFunctionDefinition", "structDefinition", "structMember", 
        "enumDefinition", "userDefinedValueTypeDefinition", "stateVariableDeclaration", 
        "constantVariableDeclaration", "eventParameter", "eventDefinition", 
        "errorParameter", "errorDefinition", "userDefinableOperator", "usingDirective", 
        "usingAliases", "typeName", "elementaryTypeName", "addressPayable", 
        "functionTypeName", "variableDeclaration", "dataLocation", "expression", 
        "assignOp", "tupleExpression", "inlineArrayExpression", "identifier", 
        "literal", "literalWithSubDenomination", "boolLiteral", "stringLiteral", 
        "hexStringLiteral", "unicodeStringLiteral", "numberLiteral", "block", 
        "uncheckedBlock", "statement", "simpleStatement", "ifStatement", 
        "forStatement", "whileStatement", "doWhileStatement", "continueStatement", 
        "breakStatement", "tryStatement", "catchClause", "returnStatement", 
        "emitStatement", "revertStatement", "assemblyStatement", "assemblyFlags", 
        "variableDeclarationList", "variableDeclarationTuple", "variableDeclarationStatement", 
        "expressionStatement", "mappingType", "mappingKeyType", "yulStatement", 
        "yulBlock", "yulVariableDeclaration", "yulAssignment", "yulIfStatement", 
        "yulForStatement", "yulSwitchCase", "yulSwitchStatement", "yulFunctionDefinition", 
        "yulPath", "yulFunctionCall", "yulbool", "yulLiteral", "yulExpression",
    ];

    public get grammarFileName(): string { return "SolidityParser.g4"; }
    public get literalNames(): (string | null)[] { return SolidityParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return SolidityParser.symbolicNames; }
    public get ruleNames(): string[] { return SolidityParser.ruleNames; }
    public get serializedATN(): number[] { return SolidityParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, SolidityParser._ATN, SolidityParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public sourceUnit(): SourceUnitContext {
        let localContext = new SourceUnitContext(this.context, this.state);
        this.enterRule(localContext, 0, SolidityParser.RULE_sourceUnit);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 203;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3966796428) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 867180645) !== 0) || _la === 67 || _la === 68 || _la === 131) {
                {
                this.state = 201;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 0, this.context) ) {
                case 1:
                    {
                    this.state = 188;
                    this.pragmaDirective();
                    }
                    break;
                case 2:
                    {
                    this.state = 189;
                    this.importDirective();
                    }
                    break;
                case 3:
                    {
                    this.state = 190;
                    this.usingDirective();
                    }
                    break;
                case 4:
                    {
                    this.state = 191;
                    this.contractDefinition();
                    }
                    break;
                case 5:
                    {
                    this.state = 192;
                    this.interfaceDefinition();
                    }
                    break;
                case 6:
                    {
                    this.state = 193;
                    this.libraryDefinition();
                    }
                    break;
                case 7:
                    {
                    this.state = 194;
                    this.functionDefinition();
                    }
                    break;
                case 8:
                    {
                    this.state = 195;
                    this.constantVariableDeclaration();
                    }
                    break;
                case 9:
                    {
                    this.state = 196;
                    this.structDefinition();
                    }
                    break;
                case 10:
                    {
                    this.state = 197;
                    this.enumDefinition();
                    }
                    break;
                case 11:
                    {
                    this.state = 198;
                    this.userDefinedValueTypeDefinition();
                    }
                    break;
                case 12:
                    {
                    this.state = 199;
                    this.errorDefinition();
                    }
                    break;
                case 13:
                    {
                    this.state = 200;
                    this.eventDefinition();
                    }
                    break;
                }
                }
                this.state = 205;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 206;
            this.match(SolidityParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public pragmaDirective(): PragmaDirectiveContext {
        let localContext = new PragmaDirectiveContext(this.context, this.state);
        this.enterRule(localContext, 2, SolidityParser.RULE_pragmaDirective);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 208;
            this.match(SolidityParser.Pragma);
            this.state = 210;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 209;
                this.match(SolidityParser.PragmaToken);
                }
                }
                this.state = 212;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 174);
            this.state = 214;
            this.match(SolidityParser.PragmaSemicolon);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public importDirective(): ImportDirectiveContext {
        let localContext = new ImportDirectiveContext(this.context, this.state);
        this.enterRule(localContext, 4, SolidityParser.RULE_importDirective);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 216;
            this.match(SolidityParser.Import);
            this.state = 232;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SolidityParser.NonEmptyStringLiteral:
                {
                {
                this.state = 217;
                this.path();
                this.state = 220;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 5) {
                    {
                    this.state = 218;
                    this.match(SolidityParser.As);
                    this.state = 219;
                    localContext._unitAlias = this.identifier();
                    }
                }

                }
                }
                break;
            case SolidityParser.LBrace:
                {
                {
                this.state = 222;
                this.symbolAliases();
                this.state = 223;
                this.match(SolidityParser.From);
                this.state = 224;
                this.path();
                }
                }
                break;
            case SolidityParser.Mul:
                {
                {
                this.state = 226;
                this.match(SolidityParser.Mul);
                this.state = 227;
                this.match(SolidityParser.As);
                this.state = 228;
                localContext._unitAlias = this.identifier();
                this.state = 229;
                this.match(SolidityParser.From);
                this.state = 230;
                this.path();
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 234;
            this.match(SolidityParser.Semicolon);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public importAliases(): ImportAliasesContext {
        let localContext = new ImportAliasesContext(this.context, this.state);
        this.enterRule(localContext, 6, SolidityParser.RULE_importAliases);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 236;
            localContext._symbol_ = this.identifier();
            this.state = 239;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 5) {
                {
                this.state = 237;
                this.match(SolidityParser.As);
                this.state = 238;
                localContext._alias = this.identifier();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public path(): PathContext {
        let localContext = new PathContext(this.context, this.state);
        this.enterRule(localContext, 8, SolidityParser.RULE_path);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 241;
            this.match(SolidityParser.NonEmptyStringLiteral);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public symbolAliases(): SymbolAliasesContext {
        let localContext = new SymbolAliasesContext(this.context, this.state);
        this.enterRule(localContext, 10, SolidityParser.RULE_symbolAliases);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 243;
            this.match(SolidityParser.LBrace);
            this.state = 244;
            localContext._importAliases = this.importAliases();
            localContext._aliases.push(localContext._importAliases!);
            this.state = 249;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 96) {
                {
                {
                this.state = 245;
                this.match(SolidityParser.Comma);
                this.state = 246;
                localContext._importAliases = this.importAliases();
                localContext._aliases.push(localContext._importAliases!);
                }
                }
                this.state = 251;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 252;
            this.match(SolidityParser.RBrace);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public contractDefinition(): ContractDefinitionContext {
        let localContext = new ContractDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 12, SolidityParser.RULE_contractDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 255;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 2) {
                {
                this.state = 254;
                this.match(SolidityParser.Abstract);
                }
            }

            this.state = 257;
            this.match(SolidityParser.Contract);
            this.state = 258;
            localContext._name = this.identifier();
            this.state = 260;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 39) {
                {
                this.state = 259;
                this.inheritanceSpecifierList();
                }
            }

            this.state = 262;
            this.match(SolidityParser.LBrace);
            this.state = 266;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3983549064) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 214878213) !== 0) || _la === 131) {
                {
                {
                this.state = 263;
                this.contractBodyElement();
                }
                }
                this.state = 268;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 269;
            this.match(SolidityParser.RBrace);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public interfaceDefinition(): InterfaceDefinitionContext {
        let localContext = new InterfaceDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 14, SolidityParser.RULE_interfaceDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 271;
            this.match(SolidityParser.Interface);
            this.state = 272;
            localContext._name = this.identifier();
            this.state = 274;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 39) {
                {
                this.state = 273;
                this.inheritanceSpecifierList();
                }
            }

            this.state = 276;
            this.match(SolidityParser.LBrace);
            this.state = 280;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3983549064) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 214878213) !== 0) || _la === 131) {
                {
                {
                this.state = 277;
                this.contractBodyElement();
                }
                }
                this.state = 282;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 283;
            this.match(SolidityParser.RBrace);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public libraryDefinition(): LibraryDefinitionContext {
        let localContext = new LibraryDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 16, SolidityParser.RULE_libraryDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 285;
            this.match(SolidityParser.Library);
            this.state = 286;
            localContext._name = this.identifier();
            this.state = 287;
            this.match(SolidityParser.LBrace);
            this.state = 291;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3983549064) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 214878213) !== 0) || _la === 131) {
                {
                {
                this.state = 288;
                this.contractBodyElement();
                }
                }
                this.state = 293;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 294;
            this.match(SolidityParser.RBrace);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public inheritanceSpecifierList(): InheritanceSpecifierListContext {
        let localContext = new InheritanceSpecifierListContext(this.context, this.state);
        this.enterRule(localContext, 18, SolidityParser.RULE_inheritanceSpecifierList);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 296;
            this.match(SolidityParser.Is);
            this.state = 297;
            localContext._inheritanceSpecifier = this.inheritanceSpecifier();
            localContext._inheritanceSpecifiers.push(localContext._inheritanceSpecifier!);
            this.state = 302;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 13, this.context);
            while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1 + 1) {
                    {
                    {
                    this.state = 298;
                    this.match(SolidityParser.Comma);
                    this.state = 299;
                    localContext._inheritanceSpecifier = this.inheritanceSpecifier();
                    localContext._inheritanceSpecifiers.push(localContext._inheritanceSpecifier!);
                    }
                    }
                }
                this.state = 304;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 13, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public inheritanceSpecifier(): InheritanceSpecifierContext {
        let localContext = new InheritanceSpecifierContext(this.context, this.state);
        this.enterRule(localContext, 20, SolidityParser.RULE_inheritanceSpecifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 305;
            localContext._name = this.identifierPath();
            this.state = 307;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 72) {
                {
                this.state = 306;
                localContext._arguments = this.callArgumentList();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public contractBodyElement(): ContractBodyElementContext {
        let localContext = new ContractBodyElementContext(this.context, this.state);
        this.enterRule(localContext, 22, SolidityParser.RULE_contractBodyElement);
        try {
            this.state = 321;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 15, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 309;
                this.constructorDefinition();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 310;
                this.functionDefinition();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 311;
                this.modifierDefinition();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 312;
                this.fallbackFunctionDefinition();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 313;
                this.receiveFunctionDefinition();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 314;
                this.structDefinition();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 315;
                this.enumDefinition();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 316;
                this.userDefinedValueTypeDefinition();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 317;
                this.stateVariableDeclaration();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 318;
                this.eventDefinition();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 319;
                this.errorDefinition();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 320;
                this.usingDirective();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public namedArgument(): NamedArgumentContext {
        let localContext = new NamedArgumentContext(this.context, this.state);
        this.enterRule(localContext, 24, SolidityParser.RULE_namedArgument);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 323;
            localContext._name = this.identifier();
            this.state = 324;
            this.match(SolidityParser.Colon);
            this.state = 325;
            localContext._value = this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public callArgumentList(): CallArgumentListContext {
        let localContext = new CallArgumentListContext(this.context, this.state);
        this.enterRule(localContext, 26, SolidityParser.RULE_callArgumentList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 327;
            this.match(SolidityParser.LParen);
            this.state = 350;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SolidityParser.Address:
            case SolidityParser.Bool:
            case SolidityParser.Bytes:
            case SolidityParser.Delete:
            case SolidityParser.Error:
            case SolidityParser.FalseLiteral:
            case SolidityParser.Fixed:
            case SolidityParser.FixedBytes:
            case SolidityParser.From:
            case SolidityParser.Global:
            case SolidityParser.New:
            case SolidityParser.Payable:
            case SolidityParser.Revert:
            case SolidityParser.SignedIntegerType:
            case SolidityParser.String:
            case SolidityParser.Transient:
            case SolidityParser.TrueLiteral:
            case SolidityParser.Type:
            case SolidityParser.Ufixed:
            case SolidityParser.UnsignedIntegerType:
            case SolidityParser.LParen:
            case SolidityParser.RParen:
            case SolidityParser.LBrack:
            case SolidityParser.Sub:
            case SolidityParser.Not:
            case SolidityParser.BitNot:
            case SolidityParser.Inc:
            case SolidityParser.Dec:
            case SolidityParser.NonEmptyStringLiteral:
            case SolidityParser.EmptyStringLiteral:
            case SolidityParser.UnicodeStringLiteral:
            case SolidityParser.HexString:
            case SolidityParser.HexNumber:
            case SolidityParser.DecimalNumber:
            case SolidityParser.Identifier:
                {
                this.state = 336;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2921398920) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 1352357897) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 46036993) !== 0)) {
                    {
                    this.state = 328;
                    this.expression(0);
                    this.state = 333;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 96) {
                        {
                        {
                        this.state = 329;
                        this.match(SolidityParser.Comma);
                        this.state = 330;
                        this.expression(0);
                        }
                        }
                        this.state = 335;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                }
                break;
            case SolidityParser.LBrace:
                {
                this.state = 338;
                this.match(SolidityParser.LBrace);
                this.state = 347;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2686451712) !== 0) || _la === 55 || _la === 60 || _la === 131) {
                    {
                    this.state = 339;
                    this.namedArgument();
                    this.state = 344;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 96) {
                        {
                        {
                        this.state = 340;
                        this.match(SolidityParser.Comma);
                        this.state = 341;
                        this.namedArgument();
                        }
                        }
                        this.state = 346;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 349;
                this.match(SolidityParser.RBrace);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 352;
            this.match(SolidityParser.RParen);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public identifierPath(): IdentifierPathContext {
        let localContext = new IdentifierPathContext(this.context, this.state);
        this.enterRule(localContext, 28, SolidityParser.RULE_identifierPath);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 354;
            this.identifier();
            this.state = 359;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 21, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 355;
                    this.match(SolidityParser.Period);
                    this.state = 356;
                    this.identifier();
                    }
                    }
                }
                this.state = 361;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 21, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public modifierInvocation(): ModifierInvocationContext {
        let localContext = new ModifierInvocationContext(this.context, this.state);
        this.enterRule(localContext, 30, SolidityParser.RULE_modifierInvocation);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 362;
            this.identifierPath();
            this.state = 364;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 72) {
                {
                this.state = 363;
                this.callArgumentList();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public visibility(): VisibilityContext {
        let localContext = new VisibilityContext(this.context, this.state);
        this.enterRule(localContext, 32, SolidityParser.RULE_visibility);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 366;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & 201359361) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public parameterList(): ParameterListContext {
        let localContext = new ParameterListContext(this.context, this.state);
        this.enterRule(localContext, 34, SolidityParser.RULE_parameterList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 368;
            localContext._parameterDeclaration = this.parameterDeclaration();
            localContext._parameters.push(localContext._parameterDeclaration!);
            this.state = 373;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 96) {
                {
                {
                this.state = 369;
                this.match(SolidityParser.Comma);
                this.state = 370;
                localContext._parameterDeclaration = this.parameterDeclaration();
                localContext._parameters.push(localContext._parameterDeclaration!);
                }
                }
                this.state = 375;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public parameterDeclaration(): ParameterDeclarationContext {
        let localContext = new ParameterDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 36, SolidityParser.RULE_parameterDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 376;
            localContext._type_ = this.typeName(0);
            this.state = 378;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 10 || _la === 42 || _la === 57) {
                {
                this.state = 377;
                localContext._location = this.dataLocation();
                }
            }

            this.state = 381;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2686451712) !== 0) || _la === 55 || _la === 60 || _la === 131) {
                {
                this.state = 380;
                localContext._name = this.identifier();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public constructorDefinition(): ConstructorDefinitionContext {
        let localContext = new ConstructorDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 38, SolidityParser.RULE_constructorDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 383;
            this.match(SolidityParser.Constructor);
            this.state = 384;
            this.match(SolidityParser.LParen);
            this.state = 386;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3961520776) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 76201985) !== 0) || _la === 131) {
                {
                this.state = 385;
                localContext._arguments = this.parameterList();
                }
            }

            this.state = 388;
            this.match(SolidityParser.RParen);
            this.state = 395;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2686451712) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 4329985) !== 0) || _la === 131) {
                {
                this.state = 393;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case SolidityParser.Error:
                case SolidityParser.From:
                case SolidityParser.Global:
                case SolidityParser.Revert:
                case SolidityParser.Transient:
                case SolidityParser.Identifier:
                    {
                    this.state = 389;
                    this.modifierInvocation();
                    }
                    break;
                case SolidityParser.Payable:
                    {
                    this.state = 390;
                    this.match(SolidityParser.Payable);
                    }
                    break;
                case SolidityParser.Internal:
                    {
                    this.state = 391;
                    this.match(SolidityParser.Internal);
                    }
                    break;
                case SolidityParser.Public:
                    {
                    this.state = 392;
                    this.match(SolidityParser.Public);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 397;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 398;
            localContext._body = this.block();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public stateMutability(): StateMutabilityContext {
        let localContext = new StateMutabilityContext(this.context, this.state);
        this.enterRule(localContext, 40, SolidityParser.RULE_stateMutability);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 400;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 4194321) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public overrideSpecifier(): OverrideSpecifierContext {
        let localContext = new OverrideSpecifierContext(this.context, this.state);
        this.enterRule(localContext, 42, SolidityParser.RULE_overrideSpecifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 402;
            this.match(SolidityParser.Override);
            this.state = 414;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 72) {
                {
                this.state = 403;
                this.match(SolidityParser.LParen);
                this.state = 404;
                localContext._identifierPath = this.identifierPath();
                localContext._overrides.push(localContext._identifierPath!);
                this.state = 409;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 96) {
                    {
                    {
                    this.state = 405;
                    this.match(SolidityParser.Comma);
                    this.state = 406;
                    localContext._identifierPath = this.identifierPath();
                    localContext._overrides.push(localContext._identifierPath!);
                    }
                    }
                    this.state = 411;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 412;
                this.match(SolidityParser.RParen);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionDefinition(): FunctionDefinitionContext {
        let localContext = new FunctionDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 44, SolidityParser.RULE_functionDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 416;
            this.match(SolidityParser.Function);
            this.state = 420;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SolidityParser.Error:
            case SolidityParser.From:
            case SolidityParser.Global:
            case SolidityParser.Revert:
            case SolidityParser.Transient:
            case SolidityParser.Identifier:
                {
                this.state = 417;
                this.identifier();
                }
                break;
            case SolidityParser.Fallback:
                {
                this.state = 418;
                this.match(SolidityParser.Fallback);
                }
                break;
            case SolidityParser.Receive:
                {
                this.state = 419;
                this.match(SolidityParser.Receive);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 422;
            this.match(SolidityParser.LParen);
            this.state = 424;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3961520776) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 76201985) !== 0) || _la === 131) {
                {
                this.state = 423;
                localContext._arguments = this.parameterList();
                }
            }

            this.state = 426;
            this.match(SolidityParser.RParen);
            this.state = 434;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & 1979843845) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & 49185) !== 0) || _la === 131) {
                {
                this.state = 432;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case SolidityParser.External:
                case SolidityParser.Internal:
                case SolidityParser.Private:
                case SolidityParser.Public:
                    {
                    this.state = 427;
                    this.visibility();
                    }
                    break;
                case SolidityParser.Payable:
                case SolidityParser.Pure:
                case SolidityParser.View:
                    {
                    this.state = 428;
                    this.stateMutability();
                    }
                    break;
                case SolidityParser.Error:
                case SolidityParser.From:
                case SolidityParser.Global:
                case SolidityParser.Revert:
                case SolidityParser.Transient:
                case SolidityParser.Identifier:
                    {
                    this.state = 429;
                    this.modifierInvocation();
                    }
                    break;
                case SolidityParser.Virtual:
                    {
                    this.state = 430;
                    this.match(SolidityParser.Virtual);
                    }
                    break;
                case SolidityParser.Override:
                    {
                    this.state = 431;
                    this.overrideSpecifier();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 436;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 442;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 54) {
                {
                this.state = 437;
                this.match(SolidityParser.Returns);
                this.state = 438;
                this.match(SolidityParser.LParen);
                this.state = 439;
                localContext._returnParameters = this.parameterList();
                this.state = 440;
                this.match(SolidityParser.RParen);
                }
            }

            this.state = 446;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SolidityParser.Semicolon:
                {
                this.state = 444;
                this.match(SolidityParser.Semicolon);
                }
                break;
            case SolidityParser.LBrace:
                {
                this.state = 445;
                localContext._body = this.block();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public modifierDefinition(): ModifierDefinitionContext {
        let localContext = new ModifierDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 46, SolidityParser.RULE_modifierDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 448;
            this.match(SolidityParser.Modifier);
            this.state = 449;
            localContext._name = this.identifier();
            this.state = 455;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 72) {
                {
                this.state = 450;
                this.match(SolidityParser.LParen);
                this.state = 452;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3961520776) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 76201985) !== 0) || _la === 131) {
                    {
                    this.state = 451;
                    localContext._arguments = this.parameterList();
                    }
                }

                this.state = 454;
                this.match(SolidityParser.RParen);
                }
            }

            this.state = 461;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 46 || _la === 70) {
                {
                this.state = 459;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case SolidityParser.Virtual:
                    {
                    this.state = 457;
                    this.match(SolidityParser.Virtual);
                    }
                    break;
                case SolidityParser.Override:
                    {
                    this.state = 458;
                    this.overrideSpecifier();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 463;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 466;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SolidityParser.Semicolon:
                {
                this.state = 464;
                this.match(SolidityParser.Semicolon);
                }
                break;
            case SolidityParser.LBrace:
                {
                this.state = 465;
                localContext._body = this.block();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fallbackFunctionDefinition(): FallbackFunctionDefinitionContext {
        let localContext = new FallbackFunctionDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 48, SolidityParser.RULE_fallbackFunctionDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 468;
            localContext._kind = this.match(SolidityParser.Fallback);
            this.state = 469;
            this.match(SolidityParser.LParen);
            this.state = 471;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3961520776) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 76201985) !== 0) || _la === 131) {
                {
                this.state = 470;
                this.parameterList();
                }
            }

            this.state = 473;
            this.match(SolidityParser.RParen);
            this.state = 481;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840320) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 25182755) !== 0) || _la === 131) {
                {
                this.state = 479;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case SolidityParser.External:
                    {
                    this.state = 474;
                    this.match(SolidityParser.External);
                    }
                    break;
                case SolidityParser.Payable:
                case SolidityParser.Pure:
                case SolidityParser.View:
                    {
                    this.state = 475;
                    this.stateMutability();
                    }
                    break;
                case SolidityParser.Error:
                case SolidityParser.From:
                case SolidityParser.Global:
                case SolidityParser.Revert:
                case SolidityParser.Transient:
                case SolidityParser.Identifier:
                    {
                    this.state = 476;
                    this.modifierInvocation();
                    }
                    break;
                case SolidityParser.Virtual:
                    {
                    this.state = 477;
                    this.match(SolidityParser.Virtual);
                    }
                    break;
                case SolidityParser.Override:
                    {
                    this.state = 478;
                    this.overrideSpecifier();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 483;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 489;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 54) {
                {
                this.state = 484;
                this.match(SolidityParser.Returns);
                this.state = 485;
                this.match(SolidityParser.LParen);
                this.state = 486;
                localContext._returnParameters = this.parameterList();
                this.state = 487;
                this.match(SolidityParser.RParen);
                }
            }

            this.state = 493;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SolidityParser.Semicolon:
                {
                this.state = 491;
                this.match(SolidityParser.Semicolon);
                }
                break;
            case SolidityParser.LBrace:
                {
                this.state = 492;
                localContext._body = this.block();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public receiveFunctionDefinition(): ReceiveFunctionDefinitionContext {
        let localContext = new ReceiveFunctionDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 50, SolidityParser.RULE_receiveFunctionDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 495;
            localContext._kind = this.match(SolidityParser.Receive);
            this.state = 496;
            this.match(SolidityParser.LParen);
            this.state = 497;
            this.match(SolidityParser.RParen);
            this.state = 505;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2694840320) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 16794115) !== 0) || _la === 131) {
                {
                this.state = 503;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case SolidityParser.External:
                    {
                    this.state = 498;
                    this.match(SolidityParser.External);
                    }
                    break;
                case SolidityParser.Payable:
                    {
                    this.state = 499;
                    this.match(SolidityParser.Payable);
                    }
                    break;
                case SolidityParser.Error:
                case SolidityParser.From:
                case SolidityParser.Global:
                case SolidityParser.Revert:
                case SolidityParser.Transient:
                case SolidityParser.Identifier:
                    {
                    this.state = 500;
                    this.modifierInvocation();
                    }
                    break;
                case SolidityParser.Virtual:
                    {
                    this.state = 501;
                    this.match(SolidityParser.Virtual);
                    }
                    break;
                case SolidityParser.Override:
                    {
                    this.state = 502;
                    this.overrideSpecifier();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 507;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 510;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SolidityParser.Semicolon:
                {
                this.state = 508;
                this.match(SolidityParser.Semicolon);
                }
                break;
            case SolidityParser.LBrace:
                {
                this.state = 509;
                localContext._body = this.block();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public structDefinition(): StructDefinitionContext {
        let localContext = new StructDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 52, SolidityParser.RULE_structDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 512;
            this.match(SolidityParser.Struct);
            this.state = 513;
            localContext._name = this.identifier();
            this.state = 514;
            this.match(SolidityParser.LBrace);
            this.state = 516;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 515;
                localContext._members = this.structMember();
                }
                }
                this.state = 518;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3961520776) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 76201985) !== 0) || _la === 131);
            this.state = 520;
            this.match(SolidityParser.RBrace);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public structMember(): StructMemberContext {
        let localContext = new StructMemberContext(this.context, this.state);
        this.enterRule(localContext, 54, SolidityParser.RULE_structMember);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 522;
            localContext._type_ = this.typeName(0);
            this.state = 523;
            localContext._name = this.identifier();
            this.state = 524;
            this.match(SolidityParser.Semicolon);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumDefinition(): EnumDefinitionContext {
        let localContext = new EnumDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 56, SolidityParser.RULE_enumDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 526;
            this.match(SolidityParser.Enum);
            this.state = 527;
            localContext._name = this.identifier();
            this.state = 528;
            this.match(SolidityParser.LBrace);
            this.state = 529;
            localContext._identifier = this.identifier();
            localContext._enumValues.push(localContext._identifier!);
            this.state = 534;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 96) {
                {
                {
                this.state = 530;
                this.match(SolidityParser.Comma);
                this.state = 531;
                localContext._identifier = this.identifier();
                localContext._enumValues.push(localContext._identifier!);
                }
                }
                this.state = 536;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 537;
            this.match(SolidityParser.RBrace);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public userDefinedValueTypeDefinition(): UserDefinedValueTypeDefinitionContext {
        let localContext = new UserDefinedValueTypeDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 58, SolidityParser.RULE_userDefinedValueTypeDefinition);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 539;
            this.match(SolidityParser.Type);
            this.state = 540;
            localContext._name = this.identifier();
            this.state = 541;
            this.match(SolidityParser.Is);
            this.state = 544;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 52, this.context) ) {
            case 1:
                {
                this.state = 542;
                this.elementaryTypeName();
                }
                break;
            case 2:
                {
                this.state = 543;
                this.addressPayable();
                }
                break;
            }
            this.state = 546;
            this.match(SolidityParser.Semicolon);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public stateVariableDeclaration(): StateVariableDeclarationContext {
        let localContext = new StateVariableDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 60, SolidityParser.RULE_stateVariableDeclaration);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 548;
            localContext._type_ = this.typeName(0);
            this.state = 558;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 54, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    this.state = 556;
                    this.errorHandler.sync(this);
                    switch (this.tokenStream.LA(1)) {
                    case SolidityParser.Public:
                        {
                        this.state = 549;
                        this.match(SolidityParser.Public);
                        }
                        break;
                    case SolidityParser.Private:
                        {
                        this.state = 550;
                        this.match(SolidityParser.Private);
                        }
                        break;
                    case SolidityParser.Internal:
                        {
                        this.state = 551;
                        this.match(SolidityParser.Internal);
                        }
                        break;
                    case SolidityParser.Constant:
                        {
                        this.state = 552;
                        this.match(SolidityParser.Constant);
                        }
                        break;
                    case SolidityParser.Override:
                        {
                        this.state = 553;
                        this.overrideSpecifier();
                        }
                        break;
                    case SolidityParser.Immutable:
                        {
                        this.state = 554;
                        this.match(SolidityParser.Immutable);
                        }
                        break;
                    case SolidityParser.Transient:
                        {
                        this.state = 555;
                        this.match(SolidityParser.Transient);
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    }
                }
                this.state = 560;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 54, this.context);
            }
            this.state = 561;
            localContext._name = this.identifier();
            this.state = 564;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 84) {
                {
                this.state = 562;
                this.match(SolidityParser.Assign);
                this.state = 563;
                localContext._initialValue = this.expression(0);
                }
            }

            this.state = 566;
            this.match(SolidityParser.Semicolon);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public constantVariableDeclaration(): ConstantVariableDeclarationContext {
        let localContext = new ConstantVariableDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 62, SolidityParser.RULE_constantVariableDeclaration);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 568;
            localContext._type_ = this.typeName(0);
            this.state = 569;
            this.match(SolidityParser.Constant);
            this.state = 570;
            localContext._name = this.identifier();
            this.state = 571;
            this.match(SolidityParser.Assign);
            this.state = 572;
            localContext._initialValue = this.expression(0);
            this.state = 573;
            this.match(SolidityParser.Semicolon);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public eventParameter(): EventParameterContext {
        let localContext = new EventParameterContext(this.context, this.state);
        this.enterRule(localContext, 64, SolidityParser.RULE_eventParameter);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 575;
            localContext._type_ = this.typeName(0);
            this.state = 577;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 36) {
                {
                this.state = 576;
                this.match(SolidityParser.Indexed);
                }
            }

            this.state = 580;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2686451712) !== 0) || _la === 55 || _la === 60 || _la === 131) {
                {
                this.state = 579;
                localContext._name = this.identifier();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public eventDefinition(): EventDefinitionContext {
        let localContext = new EventDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 66, SolidityParser.RULE_eventDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 582;
            this.match(SolidityParser.Event);
            this.state = 583;
            localContext._name = this.identifier();
            this.state = 584;
            this.match(SolidityParser.LParen);
            this.state = 593;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3961520776) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 76201985) !== 0) || _la === 131) {
                {
                this.state = 585;
                localContext._eventParameter = this.eventParameter();
                localContext._parameters.push(localContext._eventParameter!);
                this.state = 590;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 96) {
                    {
                    {
                    this.state = 586;
                    this.match(SolidityParser.Comma);
                    this.state = 587;
                    localContext._eventParameter = this.eventParameter();
                    localContext._parameters.push(localContext._eventParameter!);
                    }
                    }
                    this.state = 592;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 595;
            this.match(SolidityParser.RParen);
            this.state = 597;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 4) {
                {
                this.state = 596;
                this.match(SolidityParser.Anonymous);
                }
            }

            this.state = 599;
            this.match(SolidityParser.Semicolon);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public errorParameter(): ErrorParameterContext {
        let localContext = new ErrorParameterContext(this.context, this.state);
        this.enterRule(localContext, 68, SolidityParser.RULE_errorParameter);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 601;
            localContext._type_ = this.typeName(0);
            this.state = 603;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2686451712) !== 0) || _la === 55 || _la === 60 || _la === 131) {
                {
                this.state = 602;
                localContext._name = this.identifier();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public errorDefinition(): ErrorDefinitionContext {
        let localContext = new ErrorDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 70, SolidityParser.RULE_errorDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 605;
            this.match(SolidityParser.Error);
            this.state = 606;
            localContext._name = this.identifier();
            this.state = 607;
            this.match(SolidityParser.LParen);
            this.state = 616;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3961520776) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 76201985) !== 0) || _la === 131) {
                {
                this.state = 608;
                localContext._errorParameter = this.errorParameter();
                localContext._parameters.push(localContext._errorParameter!);
                this.state = 613;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 96) {
                    {
                    {
                    this.state = 609;
                    this.match(SolidityParser.Comma);
                    this.state = 610;
                    localContext._errorParameter = this.errorParameter();
                    localContext._parameters.push(localContext._errorParameter!);
                    }
                    }
                    this.state = 615;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 618;
            this.match(SolidityParser.RParen);
            this.state = 619;
            this.match(SolidityParser.Semicolon);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public userDefinableOperator(): UserDefinableOperatorContext {
        let localContext = new UserDefinableOperatorContext(this.context, this.state);
        this.enterRule(localContext, 72, SolidityParser.RULE_userDefinableOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 621;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 784327) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public usingDirective(): UsingDirectiveContext {
        let localContext = new UsingDirectiveContext(this.context, this.state);
        this.enterRule(localContext, 74, SolidityParser.RULE_usingDirective);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 623;
            this.match(SolidityParser.Using);
            this.state = 636;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SolidityParser.Error:
            case SolidityParser.From:
            case SolidityParser.Global:
            case SolidityParser.Revert:
            case SolidityParser.Transient:
            case SolidityParser.Identifier:
                {
                this.state = 624;
                this.identifierPath();
                }
                break;
            case SolidityParser.LBrace:
                {
                {
                this.state = 625;
                this.match(SolidityParser.LBrace);
                this.state = 626;
                this.usingAliases();
                this.state = 631;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 96) {
                    {
                    {
                    this.state = 627;
                    this.match(SolidityParser.Comma);
                    this.state = 628;
                    this.usingAliases();
                    }
                    }
                    this.state = 633;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 634;
                this.match(SolidityParser.RBrace);
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 638;
            this.match(SolidityParser.For);
            this.state = 641;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SolidityParser.Mul:
                {
                this.state = 639;
                this.match(SolidityParser.Mul);
                }
                break;
            case SolidityParser.Address:
            case SolidityParser.Bool:
            case SolidityParser.Bytes:
            case SolidityParser.Error:
            case SolidityParser.Fixed:
            case SolidityParser.FixedBytes:
            case SolidityParser.From:
            case SolidityParser.Function:
            case SolidityParser.Global:
            case SolidityParser.Mapping:
            case SolidityParser.Revert:
            case SolidityParser.SignedIntegerType:
            case SolidityParser.String:
            case SolidityParser.Transient:
            case SolidityParser.Ufixed:
            case SolidityParser.UnsignedIntegerType:
            case SolidityParser.Identifier:
                {
                this.state = 640;
                this.typeName(0);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 644;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 31) {
                {
                this.state = 643;
                this.match(SolidityParser.Global);
                }
            }

            this.state = 646;
            this.match(SolidityParser.Semicolon);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public usingAliases(): UsingAliasesContext {
        let localContext = new UsingAliasesContext(this.context, this.state);
        this.enterRule(localContext, 76, SolidityParser.RULE_usingAliases);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 648;
            this.identifierPath();
            this.state = 651;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 5) {
                {
                this.state = 649;
                this.match(SolidityParser.As);
                this.state = 650;
                this.userDefinableOperator();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public typeName(): TypeNameContext;
    public typeName(_p: number): TypeNameContext;
    public typeName(_p?: number): TypeNameContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new TypeNameContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 78;
        this.enterRecursionRule(localContext, 78, SolidityParser.RULE_typeName, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 659;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 69, this.context) ) {
            case 1:
                {
                this.state = 654;
                this.elementaryTypeName();
                }
                break;
            case 2:
                {
                this.state = 655;
                this.addressPayable();
                }
                break;
            case 3:
                {
                this.state = 656;
                this.functionTypeName();
                }
                break;
            case 4:
                {
                this.state = 657;
                this.mappingType();
                }
                break;
            case 5:
                {
                this.state = 658;
                this.identifierPath();
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 669;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 71, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new TypeNameContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_typeName);
                    this.state = 661;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 662;
                    this.match(SolidityParser.LBrack);
                    this.state = 664;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2921398920) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 1352357897) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 46036993) !== 0)) {
                        {
                        this.state = 663;
                        this.expression(0);
                        }
                    }

                    this.state = 666;
                    this.match(SolidityParser.RBrack);
                    }
                    }
                }
                this.state = 671;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 71, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public elementaryTypeName(): ElementaryTypeNameContext {
        let localContext = new ElementaryTypeNameContext(this.context, this.state);
        this.enterRule(localContext, 80, SolidityParser.RULE_elementaryTypeName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 672;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 201327240) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 2309) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public addressPayable(): AddressPayableContext {
        let localContext = new AddressPayableContext(this.context, this.state);
        this.enterRule(localContext, 82, SolidityParser.RULE_addressPayable);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 674;
            this.match(SolidityParser.Address);
            this.state = 675;
            this.match(SolidityParser.Payable);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionTypeName(): FunctionTypeNameContext {
        let localContext = new FunctionTypeNameContext(this.context, this.state);
        this.enterRule(localContext, 84, SolidityParser.RULE_functionTypeName);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 677;
            this.match(SolidityParser.Function);
            this.state = 678;
            this.match(SolidityParser.LParen);
            this.state = 680;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3961520776) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 76201985) !== 0) || _la === 131) {
                {
                this.state = 679;
                localContext._arguments = this.parameterList();
                }
            }

            this.state = 682;
            this.match(SolidityParser.RParen);
            this.state = 687;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 74, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    this.state = 685;
                    this.errorHandler.sync(this);
                    switch (this.tokenStream.LA(1)) {
                    case SolidityParser.External:
                    case SolidityParser.Internal:
                    case SolidityParser.Private:
                    case SolidityParser.Public:
                        {
                        this.state = 683;
                        this.visibility();
                        }
                        break;
                    case SolidityParser.Payable:
                    case SolidityParser.Pure:
                    case SolidityParser.View:
                        {
                        this.state = 684;
                        this.stateMutability();
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    }
                }
                this.state = 689;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 74, this.context);
            }
            this.state = 695;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 75, this.context) ) {
            case 1:
                {
                this.state = 690;
                this.match(SolidityParser.Returns);
                this.state = 691;
                this.match(SolidityParser.LParen);
                this.state = 692;
                localContext._returnParameters = this.parameterList();
                this.state = 693;
                this.match(SolidityParser.RParen);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public variableDeclaration(): VariableDeclarationContext {
        let localContext = new VariableDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 86, SolidityParser.RULE_variableDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 697;
            localContext._type_ = this.typeName(0);
            this.state = 699;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 10 || _la === 42 || _la === 57) {
                {
                this.state = 698;
                localContext._location = this.dataLocation();
                }
            }

            this.state = 701;
            localContext._name = this.identifier();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dataLocation(): DataLocationContext {
        let localContext = new DataLocationContext(this.context, this.state);
        this.enterRule(localContext, 88, SolidityParser.RULE_dataLocation);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 703;
            _la = this.tokenStream.LA(1);
            if(!(_la === 10 || _la === 42 || _la === 57)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public expression(): ExpressionContext;
    public expression(_p: number): ExpressionContext;
    public expression(_p?: number): ExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 90;
        this.enterRecursionRule(localContext, 90, SolidityParser.RULE_expression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 725;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SolidityParser.Payable:
                {
                localContext = new PayableConversionContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 706;
                this.match(SolidityParser.Payable);
                this.state = 707;
                this.callArgumentList();
                }
                break;
            case SolidityParser.Type:
                {
                localContext = new MetaTypeContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 708;
                this.match(SolidityParser.Type);
                this.state = 709;
                this.match(SolidityParser.LParen);
                this.state = 710;
                this.typeName(0);
                this.state = 711;
                this.match(SolidityParser.RParen);
                }
                break;
            case SolidityParser.Delete:
            case SolidityParser.Sub:
            case SolidityParser.Not:
            case SolidityParser.BitNot:
            case SolidityParser.Inc:
            case SolidityParser.Dec:
                {
                localContext = new UnaryPrefixOperationContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 713;
                _la = this.tokenStream.LA(1);
                if(!(_la === 16 || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 30721) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 714;
                this.expression(19);
                }
                break;
            case SolidityParser.New:
                {
                localContext = new NewExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 715;
                this.match(SolidityParser.New);
                this.state = 716;
                this.typeName(0);
                }
                break;
            case SolidityParser.LParen:
                {
                localContext = new TupleContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 717;
                this.tupleExpression();
                }
                break;
            case SolidityParser.LBrack:
                {
                localContext = new InlineArrayContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 718;
                this.inlineArrayExpression();
                }
                break;
            case SolidityParser.Address:
            case SolidityParser.Bool:
            case SolidityParser.Bytes:
            case SolidityParser.Error:
            case SolidityParser.FalseLiteral:
            case SolidityParser.Fixed:
            case SolidityParser.FixedBytes:
            case SolidityParser.From:
            case SolidityParser.Global:
            case SolidityParser.Revert:
            case SolidityParser.SignedIntegerType:
            case SolidityParser.String:
            case SolidityParser.Transient:
            case SolidityParser.TrueLiteral:
            case SolidityParser.Ufixed:
            case SolidityParser.UnsignedIntegerType:
            case SolidityParser.NonEmptyStringLiteral:
            case SolidityParser.EmptyStringLiteral:
            case SolidityParser.UnicodeStringLiteral:
            case SolidityParser.HexString:
            case SolidityParser.HexNumber:
            case SolidityParser.DecimalNumber:
            case SolidityParser.Identifier:
                {
                localContext = new PrimaryExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 723;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 77, this.context) ) {
                case 1:
                    {
                    this.state = 719;
                    this.identifier();
                    }
                    break;
                case 2:
                    {
                    this.state = 720;
                    this.literal();
                    }
                    break;
                case 3:
                    {
                    this.state = 721;
                    this.literalWithSubDenomination();
                    }
                    break;
                case 4:
                    {
                    this.state = 722;
                    this.elementaryTypeName();
                    }
                    break;
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 811;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 86, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 809;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 85, this.context) ) {
                    case 1:
                        {
                        localContext = new ExpOperationContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 727;
                        if (!(this.precpred(this.context, 17))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 17)");
                        }
                        this.state = 728;
                        this.match(SolidityParser.Exp);
                        this.state = 729;
                        this.expression(17);
                        }
                        break;
                    case 2:
                        {
                        localContext = new MulDivModOperationContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 730;
                        if (!(this.precpred(this.context, 16))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 16)");
                        }
                        this.state = 731;
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & 7) !== 0))) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 732;
                        this.expression(17);
                        }
                        break;
                    case 3:
                        {
                        localContext = new AddSubOperationContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 733;
                        if (!(this.precpred(this.context, 15))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 15)");
                        }
                        this.state = 734;
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 105 || _la === 106)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 735;
                        this.expression(16);
                        }
                        break;
                    case 4:
                        {
                        localContext = new ShiftOperationContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 736;
                        if (!(this.precpred(this.context, 14))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 14)");
                        }
                        this.state = 737;
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 7) !== 0))) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 738;
                        this.expression(15);
                        }
                        break;
                    case 5:
                        {
                        localContext = new BitAndOperationContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 739;
                        if (!(this.precpred(this.context, 13))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 13)");
                        }
                        this.state = 740;
                        this.match(SolidityParser.BitAnd);
                        this.state = 741;
                        this.expression(14);
                        }
                        break;
                    case 6:
                        {
                        localContext = new BitXorOperationContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 742;
                        if (!(this.precpred(this.context, 12))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 12)");
                        }
                        this.state = 743;
                        this.match(SolidityParser.BitXor);
                        this.state = 744;
                        this.expression(13);
                        }
                        break;
                    case 7:
                        {
                        localContext = new BitOrOperationContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 745;
                        if (!(this.precpred(this.context, 11))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 11)");
                        }
                        this.state = 746;
                        this.match(SolidityParser.BitOr);
                        this.state = 747;
                        this.expression(12);
                        }
                        break;
                    case 8:
                        {
                        localContext = new OrderComparisonContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 748;
                        if (!(this.precpred(this.context, 10))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 10)");
                        }
                        this.state = 749;
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 15) !== 0))) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 750;
                        this.expression(11);
                        }
                        break;
                    case 9:
                        {
                        localContext = new EqualityComparisonContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 751;
                        if (!(this.precpred(this.context, 9))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 9)");
                        }
                        this.state = 752;
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 111 || _la === 112)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 753;
                        this.expression(10);
                        }
                        break;
                    case 10:
                        {
                        localContext = new AndOperationContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 754;
                        if (!(this.precpred(this.context, 8))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 8)");
                        }
                        this.state = 755;
                        this.match(SolidityParser.And);
                        this.state = 756;
                        this.expression(9);
                        }
                        break;
                    case 11:
                        {
                        localContext = new OrOperationContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 757;
                        if (!(this.precpred(this.context, 7))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 7)");
                        }
                        this.state = 758;
                        this.match(SolidityParser.Or);
                        this.state = 759;
                        this.expression(8);
                        }
                        break;
                    case 12:
                        {
                        localContext = new ConditionalContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 760;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 761;
                        this.match(SolidityParser.Conditional);
                        this.state = 762;
                        this.expression(0);
                        this.state = 763;
                        this.match(SolidityParser.Colon);
                        this.state = 764;
                        this.expression(6);
                        }
                        break;
                    case 13:
                        {
                        localContext = new AssignmentContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 766;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 767;
                        this.assignOp();
                        this.state = 768;
                        this.expression(5);
                        }
                        break;
                    case 14:
                        {
                        localContext = new IndexAccessContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 770;
                        if (!(this.precpred(this.context, 26))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 26)");
                        }
                        this.state = 771;
                        this.match(SolidityParser.LBrack);
                        this.state = 773;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2921398920) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 1352357897) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 46036993) !== 0)) {
                            {
                            this.state = 772;
                            (localContext as IndexAccessContext)._index = this.expression(0);
                            }
                        }

                        this.state = 775;
                        this.match(SolidityParser.RBrack);
                        }
                        break;
                    case 15:
                        {
                        localContext = new IndexRangeAccessContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 776;
                        if (!(this.precpred(this.context, 25))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 25)");
                        }
                        this.state = 777;
                        this.match(SolidityParser.LBrack);
                        this.state = 779;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2921398920) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 1352357897) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 46036993) !== 0)) {
                            {
                            this.state = 778;
                            (localContext as IndexRangeAccessContext)._startIndex = this.expression(0);
                            }
                        }

                        this.state = 781;
                        this.match(SolidityParser.Colon);
                        this.state = 783;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2921398920) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 1352357897) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 46036993) !== 0)) {
                            {
                            this.state = 782;
                            (localContext as IndexRangeAccessContext)._endIndex = this.expression(0);
                            }
                        }

                        this.state = 785;
                        this.match(SolidityParser.RBrack);
                        }
                        break;
                    case 16:
                        {
                        localContext = new MemberAccessContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 786;
                        if (!(this.precpred(this.context, 24))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 24)");
                        }
                        this.state = 787;
                        this.match(SolidityParser.Period);
                        this.state = 790;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                        case SolidityParser.Error:
                        case SolidityParser.From:
                        case SolidityParser.Global:
                        case SolidityParser.Revert:
                        case SolidityParser.Transient:
                        case SolidityParser.Identifier:
                            {
                            this.state = 788;
                            this.identifier();
                            }
                            break;
                        case SolidityParser.Address:
                            {
                            this.state = 789;
                            this.match(SolidityParser.Address);
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                        }
                        }
                        break;
                    case 17:
                        {
                        localContext = new FunctionCallOptionsContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 792;
                        if (!(this.precpred(this.context, 23))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 23)");
                        }
                        this.state = 793;
                        this.match(SolidityParser.LBrace);
                        this.state = 802;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2686451712) !== 0) || _la === 55 || _la === 60 || _la === 131) {
                            {
                            this.state = 794;
                            this.namedArgument();
                            this.state = 799;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            while (_la === 96) {
                                {
                                {
                                this.state = 795;
                                this.match(SolidityParser.Comma);
                                this.state = 796;
                                this.namedArgument();
                                }
                                }
                                this.state = 801;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                            }
                            }
                        }

                        this.state = 804;
                        this.match(SolidityParser.RBrace);
                        }
                        break;
                    case 18:
                        {
                        localContext = new FunctionCallContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 805;
                        if (!(this.precpred(this.context, 22))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 22)");
                        }
                        this.state = 806;
                        this.callArgumentList();
                        }
                        break;
                    case 19:
                        {
                        localContext = new UnarySuffixOperationContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SolidityParser.RULE_expression);
                        this.state = 807;
                        if (!(this.precpred(this.context, 18))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 18)");
                        }
                        this.state = 808;
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 119 || _la === 120)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        }
                        break;
                    }
                    }
                }
                this.state = 813;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 86, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public assignOp(): AssignOpContext {
        let localContext = new AssignOpContext(this.context, this.state);
        this.enterRule(localContext, 92, SolidityParser.RULE_assignOp);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 814;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 4095) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tupleExpression(): TupleExpressionContext {
        let localContext = new TupleExpressionContext(this.context, this.state);
        this.enterRule(localContext, 94, SolidityParser.RULE_tupleExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 816;
            this.match(SolidityParser.LParen);
            {
            this.state = 818;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2921398920) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 1352357897) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 46036993) !== 0)) {
                {
                this.state = 817;
                this.expression(0);
                }
            }

            this.state = 826;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 96) {
                {
                {
                this.state = 820;
                this.match(SolidityParser.Comma);
                this.state = 822;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2921398920) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 1352357897) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 46036993) !== 0)) {
                    {
                    this.state = 821;
                    this.expression(0);
                    }
                }

                }
                }
                this.state = 828;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
            this.state = 829;
            this.match(SolidityParser.RParen);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public inlineArrayExpression(): InlineArrayExpressionContext {
        let localContext = new InlineArrayExpressionContext(this.context, this.state);
        this.enterRule(localContext, 96, SolidityParser.RULE_inlineArrayExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 831;
            this.match(SolidityParser.LBrack);
            {
            this.state = 832;
            this.expression(0);
            this.state = 837;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 96) {
                {
                {
                this.state = 833;
                this.match(SolidityParser.Comma);
                this.state = 834;
                this.expression(0);
                }
                }
                this.state = 839;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
            this.state = 840;
            this.match(SolidityParser.RBrack);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public identifier(): IdentifierContext {
        let localContext = new IdentifierContext(this.context, this.state);
        this.enterRule(localContext, 98, SolidityParser.RULE_identifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 842;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 2686451712) !== 0) || _la === 55 || _la === 60 || _la === 131)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public literal(): LiteralContext {
        let localContext = new LiteralContext(this.context, this.state);
        this.enterRule(localContext, 100, SolidityParser.RULE_literal);
        try {
            this.state = 849;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SolidityParser.NonEmptyStringLiteral:
            case SolidityParser.EmptyStringLiteral:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 844;
                this.stringLiteral();
                }
                break;
            case SolidityParser.HexNumber:
            case SolidityParser.DecimalNumber:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 845;
                this.numberLiteral();
                }
                break;
            case SolidityParser.FalseLiteral:
            case SolidityParser.TrueLiteral:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 846;
                this.boolLiteral();
                }
                break;
            case SolidityParser.HexString:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 847;
                this.hexStringLiteral();
                }
                break;
            case SolidityParser.UnicodeStringLiteral:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 848;
                this.unicodeStringLiteral();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public literalWithSubDenomination(): LiteralWithSubDenominationContext {
        let localContext = new LiteralWithSubDenominationContext(this.context, this.state);
        this.enterRule(localContext, 102, SolidityParser.RULE_literalWithSubDenomination);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 851;
            this.numberLiteral();
            this.state = 852;
            this.match(SolidityParser.SubDenomination);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public boolLiteral(): BoolLiteralContext {
        let localContext = new BoolLiteralContext(this.context, this.state);
        this.enterRule(localContext, 104, SolidityParser.RULE_boolLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 854;
            _la = this.tokenStream.LA(1);
            if(!(_la === 25 || _la === 61)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public stringLiteral(): StringLiteralContext {
        let localContext = new StringLiteralContext(this.context, this.state);
        this.enterRule(localContext, 106, SolidityParser.RULE_stringLiteral);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 857;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 856;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 123 || _la === 124)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 859;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 92, this.context);
            } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public hexStringLiteral(): HexStringLiteralContext {
        let localContext = new HexStringLiteralContext(this.context, this.state);
        this.enterRule(localContext, 108, SolidityParser.RULE_hexStringLiteral);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 862;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 861;
                    this.match(SolidityParser.HexString);
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 864;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 93, this.context);
            } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public unicodeStringLiteral(): UnicodeStringLiteralContext {
        let localContext = new UnicodeStringLiteralContext(this.context, this.state);
        this.enterRule(localContext, 110, SolidityParser.RULE_unicodeStringLiteral);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 867;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 866;
                    this.match(SolidityParser.UnicodeStringLiteral);
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 869;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 94, this.context);
            } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public numberLiteral(): NumberLiteralContext {
        let localContext = new NumberLiteralContext(this.context, this.state);
        this.enterRule(localContext, 112, SolidityParser.RULE_numberLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 871;
            _la = this.tokenStream.LA(1);
            if(!(_la === 127 || _la === 129)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public block(): BlockContext {
        let localContext = new BlockContext(this.context, this.state);
        this.enterRule(localContext, 114, SolidityParser.RULE_block);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 873;
            this.match(SolidityParser.LBrace);
            this.state = 878;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4264248264) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 4207954177) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 2757) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 46036993) !== 0)) {
                {
                this.state = 876;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case SolidityParser.Address:
                case SolidityParser.Assembly:
                case SolidityParser.Bool:
                case SolidityParser.Break:
                case SolidityParser.Bytes:
                case SolidityParser.Continue:
                case SolidityParser.Delete:
                case SolidityParser.Do:
                case SolidityParser.Emit:
                case SolidityParser.Error:
                case SolidityParser.FalseLiteral:
                case SolidityParser.Fixed:
                case SolidityParser.FixedBytes:
                case SolidityParser.For:
                case SolidityParser.From:
                case SolidityParser.Function:
                case SolidityParser.Global:
                case SolidityParser.If:
                case SolidityParser.Mapping:
                case SolidityParser.New:
                case SolidityParser.Payable:
                case SolidityParser.Return:
                case SolidityParser.Revert:
                case SolidityParser.SignedIntegerType:
                case SolidityParser.String:
                case SolidityParser.Transient:
                case SolidityParser.TrueLiteral:
                case SolidityParser.Try:
                case SolidityParser.Type:
                case SolidityParser.Ufixed:
                case SolidityParser.UnsignedIntegerType:
                case SolidityParser.While:
                case SolidityParser.LParen:
                case SolidityParser.LBrack:
                case SolidityParser.LBrace:
                case SolidityParser.Sub:
                case SolidityParser.Not:
                case SolidityParser.BitNot:
                case SolidityParser.Inc:
                case SolidityParser.Dec:
                case SolidityParser.NonEmptyStringLiteral:
                case SolidityParser.EmptyStringLiteral:
                case SolidityParser.UnicodeStringLiteral:
                case SolidityParser.HexString:
                case SolidityParser.HexNumber:
                case SolidityParser.DecimalNumber:
                case SolidityParser.Identifier:
                    {
                    this.state = 874;
                    this.statement();
                    }
                    break;
                case SolidityParser.Unchecked:
                    {
                    this.state = 875;
                    this.uncheckedBlock();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 880;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 881;
            this.match(SolidityParser.RBrace);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public uncheckedBlock(): UncheckedBlockContext {
        let localContext = new UncheckedBlockContext(this.context, this.state);
        this.enterRule(localContext, 116, SolidityParser.RULE_uncheckedBlock);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 883;
            this.match(SolidityParser.Unchecked);
            this.state = 884;
            this.block();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statement(): StatementContext {
        let localContext = new StatementContext(this.context, this.state);
        this.enterRule(localContext, 118, SolidityParser.RULE_statement);
        try {
            this.state = 899;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 97, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 886;
                this.block();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 887;
                this.simpleStatement();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 888;
                this.ifStatement();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 889;
                this.forStatement();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 890;
                this.whileStatement();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 891;
                this.doWhileStatement();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 892;
                this.continueStatement();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 893;
                this.breakStatement();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 894;
                this.tryStatement();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 895;
                this.returnStatement();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 896;
                this.emitStatement();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 897;
                this.revertStatement();
                }
                break;
            case 13:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 898;
                this.assemblyStatement();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public simpleStatement(): SimpleStatementContext {
        let localContext = new SimpleStatementContext(this.context, this.state);
        this.enterRule(localContext, 120, SolidityParser.RULE_simpleStatement);
        try {
            this.state = 903;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 98, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 901;
                this.variableDeclarationStatement();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 902;
                this.expressionStatement();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public ifStatement(): IfStatementContext {
        let localContext = new IfStatementContext(this.context, this.state);
        this.enterRule(localContext, 122, SolidityParser.RULE_ifStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 905;
            this.match(SolidityParser.If);
            this.state = 906;
            this.match(SolidityParser.LParen);
            this.state = 907;
            this.expression(0);
            this.state = 908;
            this.match(SolidityParser.RParen);
            this.state = 909;
            this.statement();
            this.state = 912;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 99, this.context) ) {
            case 1:
                {
                this.state = 910;
                this.match(SolidityParser.Else);
                this.state = 911;
                this.statement();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public forStatement(): ForStatementContext {
        let localContext = new ForStatementContext(this.context, this.state);
        this.enterRule(localContext, 124, SolidityParser.RULE_forStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 914;
            this.match(SolidityParser.For);
            this.state = 915;
            this.match(SolidityParser.LParen);
            this.state = 918;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SolidityParser.Address:
            case SolidityParser.Bool:
            case SolidityParser.Bytes:
            case SolidityParser.Delete:
            case SolidityParser.Error:
            case SolidityParser.FalseLiteral:
            case SolidityParser.Fixed:
            case SolidityParser.FixedBytes:
            case SolidityParser.From:
            case SolidityParser.Function:
            case SolidityParser.Global:
            case SolidityParser.Mapping:
            case SolidityParser.New:
            case SolidityParser.Payable:
            case SolidityParser.Revert:
            case SolidityParser.SignedIntegerType:
            case SolidityParser.String:
            case SolidityParser.Transient:
            case SolidityParser.TrueLiteral:
            case SolidityParser.Type:
            case SolidityParser.Ufixed:
            case SolidityParser.UnsignedIntegerType:
            case SolidityParser.LParen:
            case SolidityParser.LBrack:
            case SolidityParser.Sub:
            case SolidityParser.Not:
            case SolidityParser.BitNot:
            case SolidityParser.Inc:
            case SolidityParser.Dec:
            case SolidityParser.NonEmptyStringLiteral:
            case SolidityParser.EmptyStringLiteral:
            case SolidityParser.UnicodeStringLiteral:
            case SolidityParser.HexString:
            case SolidityParser.HexNumber:
            case SolidityParser.DecimalNumber:
            case SolidityParser.Identifier:
                {
                this.state = 916;
                this.simpleStatement();
                }
                break;
            case SolidityParser.Semicolon:
                {
                this.state = 917;
                this.match(SolidityParser.Semicolon);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 922;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SolidityParser.Address:
            case SolidityParser.Bool:
            case SolidityParser.Bytes:
            case SolidityParser.Delete:
            case SolidityParser.Error:
            case SolidityParser.FalseLiteral:
            case SolidityParser.Fixed:
            case SolidityParser.FixedBytes:
            case SolidityParser.From:
            case SolidityParser.Global:
            case SolidityParser.New:
            case SolidityParser.Payable:
            case SolidityParser.Revert:
            case SolidityParser.SignedIntegerType:
            case SolidityParser.String:
            case SolidityParser.Transient:
            case SolidityParser.TrueLiteral:
            case SolidityParser.Type:
            case SolidityParser.Ufixed:
            case SolidityParser.UnsignedIntegerType:
            case SolidityParser.LParen:
            case SolidityParser.LBrack:
            case SolidityParser.Sub:
            case SolidityParser.Not:
            case SolidityParser.BitNot:
            case SolidityParser.Inc:
            case SolidityParser.Dec:
            case SolidityParser.NonEmptyStringLiteral:
            case SolidityParser.EmptyStringLiteral:
            case SolidityParser.UnicodeStringLiteral:
            case SolidityParser.HexString:
            case SolidityParser.HexNumber:
            case SolidityParser.DecimalNumber:
            case SolidityParser.Identifier:
                {
                this.state = 920;
                this.expressionStatement();
                }
                break;
            case SolidityParser.Semicolon:
                {
                this.state = 921;
                this.match(SolidityParser.Semicolon);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 925;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2921398920) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 1352357897) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 46036993) !== 0)) {
                {
                this.state = 924;
                this.expression(0);
                }
            }

            this.state = 927;
            this.match(SolidityParser.RParen);
            this.state = 928;
            this.statement();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public whileStatement(): WhileStatementContext {
        let localContext = new WhileStatementContext(this.context, this.state);
        this.enterRule(localContext, 126, SolidityParser.RULE_whileStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 930;
            this.match(SolidityParser.While);
            this.state = 931;
            this.match(SolidityParser.LParen);
            this.state = 932;
            this.expression(0);
            this.state = 933;
            this.match(SolidityParser.RParen);
            this.state = 934;
            this.statement();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public doWhileStatement(): DoWhileStatementContext {
        let localContext = new DoWhileStatementContext(this.context, this.state);
        this.enterRule(localContext, 128, SolidityParser.RULE_doWhileStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 936;
            this.match(SolidityParser.Do);
            this.state = 937;
            this.statement();
            this.state = 938;
            this.match(SolidityParser.While);
            this.state = 939;
            this.match(SolidityParser.LParen);
            this.state = 940;
            this.expression(0);
            this.state = 941;
            this.match(SolidityParser.RParen);
            this.state = 942;
            this.match(SolidityParser.Semicolon);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public continueStatement(): ContinueStatementContext {
        let localContext = new ContinueStatementContext(this.context, this.state);
        this.enterRule(localContext, 130, SolidityParser.RULE_continueStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 944;
            this.match(SolidityParser.Continue);
            this.state = 945;
            this.match(SolidityParser.Semicolon);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public breakStatement(): BreakStatementContext {
        let localContext = new BreakStatementContext(this.context, this.state);
        this.enterRule(localContext, 132, SolidityParser.RULE_breakStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 947;
            this.match(SolidityParser.Break);
            this.state = 948;
            this.match(SolidityParser.Semicolon);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tryStatement(): TryStatementContext {
        let localContext = new TryStatementContext(this.context, this.state);
        this.enterRule(localContext, 134, SolidityParser.RULE_tryStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 950;
            this.match(SolidityParser.Try);
            this.state = 951;
            this.expression(0);
            this.state = 957;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 54) {
                {
                this.state = 952;
                this.match(SolidityParser.Returns);
                this.state = 953;
                this.match(SolidityParser.LParen);
                this.state = 954;
                localContext._returnParameters = this.parameterList();
                this.state = 955;
                this.match(SolidityParser.RParen);
                }
            }

            this.state = 959;
            this.block();
            this.state = 961;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 960;
                this.catchClause();
                }
                }
                this.state = 963;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 11);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public catchClause(): CatchClauseContext {
        let localContext = new CatchClauseContext(this.context, this.state);
        this.enterRule(localContext, 136, SolidityParser.RULE_catchClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 965;
            this.match(SolidityParser.Catch);
            this.state = 973;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2686451712) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & 131105) !== 0) || _la === 131) {
                {
                this.state = 967;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2686451712) !== 0) || _la === 55 || _la === 60 || _la === 131) {
                    {
                    this.state = 966;
                    this.identifier();
                    }
                }

                this.state = 969;
                this.match(SolidityParser.LParen);
                {
                this.state = 970;
                localContext._arguments = this.parameterList();
                }
                this.state = 971;
                this.match(SolidityParser.RParen);
                }
            }

            this.state = 975;
            this.block();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public returnStatement(): ReturnStatementContext {
        let localContext = new ReturnStatementContext(this.context, this.state);
        this.enterRule(localContext, 138, SolidityParser.RULE_returnStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 977;
            this.match(SolidityParser.Return);
            this.state = 979;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2921398920) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 1352357897) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 46036993) !== 0)) {
                {
                this.state = 978;
                this.expression(0);
                }
            }

            this.state = 981;
            this.match(SolidityParser.Semicolon);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public emitStatement(): EmitStatementContext {
        let localContext = new EmitStatementContext(this.context, this.state);
        this.enterRule(localContext, 140, SolidityParser.RULE_emitStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 983;
            this.match(SolidityParser.Emit);
            this.state = 984;
            this.expression(0);
            this.state = 985;
            this.callArgumentList();
            this.state = 986;
            this.match(SolidityParser.Semicolon);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public revertStatement(): RevertStatementContext {
        let localContext = new RevertStatementContext(this.context, this.state);
        this.enterRule(localContext, 142, SolidityParser.RULE_revertStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 988;
            this.match(SolidityParser.Revert);
            this.state = 989;
            this.expression(0);
            this.state = 990;
            this.callArgumentList();
            this.state = 991;
            this.match(SolidityParser.Semicolon);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public assemblyStatement(): AssemblyStatementContext {
        let localContext = new AssemblyStatementContext(this.context, this.state);
        this.enterRule(localContext, 144, SolidityParser.RULE_assemblyStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 993;
            this.match(SolidityParser.Assembly);
            this.state = 995;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 135) {
                {
                this.state = 994;
                this.match(SolidityParser.AssemblyDialect);
                }
            }

            this.state = 998;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 138) {
                {
                this.state = 997;
                this.assemblyFlags();
                }
            }

            this.state = 1000;
            this.match(SolidityParser.AssemblyLBrace);
            this.state = 1004;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 4220901) !== 0)) {
                {
                {
                this.state = 1001;
                this.yulStatement();
                }
                }
                this.state = 1006;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1007;
            this.match(SolidityParser.YulRBrace);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public assemblyFlags(): AssemblyFlagsContext {
        let localContext = new AssemblyFlagsContext(this.context, this.state);
        this.enterRule(localContext, 146, SolidityParser.RULE_assemblyFlags);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1009;
            this.match(SolidityParser.AssemblyBlockLParen);
            this.state = 1010;
            this.match(SolidityParser.AssemblyFlagString);
            this.state = 1015;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 140) {
                {
                {
                this.state = 1011;
                this.match(SolidityParser.AssemblyBlockComma);
                this.state = 1012;
                this.match(SolidityParser.AssemblyFlagString);
                }
                }
                this.state = 1017;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1018;
            this.match(SolidityParser.AssemblyBlockRParen);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public variableDeclarationList(): VariableDeclarationListContext {
        let localContext = new VariableDeclarationListContext(this.context, this.state);
        this.enterRule(localContext, 148, SolidityParser.RULE_variableDeclarationList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1020;
            localContext._variableDeclaration = this.variableDeclaration();
            localContext._variableDeclarations.push(localContext._variableDeclaration!);
            this.state = 1025;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 96) {
                {
                {
                this.state = 1021;
                this.match(SolidityParser.Comma);
                this.state = 1022;
                localContext._variableDeclaration = this.variableDeclaration();
                localContext._variableDeclarations.push(localContext._variableDeclaration!);
                }
                }
                this.state = 1027;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public variableDeclarationTuple(): VariableDeclarationTupleContext {
        let localContext = new VariableDeclarationTupleContext(this.context, this.state);
        this.enterRule(localContext, 150, SolidityParser.RULE_variableDeclarationTuple);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1028;
            this.match(SolidityParser.LParen);
            {
            this.state = 1032;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 96) {
                {
                {
                this.state = 1029;
                this.match(SolidityParser.Comma);
                }
                }
                this.state = 1034;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1035;
            localContext._variableDeclaration = this.variableDeclaration();
            localContext._variableDeclarations.push(localContext._variableDeclaration!);
            }
            this.state = 1043;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 96) {
                {
                {
                this.state = 1037;
                this.match(SolidityParser.Comma);
                this.state = 1039;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3961520776) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 76201985) !== 0) || _la === 131) {
                    {
                    this.state = 1038;
                    localContext._variableDeclaration = this.variableDeclaration();
                    localContext._variableDeclarations.push(localContext._variableDeclaration!);
                    }
                }

                }
                }
                this.state = 1045;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1046;
            this.match(SolidityParser.RParen);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public variableDeclarationStatement(): VariableDeclarationStatementContext {
        let localContext = new VariableDeclarationStatementContext(this.context, this.state);
        this.enterRule(localContext, 152, SolidityParser.RULE_variableDeclarationStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1057;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SolidityParser.Address:
            case SolidityParser.Bool:
            case SolidityParser.Bytes:
            case SolidityParser.Error:
            case SolidityParser.Fixed:
            case SolidityParser.FixedBytes:
            case SolidityParser.From:
            case SolidityParser.Function:
            case SolidityParser.Global:
            case SolidityParser.Mapping:
            case SolidityParser.Revert:
            case SolidityParser.SignedIntegerType:
            case SolidityParser.String:
            case SolidityParser.Transient:
            case SolidityParser.Ufixed:
            case SolidityParser.UnsignedIntegerType:
            case SolidityParser.Identifier:
                {
                {
                this.state = 1048;
                this.variableDeclaration();
                this.state = 1051;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 84) {
                    {
                    this.state = 1049;
                    this.match(SolidityParser.Assign);
                    this.state = 1050;
                    this.expression(0);
                    }
                }

                }
                }
                break;
            case SolidityParser.LParen:
                {
                {
                this.state = 1053;
                this.variableDeclarationTuple();
                this.state = 1054;
                this.match(SolidityParser.Assign);
                this.state = 1055;
                this.expression(0);
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 1059;
            this.match(SolidityParser.Semicolon);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expressionStatement(): ExpressionStatementContext {
        let localContext = new ExpressionStatementContext(this.context, this.state);
        this.enterRule(localContext, 154, SolidityParser.RULE_expressionStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1061;
            this.expression(0);
            this.state = 1062;
            this.match(SolidityParser.Semicolon);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public mappingType(): MappingTypeContext {
        let localContext = new MappingTypeContext(this.context, this.state);
        this.enterRule(localContext, 156, SolidityParser.RULE_mappingType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1064;
            this.match(SolidityParser.Mapping);
            this.state = 1065;
            this.match(SolidityParser.LParen);
            this.state = 1066;
            localContext._key = this.mappingKeyType();
            this.state = 1068;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2686451712) !== 0) || _la === 55 || _la === 60 || _la === 131) {
                {
                this.state = 1067;
                localContext._name = this.identifier();
                }
            }

            this.state = 1070;
            this.match(SolidityParser.DoubleArrow);
            this.state = 1071;
            localContext._value = this.typeName(0);
            this.state = 1073;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2686451712) !== 0) || _la === 55 || _la === 60 || _la === 131) {
                {
                this.state = 1072;
                localContext._name = this.identifier();
                }
            }

            this.state = 1075;
            this.match(SolidityParser.RParen);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public mappingKeyType(): MappingKeyTypeContext {
        let localContext = new MappingKeyTypeContext(this.context, this.state);
        this.enterRule(localContext, 158, SolidityParser.RULE_mappingKeyType);
        try {
            this.state = 1079;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SolidityParser.Address:
            case SolidityParser.Bool:
            case SolidityParser.Bytes:
            case SolidityParser.Fixed:
            case SolidityParser.FixedBytes:
            case SolidityParser.SignedIntegerType:
            case SolidityParser.String:
            case SolidityParser.Ufixed:
            case SolidityParser.UnsignedIntegerType:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1077;
                this.elementaryTypeName();
                }
                break;
            case SolidityParser.Error:
            case SolidityParser.From:
            case SolidityParser.Global:
            case SolidityParser.Revert:
            case SolidityParser.Transient:
            case SolidityParser.Identifier:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1078;
                this.identifierPath();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public yulStatement(): YulStatementContext {
        let localContext = new YulStatementContext(this.context, this.state);
        this.enterRule(localContext, 160, SolidityParser.RULE_yulStatement);
        try {
            this.state = 1092;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 121, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1081;
                this.yulBlock();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1082;
                this.yulVariableDeclaration();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1083;
                this.yulAssignment();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1084;
                this.yulFunctionCall();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1085;
                this.yulIfStatement();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1086;
                this.yulForStatement();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1087;
                this.yulSwitchStatement();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1088;
                this.match(SolidityParser.YulLeave);
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 1089;
                this.match(SolidityParser.YulBreak);
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 1090;
                this.match(SolidityParser.YulContinue);
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 1091;
                this.yulFunctionDefinition();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public yulBlock(): YulBlockContext {
        let localContext = new YulBlockContext(this.context, this.state);
        this.enterRule(localContext, 162, SolidityParser.RULE_yulBlock);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1094;
            this.match(SolidityParser.YulLBrace);
            this.state = 1098;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & 4220901) !== 0)) {
                {
                {
                this.state = 1095;
                this.yulStatement();
                }
                }
                this.state = 1100;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1101;
            this.match(SolidityParser.YulRBrace);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public yulVariableDeclaration(): YulVariableDeclarationContext {
        let localContext = new YulVariableDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 164, SolidityParser.RULE_yulVariableDeclaration);
        let _la: number;
        try {
            this.state = 1122;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 126, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                {
                this.state = 1103;
                this.match(SolidityParser.YulLet);
                this.state = 1104;
                localContext._YulIdentifier = this.match(SolidityParser.YulIdentifier);
                localContext._variables.push(localContext._YulIdentifier!);
                this.state = 1107;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 162) {
                    {
                    this.state = 1105;
                    this.match(SolidityParser.YulAssign);
                    this.state = 1106;
                    this.yulExpression();
                    }
                }

                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                {
                this.state = 1109;
                this.match(SolidityParser.YulLet);
                this.state = 1110;
                localContext._YulIdentifier = this.match(SolidityParser.YulIdentifier);
                localContext._variables.push(localContext._YulIdentifier!);
                this.state = 1115;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 164) {
                    {
                    {
                    this.state = 1111;
                    this.match(SolidityParser.YulComma);
                    this.state = 1112;
                    localContext._YulIdentifier = this.match(SolidityParser.YulIdentifier);
                    localContext._variables.push(localContext._YulIdentifier!);
                    }
                    }
                    this.state = 1117;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1120;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 162) {
                    {
                    this.state = 1118;
                    this.match(SolidityParser.YulAssign);
                    this.state = 1119;
                    this.yulFunctionCall();
                    }
                }

                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public yulAssignment(): YulAssignmentContext {
        let localContext = new YulAssignmentContext(this.context, this.state);
        this.enterRule(localContext, 166, SolidityParser.RULE_yulAssignment);
        let _la: number;
        try {
            this.state = 1138;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 128, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1124;
                this.yulPath();
                this.state = 1125;
                this.match(SolidityParser.YulAssign);
                this.state = 1126;
                this.yulExpression();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                {
                this.state = 1128;
                this.yulPath();
                this.state = 1131;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 1129;
                    this.match(SolidityParser.YulComma);
                    this.state = 1130;
                    this.yulPath();
                    }
                    }
                    this.state = 1133;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 164);
                }
                this.state = 1135;
                this.match(SolidityParser.YulAssign);
                this.state = 1136;
                this.yulFunctionCall();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public yulIfStatement(): YulIfStatementContext {
        let localContext = new YulIfStatementContext(this.context, this.state);
        this.enterRule(localContext, 168, SolidityParser.RULE_yulIfStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1140;
            this.match(SolidityParser.YulIf);
            this.state = 1141;
            localContext._cond = this.yulExpression();
            this.state = 1142;
            localContext._body = this.yulBlock();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public yulForStatement(): YulForStatementContext {
        let localContext = new YulForStatementContext(this.context, this.state);
        this.enterRule(localContext, 170, SolidityParser.RULE_yulForStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1144;
            this.match(SolidityParser.YulFor);
            this.state = 1145;
            localContext._init = this.yulBlock();
            this.state = 1146;
            localContext._cond = this.yulExpression();
            this.state = 1147;
            localContext._post = this.yulBlock();
            this.state = 1148;
            localContext._body = this.yulBlock();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public yulSwitchCase(): YulSwitchCaseContext {
        let localContext = new YulSwitchCaseContext(this.context, this.state);
        this.enterRule(localContext, 172, SolidityParser.RULE_yulSwitchCase);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1150;
            this.match(SolidityParser.YulCase);
            this.state = 1151;
            this.yulLiteral();
            this.state = 1152;
            this.yulBlock();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public yulSwitchStatement(): YulSwitchStatementContext {
        let localContext = new YulSwitchStatementContext(this.context, this.state);
        this.enterRule(localContext, 174, SolidityParser.RULE_yulSwitchStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1154;
            this.match(SolidityParser.YulSwitch);
            this.state = 1155;
            this.yulExpression();
            this.state = 1167;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SolidityParser.YulCase:
                {
                {
                this.state = 1157;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 1156;
                    this.yulSwitchCase();
                    }
                    }
                    this.state = 1159;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 145);
                this.state = 1163;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 147) {
                    {
                    this.state = 1161;
                    this.match(SolidityParser.YulDefault);
                    this.state = 1162;
                    this.yulBlock();
                    }
                }

                }
                }
                break;
            case SolidityParser.YulDefault:
                {
                {
                this.state = 1165;
                this.match(SolidityParser.YulDefault);
                this.state = 1166;
                this.yulBlock();
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public yulFunctionDefinition(): YulFunctionDefinitionContext {
        let localContext = new YulFunctionDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 176, SolidityParser.RULE_yulFunctionDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1169;
            this.match(SolidityParser.YulFunction);
            this.state = 1170;
            this.match(SolidityParser.YulIdentifier);
            this.state = 1171;
            this.match(SolidityParser.YulLParen);
            this.state = 1180;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 166) {
                {
                this.state = 1172;
                localContext._YulIdentifier = this.match(SolidityParser.YulIdentifier);
                localContext._arguments.push(localContext._YulIdentifier!);
                this.state = 1177;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 164) {
                    {
                    {
                    this.state = 1173;
                    this.match(SolidityParser.YulComma);
                    this.state = 1174;
                    localContext._YulIdentifier = this.match(SolidityParser.YulIdentifier);
                    localContext._arguments.push(localContext._YulIdentifier!);
                    }
                    }
                    this.state = 1179;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 1182;
            this.match(SolidityParser.YulRParen);
            this.state = 1192;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 165) {
                {
                this.state = 1183;
                this.match(SolidityParser.YulArrow);
                this.state = 1184;
                localContext._YulIdentifier = this.match(SolidityParser.YulIdentifier);
                localContext._returnParameters.push(localContext._YulIdentifier!);
                this.state = 1189;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 164) {
                    {
                    {
                    this.state = 1185;
                    this.match(SolidityParser.YulComma);
                    this.state = 1186;
                    localContext._YulIdentifier = this.match(SolidityParser.YulIdentifier);
                    localContext._returnParameters.push(localContext._YulIdentifier!);
                    }
                    }
                    this.state = 1191;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 1194;
            localContext._body = this.yulBlock();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public yulPath(): YulPathContext {
        let localContext = new YulPathContext(this.context, this.state);
        this.enterRule(localContext, 178, SolidityParser.RULE_yulPath);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1196;
            this.match(SolidityParser.YulIdentifier);
            this.state = 1201;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 163) {
                {
                {
                this.state = 1197;
                this.match(SolidityParser.YulPeriod);
                this.state = 1198;
                _la = this.tokenStream.LA(1);
                if(!(_la === 157 || _la === 166)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                }
                this.state = 1203;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public yulFunctionCall(): YulFunctionCallContext {
        let localContext = new YulFunctionCallContext(this.context, this.state);
        this.enterRule(localContext, 180, SolidityParser.RULE_yulFunctionCall);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1204;
            _la = this.tokenStream.LA(1);
            if(!(_la === 157 || _la === 166)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1205;
            this.match(SolidityParser.YulLParen);
            this.state = 1214;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 148)) & ~0x1F) === 0 && ((1 << (_la - 148)) & 8127105) !== 0)) {
                {
                this.state = 1206;
                this.yulExpression();
                this.state = 1211;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 164) {
                    {
                    {
                    this.state = 1207;
                    this.match(SolidityParser.YulComma);
                    this.state = 1208;
                    this.yulExpression();
                    }
                    }
                    this.state = 1213;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 1216;
            this.match(SolidityParser.YulRParen);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public yulbool(): YulboolContext {
        let localContext = new YulboolContext(this.context, this.state);
        this.enterRule(localContext, 182, SolidityParser.RULE_yulbool);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1218;
            _la = this.tokenStream.LA(1);
            if(!(_la === 148 || _la === 155)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public yulLiteral(): YulLiteralContext {
        let localContext = new YulLiteralContext(this.context, this.state);
        this.enterRule(localContext, 184, SolidityParser.RULE_yulLiteral);
        try {
            this.state = 1225;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SolidityParser.YulDecimalNumber:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1220;
                this.match(SolidityParser.YulDecimalNumber);
                }
                break;
            case SolidityParser.YulStringLiteral:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1221;
                this.match(SolidityParser.YulStringLiteral);
                }
                break;
            case SolidityParser.YulHexNumber:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1222;
                this.match(SolidityParser.YulHexNumber);
                }
                break;
            case SolidityParser.YulFalse:
            case SolidityParser.YulTrue:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1223;
                this.yulbool();
                }
                break;
            case SolidityParser.YulHexStringLiteral:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1224;
                this.match(SolidityParser.YulHexStringLiteral);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public yulExpression(): YulExpressionContext {
        let localContext = new YulExpressionContext(this.context, this.state);
        this.enterRule(localContext, 186, SolidityParser.RULE_yulExpression);
        try {
            this.state = 1230;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 140, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1227;
                this.yulPath();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1228;
                this.yulFunctionCall();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1229;
                this.yulLiteral();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 39:
            return this.typeName_sempred(localContext as TypeNameContext, predIndex);
        case 45:
            return this.expression_sempred(localContext as ExpressionContext, predIndex);
        }
        return true;
    }
    private typeName_sempred(localContext: TypeNameContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private expression_sempred(localContext: ExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 1:
            return this.precpred(this.context, 17);
        case 2:
            return this.precpred(this.context, 16);
        case 3:
            return this.precpred(this.context, 15);
        case 4:
            return this.precpred(this.context, 14);
        case 5:
            return this.precpred(this.context, 13);
        case 6:
            return this.precpred(this.context, 12);
        case 7:
            return this.precpred(this.context, 11);
        case 8:
            return this.precpred(this.context, 10);
        case 9:
            return this.precpred(this.context, 9);
        case 10:
            return this.precpred(this.context, 8);
        case 11:
            return this.precpred(this.context, 7);
        case 12:
            return this.precpred(this.context, 6);
        case 13:
            return this.precpred(this.context, 5);
        case 14:
            return this.precpred(this.context, 26);
        case 15:
            return this.precpred(this.context, 25);
        case 16:
            return this.precpred(this.context, 24);
        case 17:
            return this.precpred(this.context, 23);
        case 18:
            return this.precpred(this.context, 22);
        case 19:
            return this.precpred(this.context, 18);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,178,1233,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,
        39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
        46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,
        52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,
        59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,
        65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,
        72,7,72,2,73,7,73,2,74,7,74,2,75,7,75,2,76,7,76,2,77,7,77,2,78,7,
        78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,7,82,2,83,7,83,2,84,7,84,2,
        85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,89,2,90,7,90,2,91,7,
        91,2,92,7,92,2,93,7,93,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,
        0,1,0,1,0,5,0,202,8,0,10,0,12,0,205,9,0,1,0,1,0,1,1,1,1,4,1,211,
        8,1,11,1,12,1,212,1,1,1,1,1,2,1,2,1,2,1,2,3,2,221,8,2,1,2,1,2,1,
        2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,233,8,2,1,2,1,2,1,3,1,3,1,3,3,
        3,240,8,3,1,4,1,4,1,5,1,5,1,5,1,5,5,5,248,8,5,10,5,12,5,251,9,5,
        1,5,1,5,1,6,3,6,256,8,6,1,6,1,6,1,6,3,6,261,8,6,1,6,1,6,5,6,265,
        8,6,10,6,12,6,268,9,6,1,6,1,6,1,7,1,7,1,7,3,7,275,8,7,1,7,1,7,5,
        7,279,8,7,10,7,12,7,282,9,7,1,7,1,7,1,8,1,8,1,8,1,8,5,8,290,8,8,
        10,8,12,8,293,9,8,1,8,1,8,1,9,1,9,1,9,1,9,5,9,301,8,9,10,9,12,9,
        304,9,9,1,10,1,10,3,10,308,8,10,1,11,1,11,1,11,1,11,1,11,1,11,1,
        11,1,11,1,11,1,11,1,11,1,11,3,11,322,8,11,1,12,1,12,1,12,1,12,1,
        13,1,13,1,13,1,13,5,13,332,8,13,10,13,12,13,335,9,13,3,13,337,8,
        13,1,13,1,13,1,13,1,13,5,13,343,8,13,10,13,12,13,346,9,13,3,13,348,
        8,13,1,13,3,13,351,8,13,1,13,1,13,1,14,1,14,1,14,5,14,358,8,14,10,
        14,12,14,361,9,14,1,15,1,15,3,15,365,8,15,1,16,1,16,1,17,1,17,1,
        17,5,17,372,8,17,10,17,12,17,375,9,17,1,18,1,18,3,18,379,8,18,1,
        18,3,18,382,8,18,1,19,1,19,1,19,3,19,387,8,19,1,19,1,19,1,19,1,19,
        1,19,5,19,394,8,19,10,19,12,19,397,9,19,1,19,1,19,1,20,1,20,1,21,
        1,21,1,21,1,21,1,21,5,21,408,8,21,10,21,12,21,411,9,21,1,21,1,21,
        3,21,415,8,21,1,22,1,22,1,22,1,22,3,22,421,8,22,1,22,1,22,3,22,425,
        8,22,1,22,1,22,1,22,1,22,1,22,1,22,5,22,433,8,22,10,22,12,22,436,
        9,22,1,22,1,22,1,22,1,22,1,22,3,22,443,8,22,1,22,1,22,3,22,447,8,
        22,1,23,1,23,1,23,1,23,3,23,453,8,23,1,23,3,23,456,8,23,1,23,1,23,
        5,23,460,8,23,10,23,12,23,463,9,23,1,23,1,23,3,23,467,8,23,1,24,
        1,24,1,24,3,24,472,8,24,1,24,1,24,1,24,1,24,1,24,1,24,5,24,480,8,
        24,10,24,12,24,483,9,24,1,24,1,24,1,24,1,24,1,24,3,24,490,8,24,1,
        24,1,24,3,24,494,8,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,5,
        25,504,8,25,10,25,12,25,507,9,25,1,25,1,25,3,25,511,8,25,1,26,1,
        26,1,26,1,26,4,26,517,8,26,11,26,12,26,518,1,26,1,26,1,27,1,27,1,
        27,1,27,1,28,1,28,1,28,1,28,1,28,1,28,5,28,533,8,28,10,28,12,28,
        536,9,28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,3,29,545,8,29,1,29,1,
        29,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,5,30,557,8,30,10,30,12,
        30,560,9,30,1,30,1,30,1,30,3,30,565,8,30,1,30,1,30,1,31,1,31,1,31,
        1,31,1,31,1,31,1,31,1,32,1,32,3,32,578,8,32,1,32,3,32,581,8,32,1,
        33,1,33,1,33,1,33,1,33,1,33,5,33,589,8,33,10,33,12,33,592,9,33,3,
        33,594,8,33,1,33,1,33,3,33,598,8,33,1,33,1,33,1,34,1,34,3,34,604,
        8,34,1,35,1,35,1,35,1,35,1,35,1,35,5,35,612,8,35,10,35,12,35,615,
        9,35,3,35,617,8,35,1,35,1,35,1,35,1,36,1,36,1,37,1,37,1,37,1,37,
        1,37,1,37,5,37,630,8,37,10,37,12,37,633,9,37,1,37,1,37,3,37,637,
        8,37,1,37,1,37,1,37,3,37,642,8,37,1,37,3,37,645,8,37,1,37,1,37,1,
        38,1,38,1,38,3,38,652,8,38,1,39,1,39,1,39,1,39,1,39,1,39,3,39,660,
        8,39,1,39,1,39,1,39,3,39,665,8,39,1,39,5,39,668,8,39,10,39,12,39,
        671,9,39,1,40,1,40,1,41,1,41,1,41,1,42,1,42,1,42,3,42,681,8,42,1,
        42,1,42,1,42,5,42,686,8,42,10,42,12,42,689,9,42,1,42,1,42,1,42,1,
        42,1,42,3,42,696,8,42,1,43,1,43,3,43,700,8,43,1,43,1,43,1,44,1,44,
        1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,
        1,45,1,45,1,45,1,45,1,45,3,45,724,8,45,3,45,726,8,45,1,45,1,45,1,
        45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,
        45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,
        45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,
        45,1,45,1,45,1,45,1,45,3,45,774,8,45,1,45,1,45,1,45,1,45,3,45,780,
        8,45,1,45,1,45,3,45,784,8,45,1,45,1,45,1,45,1,45,1,45,3,45,791,8,
        45,1,45,1,45,1,45,1,45,1,45,5,45,798,8,45,10,45,12,45,801,9,45,3,
        45,803,8,45,1,45,1,45,1,45,1,45,1,45,5,45,810,8,45,10,45,12,45,813,
        9,45,1,46,1,46,1,47,1,47,3,47,819,8,47,1,47,1,47,3,47,823,8,47,5,
        47,825,8,47,10,47,12,47,828,9,47,1,47,1,47,1,48,1,48,1,48,1,48,5,
        48,836,8,48,10,48,12,48,839,9,48,1,48,1,48,1,49,1,49,1,50,1,50,1,
        50,1,50,1,50,3,50,850,8,50,1,51,1,51,1,51,1,52,1,52,1,53,4,53,858,
        8,53,11,53,12,53,859,1,54,4,54,863,8,54,11,54,12,54,864,1,55,4,55,
        868,8,55,11,55,12,55,869,1,56,1,56,1,57,1,57,1,57,5,57,877,8,57,
        10,57,12,57,880,9,57,1,57,1,57,1,58,1,58,1,58,1,59,1,59,1,59,1,59,
        1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,3,59,900,8,59,1,60,
        1,60,3,60,904,8,60,1,61,1,61,1,61,1,61,1,61,1,61,1,61,3,61,913,8,
        61,1,62,1,62,1,62,1,62,3,62,919,8,62,1,62,1,62,3,62,923,8,62,1,62,
        3,62,926,8,62,1,62,1,62,1,62,1,63,1,63,1,63,1,63,1,63,1,63,1,64,
        1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,65,1,65,1,65,1,66,1,66,1,66,
        1,67,1,67,1,67,1,67,1,67,1,67,1,67,3,67,958,8,67,1,67,1,67,4,67,
        962,8,67,11,67,12,67,963,1,68,1,68,3,68,968,8,68,1,68,1,68,1,68,
        1,68,3,68,974,8,68,1,68,1,68,1,69,1,69,3,69,980,8,69,1,69,1,69,1,
        70,1,70,1,70,1,70,1,70,1,71,1,71,1,71,1,71,1,71,1,72,1,72,3,72,996,
        8,72,1,72,3,72,999,8,72,1,72,1,72,5,72,1003,8,72,10,72,12,72,1006,
        9,72,1,72,1,72,1,73,1,73,1,73,1,73,5,73,1014,8,73,10,73,12,73,1017,
        9,73,1,73,1,73,1,74,1,74,1,74,5,74,1024,8,74,10,74,12,74,1027,9,
        74,1,75,1,75,5,75,1031,8,75,10,75,12,75,1034,9,75,1,75,1,75,1,75,
        1,75,3,75,1040,8,75,5,75,1042,8,75,10,75,12,75,1045,9,75,1,75,1,
        75,1,76,1,76,1,76,3,76,1052,8,76,1,76,1,76,1,76,1,76,3,76,1058,8,
        76,1,76,1,76,1,77,1,77,1,77,1,78,1,78,1,78,1,78,3,78,1069,8,78,1,
        78,1,78,1,78,3,78,1074,8,78,1,78,1,78,1,79,1,79,3,79,1080,8,79,1,
        80,1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,80,3,80,1093,8,
        80,1,81,1,81,5,81,1097,8,81,10,81,12,81,1100,9,81,1,81,1,81,1,82,
        1,82,1,82,1,82,3,82,1108,8,82,1,82,1,82,1,82,1,82,5,82,1114,8,82,
        10,82,12,82,1117,9,82,1,82,1,82,3,82,1121,8,82,3,82,1123,8,82,1,
        83,1,83,1,83,1,83,1,83,1,83,1,83,4,83,1132,8,83,11,83,12,83,1133,
        1,83,1,83,1,83,3,83,1139,8,83,1,84,1,84,1,84,1,84,1,85,1,85,1,85,
        1,85,1,85,1,85,1,86,1,86,1,86,1,86,1,87,1,87,1,87,4,87,1158,8,87,
        11,87,12,87,1159,1,87,1,87,3,87,1164,8,87,1,87,1,87,3,87,1168,8,
        87,1,88,1,88,1,88,1,88,1,88,1,88,5,88,1176,8,88,10,88,12,88,1179,
        9,88,3,88,1181,8,88,1,88,1,88,1,88,1,88,1,88,5,88,1188,8,88,10,88,
        12,88,1191,9,88,3,88,1193,8,88,1,88,1,88,1,89,1,89,1,89,5,89,1200,
        8,89,10,89,12,89,1203,9,89,1,90,1,90,1,90,1,90,1,90,5,90,1210,8,
        90,10,90,12,90,1213,9,90,3,90,1215,8,90,1,90,1,90,1,91,1,91,1,92,
        1,92,1,92,1,92,1,92,3,92,1226,8,92,1,93,1,93,1,93,3,93,1231,8,93,
        1,93,1,302,2,78,90,94,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,
        32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,
        76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,
        114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,
        146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,
        178,180,182,184,186,0,19,3,0,23,23,38,38,49,50,3,0,47,47,51,51,69,
        69,4,0,99,101,105,109,111,116,118,118,8,0,3,3,7,7,9,9,26,27,56,56,
        58,58,64,64,67,67,3,0,10,10,42,42,57,57,3,0,16,16,106,106,117,120,
        1,0,107,109,1,0,105,106,1,0,102,104,1,0,113,116,1,0,111,112,1,0,
        119,120,1,0,84,95,6,0,21,21,29,29,31,31,55,55,60,60,131,131,2,0,
        25,25,61,61,1,0,123,124,2,0,127,127,129,129,2,0,157,157,166,166,
        2,0,148,148,155,155,1372,0,203,1,0,0,0,2,208,1,0,0,0,4,216,1,0,0,
        0,6,236,1,0,0,0,8,241,1,0,0,0,10,243,1,0,0,0,12,255,1,0,0,0,14,271,
        1,0,0,0,16,285,1,0,0,0,18,296,1,0,0,0,20,305,1,0,0,0,22,321,1,0,
        0,0,24,323,1,0,0,0,26,327,1,0,0,0,28,354,1,0,0,0,30,362,1,0,0,0,
        32,366,1,0,0,0,34,368,1,0,0,0,36,376,1,0,0,0,38,383,1,0,0,0,40,400,
        1,0,0,0,42,402,1,0,0,0,44,416,1,0,0,0,46,448,1,0,0,0,48,468,1,0,
        0,0,50,495,1,0,0,0,52,512,1,0,0,0,54,522,1,0,0,0,56,526,1,0,0,0,
        58,539,1,0,0,0,60,548,1,0,0,0,62,568,1,0,0,0,64,575,1,0,0,0,66,582,
        1,0,0,0,68,601,1,0,0,0,70,605,1,0,0,0,72,621,1,0,0,0,74,623,1,0,
        0,0,76,648,1,0,0,0,78,659,1,0,0,0,80,672,1,0,0,0,82,674,1,0,0,0,
        84,677,1,0,0,0,86,697,1,0,0,0,88,703,1,0,0,0,90,725,1,0,0,0,92,814,
        1,0,0,0,94,816,1,0,0,0,96,831,1,0,0,0,98,842,1,0,0,0,100,849,1,0,
        0,0,102,851,1,0,0,0,104,854,1,0,0,0,106,857,1,0,0,0,108,862,1,0,
        0,0,110,867,1,0,0,0,112,871,1,0,0,0,114,873,1,0,0,0,116,883,1,0,
        0,0,118,899,1,0,0,0,120,903,1,0,0,0,122,905,1,0,0,0,124,914,1,0,
        0,0,126,930,1,0,0,0,128,936,1,0,0,0,130,944,1,0,0,0,132,947,1,0,
        0,0,134,950,1,0,0,0,136,965,1,0,0,0,138,977,1,0,0,0,140,983,1,0,
        0,0,142,988,1,0,0,0,144,993,1,0,0,0,146,1009,1,0,0,0,148,1020,1,
        0,0,0,150,1028,1,0,0,0,152,1057,1,0,0,0,154,1061,1,0,0,0,156,1064,
        1,0,0,0,158,1079,1,0,0,0,160,1092,1,0,0,0,162,1094,1,0,0,0,164,1122,
        1,0,0,0,166,1138,1,0,0,0,168,1140,1,0,0,0,170,1144,1,0,0,0,172,1150,
        1,0,0,0,174,1154,1,0,0,0,176,1169,1,0,0,0,178,1196,1,0,0,0,180,1204,
        1,0,0,0,182,1218,1,0,0,0,184,1225,1,0,0,0,186,1230,1,0,0,0,188,202,
        3,2,1,0,189,202,3,4,2,0,190,202,3,74,37,0,191,202,3,12,6,0,192,202,
        3,14,7,0,193,202,3,16,8,0,194,202,3,44,22,0,195,202,3,62,31,0,196,
        202,3,52,26,0,197,202,3,56,28,0,198,202,3,58,29,0,199,202,3,70,35,
        0,200,202,3,66,33,0,201,188,1,0,0,0,201,189,1,0,0,0,201,190,1,0,
        0,0,201,191,1,0,0,0,201,192,1,0,0,0,201,193,1,0,0,0,201,194,1,0,
        0,0,201,195,1,0,0,0,201,196,1,0,0,0,201,197,1,0,0,0,201,198,1,0,
        0,0,201,199,1,0,0,0,201,200,1,0,0,0,202,205,1,0,0,0,203,201,1,0,
        0,0,203,204,1,0,0,0,204,206,1,0,0,0,205,203,1,0,0,0,206,207,5,0,
        0,1,207,1,1,0,0,0,208,210,5,48,0,0,209,211,5,174,0,0,210,209,1,0,
        0,0,211,212,1,0,0,0,212,210,1,0,0,0,212,213,1,0,0,0,213,214,1,0,
        0,0,214,215,5,175,0,0,215,3,1,0,0,0,216,232,5,35,0,0,217,220,3,8,
        4,0,218,219,5,5,0,0,219,221,3,98,49,0,220,218,1,0,0,0,220,221,1,
        0,0,0,221,233,1,0,0,0,222,223,3,10,5,0,223,224,5,29,0,0,224,225,
        3,8,4,0,225,233,1,0,0,0,226,227,5,107,0,0,227,228,5,5,0,0,228,229,
        3,98,49,0,229,230,5,29,0,0,230,231,3,8,4,0,231,233,1,0,0,0,232,217,
        1,0,0,0,232,222,1,0,0,0,232,226,1,0,0,0,233,234,1,0,0,0,234,235,
        5,79,0,0,235,5,1,0,0,0,236,239,3,98,49,0,237,238,5,5,0,0,238,240,
        3,98,49,0,239,237,1,0,0,0,239,240,1,0,0,0,240,7,1,0,0,0,241,242,
        5,123,0,0,242,9,1,0,0,0,243,244,5,76,0,0,244,249,3,6,3,0,245,246,
        5,96,0,0,246,248,3,6,3,0,247,245,1,0,0,0,248,251,1,0,0,0,249,247,
        1,0,0,0,249,250,1,0,0,0,250,252,1,0,0,0,251,249,1,0,0,0,252,253,
        5,77,0,0,253,11,1,0,0,0,254,256,5,2,0,0,255,254,1,0,0,0,255,256,
        1,0,0,0,256,257,1,0,0,0,257,258,5,15,0,0,258,260,3,98,49,0,259,261,
        3,18,9,0,260,259,1,0,0,0,260,261,1,0,0,0,261,262,1,0,0,0,262,266,
        5,76,0,0,263,265,3,22,11,0,264,263,1,0,0,0,265,268,1,0,0,0,266,264,
        1,0,0,0,266,267,1,0,0,0,267,269,1,0,0,0,268,266,1,0,0,0,269,270,
        5,77,0,0,270,13,1,0,0,0,271,272,5,37,0,0,272,274,3,98,49,0,273,275,
        3,18,9,0,274,273,1,0,0,0,274,275,1,0,0,0,275,276,1,0,0,0,276,280,
        5,76,0,0,277,279,3,22,11,0,278,277,1,0,0,0,279,282,1,0,0,0,280,278,
        1,0,0,0,280,281,1,0,0,0,281,283,1,0,0,0,282,280,1,0,0,0,283,284,
        5,77,0,0,284,15,1,0,0,0,285,286,5,40,0,0,286,287,3,98,49,0,287,291,
        5,76,0,0,288,290,3,22,11,0,289,288,1,0,0,0,290,293,1,0,0,0,291,289,
        1,0,0,0,291,292,1,0,0,0,292,294,1,0,0,0,293,291,1,0,0,0,294,295,
        5,77,0,0,295,17,1,0,0,0,296,297,5,39,0,0,297,302,3,20,10,0,298,299,
        5,96,0,0,299,301,3,20,10,0,300,298,1,0,0,0,301,304,1,0,0,0,302,303,
        1,0,0,0,302,300,1,0,0,0,303,19,1,0,0,0,304,302,1,0,0,0,305,307,3,
        28,14,0,306,308,3,26,13,0,307,306,1,0,0,0,307,308,1,0,0,0,308,21,
        1,0,0,0,309,322,3,38,19,0,310,322,3,44,22,0,311,322,3,46,23,0,312,
        322,3,48,24,0,313,322,3,50,25,0,314,322,3,52,26,0,315,322,3,56,28,
        0,316,322,3,58,29,0,317,322,3,60,30,0,318,322,3,66,33,0,319,322,
        3,70,35,0,320,322,3,74,37,0,321,309,1,0,0,0,321,310,1,0,0,0,321,
        311,1,0,0,0,321,312,1,0,0,0,321,313,1,0,0,0,321,314,1,0,0,0,321,
        315,1,0,0,0,321,316,1,0,0,0,321,317,1,0,0,0,321,318,1,0,0,0,321,
        319,1,0,0,0,321,320,1,0,0,0,322,23,1,0,0,0,323,324,3,98,49,0,324,
        325,5,78,0,0,325,326,3,90,45,0,326,25,1,0,0,0,327,350,5,72,0,0,328,
        333,3,90,45,0,329,330,5,96,0,0,330,332,3,90,45,0,331,329,1,0,0,0,
        332,335,1,0,0,0,333,331,1,0,0,0,333,334,1,0,0,0,334,337,1,0,0,0,
        335,333,1,0,0,0,336,328,1,0,0,0,336,337,1,0,0,0,337,351,1,0,0,0,
        338,347,5,76,0,0,339,344,3,24,12,0,340,341,5,96,0,0,341,343,3,24,
        12,0,342,340,1,0,0,0,343,346,1,0,0,0,344,342,1,0,0,0,344,345,1,0,
        0,0,345,348,1,0,0,0,346,344,1,0,0,0,347,339,1,0,0,0,347,348,1,0,
        0,0,348,349,1,0,0,0,349,351,5,77,0,0,350,336,1,0,0,0,350,338,1,0,
        0,0,351,352,1,0,0,0,352,353,5,73,0,0,353,27,1,0,0,0,354,359,3,98,
        49,0,355,356,5,80,0,0,356,358,3,98,49,0,357,355,1,0,0,0,358,361,
        1,0,0,0,359,357,1,0,0,0,359,360,1,0,0,0,360,29,1,0,0,0,361,359,1,
        0,0,0,362,364,3,28,14,0,363,365,3,26,13,0,364,363,1,0,0,0,364,365,
        1,0,0,0,365,31,1,0,0,0,366,367,7,0,0,0,367,33,1,0,0,0,368,373,3,
        36,18,0,369,370,5,96,0,0,370,372,3,36,18,0,371,369,1,0,0,0,372,375,
        1,0,0,0,373,371,1,0,0,0,373,374,1,0,0,0,374,35,1,0,0,0,375,373,1,
        0,0,0,376,378,3,78,39,0,377,379,3,88,44,0,378,377,1,0,0,0,378,379,
        1,0,0,0,379,381,1,0,0,0,380,382,3,98,49,0,381,380,1,0,0,0,381,382,
        1,0,0,0,382,37,1,0,0,0,383,384,5,13,0,0,384,386,5,72,0,0,385,387,
        3,34,17,0,386,385,1,0,0,0,386,387,1,0,0,0,387,388,1,0,0,0,388,395,
        5,73,0,0,389,394,3,30,15,0,390,394,5,47,0,0,391,394,5,38,0,0,392,
        394,5,50,0,0,393,389,1,0,0,0,393,390,1,0,0,0,393,391,1,0,0,0,393,
        392,1,0,0,0,394,397,1,0,0,0,395,393,1,0,0,0,395,396,1,0,0,0,396,
        398,1,0,0,0,397,395,1,0,0,0,398,399,3,114,57,0,399,39,1,0,0,0,400,
        401,7,1,0,0,401,41,1,0,0,0,402,414,5,46,0,0,403,404,5,72,0,0,404,
        409,3,28,14,0,405,406,5,96,0,0,406,408,3,28,14,0,407,405,1,0,0,0,
        408,411,1,0,0,0,409,407,1,0,0,0,409,410,1,0,0,0,410,412,1,0,0,0,
        411,409,1,0,0,0,412,413,5,73,0,0,413,415,1,0,0,0,414,403,1,0,0,0,
        414,415,1,0,0,0,415,43,1,0,0,0,416,420,5,30,0,0,417,421,3,98,49,
        0,418,421,5,24,0,0,419,421,5,52,0,0,420,417,1,0,0,0,420,418,1,0,
        0,0,420,419,1,0,0,0,421,422,1,0,0,0,422,424,5,72,0,0,423,425,3,34,
        17,0,424,423,1,0,0,0,424,425,1,0,0,0,425,426,1,0,0,0,426,434,5,73,
        0,0,427,433,3,32,16,0,428,433,3,40,20,0,429,433,3,30,15,0,430,433,
        5,70,0,0,431,433,3,42,21,0,432,427,1,0,0,0,432,428,1,0,0,0,432,429,
        1,0,0,0,432,430,1,0,0,0,432,431,1,0,0,0,433,436,1,0,0,0,434,432,
        1,0,0,0,434,435,1,0,0,0,435,442,1,0,0,0,436,434,1,0,0,0,437,438,
        5,54,0,0,438,439,5,72,0,0,439,440,3,34,17,0,440,441,5,73,0,0,441,
        443,1,0,0,0,442,437,1,0,0,0,442,443,1,0,0,0,443,446,1,0,0,0,444,
        447,5,79,0,0,445,447,3,114,57,0,446,444,1,0,0,0,446,445,1,0,0,0,
        447,45,1,0,0,0,448,449,5,43,0,0,449,455,3,98,49,0,450,452,5,72,0,
        0,451,453,3,34,17,0,452,451,1,0,0,0,452,453,1,0,0,0,453,454,1,0,
        0,0,454,456,5,73,0,0,455,450,1,0,0,0,455,456,1,0,0,0,456,461,1,0,
        0,0,457,460,5,70,0,0,458,460,3,42,21,0,459,457,1,0,0,0,459,458,1,
        0,0,0,460,463,1,0,0,0,461,459,1,0,0,0,461,462,1,0,0,0,462,466,1,
        0,0,0,463,461,1,0,0,0,464,467,5,79,0,0,465,467,3,114,57,0,466,464,
        1,0,0,0,466,465,1,0,0,0,467,47,1,0,0,0,468,469,5,24,0,0,469,471,
        5,72,0,0,470,472,3,34,17,0,471,470,1,0,0,0,471,472,1,0,0,0,472,473,
        1,0,0,0,473,481,5,73,0,0,474,480,5,23,0,0,475,480,3,40,20,0,476,
        480,3,30,15,0,477,480,5,70,0,0,478,480,3,42,21,0,479,474,1,0,0,0,
        479,475,1,0,0,0,479,476,1,0,0,0,479,477,1,0,0,0,479,478,1,0,0,0,
        480,483,1,0,0,0,481,479,1,0,0,0,481,482,1,0,0,0,482,489,1,0,0,0,
        483,481,1,0,0,0,484,485,5,54,0,0,485,486,5,72,0,0,486,487,3,34,17,
        0,487,488,5,73,0,0,488,490,1,0,0,0,489,484,1,0,0,0,489,490,1,0,0,
        0,490,493,1,0,0,0,491,494,5,79,0,0,492,494,3,114,57,0,493,491,1,
        0,0,0,493,492,1,0,0,0,494,49,1,0,0,0,495,496,5,52,0,0,496,497,5,
        72,0,0,497,505,5,73,0,0,498,504,5,23,0,0,499,504,5,47,0,0,500,504,
        3,30,15,0,501,504,5,70,0,0,502,504,3,42,21,0,503,498,1,0,0,0,503,
        499,1,0,0,0,503,500,1,0,0,0,503,501,1,0,0,0,503,502,1,0,0,0,504,
        507,1,0,0,0,505,503,1,0,0,0,505,506,1,0,0,0,506,510,1,0,0,0,507,
        505,1,0,0,0,508,511,5,79,0,0,509,511,3,114,57,0,510,508,1,0,0,0,
        510,509,1,0,0,0,511,51,1,0,0,0,512,513,5,59,0,0,513,514,3,98,49,
        0,514,516,5,76,0,0,515,517,3,54,27,0,516,515,1,0,0,0,517,518,1,0,
        0,0,518,516,1,0,0,0,518,519,1,0,0,0,519,520,1,0,0,0,520,521,5,77,
        0,0,521,53,1,0,0,0,522,523,3,78,39,0,523,524,3,98,49,0,524,525,5,
        79,0,0,525,55,1,0,0,0,526,527,5,20,0,0,527,528,3,98,49,0,528,529,
        5,76,0,0,529,534,3,98,49,0,530,531,5,96,0,0,531,533,3,98,49,0,532,
        530,1,0,0,0,533,536,1,0,0,0,534,532,1,0,0,0,534,535,1,0,0,0,535,
        537,1,0,0,0,536,534,1,0,0,0,537,538,5,77,0,0,538,57,1,0,0,0,539,
        540,5,63,0,0,540,541,3,98,49,0,541,544,5,39,0,0,542,545,3,80,40,
        0,543,545,3,82,41,0,544,542,1,0,0,0,544,543,1,0,0,0,545,546,1,0,
        0,0,546,547,5,79,0,0,547,59,1,0,0,0,548,558,3,78,39,0,549,557,5,
        50,0,0,550,557,5,49,0,0,551,557,5,38,0,0,552,557,5,12,0,0,553,557,
        3,42,21,0,554,557,5,34,0,0,555,557,5,60,0,0,556,549,1,0,0,0,556,
        550,1,0,0,0,556,551,1,0,0,0,556,552,1,0,0,0,556,553,1,0,0,0,556,
        554,1,0,0,0,556,555,1,0,0,0,557,560,1,0,0,0,558,556,1,0,0,0,558,
        559,1,0,0,0,559,561,1,0,0,0,560,558,1,0,0,0,561,564,3,98,49,0,562,
        563,5,84,0,0,563,565,3,90,45,0,564,562,1,0,0,0,564,565,1,0,0,0,565,
        566,1,0,0,0,566,567,5,79,0,0,567,61,1,0,0,0,568,569,3,78,39,0,569,
        570,5,12,0,0,570,571,3,98,49,0,571,572,5,84,0,0,572,573,3,90,45,
        0,573,574,5,79,0,0,574,63,1,0,0,0,575,577,3,78,39,0,576,578,5,36,
        0,0,577,576,1,0,0,0,577,578,1,0,0,0,578,580,1,0,0,0,579,581,3,98,
        49,0,580,579,1,0,0,0,580,581,1,0,0,0,581,65,1,0,0,0,582,583,5,22,
        0,0,583,584,3,98,49,0,584,593,5,72,0,0,585,590,3,64,32,0,586,587,
        5,96,0,0,587,589,3,64,32,0,588,586,1,0,0,0,589,592,1,0,0,0,590,588,
        1,0,0,0,590,591,1,0,0,0,591,594,1,0,0,0,592,590,1,0,0,0,593,585,
        1,0,0,0,593,594,1,0,0,0,594,595,1,0,0,0,595,597,5,73,0,0,596,598,
        5,4,0,0,597,596,1,0,0,0,597,598,1,0,0,0,598,599,1,0,0,0,599,600,
        5,79,0,0,600,67,1,0,0,0,601,603,3,78,39,0,602,604,3,98,49,0,603,
        602,1,0,0,0,603,604,1,0,0,0,604,69,1,0,0,0,605,606,5,21,0,0,606,
        607,3,98,49,0,607,616,5,72,0,0,608,613,3,68,34,0,609,610,5,96,0,
        0,610,612,3,68,34,0,611,609,1,0,0,0,612,615,1,0,0,0,613,611,1,0,
        0,0,613,614,1,0,0,0,614,617,1,0,0,0,615,613,1,0,0,0,616,608,1,0,
        0,0,616,617,1,0,0,0,617,618,1,0,0,0,618,619,5,73,0,0,619,620,5,79,
        0,0,620,71,1,0,0,0,621,622,7,2,0,0,622,73,1,0,0,0,623,636,5,68,0,
        0,624,637,3,28,14,0,625,626,5,76,0,0,626,631,3,76,38,0,627,628,5,
        96,0,0,628,630,3,76,38,0,629,627,1,0,0,0,630,633,1,0,0,0,631,629,
        1,0,0,0,631,632,1,0,0,0,632,634,1,0,0,0,633,631,1,0,0,0,634,635,
        5,77,0,0,635,637,1,0,0,0,636,624,1,0,0,0,636,625,1,0,0,0,637,638,
        1,0,0,0,638,641,5,28,0,0,639,642,5,107,0,0,640,642,3,78,39,0,641,
        639,1,0,0,0,641,640,1,0,0,0,642,644,1,0,0,0,643,645,5,31,0,0,644,
        643,1,0,0,0,644,645,1,0,0,0,645,646,1,0,0,0,646,647,5,79,0,0,647,
        75,1,0,0,0,648,651,3,28,14,0,649,650,5,5,0,0,650,652,3,72,36,0,651,
        649,1,0,0,0,651,652,1,0,0,0,652,77,1,0,0,0,653,654,6,39,-1,0,654,
        660,3,80,40,0,655,660,3,82,41,0,656,660,3,84,42,0,657,660,3,156,
        78,0,658,660,3,28,14,0,659,653,1,0,0,0,659,655,1,0,0,0,659,656,1,
        0,0,0,659,657,1,0,0,0,659,658,1,0,0,0,660,669,1,0,0,0,661,662,10,
        1,0,0,662,664,5,74,0,0,663,665,3,90,45,0,664,663,1,0,0,0,664,665,
        1,0,0,0,665,666,1,0,0,0,666,668,5,75,0,0,667,661,1,0,0,0,668,671,
        1,0,0,0,669,667,1,0,0,0,669,670,1,0,0,0,670,79,1,0,0,0,671,669,1,
        0,0,0,672,673,7,3,0,0,673,81,1,0,0,0,674,675,5,3,0,0,675,676,5,47,
        0,0,676,83,1,0,0,0,677,678,5,30,0,0,678,680,5,72,0,0,679,681,3,34,
        17,0,680,679,1,0,0,0,680,681,1,0,0,0,681,682,1,0,0,0,682,687,5,73,
        0,0,683,686,3,32,16,0,684,686,3,40,20,0,685,683,1,0,0,0,685,684,
        1,0,0,0,686,689,1,0,0,0,687,685,1,0,0,0,687,688,1,0,0,0,688,695,
        1,0,0,0,689,687,1,0,0,0,690,691,5,54,0,0,691,692,5,72,0,0,692,693,
        3,34,17,0,693,694,5,73,0,0,694,696,1,0,0,0,695,690,1,0,0,0,695,696,
        1,0,0,0,696,85,1,0,0,0,697,699,3,78,39,0,698,700,3,88,44,0,699,698,
        1,0,0,0,699,700,1,0,0,0,700,701,1,0,0,0,701,702,3,98,49,0,702,87,
        1,0,0,0,703,704,7,4,0,0,704,89,1,0,0,0,705,706,6,45,-1,0,706,707,
        5,47,0,0,707,726,3,26,13,0,708,709,5,63,0,0,709,710,5,72,0,0,710,
        711,3,78,39,0,711,712,5,73,0,0,712,726,1,0,0,0,713,714,7,5,0,0,714,
        726,3,90,45,19,715,716,5,44,0,0,716,726,3,78,39,0,717,726,3,94,47,
        0,718,726,3,96,48,0,719,724,3,98,49,0,720,724,3,100,50,0,721,724,
        3,102,51,0,722,724,3,80,40,0,723,719,1,0,0,0,723,720,1,0,0,0,723,
        721,1,0,0,0,723,722,1,0,0,0,724,726,1,0,0,0,725,705,1,0,0,0,725,
        708,1,0,0,0,725,713,1,0,0,0,725,715,1,0,0,0,725,717,1,0,0,0,725,
        718,1,0,0,0,725,723,1,0,0,0,726,811,1,0,0,0,727,728,10,17,0,0,728,
        729,5,110,0,0,729,810,3,90,45,17,730,731,10,16,0,0,731,732,7,6,0,
        0,732,810,3,90,45,17,733,734,10,15,0,0,734,735,7,7,0,0,735,810,3,
        90,45,16,736,737,10,14,0,0,737,738,7,8,0,0,738,810,3,90,45,15,739,
        740,10,13,0,0,740,741,5,101,0,0,741,810,3,90,45,14,742,743,10,12,
        0,0,743,744,5,100,0,0,744,810,3,90,45,13,745,746,10,11,0,0,746,747,
        5,99,0,0,747,810,3,90,45,12,748,749,10,10,0,0,749,750,7,9,0,0,750,
        810,3,90,45,11,751,752,10,9,0,0,752,753,7,10,0,0,753,810,3,90,45,
        10,754,755,10,8,0,0,755,756,5,98,0,0,756,810,3,90,45,9,757,758,10,
        7,0,0,758,759,5,97,0,0,759,810,3,90,45,8,760,761,10,6,0,0,761,762,
        5,81,0,0,762,763,3,90,45,0,763,764,5,78,0,0,764,765,3,90,45,6,765,
        810,1,0,0,0,766,767,10,5,0,0,767,768,3,92,46,0,768,769,3,90,45,5,
        769,810,1,0,0,0,770,771,10,26,0,0,771,773,5,74,0,0,772,774,3,90,
        45,0,773,772,1,0,0,0,773,774,1,0,0,0,774,775,1,0,0,0,775,810,5,75,
        0,0,776,777,10,25,0,0,777,779,5,74,0,0,778,780,3,90,45,0,779,778,
        1,0,0,0,779,780,1,0,0,0,780,781,1,0,0,0,781,783,5,78,0,0,782,784,
        3,90,45,0,783,782,1,0,0,0,783,784,1,0,0,0,784,785,1,0,0,0,785,810,
        5,75,0,0,786,787,10,24,0,0,787,790,5,80,0,0,788,791,3,98,49,0,789,
        791,5,3,0,0,790,788,1,0,0,0,790,789,1,0,0,0,791,810,1,0,0,0,792,
        793,10,23,0,0,793,802,5,76,0,0,794,799,3,24,12,0,795,796,5,96,0,
        0,796,798,3,24,12,0,797,795,1,0,0,0,798,801,1,0,0,0,799,797,1,0,
        0,0,799,800,1,0,0,0,800,803,1,0,0,0,801,799,1,0,0,0,802,794,1,0,
        0,0,802,803,1,0,0,0,803,804,1,0,0,0,804,810,5,77,0,0,805,806,10,
        22,0,0,806,810,3,26,13,0,807,808,10,18,0,0,808,810,7,11,0,0,809,
        727,1,0,0,0,809,730,1,0,0,0,809,733,1,0,0,0,809,736,1,0,0,0,809,
        739,1,0,0,0,809,742,1,0,0,0,809,745,1,0,0,0,809,748,1,0,0,0,809,
        751,1,0,0,0,809,754,1,0,0,0,809,757,1,0,0,0,809,760,1,0,0,0,809,
        766,1,0,0,0,809,770,1,0,0,0,809,776,1,0,0,0,809,786,1,0,0,0,809,
        792,1,0,0,0,809,805,1,0,0,0,809,807,1,0,0,0,810,813,1,0,0,0,811,
        809,1,0,0,0,811,812,1,0,0,0,812,91,1,0,0,0,813,811,1,0,0,0,814,815,
        7,12,0,0,815,93,1,0,0,0,816,818,5,72,0,0,817,819,3,90,45,0,818,817,
        1,0,0,0,818,819,1,0,0,0,819,826,1,0,0,0,820,822,5,96,0,0,821,823,
        3,90,45,0,822,821,1,0,0,0,822,823,1,0,0,0,823,825,1,0,0,0,824,820,
        1,0,0,0,825,828,1,0,0,0,826,824,1,0,0,0,826,827,1,0,0,0,827,829,
        1,0,0,0,828,826,1,0,0,0,829,830,5,73,0,0,830,95,1,0,0,0,831,832,
        5,74,0,0,832,837,3,90,45,0,833,834,5,96,0,0,834,836,3,90,45,0,835,
        833,1,0,0,0,836,839,1,0,0,0,837,835,1,0,0,0,837,838,1,0,0,0,838,
        840,1,0,0,0,839,837,1,0,0,0,840,841,5,75,0,0,841,97,1,0,0,0,842,
        843,7,13,0,0,843,99,1,0,0,0,844,850,3,106,53,0,845,850,3,112,56,
        0,846,850,3,104,52,0,847,850,3,108,54,0,848,850,3,110,55,0,849,844,
        1,0,0,0,849,845,1,0,0,0,849,846,1,0,0,0,849,847,1,0,0,0,849,848,
        1,0,0,0,850,101,1,0,0,0,851,852,3,112,56,0,852,853,5,45,0,0,853,
        103,1,0,0,0,854,855,7,14,0,0,855,105,1,0,0,0,856,858,7,15,0,0,857,
        856,1,0,0,0,858,859,1,0,0,0,859,857,1,0,0,0,859,860,1,0,0,0,860,
        107,1,0,0,0,861,863,5,126,0,0,862,861,1,0,0,0,863,864,1,0,0,0,864,
        862,1,0,0,0,864,865,1,0,0,0,865,109,1,0,0,0,866,868,5,125,0,0,867,
        866,1,0,0,0,868,869,1,0,0,0,869,867,1,0,0,0,869,870,1,0,0,0,870,
        111,1,0,0,0,871,872,7,16,0,0,872,113,1,0,0,0,873,878,5,76,0,0,874,
        877,3,118,59,0,875,877,3,116,58,0,876,874,1,0,0,0,876,875,1,0,0,
        0,877,880,1,0,0,0,878,876,1,0,0,0,878,879,1,0,0,0,879,881,1,0,0,
        0,880,878,1,0,0,0,881,882,5,77,0,0,882,115,1,0,0,0,883,884,5,65,
        0,0,884,885,3,114,57,0,885,117,1,0,0,0,886,900,3,114,57,0,887,900,
        3,120,60,0,888,900,3,122,61,0,889,900,3,124,62,0,890,900,3,126,63,
        0,891,900,3,128,64,0,892,900,3,130,65,0,893,900,3,132,66,0,894,900,
        3,134,67,0,895,900,3,138,69,0,896,900,3,140,70,0,897,900,3,142,71,
        0,898,900,3,144,72,0,899,886,1,0,0,0,899,887,1,0,0,0,899,888,1,0,
        0,0,899,889,1,0,0,0,899,890,1,0,0,0,899,891,1,0,0,0,899,892,1,0,
        0,0,899,893,1,0,0,0,899,894,1,0,0,0,899,895,1,0,0,0,899,896,1,0,
        0,0,899,897,1,0,0,0,899,898,1,0,0,0,900,119,1,0,0,0,901,904,3,152,
        76,0,902,904,3,154,77,0,903,901,1,0,0,0,903,902,1,0,0,0,904,121,
        1,0,0,0,905,906,5,33,0,0,906,907,5,72,0,0,907,908,3,90,45,0,908,
        909,5,73,0,0,909,912,3,118,59,0,910,911,5,18,0,0,911,913,3,118,59,
        0,912,910,1,0,0,0,912,913,1,0,0,0,913,123,1,0,0,0,914,915,5,28,0,
        0,915,918,5,72,0,0,916,919,3,120,60,0,917,919,5,79,0,0,918,916,1,
        0,0,0,918,917,1,0,0,0,919,922,1,0,0,0,920,923,3,154,77,0,921,923,
        5,79,0,0,922,920,1,0,0,0,922,921,1,0,0,0,923,925,1,0,0,0,924,926,
        3,90,45,0,925,924,1,0,0,0,925,926,1,0,0,0,926,927,1,0,0,0,927,928,
        5,73,0,0,928,929,3,118,59,0,929,125,1,0,0,0,930,931,5,71,0,0,931,
        932,5,72,0,0,932,933,3,90,45,0,933,934,5,73,0,0,934,935,3,118,59,
        0,935,127,1,0,0,0,936,937,5,17,0,0,937,938,3,118,59,0,938,939,5,
        71,0,0,939,940,5,72,0,0,940,941,3,90,45,0,941,942,5,73,0,0,942,943,
        5,79,0,0,943,129,1,0,0,0,944,945,5,14,0,0,945,946,5,79,0,0,946,131,
        1,0,0,0,947,948,5,8,0,0,948,949,5,79,0,0,949,133,1,0,0,0,950,951,
        5,62,0,0,951,957,3,90,45,0,952,953,5,54,0,0,953,954,5,72,0,0,954,
        955,3,34,17,0,955,956,5,73,0,0,956,958,1,0,0,0,957,952,1,0,0,0,957,
        958,1,0,0,0,958,959,1,0,0,0,959,961,3,114,57,0,960,962,3,136,68,
        0,961,960,1,0,0,0,962,963,1,0,0,0,963,961,1,0,0,0,963,964,1,0,0,
        0,964,135,1,0,0,0,965,973,5,11,0,0,966,968,3,98,49,0,967,966,1,0,
        0,0,967,968,1,0,0,0,968,969,1,0,0,0,969,970,5,72,0,0,970,971,3,34,
        17,0,971,972,5,73,0,0,972,974,1,0,0,0,973,967,1,0,0,0,973,974,1,
        0,0,0,974,975,1,0,0,0,975,976,3,114,57,0,976,137,1,0,0,0,977,979,
        5,53,0,0,978,980,3,90,45,0,979,978,1,0,0,0,979,980,1,0,0,0,980,981,
        1,0,0,0,981,982,5,79,0,0,982,139,1,0,0,0,983,984,5,19,0,0,984,985,
        3,90,45,0,985,986,3,26,13,0,986,987,5,79,0,0,987,141,1,0,0,0,988,
        989,5,55,0,0,989,990,3,90,45,0,990,991,3,26,13,0,991,992,5,79,0,
        0,992,143,1,0,0,0,993,995,5,6,0,0,994,996,5,135,0,0,995,994,1,0,
        0,0,995,996,1,0,0,0,996,998,1,0,0,0,997,999,3,146,73,0,998,997,1,
        0,0,0,998,999,1,0,0,0,999,1000,1,0,0,0,1000,1004,5,136,0,0,1001,
        1003,3,160,80,0,1002,1001,1,0,0,0,1003,1006,1,0,0,0,1004,1002,1,
        0,0,0,1004,1005,1,0,0,0,1005,1007,1,0,0,0,1006,1004,1,0,0,0,1007,
        1008,5,159,0,0,1008,145,1,0,0,0,1009,1010,5,138,0,0,1010,1015,5,
        137,0,0,1011,1012,5,140,0,0,1012,1014,5,137,0,0,1013,1011,1,0,0,
        0,1014,1017,1,0,0,0,1015,1013,1,0,0,0,1015,1016,1,0,0,0,1016,1018,
        1,0,0,0,1017,1015,1,0,0,0,1018,1019,5,139,0,0,1019,147,1,0,0,0,1020,
        1025,3,86,43,0,1021,1022,5,96,0,0,1022,1024,3,86,43,0,1023,1021,
        1,0,0,0,1024,1027,1,0,0,0,1025,1023,1,0,0,0,1025,1026,1,0,0,0,1026,
        149,1,0,0,0,1027,1025,1,0,0,0,1028,1032,5,72,0,0,1029,1031,5,96,
        0,0,1030,1029,1,0,0,0,1031,1034,1,0,0,0,1032,1030,1,0,0,0,1032,1033,
        1,0,0,0,1033,1035,1,0,0,0,1034,1032,1,0,0,0,1035,1036,3,86,43,0,
        1036,1043,1,0,0,0,1037,1039,5,96,0,0,1038,1040,3,86,43,0,1039,1038,
        1,0,0,0,1039,1040,1,0,0,0,1040,1042,1,0,0,0,1041,1037,1,0,0,0,1042,
        1045,1,0,0,0,1043,1041,1,0,0,0,1043,1044,1,0,0,0,1044,1046,1,0,0,
        0,1045,1043,1,0,0,0,1046,1047,5,73,0,0,1047,151,1,0,0,0,1048,1051,
        3,86,43,0,1049,1050,5,84,0,0,1050,1052,3,90,45,0,1051,1049,1,0,0,
        0,1051,1052,1,0,0,0,1052,1058,1,0,0,0,1053,1054,3,150,75,0,1054,
        1055,5,84,0,0,1055,1056,3,90,45,0,1056,1058,1,0,0,0,1057,1048,1,
        0,0,0,1057,1053,1,0,0,0,1058,1059,1,0,0,0,1059,1060,5,79,0,0,1060,
        153,1,0,0,0,1061,1062,3,90,45,0,1062,1063,5,79,0,0,1063,155,1,0,
        0,0,1064,1065,5,41,0,0,1065,1066,5,72,0,0,1066,1068,3,158,79,0,1067,
        1069,3,98,49,0,1068,1067,1,0,0,0,1068,1069,1,0,0,0,1069,1070,1,0,
        0,0,1070,1071,5,82,0,0,1071,1073,3,78,39,0,1072,1074,3,98,49,0,1073,
        1072,1,0,0,0,1073,1074,1,0,0,0,1074,1075,1,0,0,0,1075,1076,5,73,
        0,0,1076,157,1,0,0,0,1077,1080,3,80,40,0,1078,1080,3,28,14,0,1079,
        1077,1,0,0,0,1079,1078,1,0,0,0,1080,159,1,0,0,0,1081,1093,3,162,
        81,0,1082,1093,3,164,82,0,1083,1093,3,166,83,0,1084,1093,3,180,90,
        0,1085,1093,3,168,84,0,1086,1093,3,170,85,0,1087,1093,3,174,87,0,
        1088,1093,5,152,0,0,1089,1093,5,144,0,0,1090,1093,5,146,0,0,1091,
        1093,3,176,88,0,1092,1081,1,0,0,0,1092,1082,1,0,0,0,1092,1083,1,
        0,0,0,1092,1084,1,0,0,0,1092,1085,1,0,0,0,1092,1086,1,0,0,0,1092,
        1087,1,0,0,0,1092,1088,1,0,0,0,1092,1089,1,0,0,0,1092,1090,1,0,0,
        0,1092,1091,1,0,0,0,1093,161,1,0,0,0,1094,1098,5,158,0,0,1095,1097,
        3,160,80,0,1096,1095,1,0,0,0,1097,1100,1,0,0,0,1098,1096,1,0,0,0,
        1098,1099,1,0,0,0,1099,1101,1,0,0,0,1100,1098,1,0,0,0,1101,1102,
        5,159,0,0,1102,163,1,0,0,0,1103,1104,5,153,0,0,1104,1107,5,166,0,
        0,1105,1106,5,162,0,0,1106,1108,3,186,93,0,1107,1105,1,0,0,0,1107,
        1108,1,0,0,0,1108,1123,1,0,0,0,1109,1110,5,153,0,0,1110,1115,5,166,
        0,0,1111,1112,5,164,0,0,1112,1114,5,166,0,0,1113,1111,1,0,0,0,1114,
        1117,1,0,0,0,1115,1113,1,0,0,0,1115,1116,1,0,0,0,1116,1120,1,0,0,
        0,1117,1115,1,0,0,0,1118,1119,5,162,0,0,1119,1121,3,180,90,0,1120,
        1118,1,0,0,0,1120,1121,1,0,0,0,1121,1123,1,0,0,0,1122,1103,1,0,0,
        0,1122,1109,1,0,0,0,1123,165,1,0,0,0,1124,1125,3,178,89,0,1125,1126,
        5,162,0,0,1126,1127,3,186,93,0,1127,1139,1,0,0,0,1128,1131,3,178,
        89,0,1129,1130,5,164,0,0,1130,1132,3,178,89,0,1131,1129,1,0,0,0,
        1132,1133,1,0,0,0,1133,1131,1,0,0,0,1133,1134,1,0,0,0,1134,1135,
        1,0,0,0,1135,1136,5,162,0,0,1136,1137,3,180,90,0,1137,1139,1,0,0,
        0,1138,1124,1,0,0,0,1138,1128,1,0,0,0,1139,167,1,0,0,0,1140,1141,
        5,151,0,0,1141,1142,3,186,93,0,1142,1143,3,162,81,0,1143,169,1,0,
        0,0,1144,1145,5,149,0,0,1145,1146,3,162,81,0,1146,1147,3,186,93,
        0,1147,1148,3,162,81,0,1148,1149,3,162,81,0,1149,171,1,0,0,0,1150,
        1151,5,145,0,0,1151,1152,3,184,92,0,1152,1153,3,162,81,0,1153,173,
        1,0,0,0,1154,1155,5,154,0,0,1155,1167,3,186,93,0,1156,1158,3,172,
        86,0,1157,1156,1,0,0,0,1158,1159,1,0,0,0,1159,1157,1,0,0,0,1159,
        1160,1,0,0,0,1160,1163,1,0,0,0,1161,1162,5,147,0,0,1162,1164,3,162,
        81,0,1163,1161,1,0,0,0,1163,1164,1,0,0,0,1164,1168,1,0,0,0,1165,
        1166,5,147,0,0,1166,1168,3,162,81,0,1167,1157,1,0,0,0,1167,1165,
        1,0,0,0,1168,175,1,0,0,0,1169,1170,5,150,0,0,1170,1171,5,166,0,0,
        1171,1180,5,160,0,0,1172,1177,5,166,0,0,1173,1174,5,164,0,0,1174,
        1176,5,166,0,0,1175,1173,1,0,0,0,1176,1179,1,0,0,0,1177,1175,1,0,
        0,0,1177,1178,1,0,0,0,1178,1181,1,0,0,0,1179,1177,1,0,0,0,1180,1172,
        1,0,0,0,1180,1181,1,0,0,0,1181,1182,1,0,0,0,1182,1192,5,161,0,0,
        1183,1184,5,165,0,0,1184,1189,5,166,0,0,1185,1186,5,164,0,0,1186,
        1188,5,166,0,0,1187,1185,1,0,0,0,1188,1191,1,0,0,0,1189,1187,1,0,
        0,0,1189,1190,1,0,0,0,1190,1193,1,0,0,0,1191,1189,1,0,0,0,1192,1183,
        1,0,0,0,1192,1193,1,0,0,0,1193,1194,1,0,0,0,1194,1195,3,162,81,0,
        1195,177,1,0,0,0,1196,1201,5,166,0,0,1197,1198,5,163,0,0,1198,1200,
        7,17,0,0,1199,1197,1,0,0,0,1200,1203,1,0,0,0,1201,1199,1,0,0,0,1201,
        1202,1,0,0,0,1202,179,1,0,0,0,1203,1201,1,0,0,0,1204,1205,7,17,0,
        0,1205,1214,5,160,0,0,1206,1211,3,186,93,0,1207,1208,5,164,0,0,1208,
        1210,3,186,93,0,1209,1207,1,0,0,0,1210,1213,1,0,0,0,1211,1209,1,
        0,0,0,1211,1212,1,0,0,0,1212,1215,1,0,0,0,1213,1211,1,0,0,0,1214,
        1206,1,0,0,0,1214,1215,1,0,0,0,1215,1216,1,0,0,0,1216,1217,5,161,
        0,0,1217,181,1,0,0,0,1218,1219,7,18,0,0,1219,183,1,0,0,0,1220,1226,
        5,168,0,0,1221,1226,5,169,0,0,1222,1226,5,167,0,0,1223,1226,3,182,
        91,0,1224,1226,5,170,0,0,1225,1220,1,0,0,0,1225,1221,1,0,0,0,1225,
        1222,1,0,0,0,1225,1223,1,0,0,0,1225,1224,1,0,0,0,1226,185,1,0,0,
        0,1227,1231,3,178,89,0,1228,1231,3,180,90,0,1229,1231,3,184,92,0,
        1230,1227,1,0,0,0,1230,1228,1,0,0,0,1230,1229,1,0,0,0,1231,187,1,
        0,0,0,141,201,203,212,220,232,239,249,255,260,266,274,280,291,302,
        307,321,333,336,344,347,350,359,364,373,378,381,386,393,395,409,
        414,420,424,432,434,442,446,452,455,459,461,466,471,479,481,489,
        493,503,505,510,518,534,544,556,558,564,577,580,590,593,597,603,
        613,616,631,636,641,644,651,659,664,669,680,685,687,695,699,723,
        725,773,779,783,790,799,802,809,811,818,822,826,837,849,859,864,
        869,876,878,899,903,912,918,922,925,957,963,967,973,979,995,998,
        1004,1015,1025,1032,1039,1043,1051,1057,1068,1073,1079,1092,1098,
        1107,1115,1120,1122,1133,1138,1159,1163,1167,1177,1180,1189,1192,
        1201,1211,1214,1225,1230
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!SolidityParser.__ATN) {
            SolidityParser.__ATN = new antlr.ATNDeserializer().deserialize(SolidityParser._serializedATN);
        }

        return SolidityParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(SolidityParser.literalNames, SolidityParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return SolidityParser.vocabulary;
    }

    private static readonly decisionsToDFA = SolidityParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class SourceUnitContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(SolidityParser.EOF, 0)!;
    }
    public pragmaDirective(): PragmaDirectiveContext[];
    public pragmaDirective(i: number): PragmaDirectiveContext | null;
    public pragmaDirective(i?: number): PragmaDirectiveContext[] | PragmaDirectiveContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PragmaDirectiveContext);
        }

        return this.getRuleContext(i, PragmaDirectiveContext);
    }
    public importDirective(): ImportDirectiveContext[];
    public importDirective(i: number): ImportDirectiveContext | null;
    public importDirective(i?: number): ImportDirectiveContext[] | ImportDirectiveContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ImportDirectiveContext);
        }

        return this.getRuleContext(i, ImportDirectiveContext);
    }
    public usingDirective(): UsingDirectiveContext[];
    public usingDirective(i: number): UsingDirectiveContext | null;
    public usingDirective(i?: number): UsingDirectiveContext[] | UsingDirectiveContext | null {
        if (i === undefined) {
            return this.getRuleContexts(UsingDirectiveContext);
        }

        return this.getRuleContext(i, UsingDirectiveContext);
    }
    public contractDefinition(): ContractDefinitionContext[];
    public contractDefinition(i: number): ContractDefinitionContext | null;
    public contractDefinition(i?: number): ContractDefinitionContext[] | ContractDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ContractDefinitionContext);
        }

        return this.getRuleContext(i, ContractDefinitionContext);
    }
    public interfaceDefinition(): InterfaceDefinitionContext[];
    public interfaceDefinition(i: number): InterfaceDefinitionContext | null;
    public interfaceDefinition(i?: number): InterfaceDefinitionContext[] | InterfaceDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(InterfaceDefinitionContext);
        }

        return this.getRuleContext(i, InterfaceDefinitionContext);
    }
    public libraryDefinition(): LibraryDefinitionContext[];
    public libraryDefinition(i: number): LibraryDefinitionContext | null;
    public libraryDefinition(i?: number): LibraryDefinitionContext[] | LibraryDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LibraryDefinitionContext);
        }

        return this.getRuleContext(i, LibraryDefinitionContext);
    }
    public functionDefinition(): FunctionDefinitionContext[];
    public functionDefinition(i: number): FunctionDefinitionContext | null;
    public functionDefinition(i?: number): FunctionDefinitionContext[] | FunctionDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(FunctionDefinitionContext);
        }

        return this.getRuleContext(i, FunctionDefinitionContext);
    }
    public constantVariableDeclaration(): ConstantVariableDeclarationContext[];
    public constantVariableDeclaration(i: number): ConstantVariableDeclarationContext | null;
    public constantVariableDeclaration(i?: number): ConstantVariableDeclarationContext[] | ConstantVariableDeclarationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ConstantVariableDeclarationContext);
        }

        return this.getRuleContext(i, ConstantVariableDeclarationContext);
    }
    public structDefinition(): StructDefinitionContext[];
    public structDefinition(i: number): StructDefinitionContext | null;
    public structDefinition(i?: number): StructDefinitionContext[] | StructDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StructDefinitionContext);
        }

        return this.getRuleContext(i, StructDefinitionContext);
    }
    public enumDefinition(): EnumDefinitionContext[];
    public enumDefinition(i: number): EnumDefinitionContext | null;
    public enumDefinition(i?: number): EnumDefinitionContext[] | EnumDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(EnumDefinitionContext);
        }

        return this.getRuleContext(i, EnumDefinitionContext);
    }
    public userDefinedValueTypeDefinition(): UserDefinedValueTypeDefinitionContext[];
    public userDefinedValueTypeDefinition(i: number): UserDefinedValueTypeDefinitionContext | null;
    public userDefinedValueTypeDefinition(i?: number): UserDefinedValueTypeDefinitionContext[] | UserDefinedValueTypeDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(UserDefinedValueTypeDefinitionContext);
        }

        return this.getRuleContext(i, UserDefinedValueTypeDefinitionContext);
    }
    public errorDefinition(): ErrorDefinitionContext[];
    public errorDefinition(i: number): ErrorDefinitionContext | null;
    public errorDefinition(i?: number): ErrorDefinitionContext[] | ErrorDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ErrorDefinitionContext);
        }

        return this.getRuleContext(i, ErrorDefinitionContext);
    }
    public eventDefinition(): EventDefinitionContext[];
    public eventDefinition(i: number): EventDefinitionContext | null;
    public eventDefinition(i?: number): EventDefinitionContext[] | EventDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(EventDefinitionContext);
        }

        return this.getRuleContext(i, EventDefinitionContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_sourceUnit;
    }
}


export class PragmaDirectiveContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Pragma(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Pragma, 0)!;
    }
    public PragmaSemicolon(): antlr.TerminalNode {
        return this.getToken(SolidityParser.PragmaSemicolon, 0)!;
    }
    public PragmaToken(): antlr.TerminalNode[];
    public PragmaToken(i: number): antlr.TerminalNode | null;
    public PragmaToken(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.PragmaToken);
    	} else {
    		return this.getToken(SolidityParser.PragmaToken, i);
    	}
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_pragmaDirective;
    }
}


export class ImportDirectiveContext extends antlr.ParserRuleContext {
    public _unitAlias?: IdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Import(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Import, 0)!;
    }
    public Semicolon(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Semicolon, 0)!;
    }
    public path(): PathContext | null {
        return this.getRuleContext(0, PathContext);
    }
    public symbolAliases(): SymbolAliasesContext | null {
        return this.getRuleContext(0, SymbolAliasesContext);
    }
    public From(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.From, 0);
    }
    public Mul(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Mul, 0);
    }
    public As(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.As, 0);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_importDirective;
    }
}


export class ImportAliasesContext extends antlr.ParserRuleContext {
    public _symbol_?: IdentifierContext;
    public _alias?: IdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public As(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.As, 0);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_importAliases;
    }
}


export class PathContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NonEmptyStringLiteral(): antlr.TerminalNode {
        return this.getToken(SolidityParser.NonEmptyStringLiteral, 0)!;
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_path;
    }
}


export class SymbolAliasesContext extends antlr.ParserRuleContext {
    public _importAliases?: ImportAliasesContext;
    public _aliases: ImportAliasesContext[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LBrace(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LBrace, 0)!;
    }
    public RBrace(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RBrace, 0)!;
    }
    public importAliases(): ImportAliasesContext[];
    public importAliases(i: number): ImportAliasesContext | null;
    public importAliases(i?: number): ImportAliasesContext[] | ImportAliasesContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ImportAliasesContext);
        }

        return this.getRuleContext(i, ImportAliasesContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Comma);
    	} else {
    		return this.getToken(SolidityParser.Comma, i);
    	}
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_symbolAliases;
    }
}


export class ContractDefinitionContext extends antlr.ParserRuleContext {
    public _name?: IdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Contract(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Contract, 0)!;
    }
    public LBrace(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LBrace, 0)!;
    }
    public RBrace(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RBrace, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public Abstract(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Abstract, 0);
    }
    public inheritanceSpecifierList(): InheritanceSpecifierListContext | null {
        return this.getRuleContext(0, InheritanceSpecifierListContext);
    }
    public contractBodyElement(): ContractBodyElementContext[];
    public contractBodyElement(i: number): ContractBodyElementContext | null;
    public contractBodyElement(i?: number): ContractBodyElementContext[] | ContractBodyElementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ContractBodyElementContext);
        }

        return this.getRuleContext(i, ContractBodyElementContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_contractDefinition;
    }
}


export class InterfaceDefinitionContext extends antlr.ParserRuleContext {
    public _name?: IdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Interface(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Interface, 0)!;
    }
    public LBrace(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LBrace, 0)!;
    }
    public RBrace(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RBrace, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public inheritanceSpecifierList(): InheritanceSpecifierListContext | null {
        return this.getRuleContext(0, InheritanceSpecifierListContext);
    }
    public contractBodyElement(): ContractBodyElementContext[];
    public contractBodyElement(i: number): ContractBodyElementContext | null;
    public contractBodyElement(i?: number): ContractBodyElementContext[] | ContractBodyElementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ContractBodyElementContext);
        }

        return this.getRuleContext(i, ContractBodyElementContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_interfaceDefinition;
    }
}


export class LibraryDefinitionContext extends antlr.ParserRuleContext {
    public _name?: IdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Library(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Library, 0)!;
    }
    public LBrace(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LBrace, 0)!;
    }
    public RBrace(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RBrace, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public contractBodyElement(): ContractBodyElementContext[];
    public contractBodyElement(i: number): ContractBodyElementContext | null;
    public contractBodyElement(i?: number): ContractBodyElementContext[] | ContractBodyElementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ContractBodyElementContext);
        }

        return this.getRuleContext(i, ContractBodyElementContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_libraryDefinition;
    }
}


export class InheritanceSpecifierListContext extends antlr.ParserRuleContext {
    public _inheritanceSpecifier?: InheritanceSpecifierContext;
    public _inheritanceSpecifiers: InheritanceSpecifierContext[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Is(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Is, 0)!;
    }
    public inheritanceSpecifier(): InheritanceSpecifierContext[];
    public inheritanceSpecifier(i: number): InheritanceSpecifierContext | null;
    public inheritanceSpecifier(i?: number): InheritanceSpecifierContext[] | InheritanceSpecifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(InheritanceSpecifierContext);
        }

        return this.getRuleContext(i, InheritanceSpecifierContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Comma);
    	} else {
    		return this.getToken(SolidityParser.Comma, i);
    	}
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_inheritanceSpecifierList;
    }
}


export class InheritanceSpecifierContext extends antlr.ParserRuleContext {
    public _name?: IdentifierPathContext;
    public _arguments?: CallArgumentListContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifierPath(): IdentifierPathContext {
        return this.getRuleContext(0, IdentifierPathContext)!;
    }
    public callArgumentList(): CallArgumentListContext | null {
        return this.getRuleContext(0, CallArgumentListContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_inheritanceSpecifier;
    }
}


export class ContractBodyElementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public constructorDefinition(): ConstructorDefinitionContext | null {
        return this.getRuleContext(0, ConstructorDefinitionContext);
    }
    public functionDefinition(): FunctionDefinitionContext | null {
        return this.getRuleContext(0, FunctionDefinitionContext);
    }
    public modifierDefinition(): ModifierDefinitionContext | null {
        return this.getRuleContext(0, ModifierDefinitionContext);
    }
    public fallbackFunctionDefinition(): FallbackFunctionDefinitionContext | null {
        return this.getRuleContext(0, FallbackFunctionDefinitionContext);
    }
    public receiveFunctionDefinition(): ReceiveFunctionDefinitionContext | null {
        return this.getRuleContext(0, ReceiveFunctionDefinitionContext);
    }
    public structDefinition(): StructDefinitionContext | null {
        return this.getRuleContext(0, StructDefinitionContext);
    }
    public enumDefinition(): EnumDefinitionContext | null {
        return this.getRuleContext(0, EnumDefinitionContext);
    }
    public userDefinedValueTypeDefinition(): UserDefinedValueTypeDefinitionContext | null {
        return this.getRuleContext(0, UserDefinedValueTypeDefinitionContext);
    }
    public stateVariableDeclaration(): StateVariableDeclarationContext | null {
        return this.getRuleContext(0, StateVariableDeclarationContext);
    }
    public eventDefinition(): EventDefinitionContext | null {
        return this.getRuleContext(0, EventDefinitionContext);
    }
    public errorDefinition(): ErrorDefinitionContext | null {
        return this.getRuleContext(0, ErrorDefinitionContext);
    }
    public usingDirective(): UsingDirectiveContext | null {
        return this.getRuleContext(0, UsingDirectiveContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_contractBodyElement;
    }
}


export class NamedArgumentContext extends antlr.ParserRuleContext {
    public _name?: IdentifierContext;
    public _value?: ExpressionContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Colon(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Colon, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_namedArgument;
    }
}


export class CallArgumentListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LParen, 0)!;
    }
    public RParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RParen, 0)!;
    }
    public LBrace(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.LBrace, 0);
    }
    public RBrace(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.RBrace, 0);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public namedArgument(): NamedArgumentContext[];
    public namedArgument(i: number): NamedArgumentContext | null;
    public namedArgument(i?: number): NamedArgumentContext[] | NamedArgumentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(NamedArgumentContext);
        }

        return this.getRuleContext(i, NamedArgumentContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Comma);
    	} else {
    		return this.getToken(SolidityParser.Comma, i);
    	}
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_callArgumentList;
    }
}


export class IdentifierPathContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public Period(): antlr.TerminalNode[];
    public Period(i: number): antlr.TerminalNode | null;
    public Period(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Period);
    	} else {
    		return this.getToken(SolidityParser.Period, i);
    	}
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_identifierPath;
    }
}


export class ModifierInvocationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifierPath(): IdentifierPathContext {
        return this.getRuleContext(0, IdentifierPathContext)!;
    }
    public callArgumentList(): CallArgumentListContext | null {
        return this.getRuleContext(0, CallArgumentListContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_modifierInvocation;
    }
}


export class VisibilityContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Internal(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Internal, 0);
    }
    public External(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.External, 0);
    }
    public Private(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Private, 0);
    }
    public Public(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Public, 0);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_visibility;
    }
}


export class ParameterListContext extends antlr.ParserRuleContext {
    public _parameterDeclaration?: ParameterDeclarationContext;
    public _parameters: ParameterDeclarationContext[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public parameterDeclaration(): ParameterDeclarationContext[];
    public parameterDeclaration(i: number): ParameterDeclarationContext | null;
    public parameterDeclaration(i?: number): ParameterDeclarationContext[] | ParameterDeclarationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ParameterDeclarationContext);
        }

        return this.getRuleContext(i, ParameterDeclarationContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Comma);
    	} else {
    		return this.getToken(SolidityParser.Comma, i);
    	}
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_parameterList;
    }
}


export class ParameterDeclarationContext extends antlr.ParserRuleContext {
    public _type_?: TypeNameContext;
    public _location?: DataLocationContext;
    public _name?: IdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeName(): TypeNameContext {
        return this.getRuleContext(0, TypeNameContext)!;
    }
    public dataLocation(): DataLocationContext | null {
        return this.getRuleContext(0, DataLocationContext);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_parameterDeclaration;
    }
}


export class ConstructorDefinitionContext extends antlr.ParserRuleContext {
    public _arguments?: ParameterListContext;
    public _body?: BlockContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Constructor(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Constructor, 0)!;
    }
    public LParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LParen, 0)!;
    }
    public RParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RParen, 0)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public modifierInvocation(): ModifierInvocationContext[];
    public modifierInvocation(i: number): ModifierInvocationContext | null;
    public modifierInvocation(i?: number): ModifierInvocationContext[] | ModifierInvocationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ModifierInvocationContext);
        }

        return this.getRuleContext(i, ModifierInvocationContext);
    }
    public Payable(): antlr.TerminalNode[];
    public Payable(i: number): antlr.TerminalNode | null;
    public Payable(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Payable);
    	} else {
    		return this.getToken(SolidityParser.Payable, i);
    	}
    }
    public Internal(): antlr.TerminalNode[];
    public Internal(i: number): antlr.TerminalNode | null;
    public Internal(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Internal);
    	} else {
    		return this.getToken(SolidityParser.Internal, i);
    	}
    }
    public Public(): antlr.TerminalNode[];
    public Public(i: number): antlr.TerminalNode | null;
    public Public(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Public);
    	} else {
    		return this.getToken(SolidityParser.Public, i);
    	}
    }
    public parameterList(): ParameterListContext | null {
        return this.getRuleContext(0, ParameterListContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_constructorDefinition;
    }
}


export class StateMutabilityContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Pure(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Pure, 0);
    }
    public View(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.View, 0);
    }
    public Payable(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Payable, 0);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_stateMutability;
    }
}


export class OverrideSpecifierContext extends antlr.ParserRuleContext {
    public _identifierPath?: IdentifierPathContext;
    public _overrides: IdentifierPathContext[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Override(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Override, 0)!;
    }
    public LParen(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.LParen, 0);
    }
    public RParen(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.RParen, 0);
    }
    public identifierPath(): IdentifierPathContext[];
    public identifierPath(i: number): IdentifierPathContext | null;
    public identifierPath(i?: number): IdentifierPathContext[] | IdentifierPathContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierPathContext);
        }

        return this.getRuleContext(i, IdentifierPathContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Comma);
    	} else {
    		return this.getToken(SolidityParser.Comma, i);
    	}
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_overrideSpecifier;
    }
}


export class FunctionDefinitionContext extends antlr.ParserRuleContext {
    public _arguments?: ParameterListContext;
    public _returnParameters?: ParameterListContext;
    public _body?: BlockContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Function(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Function, 0)!;
    }
    public LParen(): antlr.TerminalNode[];
    public LParen(i: number): antlr.TerminalNode | null;
    public LParen(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.LParen);
    	} else {
    		return this.getToken(SolidityParser.LParen, i);
    	}
    }
    public RParen(): antlr.TerminalNode[];
    public RParen(i: number): antlr.TerminalNode | null;
    public RParen(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.RParen);
    	} else {
    		return this.getToken(SolidityParser.RParen, i);
    	}
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public Fallback(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Fallback, 0);
    }
    public Receive(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Receive, 0);
    }
    public Semicolon(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Semicolon, 0);
    }
    public visibility(): VisibilityContext[];
    public visibility(i: number): VisibilityContext | null;
    public visibility(i?: number): VisibilityContext[] | VisibilityContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VisibilityContext);
        }

        return this.getRuleContext(i, VisibilityContext);
    }
    public stateMutability(): StateMutabilityContext[];
    public stateMutability(i: number): StateMutabilityContext | null;
    public stateMutability(i?: number): StateMutabilityContext[] | StateMutabilityContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StateMutabilityContext);
        }

        return this.getRuleContext(i, StateMutabilityContext);
    }
    public modifierInvocation(): ModifierInvocationContext[];
    public modifierInvocation(i: number): ModifierInvocationContext | null;
    public modifierInvocation(i?: number): ModifierInvocationContext[] | ModifierInvocationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ModifierInvocationContext);
        }

        return this.getRuleContext(i, ModifierInvocationContext);
    }
    public Virtual(): antlr.TerminalNode[];
    public Virtual(i: number): antlr.TerminalNode | null;
    public Virtual(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Virtual);
    	} else {
    		return this.getToken(SolidityParser.Virtual, i);
    	}
    }
    public overrideSpecifier(): OverrideSpecifierContext[];
    public overrideSpecifier(i: number): OverrideSpecifierContext | null;
    public overrideSpecifier(i?: number): OverrideSpecifierContext[] | OverrideSpecifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OverrideSpecifierContext);
        }

        return this.getRuleContext(i, OverrideSpecifierContext);
    }
    public Returns(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Returns, 0);
    }
    public block(): BlockContext | null {
        return this.getRuleContext(0, BlockContext);
    }
    public parameterList(): ParameterListContext[];
    public parameterList(i: number): ParameterListContext | null;
    public parameterList(i?: number): ParameterListContext[] | ParameterListContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ParameterListContext);
        }

        return this.getRuleContext(i, ParameterListContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_functionDefinition;
    }
}


export class ModifierDefinitionContext extends antlr.ParserRuleContext {
    public _name?: IdentifierContext;
    public _arguments?: ParameterListContext;
    public _body?: BlockContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Modifier(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Modifier, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public Semicolon(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Semicolon, 0);
    }
    public LParen(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.LParen, 0);
    }
    public RParen(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.RParen, 0);
    }
    public Virtual(): antlr.TerminalNode[];
    public Virtual(i: number): antlr.TerminalNode | null;
    public Virtual(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Virtual);
    	} else {
    		return this.getToken(SolidityParser.Virtual, i);
    	}
    }
    public overrideSpecifier(): OverrideSpecifierContext[];
    public overrideSpecifier(i: number): OverrideSpecifierContext | null;
    public overrideSpecifier(i?: number): OverrideSpecifierContext[] | OverrideSpecifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OverrideSpecifierContext);
        }

        return this.getRuleContext(i, OverrideSpecifierContext);
    }
    public block(): BlockContext | null {
        return this.getRuleContext(0, BlockContext);
    }
    public parameterList(): ParameterListContext | null {
        return this.getRuleContext(0, ParameterListContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_modifierDefinition;
    }
}


export class FallbackFunctionDefinitionContext extends antlr.ParserRuleContext {
    public _kind?: Token | null;
    public _returnParameters?: ParameterListContext;
    public _body?: BlockContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LParen(): antlr.TerminalNode[];
    public LParen(i: number): antlr.TerminalNode | null;
    public LParen(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.LParen);
    	} else {
    		return this.getToken(SolidityParser.LParen, i);
    	}
    }
    public RParen(): antlr.TerminalNode[];
    public RParen(i: number): antlr.TerminalNode | null;
    public RParen(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.RParen);
    	} else {
    		return this.getToken(SolidityParser.RParen, i);
    	}
    }
    public Fallback(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Fallback, 0)!;
    }
    public Semicolon(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Semicolon, 0);
    }
    public parameterList(): ParameterListContext[];
    public parameterList(i: number): ParameterListContext | null;
    public parameterList(i?: number): ParameterListContext[] | ParameterListContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ParameterListContext);
        }

        return this.getRuleContext(i, ParameterListContext);
    }
    public External(): antlr.TerminalNode[];
    public External(i: number): antlr.TerminalNode | null;
    public External(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.External);
    	} else {
    		return this.getToken(SolidityParser.External, i);
    	}
    }
    public stateMutability(): StateMutabilityContext[];
    public stateMutability(i: number): StateMutabilityContext | null;
    public stateMutability(i?: number): StateMutabilityContext[] | StateMutabilityContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StateMutabilityContext);
        }

        return this.getRuleContext(i, StateMutabilityContext);
    }
    public modifierInvocation(): ModifierInvocationContext[];
    public modifierInvocation(i: number): ModifierInvocationContext | null;
    public modifierInvocation(i?: number): ModifierInvocationContext[] | ModifierInvocationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ModifierInvocationContext);
        }

        return this.getRuleContext(i, ModifierInvocationContext);
    }
    public Virtual(): antlr.TerminalNode[];
    public Virtual(i: number): antlr.TerminalNode | null;
    public Virtual(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Virtual);
    	} else {
    		return this.getToken(SolidityParser.Virtual, i);
    	}
    }
    public overrideSpecifier(): OverrideSpecifierContext[];
    public overrideSpecifier(i: number): OverrideSpecifierContext | null;
    public overrideSpecifier(i?: number): OverrideSpecifierContext[] | OverrideSpecifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OverrideSpecifierContext);
        }

        return this.getRuleContext(i, OverrideSpecifierContext);
    }
    public Returns(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Returns, 0);
    }
    public block(): BlockContext | null {
        return this.getRuleContext(0, BlockContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_fallbackFunctionDefinition;
    }
}


export class ReceiveFunctionDefinitionContext extends antlr.ParserRuleContext {
    public _kind?: Token | null;
    public _body?: BlockContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LParen, 0)!;
    }
    public RParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RParen, 0)!;
    }
    public Receive(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Receive, 0)!;
    }
    public Semicolon(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Semicolon, 0);
    }
    public External(): antlr.TerminalNode[];
    public External(i: number): antlr.TerminalNode | null;
    public External(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.External);
    	} else {
    		return this.getToken(SolidityParser.External, i);
    	}
    }
    public Payable(): antlr.TerminalNode[];
    public Payable(i: number): antlr.TerminalNode | null;
    public Payable(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Payable);
    	} else {
    		return this.getToken(SolidityParser.Payable, i);
    	}
    }
    public modifierInvocation(): ModifierInvocationContext[];
    public modifierInvocation(i: number): ModifierInvocationContext | null;
    public modifierInvocation(i?: number): ModifierInvocationContext[] | ModifierInvocationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ModifierInvocationContext);
        }

        return this.getRuleContext(i, ModifierInvocationContext);
    }
    public Virtual(): antlr.TerminalNode[];
    public Virtual(i: number): antlr.TerminalNode | null;
    public Virtual(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Virtual);
    	} else {
    		return this.getToken(SolidityParser.Virtual, i);
    	}
    }
    public overrideSpecifier(): OverrideSpecifierContext[];
    public overrideSpecifier(i: number): OverrideSpecifierContext | null;
    public overrideSpecifier(i?: number): OverrideSpecifierContext[] | OverrideSpecifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OverrideSpecifierContext);
        }

        return this.getRuleContext(i, OverrideSpecifierContext);
    }
    public block(): BlockContext | null {
        return this.getRuleContext(0, BlockContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_receiveFunctionDefinition;
    }
}


export class StructDefinitionContext extends antlr.ParserRuleContext {
    public _name?: IdentifierContext;
    public _members?: StructMemberContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Struct(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Struct, 0)!;
    }
    public LBrace(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LBrace, 0)!;
    }
    public RBrace(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RBrace, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public structMember(): StructMemberContext[];
    public structMember(i: number): StructMemberContext | null;
    public structMember(i?: number): StructMemberContext[] | StructMemberContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StructMemberContext);
        }

        return this.getRuleContext(i, StructMemberContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_structDefinition;
    }
}


export class StructMemberContext extends antlr.ParserRuleContext {
    public _type_?: TypeNameContext;
    public _name?: IdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Semicolon(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Semicolon, 0)!;
    }
    public typeName(): TypeNameContext {
        return this.getRuleContext(0, TypeNameContext)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_structMember;
    }
}


export class EnumDefinitionContext extends antlr.ParserRuleContext {
    public _name?: IdentifierContext;
    public _identifier?: IdentifierContext;
    public _enumValues: IdentifierContext[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Enum(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Enum, 0)!;
    }
    public LBrace(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LBrace, 0)!;
    }
    public RBrace(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RBrace, 0)!;
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Comma);
    	} else {
    		return this.getToken(SolidityParser.Comma, i);
    	}
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_enumDefinition;
    }
}


export class UserDefinedValueTypeDefinitionContext extends antlr.ParserRuleContext {
    public _name?: IdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Type(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Type, 0)!;
    }
    public Is(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Is, 0)!;
    }
    public Semicolon(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Semicolon, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public elementaryTypeName(): ElementaryTypeNameContext | null {
        return this.getRuleContext(0, ElementaryTypeNameContext);
    }
    public addressPayable(): AddressPayableContext | null {
        return this.getRuleContext(0, AddressPayableContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_userDefinedValueTypeDefinition;
    }
}


export class StateVariableDeclarationContext extends antlr.ParserRuleContext {
    public _type_?: TypeNameContext;
    public _name?: IdentifierContext;
    public _initialValue?: ExpressionContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Semicolon(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Semicolon, 0)!;
    }
    public typeName(): TypeNameContext {
        return this.getRuleContext(0, TypeNameContext)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public Public(): antlr.TerminalNode[];
    public Public(i: number): antlr.TerminalNode | null;
    public Public(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Public);
    	} else {
    		return this.getToken(SolidityParser.Public, i);
    	}
    }
    public Private(): antlr.TerminalNode[];
    public Private(i: number): antlr.TerminalNode | null;
    public Private(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Private);
    	} else {
    		return this.getToken(SolidityParser.Private, i);
    	}
    }
    public Internal(): antlr.TerminalNode[];
    public Internal(i: number): antlr.TerminalNode | null;
    public Internal(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Internal);
    	} else {
    		return this.getToken(SolidityParser.Internal, i);
    	}
    }
    public Constant(): antlr.TerminalNode[];
    public Constant(i: number): antlr.TerminalNode | null;
    public Constant(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Constant);
    	} else {
    		return this.getToken(SolidityParser.Constant, i);
    	}
    }
    public overrideSpecifier(): OverrideSpecifierContext[];
    public overrideSpecifier(i: number): OverrideSpecifierContext | null;
    public overrideSpecifier(i?: number): OverrideSpecifierContext[] | OverrideSpecifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OverrideSpecifierContext);
        }

        return this.getRuleContext(i, OverrideSpecifierContext);
    }
    public Immutable(): antlr.TerminalNode[];
    public Immutable(i: number): antlr.TerminalNode | null;
    public Immutable(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Immutable);
    	} else {
    		return this.getToken(SolidityParser.Immutable, i);
    	}
    }
    public Transient(): antlr.TerminalNode[];
    public Transient(i: number): antlr.TerminalNode | null;
    public Transient(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Transient);
    	} else {
    		return this.getToken(SolidityParser.Transient, i);
    	}
    }
    public Assign(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Assign, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_stateVariableDeclaration;
    }
}


export class ConstantVariableDeclarationContext extends antlr.ParserRuleContext {
    public _type_?: TypeNameContext;
    public _name?: IdentifierContext;
    public _initialValue?: ExpressionContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Constant(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Constant, 0)!;
    }
    public Assign(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Assign, 0)!;
    }
    public Semicolon(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Semicolon, 0)!;
    }
    public typeName(): TypeNameContext {
        return this.getRuleContext(0, TypeNameContext)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_constantVariableDeclaration;
    }
}


export class EventParameterContext extends antlr.ParserRuleContext {
    public _type_?: TypeNameContext;
    public _name?: IdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeName(): TypeNameContext {
        return this.getRuleContext(0, TypeNameContext)!;
    }
    public Indexed(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Indexed, 0);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_eventParameter;
    }
}


export class EventDefinitionContext extends antlr.ParserRuleContext {
    public _name?: IdentifierContext;
    public _eventParameter?: EventParameterContext;
    public _parameters: EventParameterContext[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Event(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Event, 0)!;
    }
    public LParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LParen, 0)!;
    }
    public RParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RParen, 0)!;
    }
    public Semicolon(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Semicolon, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public Anonymous(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Anonymous, 0);
    }
    public eventParameter(): EventParameterContext[];
    public eventParameter(i: number): EventParameterContext | null;
    public eventParameter(i?: number): EventParameterContext[] | EventParameterContext | null {
        if (i === undefined) {
            return this.getRuleContexts(EventParameterContext);
        }

        return this.getRuleContext(i, EventParameterContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Comma);
    	} else {
    		return this.getToken(SolidityParser.Comma, i);
    	}
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_eventDefinition;
    }
}


export class ErrorParameterContext extends antlr.ParserRuleContext {
    public _type_?: TypeNameContext;
    public _name?: IdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeName(): TypeNameContext {
        return this.getRuleContext(0, TypeNameContext)!;
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_errorParameter;
    }
}


export class ErrorDefinitionContext extends antlr.ParserRuleContext {
    public _name?: IdentifierContext;
    public _errorParameter?: ErrorParameterContext;
    public _parameters: ErrorParameterContext[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Error(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Error, 0)!;
    }
    public LParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LParen, 0)!;
    }
    public RParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RParen, 0)!;
    }
    public Semicolon(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Semicolon, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public errorParameter(): ErrorParameterContext[];
    public errorParameter(i: number): ErrorParameterContext | null;
    public errorParameter(i?: number): ErrorParameterContext[] | ErrorParameterContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ErrorParameterContext);
        }

        return this.getRuleContext(i, ErrorParameterContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Comma);
    	} else {
    		return this.getToken(SolidityParser.Comma, i);
    	}
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_errorDefinition;
    }
}


export class UserDefinableOperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BitAnd(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.BitAnd, 0);
    }
    public BitNot(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.BitNot, 0);
    }
    public BitOr(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.BitOr, 0);
    }
    public BitXor(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.BitXor, 0);
    }
    public Add(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Add, 0);
    }
    public Div(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Div, 0);
    }
    public Mod(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Mod, 0);
    }
    public Mul(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Mul, 0);
    }
    public Sub(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Sub, 0);
    }
    public Equal(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Equal, 0);
    }
    public GreaterThan(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.GreaterThan, 0);
    }
    public GreaterThanOrEqual(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.GreaterThanOrEqual, 0);
    }
    public LessThan(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.LessThan, 0);
    }
    public LessThanOrEqual(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.LessThanOrEqual, 0);
    }
    public NotEqual(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.NotEqual, 0);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_userDefinableOperator;
    }
}


export class UsingDirectiveContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Using(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Using, 0)!;
    }
    public For(): antlr.TerminalNode {
        return this.getToken(SolidityParser.For, 0)!;
    }
    public Semicolon(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Semicolon, 0)!;
    }
    public identifierPath(): IdentifierPathContext | null {
        return this.getRuleContext(0, IdentifierPathContext);
    }
    public Mul(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Mul, 0);
    }
    public typeName(): TypeNameContext | null {
        return this.getRuleContext(0, TypeNameContext);
    }
    public Global(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Global, 0);
    }
    public LBrace(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.LBrace, 0);
    }
    public usingAliases(): UsingAliasesContext[];
    public usingAliases(i: number): UsingAliasesContext | null;
    public usingAliases(i?: number): UsingAliasesContext[] | UsingAliasesContext | null {
        if (i === undefined) {
            return this.getRuleContexts(UsingAliasesContext);
        }

        return this.getRuleContext(i, UsingAliasesContext);
    }
    public RBrace(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.RBrace, 0);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Comma);
    	} else {
    		return this.getToken(SolidityParser.Comma, i);
    	}
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_usingDirective;
    }
}


export class UsingAliasesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifierPath(): IdentifierPathContext {
        return this.getRuleContext(0, IdentifierPathContext)!;
    }
    public As(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.As, 0);
    }
    public userDefinableOperator(): UserDefinableOperatorContext | null {
        return this.getRuleContext(0, UserDefinableOperatorContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_usingAliases;
    }
}


export class TypeNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public elementaryTypeName(): ElementaryTypeNameContext | null {
        return this.getRuleContext(0, ElementaryTypeNameContext);
    }
    public addressPayable(): AddressPayableContext | null {
        return this.getRuleContext(0, AddressPayableContext);
    }
    public functionTypeName(): FunctionTypeNameContext | null {
        return this.getRuleContext(0, FunctionTypeNameContext);
    }
    public mappingType(): MappingTypeContext | null {
        return this.getRuleContext(0, MappingTypeContext);
    }
    public identifierPath(): IdentifierPathContext | null {
        return this.getRuleContext(0, IdentifierPathContext);
    }
    public typeName(): TypeNameContext | null {
        return this.getRuleContext(0, TypeNameContext);
    }
    public LBrack(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.LBrack, 0);
    }
    public RBrack(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.RBrack, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_typeName;
    }
}


export class ElementaryTypeNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Address(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Address, 0);
    }
    public Bool(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Bool, 0);
    }
    public String(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.String, 0);
    }
    public Bytes(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Bytes, 0);
    }
    public SignedIntegerType(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.SignedIntegerType, 0);
    }
    public UnsignedIntegerType(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.UnsignedIntegerType, 0);
    }
    public FixedBytes(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.FixedBytes, 0);
    }
    public Fixed(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Fixed, 0);
    }
    public Ufixed(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Ufixed, 0);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_elementaryTypeName;
    }
}


export class AddressPayableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Address(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Address, 0)!;
    }
    public Payable(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Payable, 0)!;
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_addressPayable;
    }
}


export class FunctionTypeNameContext extends antlr.ParserRuleContext {
    public _arguments?: ParameterListContext;
    public _returnParameters?: ParameterListContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Function(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Function, 0)!;
    }
    public LParen(): antlr.TerminalNode[];
    public LParen(i: number): antlr.TerminalNode | null;
    public LParen(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.LParen);
    	} else {
    		return this.getToken(SolidityParser.LParen, i);
    	}
    }
    public RParen(): antlr.TerminalNode[];
    public RParen(i: number): antlr.TerminalNode | null;
    public RParen(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.RParen);
    	} else {
    		return this.getToken(SolidityParser.RParen, i);
    	}
    }
    public visibility(): VisibilityContext[];
    public visibility(i: number): VisibilityContext | null;
    public visibility(i?: number): VisibilityContext[] | VisibilityContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VisibilityContext);
        }

        return this.getRuleContext(i, VisibilityContext);
    }
    public stateMutability(): StateMutabilityContext[];
    public stateMutability(i: number): StateMutabilityContext | null;
    public stateMutability(i?: number): StateMutabilityContext[] | StateMutabilityContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StateMutabilityContext);
        }

        return this.getRuleContext(i, StateMutabilityContext);
    }
    public Returns(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Returns, 0);
    }
    public parameterList(): ParameterListContext[];
    public parameterList(i: number): ParameterListContext | null;
    public parameterList(i?: number): ParameterListContext[] | ParameterListContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ParameterListContext);
        }

        return this.getRuleContext(i, ParameterListContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_functionTypeName;
    }
}


export class VariableDeclarationContext extends antlr.ParserRuleContext {
    public _type_?: TypeNameContext;
    public _location?: DataLocationContext;
    public _name?: IdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeName(): TypeNameContext {
        return this.getRuleContext(0, TypeNameContext)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public dataLocation(): DataLocationContext | null {
        return this.getRuleContext(0, DataLocationContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_variableDeclaration;
    }
}


export class DataLocationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Memory(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Memory, 0);
    }
    public Storage(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Storage, 0);
    }
    public Calldata(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Calldata, 0);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_dataLocation;
    }
}


export class ExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_expression;
    }
    public override copyFrom(ctx: ExpressionContext): void {
        super.copyFrom(ctx);
    }
}
export class UnaryPrefixOperationContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public Inc(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Inc, 0);
    }
    public Dec(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Dec, 0);
    }
    public Not(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Not, 0);
    }
    public BitNot(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.BitNot, 0);
    }
    public Delete(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Delete, 0);
    }
    public Sub(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Sub, 0);
    }
}
export class PrimaryExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public literal(): LiteralContext | null {
        return this.getRuleContext(0, LiteralContext);
    }
    public literalWithSubDenomination(): LiteralWithSubDenominationContext | null {
        return this.getRuleContext(0, LiteralWithSubDenominationContext);
    }
    public elementaryTypeName(): ElementaryTypeNameContext | null {
        return this.getRuleContext(0, ElementaryTypeNameContext);
    }
}
export class OrderComparisonContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public LessThan(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.LessThan, 0);
    }
    public GreaterThan(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.GreaterThan, 0);
    }
    public LessThanOrEqual(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.LessThanOrEqual, 0);
    }
    public GreaterThanOrEqual(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.GreaterThanOrEqual, 0);
    }
}
export class ConditionalContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public Conditional(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Conditional, 0)!;
    }
    public Colon(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Colon, 0)!;
    }
}
export class PayableConversionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public Payable(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Payable, 0)!;
    }
    public callArgumentList(): CallArgumentListContext {
        return this.getRuleContext(0, CallArgumentListContext)!;
    }
}
export class AssignmentContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public assignOp(): AssignOpContext {
        return this.getRuleContext(0, AssignOpContext)!;
    }
}
export class UnarySuffixOperationContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public Inc(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Inc, 0);
    }
    public Dec(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Dec, 0);
    }
}
export class ShiftOperationContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public Shl(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Shl, 0);
    }
    public Sar(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Sar, 0);
    }
    public Shr(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Shr, 0);
    }
}
export class BitAndOperationContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public BitAnd(): antlr.TerminalNode {
        return this.getToken(SolidityParser.BitAnd, 0)!;
    }
}
export class FunctionCallContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public callArgumentList(): CallArgumentListContext {
        return this.getRuleContext(0, CallArgumentListContext)!;
    }
}
export class IndexRangeAccessContext extends ExpressionContext {
    public _startIndex?: ExpressionContext;
    public _endIndex?: ExpressionContext;
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public LBrack(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LBrack, 0)!;
    }
    public Colon(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Colon, 0)!;
    }
    public RBrack(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RBrack, 0)!;
    }
}
export class IndexAccessContext extends ExpressionContext {
    public _index?: ExpressionContext;
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public LBrack(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LBrack, 0)!;
    }
    public RBrack(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RBrack, 0)!;
    }
}
export class AddSubOperationContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public Add(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Add, 0);
    }
    public Sub(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Sub, 0);
    }
}
export class BitOrOperationContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public BitOr(): antlr.TerminalNode {
        return this.getToken(SolidityParser.BitOr, 0)!;
    }
}
export class ExpOperationContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public Exp(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Exp, 0)!;
    }
}
export class AndOperationContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public And(): antlr.TerminalNode {
        return this.getToken(SolidityParser.And, 0)!;
    }
}
export class InlineArrayContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public inlineArrayExpression(): InlineArrayExpressionContext {
        return this.getRuleContext(0, InlineArrayExpressionContext)!;
    }
}
export class OrOperationContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public Or(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Or, 0)!;
    }
}
export class MemberAccessContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public Period(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Period, 0)!;
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public Address(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Address, 0);
    }
}
export class MulDivModOperationContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public Mul(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Mul, 0);
    }
    public Div(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Div, 0);
    }
    public Mod(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Mod, 0);
    }
}
export class FunctionCallOptionsContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public LBrace(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LBrace, 0)!;
    }
    public RBrace(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RBrace, 0)!;
    }
    public namedArgument(): NamedArgumentContext[];
    public namedArgument(i: number): NamedArgumentContext | null;
    public namedArgument(i?: number): NamedArgumentContext[] | NamedArgumentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(NamedArgumentContext);
        }

        return this.getRuleContext(i, NamedArgumentContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Comma);
    	} else {
    		return this.getToken(SolidityParser.Comma, i);
    	}
    }
}
export class NewExprContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public New(): antlr.TerminalNode {
        return this.getToken(SolidityParser.New, 0)!;
    }
    public typeName(): TypeNameContext {
        return this.getRuleContext(0, TypeNameContext)!;
    }
}
export class BitXorOperationContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public BitXor(): antlr.TerminalNode {
        return this.getToken(SolidityParser.BitXor, 0)!;
    }
}
export class TupleContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public tupleExpression(): TupleExpressionContext {
        return this.getRuleContext(0, TupleExpressionContext)!;
    }
}
export class EqualityComparisonContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public Equal(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Equal, 0);
    }
    public NotEqual(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.NotEqual, 0);
    }
}
export class MetaTypeContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public Type(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Type, 0)!;
    }
    public LParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LParen, 0)!;
    }
    public typeName(): TypeNameContext {
        return this.getRuleContext(0, TypeNameContext)!;
    }
    public RParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RParen, 0)!;
    }
}


export class AssignOpContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Assign(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Assign, 0);
    }
    public AssignBitOr(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.AssignBitOr, 0);
    }
    public AssignBitXor(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.AssignBitXor, 0);
    }
    public AssignBitAnd(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.AssignBitAnd, 0);
    }
    public AssignShl(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.AssignShl, 0);
    }
    public AssignSar(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.AssignSar, 0);
    }
    public AssignShr(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.AssignShr, 0);
    }
    public AssignAdd(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.AssignAdd, 0);
    }
    public AssignSub(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.AssignSub, 0);
    }
    public AssignMul(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.AssignMul, 0);
    }
    public AssignDiv(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.AssignDiv, 0);
    }
    public AssignMod(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.AssignMod, 0);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_assignOp;
    }
}


export class TupleExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LParen, 0)!;
    }
    public RParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RParen, 0)!;
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Comma);
    	} else {
    		return this.getToken(SolidityParser.Comma, i);
    	}
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_tupleExpression;
    }
}


export class InlineArrayExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LBrack(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LBrack, 0)!;
    }
    public RBrack(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RBrack, 0)!;
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Comma);
    	} else {
    		return this.getToken(SolidityParser.Comma, i);
    	}
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_inlineArrayExpression;
    }
}


export class IdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Identifier(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Identifier, 0);
    }
    public From(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.From, 0);
    }
    public Error(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Error, 0);
    }
    public Revert(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Revert, 0);
    }
    public Global(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Global, 0);
    }
    public Transient(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Transient, 0);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_identifier;
    }
}


export class LiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public stringLiteral(): StringLiteralContext | null {
        return this.getRuleContext(0, StringLiteralContext);
    }
    public numberLiteral(): NumberLiteralContext | null {
        return this.getRuleContext(0, NumberLiteralContext);
    }
    public boolLiteral(): BoolLiteralContext | null {
        return this.getRuleContext(0, BoolLiteralContext);
    }
    public hexStringLiteral(): HexStringLiteralContext | null {
        return this.getRuleContext(0, HexStringLiteralContext);
    }
    public unicodeStringLiteral(): UnicodeStringLiteralContext | null {
        return this.getRuleContext(0, UnicodeStringLiteralContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_literal;
    }
}


export class LiteralWithSubDenominationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public numberLiteral(): NumberLiteralContext {
        return this.getRuleContext(0, NumberLiteralContext)!;
    }
    public SubDenomination(): antlr.TerminalNode {
        return this.getToken(SolidityParser.SubDenomination, 0)!;
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_literalWithSubDenomination;
    }
}


export class BoolLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TrueLiteral(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.TrueLiteral, 0);
    }
    public FalseLiteral(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.FalseLiteral, 0);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_boolLiteral;
    }
}


export class StringLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NonEmptyStringLiteral(): antlr.TerminalNode[];
    public NonEmptyStringLiteral(i: number): antlr.TerminalNode | null;
    public NonEmptyStringLiteral(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.NonEmptyStringLiteral);
    	} else {
    		return this.getToken(SolidityParser.NonEmptyStringLiteral, i);
    	}
    }
    public EmptyStringLiteral(): antlr.TerminalNode[];
    public EmptyStringLiteral(i: number): antlr.TerminalNode | null;
    public EmptyStringLiteral(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.EmptyStringLiteral);
    	} else {
    		return this.getToken(SolidityParser.EmptyStringLiteral, i);
    	}
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_stringLiteral;
    }
}


export class HexStringLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public HexString(): antlr.TerminalNode[];
    public HexString(i: number): antlr.TerminalNode | null;
    public HexString(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.HexString);
    	} else {
    		return this.getToken(SolidityParser.HexString, i);
    	}
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_hexStringLiteral;
    }
}


export class UnicodeStringLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public UnicodeStringLiteral(): antlr.TerminalNode[];
    public UnicodeStringLiteral(i: number): antlr.TerminalNode | null;
    public UnicodeStringLiteral(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.UnicodeStringLiteral);
    	} else {
    		return this.getToken(SolidityParser.UnicodeStringLiteral, i);
    	}
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_unicodeStringLiteral;
    }
}


export class NumberLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DecimalNumber(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.DecimalNumber, 0);
    }
    public HexNumber(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.HexNumber, 0);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_numberLiteral;
    }
}


export class BlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LBrace(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LBrace, 0)!;
    }
    public RBrace(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RBrace, 0)!;
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public uncheckedBlock(): UncheckedBlockContext[];
    public uncheckedBlock(i: number): UncheckedBlockContext | null;
    public uncheckedBlock(i?: number): UncheckedBlockContext[] | UncheckedBlockContext | null {
        if (i === undefined) {
            return this.getRuleContexts(UncheckedBlockContext);
        }

        return this.getRuleContext(i, UncheckedBlockContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_block;
    }
}


export class UncheckedBlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Unchecked(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Unchecked, 0)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_uncheckedBlock;
    }
}


export class StatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public block(): BlockContext | null {
        return this.getRuleContext(0, BlockContext);
    }
    public simpleStatement(): SimpleStatementContext | null {
        return this.getRuleContext(0, SimpleStatementContext);
    }
    public ifStatement(): IfStatementContext | null {
        return this.getRuleContext(0, IfStatementContext);
    }
    public forStatement(): ForStatementContext | null {
        return this.getRuleContext(0, ForStatementContext);
    }
    public whileStatement(): WhileStatementContext | null {
        return this.getRuleContext(0, WhileStatementContext);
    }
    public doWhileStatement(): DoWhileStatementContext | null {
        return this.getRuleContext(0, DoWhileStatementContext);
    }
    public continueStatement(): ContinueStatementContext | null {
        return this.getRuleContext(0, ContinueStatementContext);
    }
    public breakStatement(): BreakStatementContext | null {
        return this.getRuleContext(0, BreakStatementContext);
    }
    public tryStatement(): TryStatementContext | null {
        return this.getRuleContext(0, TryStatementContext);
    }
    public returnStatement(): ReturnStatementContext | null {
        return this.getRuleContext(0, ReturnStatementContext);
    }
    public emitStatement(): EmitStatementContext | null {
        return this.getRuleContext(0, EmitStatementContext);
    }
    public revertStatement(): RevertStatementContext | null {
        return this.getRuleContext(0, RevertStatementContext);
    }
    public assemblyStatement(): AssemblyStatementContext | null {
        return this.getRuleContext(0, AssemblyStatementContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_statement;
    }
}


export class SimpleStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public variableDeclarationStatement(): VariableDeclarationStatementContext | null {
        return this.getRuleContext(0, VariableDeclarationStatementContext);
    }
    public expressionStatement(): ExpressionStatementContext | null {
        return this.getRuleContext(0, ExpressionStatementContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_simpleStatement;
    }
}


export class IfStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public If(): antlr.TerminalNode {
        return this.getToken(SolidityParser.If, 0)!;
    }
    public LParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LParen, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public RParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RParen, 0)!;
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public Else(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Else, 0);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_ifStatement;
    }
}


export class ForStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public For(): antlr.TerminalNode {
        return this.getToken(SolidityParser.For, 0)!;
    }
    public LParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LParen, 0)!;
    }
    public RParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RParen, 0)!;
    }
    public statement(): StatementContext {
        return this.getRuleContext(0, StatementContext)!;
    }
    public simpleStatement(): SimpleStatementContext | null {
        return this.getRuleContext(0, SimpleStatementContext);
    }
    public Semicolon(): antlr.TerminalNode[];
    public Semicolon(i: number): antlr.TerminalNode | null;
    public Semicolon(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Semicolon);
    	} else {
    		return this.getToken(SolidityParser.Semicolon, i);
    	}
    }
    public expressionStatement(): ExpressionStatementContext | null {
        return this.getRuleContext(0, ExpressionStatementContext);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_forStatement;
    }
}


export class WhileStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public While(): antlr.TerminalNode {
        return this.getToken(SolidityParser.While, 0)!;
    }
    public LParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LParen, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public RParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RParen, 0)!;
    }
    public statement(): StatementContext {
        return this.getRuleContext(0, StatementContext)!;
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_whileStatement;
    }
}


export class DoWhileStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Do(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Do, 0)!;
    }
    public statement(): StatementContext {
        return this.getRuleContext(0, StatementContext)!;
    }
    public While(): antlr.TerminalNode {
        return this.getToken(SolidityParser.While, 0)!;
    }
    public LParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LParen, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public RParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RParen, 0)!;
    }
    public Semicolon(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Semicolon, 0)!;
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_doWhileStatement;
    }
}


export class ContinueStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Continue(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Continue, 0)!;
    }
    public Semicolon(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Semicolon, 0)!;
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_continueStatement;
    }
}


export class BreakStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Break(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Break, 0)!;
    }
    public Semicolon(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Semicolon, 0)!;
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_breakStatement;
    }
}


export class TryStatementContext extends antlr.ParserRuleContext {
    public _returnParameters?: ParameterListContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Try(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Try, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public Returns(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Returns, 0);
    }
    public LParen(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.LParen, 0);
    }
    public RParen(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.RParen, 0);
    }
    public catchClause(): CatchClauseContext[];
    public catchClause(i: number): CatchClauseContext | null;
    public catchClause(i?: number): CatchClauseContext[] | CatchClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CatchClauseContext);
        }

        return this.getRuleContext(i, CatchClauseContext);
    }
    public parameterList(): ParameterListContext | null {
        return this.getRuleContext(0, ParameterListContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_tryStatement;
    }
}


export class CatchClauseContext extends antlr.ParserRuleContext {
    public _arguments?: ParameterListContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Catch(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Catch, 0)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public LParen(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.LParen, 0);
    }
    public RParen(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.RParen, 0);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public parameterList(): ParameterListContext | null {
        return this.getRuleContext(0, ParameterListContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_catchClause;
    }
}


export class ReturnStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Return(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Return, 0)!;
    }
    public Semicolon(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Semicolon, 0)!;
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_returnStatement;
    }
}


export class EmitStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Emit(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Emit, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public callArgumentList(): CallArgumentListContext {
        return this.getRuleContext(0, CallArgumentListContext)!;
    }
    public Semicolon(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Semicolon, 0)!;
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_emitStatement;
    }
}


export class RevertStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Revert(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Revert, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public callArgumentList(): CallArgumentListContext {
        return this.getRuleContext(0, CallArgumentListContext)!;
    }
    public Semicolon(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Semicolon, 0)!;
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_revertStatement;
    }
}


export class AssemblyStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Assembly(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Assembly, 0)!;
    }
    public AssemblyLBrace(): antlr.TerminalNode {
        return this.getToken(SolidityParser.AssemblyLBrace, 0)!;
    }
    public YulRBrace(): antlr.TerminalNode {
        return this.getToken(SolidityParser.YulRBrace, 0)!;
    }
    public AssemblyDialect(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.AssemblyDialect, 0);
    }
    public assemblyFlags(): AssemblyFlagsContext | null {
        return this.getRuleContext(0, AssemblyFlagsContext);
    }
    public yulStatement(): YulStatementContext[];
    public yulStatement(i: number): YulStatementContext | null;
    public yulStatement(i?: number): YulStatementContext[] | YulStatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(YulStatementContext);
        }

        return this.getRuleContext(i, YulStatementContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_assemblyStatement;
    }
}


export class AssemblyFlagsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public AssemblyBlockLParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.AssemblyBlockLParen, 0)!;
    }
    public AssemblyFlagString(): antlr.TerminalNode[];
    public AssemblyFlagString(i: number): antlr.TerminalNode | null;
    public AssemblyFlagString(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.AssemblyFlagString);
    	} else {
    		return this.getToken(SolidityParser.AssemblyFlagString, i);
    	}
    }
    public AssemblyBlockRParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.AssemblyBlockRParen, 0)!;
    }
    public AssemblyBlockComma(): antlr.TerminalNode[];
    public AssemblyBlockComma(i: number): antlr.TerminalNode | null;
    public AssemblyBlockComma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.AssemblyBlockComma);
    	} else {
    		return this.getToken(SolidityParser.AssemblyBlockComma, i);
    	}
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_assemblyFlags;
    }
}


export class VariableDeclarationListContext extends antlr.ParserRuleContext {
    public _variableDeclaration?: VariableDeclarationContext;
    public _variableDeclarations: VariableDeclarationContext[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public variableDeclaration(): VariableDeclarationContext[];
    public variableDeclaration(i: number): VariableDeclarationContext | null;
    public variableDeclaration(i?: number): VariableDeclarationContext[] | VariableDeclarationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VariableDeclarationContext);
        }

        return this.getRuleContext(i, VariableDeclarationContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Comma);
    	} else {
    		return this.getToken(SolidityParser.Comma, i);
    	}
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_variableDeclarationList;
    }
}


export class VariableDeclarationTupleContext extends antlr.ParserRuleContext {
    public _variableDeclaration?: VariableDeclarationContext;
    public _variableDeclarations: VariableDeclarationContext[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LParen, 0)!;
    }
    public RParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RParen, 0)!;
    }
    public variableDeclaration(): VariableDeclarationContext[];
    public variableDeclaration(i: number): VariableDeclarationContext | null;
    public variableDeclaration(i?: number): VariableDeclarationContext[] | VariableDeclarationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VariableDeclarationContext);
        }

        return this.getRuleContext(i, VariableDeclarationContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.Comma);
    	} else {
    		return this.getToken(SolidityParser.Comma, i);
    	}
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_variableDeclarationTuple;
    }
}


export class VariableDeclarationStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Semicolon(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Semicolon, 0)!;
    }
    public variableDeclaration(): VariableDeclarationContext | null {
        return this.getRuleContext(0, VariableDeclarationContext);
    }
    public variableDeclarationTuple(): VariableDeclarationTupleContext | null {
        return this.getRuleContext(0, VariableDeclarationTupleContext);
    }
    public Assign(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.Assign, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_variableDeclarationStatement;
    }
}


export class ExpressionStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public Semicolon(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Semicolon, 0)!;
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_expressionStatement;
    }
}


export class MappingTypeContext extends antlr.ParserRuleContext {
    public _key?: MappingKeyTypeContext;
    public _name?: IdentifierContext;
    public _value?: TypeNameContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Mapping(): antlr.TerminalNode {
        return this.getToken(SolidityParser.Mapping, 0)!;
    }
    public LParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.LParen, 0)!;
    }
    public DoubleArrow(): antlr.TerminalNode {
        return this.getToken(SolidityParser.DoubleArrow, 0)!;
    }
    public RParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.RParen, 0)!;
    }
    public mappingKeyType(): MappingKeyTypeContext {
        return this.getRuleContext(0, MappingKeyTypeContext)!;
    }
    public typeName(): TypeNameContext {
        return this.getRuleContext(0, TypeNameContext)!;
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_mappingType;
    }
}


export class MappingKeyTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public elementaryTypeName(): ElementaryTypeNameContext | null {
        return this.getRuleContext(0, ElementaryTypeNameContext);
    }
    public identifierPath(): IdentifierPathContext | null {
        return this.getRuleContext(0, IdentifierPathContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_mappingKeyType;
    }
}


export class YulStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public yulBlock(): YulBlockContext | null {
        return this.getRuleContext(0, YulBlockContext);
    }
    public yulVariableDeclaration(): YulVariableDeclarationContext | null {
        return this.getRuleContext(0, YulVariableDeclarationContext);
    }
    public yulAssignment(): YulAssignmentContext | null {
        return this.getRuleContext(0, YulAssignmentContext);
    }
    public yulFunctionCall(): YulFunctionCallContext | null {
        return this.getRuleContext(0, YulFunctionCallContext);
    }
    public yulIfStatement(): YulIfStatementContext | null {
        return this.getRuleContext(0, YulIfStatementContext);
    }
    public yulForStatement(): YulForStatementContext | null {
        return this.getRuleContext(0, YulForStatementContext);
    }
    public yulSwitchStatement(): YulSwitchStatementContext | null {
        return this.getRuleContext(0, YulSwitchStatementContext);
    }
    public YulLeave(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.YulLeave, 0);
    }
    public YulBreak(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.YulBreak, 0);
    }
    public YulContinue(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.YulContinue, 0);
    }
    public yulFunctionDefinition(): YulFunctionDefinitionContext | null {
        return this.getRuleContext(0, YulFunctionDefinitionContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_yulStatement;
    }
}


export class YulBlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public YulLBrace(): antlr.TerminalNode {
        return this.getToken(SolidityParser.YulLBrace, 0)!;
    }
    public YulRBrace(): antlr.TerminalNode {
        return this.getToken(SolidityParser.YulRBrace, 0)!;
    }
    public yulStatement(): YulStatementContext[];
    public yulStatement(i: number): YulStatementContext | null;
    public yulStatement(i?: number): YulStatementContext[] | YulStatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(YulStatementContext);
        }

        return this.getRuleContext(i, YulStatementContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_yulBlock;
    }
}


export class YulVariableDeclarationContext extends antlr.ParserRuleContext {
    public _YulIdentifier?: Token | null;
    public _variables: antlr.Token[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public YulLet(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.YulLet, 0);
    }
    public YulIdentifier(): antlr.TerminalNode[];
    public YulIdentifier(i: number): antlr.TerminalNode | null;
    public YulIdentifier(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.YulIdentifier);
    	} else {
    		return this.getToken(SolidityParser.YulIdentifier, i);
    	}
    }
    public YulAssign(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.YulAssign, 0);
    }
    public yulExpression(): YulExpressionContext | null {
        return this.getRuleContext(0, YulExpressionContext);
    }
    public YulComma(): antlr.TerminalNode[];
    public YulComma(i: number): antlr.TerminalNode | null;
    public YulComma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.YulComma);
    	} else {
    		return this.getToken(SolidityParser.YulComma, i);
    	}
    }
    public yulFunctionCall(): YulFunctionCallContext | null {
        return this.getRuleContext(0, YulFunctionCallContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_yulVariableDeclaration;
    }
}


export class YulAssignmentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public yulPath(): YulPathContext[];
    public yulPath(i: number): YulPathContext | null;
    public yulPath(i?: number): YulPathContext[] | YulPathContext | null {
        if (i === undefined) {
            return this.getRuleContexts(YulPathContext);
        }

        return this.getRuleContext(i, YulPathContext);
    }
    public YulAssign(): antlr.TerminalNode {
        return this.getToken(SolidityParser.YulAssign, 0)!;
    }
    public yulExpression(): YulExpressionContext | null {
        return this.getRuleContext(0, YulExpressionContext);
    }
    public yulFunctionCall(): YulFunctionCallContext | null {
        return this.getRuleContext(0, YulFunctionCallContext);
    }
    public YulComma(): antlr.TerminalNode[];
    public YulComma(i: number): antlr.TerminalNode | null;
    public YulComma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.YulComma);
    	} else {
    		return this.getToken(SolidityParser.YulComma, i);
    	}
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_yulAssignment;
    }
}


export class YulIfStatementContext extends antlr.ParserRuleContext {
    public _cond?: YulExpressionContext;
    public _body?: YulBlockContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public YulIf(): antlr.TerminalNode {
        return this.getToken(SolidityParser.YulIf, 0)!;
    }
    public yulExpression(): YulExpressionContext {
        return this.getRuleContext(0, YulExpressionContext)!;
    }
    public yulBlock(): YulBlockContext {
        return this.getRuleContext(0, YulBlockContext)!;
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_yulIfStatement;
    }
}


export class YulForStatementContext extends antlr.ParserRuleContext {
    public _init?: YulBlockContext;
    public _cond?: YulExpressionContext;
    public _post?: YulBlockContext;
    public _body?: YulBlockContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public YulFor(): antlr.TerminalNode {
        return this.getToken(SolidityParser.YulFor, 0)!;
    }
    public yulBlock(): YulBlockContext[];
    public yulBlock(i: number): YulBlockContext | null;
    public yulBlock(i?: number): YulBlockContext[] | YulBlockContext | null {
        if (i === undefined) {
            return this.getRuleContexts(YulBlockContext);
        }

        return this.getRuleContext(i, YulBlockContext);
    }
    public yulExpression(): YulExpressionContext {
        return this.getRuleContext(0, YulExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_yulForStatement;
    }
}


export class YulSwitchCaseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public YulCase(): antlr.TerminalNode {
        return this.getToken(SolidityParser.YulCase, 0)!;
    }
    public yulLiteral(): YulLiteralContext {
        return this.getRuleContext(0, YulLiteralContext)!;
    }
    public yulBlock(): YulBlockContext {
        return this.getRuleContext(0, YulBlockContext)!;
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_yulSwitchCase;
    }
}


export class YulSwitchStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public YulSwitch(): antlr.TerminalNode {
        return this.getToken(SolidityParser.YulSwitch, 0)!;
    }
    public yulExpression(): YulExpressionContext {
        return this.getRuleContext(0, YulExpressionContext)!;
    }
    public YulDefault(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.YulDefault, 0);
    }
    public yulBlock(): YulBlockContext | null {
        return this.getRuleContext(0, YulBlockContext);
    }
    public yulSwitchCase(): YulSwitchCaseContext[];
    public yulSwitchCase(i: number): YulSwitchCaseContext | null;
    public yulSwitchCase(i?: number): YulSwitchCaseContext[] | YulSwitchCaseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(YulSwitchCaseContext);
        }

        return this.getRuleContext(i, YulSwitchCaseContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_yulSwitchStatement;
    }
}


export class YulFunctionDefinitionContext extends antlr.ParserRuleContext {
    public _YulIdentifier?: Token | null;
    public _arguments: antlr.Token[] = [];
    public _returnParameters: antlr.Token[] = [];
    public _body?: YulBlockContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public YulFunction(): antlr.TerminalNode {
        return this.getToken(SolidityParser.YulFunction, 0)!;
    }
    public YulIdentifier(): antlr.TerminalNode[];
    public YulIdentifier(i: number): antlr.TerminalNode | null;
    public YulIdentifier(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.YulIdentifier);
    	} else {
    		return this.getToken(SolidityParser.YulIdentifier, i);
    	}
    }
    public YulLParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.YulLParen, 0)!;
    }
    public YulRParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.YulRParen, 0)!;
    }
    public yulBlock(): YulBlockContext {
        return this.getRuleContext(0, YulBlockContext)!;
    }
    public YulArrow(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.YulArrow, 0);
    }
    public YulComma(): antlr.TerminalNode[];
    public YulComma(i: number): antlr.TerminalNode | null;
    public YulComma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.YulComma);
    	} else {
    		return this.getToken(SolidityParser.YulComma, i);
    	}
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_yulFunctionDefinition;
    }
}


export class YulPathContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public YulIdentifier(): antlr.TerminalNode[];
    public YulIdentifier(i: number): antlr.TerminalNode | null;
    public YulIdentifier(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.YulIdentifier);
    	} else {
    		return this.getToken(SolidityParser.YulIdentifier, i);
    	}
    }
    public YulPeriod(): antlr.TerminalNode[];
    public YulPeriod(i: number): antlr.TerminalNode | null;
    public YulPeriod(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.YulPeriod);
    	} else {
    		return this.getToken(SolidityParser.YulPeriod, i);
    	}
    }
    public YulEVMBuiltin(): antlr.TerminalNode[];
    public YulEVMBuiltin(i: number): antlr.TerminalNode | null;
    public YulEVMBuiltin(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.YulEVMBuiltin);
    	} else {
    		return this.getToken(SolidityParser.YulEVMBuiltin, i);
    	}
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_yulPath;
    }
}


export class YulFunctionCallContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public YulLParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.YulLParen, 0)!;
    }
    public YulRParen(): antlr.TerminalNode {
        return this.getToken(SolidityParser.YulRParen, 0)!;
    }
    public YulIdentifier(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.YulIdentifier, 0);
    }
    public YulEVMBuiltin(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.YulEVMBuiltin, 0);
    }
    public yulExpression(): YulExpressionContext[];
    public yulExpression(i: number): YulExpressionContext | null;
    public yulExpression(i?: number): YulExpressionContext[] | YulExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(YulExpressionContext);
        }

        return this.getRuleContext(i, YulExpressionContext);
    }
    public YulComma(): antlr.TerminalNode[];
    public YulComma(i: number): antlr.TerminalNode | null;
    public YulComma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SolidityParser.YulComma);
    	} else {
    		return this.getToken(SolidityParser.YulComma, i);
    	}
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_yulFunctionCall;
    }
}


export class YulboolContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public YulTrue(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.YulTrue, 0);
    }
    public YulFalse(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.YulFalse, 0);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_yulbool;
    }
}


export class YulLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public YulDecimalNumber(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.YulDecimalNumber, 0);
    }
    public YulStringLiteral(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.YulStringLiteral, 0);
    }
    public YulHexNumber(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.YulHexNumber, 0);
    }
    public yulbool(): YulboolContext | null {
        return this.getRuleContext(0, YulboolContext);
    }
    public YulHexStringLiteral(): antlr.TerminalNode | null {
        return this.getToken(SolidityParser.YulHexStringLiteral, 0);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_yulLiteral;
    }
}


export class YulExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public yulPath(): YulPathContext | null {
        return this.getRuleContext(0, YulPathContext);
    }
    public yulFunctionCall(): YulFunctionCallContext | null {
        return this.getRuleContext(0, YulFunctionCallContext);
    }
    public yulLiteral(): YulLiteralContext | null {
        return this.getRuleContext(0, YulLiteralContext);
    }
    public override get ruleIndex(): number {
        return SolidityParser.RULE_yulExpression;
    }
}
