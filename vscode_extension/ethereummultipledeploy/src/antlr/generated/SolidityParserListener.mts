// Generated from d:/Users/gabry/Universita/ing_sis_dis/remix/vscode_extension/ethereummultipledeploy/src/antlr/SolidityParser.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { SourceUnitContext } from "./SolidityParser.mjs";
import { PragmaDirectiveContext } from "./SolidityParser.mjs";
import { ImportDirectiveContext } from "./SolidityParser.mjs";
import { ImportAliasesContext } from "./SolidityParser.mjs";
import { PathContext } from "./SolidityParser.mjs";
import { SymbolAliasesContext } from "./SolidityParser.mjs";
import { ContractDefinitionContext } from "./SolidityParser.mjs";
import { InterfaceDefinitionContext } from "./SolidityParser.mjs";
import { LibraryDefinitionContext } from "./SolidityParser.mjs";
import { InheritanceSpecifierListContext } from "./SolidityParser.mjs";
import { InheritanceSpecifierContext } from "./SolidityParser.mjs";
import { ContractBodyElementContext } from "./SolidityParser.mjs";
import { NamedArgumentContext } from "./SolidityParser.mjs";
import { CallArgumentListContext } from "./SolidityParser.mjs";
import { IdentifierPathContext } from "./SolidityParser.mjs";
import { ModifierInvocationContext } from "./SolidityParser.mjs";
import { VisibilityContext } from "./SolidityParser.mjs";
import { ParameterListContext } from "./SolidityParser.mjs";
import { ParameterDeclarationContext } from "./SolidityParser.mjs";
import { ConstructorDefinitionContext } from "./SolidityParser.mjs";
import { StateMutabilityContext } from "./SolidityParser.mjs";
import { OverrideSpecifierContext } from "./SolidityParser.mjs";
import { FunctionDefinitionContext } from "./SolidityParser.mjs";
import { ModifierDefinitionContext } from "./SolidityParser.mjs";
import { FallbackFunctionDefinitionContext } from "./SolidityParser.mjs";
import { ReceiveFunctionDefinitionContext } from "./SolidityParser.mjs";
import { StructDefinitionContext } from "./SolidityParser.mjs";
import { StructMemberContext } from "./SolidityParser.mjs";
import { EnumDefinitionContext } from "./SolidityParser.mjs";
import { UserDefinedValueTypeDefinitionContext } from "./SolidityParser.mjs";
import { StateVariableDeclarationContext } from "./SolidityParser.mjs";
import { ConstantVariableDeclarationContext } from "./SolidityParser.mjs";
import { EventParameterContext } from "./SolidityParser.mjs";
import { EventDefinitionContext } from "./SolidityParser.mjs";
import { ErrorParameterContext } from "./SolidityParser.mjs";
import { ErrorDefinitionContext } from "./SolidityParser.mjs";
import { UserDefinableOperatorContext } from "./SolidityParser.mjs";
import { UsingDirectiveContext } from "./SolidityParser.mjs";
import { UsingAliasesContext } from "./SolidityParser.mjs";
import { TypeNameContext } from "./SolidityParser.mjs";
import { ElementaryTypeNameContext } from "./SolidityParser.mjs";
import { AddressPayableContext } from "./SolidityParser.mjs";
import { FunctionTypeNameContext } from "./SolidityParser.mjs";
import { VariableDeclarationContext } from "./SolidityParser.mjs";
import { DataLocationContext } from "./SolidityParser.mjs";
import { UnaryPrefixOperationContext } from "./SolidityParser.mjs";
import { PrimaryExpressionContext } from "./SolidityParser.mjs";
import { OrderComparisonContext } from "./SolidityParser.mjs";
import { ConditionalContext } from "./SolidityParser.mjs";
import { PayableConversionContext } from "./SolidityParser.mjs";
import { AssignmentContext } from "./SolidityParser.mjs";
import { UnarySuffixOperationContext } from "./SolidityParser.mjs";
import { ShiftOperationContext } from "./SolidityParser.mjs";
import { BitAndOperationContext } from "./SolidityParser.mjs";
import { FunctionCallContext } from "./SolidityParser.mjs";
import { IndexRangeAccessContext } from "./SolidityParser.mjs";
import { IndexAccessContext } from "./SolidityParser.mjs";
import { AddSubOperationContext } from "./SolidityParser.mjs";
import { BitOrOperationContext } from "./SolidityParser.mjs";
import { ExpOperationContext } from "./SolidityParser.mjs";
import { AndOperationContext } from "./SolidityParser.mjs";
import { InlineArrayContext } from "./SolidityParser.mjs";
import { OrOperationContext } from "./SolidityParser.mjs";
import { MemberAccessContext } from "./SolidityParser.mjs";
import { MulDivModOperationContext } from "./SolidityParser.mjs";
import { FunctionCallOptionsContext } from "./SolidityParser.mjs";
import { NewExprContext } from "./SolidityParser.mjs";
import { BitXorOperationContext } from "./SolidityParser.mjs";
import { TupleContext } from "./SolidityParser.mjs";
import { EqualityComparisonContext } from "./SolidityParser.mjs";
import { MetaTypeContext } from "./SolidityParser.mjs";
import { AssignOpContext } from "./SolidityParser.mjs";
import { TupleExpressionContext } from "./SolidityParser.mjs";
import { InlineArrayExpressionContext } from "./SolidityParser.mjs";
import { IdentifierContext } from "./SolidityParser.mjs";
import { LiteralContext } from "./SolidityParser.mjs";
import { LiteralWithSubDenominationContext } from "./SolidityParser.mjs";
import { BoolLiteralContext } from "./SolidityParser.mjs";
import { StringLiteralContext } from "./SolidityParser.mjs";
import { HexStringLiteralContext } from "./SolidityParser.mjs";
import { UnicodeStringLiteralContext } from "./SolidityParser.mjs";
import { NumberLiteralContext } from "./SolidityParser.mjs";
import { BlockContext } from "./SolidityParser.mjs";
import { UncheckedBlockContext } from "./SolidityParser.mjs";
import { StatementContext } from "./SolidityParser.mjs";
import { SimpleStatementContext } from "./SolidityParser.mjs";
import { IfStatementContext } from "./SolidityParser.mjs";
import { ForStatementContext } from "./SolidityParser.mjs";
import { WhileStatementContext } from "./SolidityParser.mjs";
import { DoWhileStatementContext } from "./SolidityParser.mjs";
import { ContinueStatementContext } from "./SolidityParser.mjs";
import { BreakStatementContext } from "./SolidityParser.mjs";
import { TryStatementContext } from "./SolidityParser.mjs";
import { CatchClauseContext } from "./SolidityParser.mjs";
import { ReturnStatementContext } from "./SolidityParser.mjs";
import { EmitStatementContext } from "./SolidityParser.mjs";
import { RevertStatementContext } from "./SolidityParser.mjs";
import { AssemblyStatementContext } from "./SolidityParser.mjs";
import { AssemblyFlagsContext } from "./SolidityParser.mjs";
import { VariableDeclarationListContext } from "./SolidityParser.mjs";
import { VariableDeclarationTupleContext } from "./SolidityParser.mjs";
import { VariableDeclarationStatementContext } from "./SolidityParser.mjs";
import { ExpressionStatementContext } from "./SolidityParser.mjs";
import { MappingTypeContext } from "./SolidityParser.mjs";
import { MappingKeyTypeContext } from "./SolidityParser.mjs";
import { YulStatementContext } from "./SolidityParser.mjs";
import { YulBlockContext } from "./SolidityParser.mjs";
import { YulVariableDeclarationContext } from "./SolidityParser.mjs";
import { YulAssignmentContext } from "./SolidityParser.mjs";
import { YulIfStatementContext } from "./SolidityParser.mjs";
import { YulForStatementContext } from "./SolidityParser.mjs";
import { YulSwitchCaseContext } from "./SolidityParser.mjs";
import { YulSwitchStatementContext } from "./SolidityParser.mjs";
import { YulFunctionDefinitionContext } from "./SolidityParser.mjs";
import { YulPathContext } from "./SolidityParser.mjs";
import { YulFunctionCallContext } from "./SolidityParser.mjs";
import { YulboolContext } from "./SolidityParser.mjs";
import { YulLiteralContext } from "./SolidityParser.mjs";
import { YulExpressionContext } from "./SolidityParser.mjs";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `SolidityParser`.
 */
export class SolidityParserListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `SolidityParser.sourceUnit`.
     * @param ctx the parse tree
     */
    enterSourceUnit?: (ctx: SourceUnitContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.sourceUnit`.
     * @param ctx the parse tree
     */
    exitSourceUnit?: (ctx: SourceUnitContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.pragmaDirective`.
     * @param ctx the parse tree
     */
    enterPragmaDirective?: (ctx: PragmaDirectiveContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.pragmaDirective`.
     * @param ctx the parse tree
     */
    exitPragmaDirective?: (ctx: PragmaDirectiveContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.importDirective`.
     * @param ctx the parse tree
     */
    enterImportDirective?: (ctx: ImportDirectiveContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.importDirective`.
     * @param ctx the parse tree
     */
    exitImportDirective?: (ctx: ImportDirectiveContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.importAliases`.
     * @param ctx the parse tree
     */
    enterImportAliases?: (ctx: ImportAliasesContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.importAliases`.
     * @param ctx the parse tree
     */
    exitImportAliases?: (ctx: ImportAliasesContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.path`.
     * @param ctx the parse tree
     */
    enterPath?: (ctx: PathContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.path`.
     * @param ctx the parse tree
     */
    exitPath?: (ctx: PathContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.symbolAliases`.
     * @param ctx the parse tree
     */
    enterSymbolAliases?: (ctx: SymbolAliasesContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.symbolAliases`.
     * @param ctx the parse tree
     */
    exitSymbolAliases?: (ctx: SymbolAliasesContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.contractDefinition`.
     * @param ctx the parse tree
     */
    enterContractDefinition?: (ctx: ContractDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.contractDefinition`.
     * @param ctx the parse tree
     */
    exitContractDefinition?: (ctx: ContractDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.interfaceDefinition`.
     * @param ctx the parse tree
     */
    enterInterfaceDefinition?: (ctx: InterfaceDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.interfaceDefinition`.
     * @param ctx the parse tree
     */
    exitInterfaceDefinition?: (ctx: InterfaceDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.libraryDefinition`.
     * @param ctx the parse tree
     */
    enterLibraryDefinition?: (ctx: LibraryDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.libraryDefinition`.
     * @param ctx the parse tree
     */
    exitLibraryDefinition?: (ctx: LibraryDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.inheritanceSpecifierList`.
     * @param ctx the parse tree
     */
    enterInheritanceSpecifierList?: (ctx: InheritanceSpecifierListContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.inheritanceSpecifierList`.
     * @param ctx the parse tree
     */
    exitInheritanceSpecifierList?: (ctx: InheritanceSpecifierListContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.inheritanceSpecifier`.
     * @param ctx the parse tree
     */
    enterInheritanceSpecifier?: (ctx: InheritanceSpecifierContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.inheritanceSpecifier`.
     * @param ctx the parse tree
     */
    exitInheritanceSpecifier?: (ctx: InheritanceSpecifierContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.contractBodyElement`.
     * @param ctx the parse tree
     */
    enterContractBodyElement?: (ctx: ContractBodyElementContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.contractBodyElement`.
     * @param ctx the parse tree
     */
    exitContractBodyElement?: (ctx: ContractBodyElementContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.namedArgument`.
     * @param ctx the parse tree
     */
    enterNamedArgument?: (ctx: NamedArgumentContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.namedArgument`.
     * @param ctx the parse tree
     */
    exitNamedArgument?: (ctx: NamedArgumentContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.callArgumentList`.
     * @param ctx the parse tree
     */
    enterCallArgumentList?: (ctx: CallArgumentListContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.callArgumentList`.
     * @param ctx the parse tree
     */
    exitCallArgumentList?: (ctx: CallArgumentListContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.identifierPath`.
     * @param ctx the parse tree
     */
    enterIdentifierPath?: (ctx: IdentifierPathContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.identifierPath`.
     * @param ctx the parse tree
     */
    exitIdentifierPath?: (ctx: IdentifierPathContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.modifierInvocation`.
     * @param ctx the parse tree
     */
    enterModifierInvocation?: (ctx: ModifierInvocationContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.modifierInvocation`.
     * @param ctx the parse tree
     */
    exitModifierInvocation?: (ctx: ModifierInvocationContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.visibility`.
     * @param ctx the parse tree
     */
    enterVisibility?: (ctx: VisibilityContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.visibility`.
     * @param ctx the parse tree
     */
    exitVisibility?: (ctx: VisibilityContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.parameterList`.
     * @param ctx the parse tree
     */
    enterParameterList?: (ctx: ParameterListContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.parameterList`.
     * @param ctx the parse tree
     */
    exitParameterList?: (ctx: ParameterListContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.parameterDeclaration`.
     * @param ctx the parse tree
     */
    enterParameterDeclaration?: (ctx: ParameterDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.parameterDeclaration`.
     * @param ctx the parse tree
     */
    exitParameterDeclaration?: (ctx: ParameterDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.constructorDefinition`.
     * @param ctx the parse tree
     */
    enterConstructorDefinition?: (ctx: ConstructorDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.constructorDefinition`.
     * @param ctx the parse tree
     */
    exitConstructorDefinition?: (ctx: ConstructorDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.stateMutability`.
     * @param ctx the parse tree
     */
    enterStateMutability?: (ctx: StateMutabilityContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.stateMutability`.
     * @param ctx the parse tree
     */
    exitStateMutability?: (ctx: StateMutabilityContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.overrideSpecifier`.
     * @param ctx the parse tree
     */
    enterOverrideSpecifier?: (ctx: OverrideSpecifierContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.overrideSpecifier`.
     * @param ctx the parse tree
     */
    exitOverrideSpecifier?: (ctx: OverrideSpecifierContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.functionDefinition`.
     * @param ctx the parse tree
     */
    enterFunctionDefinition?: (ctx: FunctionDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.functionDefinition`.
     * @param ctx the parse tree
     */
    exitFunctionDefinition?: (ctx: FunctionDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.modifierDefinition`.
     * @param ctx the parse tree
     */
    enterModifierDefinition?: (ctx: ModifierDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.modifierDefinition`.
     * @param ctx the parse tree
     */
    exitModifierDefinition?: (ctx: ModifierDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.fallbackFunctionDefinition`.
     * @param ctx the parse tree
     */
    enterFallbackFunctionDefinition?: (ctx: FallbackFunctionDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.fallbackFunctionDefinition`.
     * @param ctx the parse tree
     */
    exitFallbackFunctionDefinition?: (ctx: FallbackFunctionDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.receiveFunctionDefinition`.
     * @param ctx the parse tree
     */
    enterReceiveFunctionDefinition?: (ctx: ReceiveFunctionDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.receiveFunctionDefinition`.
     * @param ctx the parse tree
     */
    exitReceiveFunctionDefinition?: (ctx: ReceiveFunctionDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.structDefinition`.
     * @param ctx the parse tree
     */
    enterStructDefinition?: (ctx: StructDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.structDefinition`.
     * @param ctx the parse tree
     */
    exitStructDefinition?: (ctx: StructDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.structMember`.
     * @param ctx the parse tree
     */
    enterStructMember?: (ctx: StructMemberContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.structMember`.
     * @param ctx the parse tree
     */
    exitStructMember?: (ctx: StructMemberContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.enumDefinition`.
     * @param ctx the parse tree
     */
    enterEnumDefinition?: (ctx: EnumDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.enumDefinition`.
     * @param ctx the parse tree
     */
    exitEnumDefinition?: (ctx: EnumDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.userDefinedValueTypeDefinition`.
     * @param ctx the parse tree
     */
    enterUserDefinedValueTypeDefinition?: (ctx: UserDefinedValueTypeDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.userDefinedValueTypeDefinition`.
     * @param ctx the parse tree
     */
    exitUserDefinedValueTypeDefinition?: (ctx: UserDefinedValueTypeDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.stateVariableDeclaration`.
     * @param ctx the parse tree
     */
    enterStateVariableDeclaration?: (ctx: StateVariableDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.stateVariableDeclaration`.
     * @param ctx the parse tree
     */
    exitStateVariableDeclaration?: (ctx: StateVariableDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.constantVariableDeclaration`.
     * @param ctx the parse tree
     */
    enterConstantVariableDeclaration?: (ctx: ConstantVariableDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.constantVariableDeclaration`.
     * @param ctx the parse tree
     */
    exitConstantVariableDeclaration?: (ctx: ConstantVariableDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.eventParameter`.
     * @param ctx the parse tree
     */
    enterEventParameter?: (ctx: EventParameterContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.eventParameter`.
     * @param ctx the parse tree
     */
    exitEventParameter?: (ctx: EventParameterContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.eventDefinition`.
     * @param ctx the parse tree
     */
    enterEventDefinition?: (ctx: EventDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.eventDefinition`.
     * @param ctx the parse tree
     */
    exitEventDefinition?: (ctx: EventDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.errorParameter`.
     * @param ctx the parse tree
     */
    enterErrorParameter?: (ctx: ErrorParameterContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.errorParameter`.
     * @param ctx the parse tree
     */
    exitErrorParameter?: (ctx: ErrorParameterContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.errorDefinition`.
     * @param ctx the parse tree
     */
    enterErrorDefinition?: (ctx: ErrorDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.errorDefinition`.
     * @param ctx the parse tree
     */
    exitErrorDefinition?: (ctx: ErrorDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.userDefinableOperator`.
     * @param ctx the parse tree
     */
    enterUserDefinableOperator?: (ctx: UserDefinableOperatorContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.userDefinableOperator`.
     * @param ctx the parse tree
     */
    exitUserDefinableOperator?: (ctx: UserDefinableOperatorContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.usingDirective`.
     * @param ctx the parse tree
     */
    enterUsingDirective?: (ctx: UsingDirectiveContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.usingDirective`.
     * @param ctx the parse tree
     */
    exitUsingDirective?: (ctx: UsingDirectiveContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.usingAliases`.
     * @param ctx the parse tree
     */
    enterUsingAliases?: (ctx: UsingAliasesContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.usingAliases`.
     * @param ctx the parse tree
     */
    exitUsingAliases?: (ctx: UsingAliasesContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.typeName`.
     * @param ctx the parse tree
     */
    enterTypeName?: (ctx: TypeNameContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.typeName`.
     * @param ctx the parse tree
     */
    exitTypeName?: (ctx: TypeNameContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.elementaryTypeName`.
     * @param ctx the parse tree
     */
    enterElementaryTypeName?: (ctx: ElementaryTypeNameContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.elementaryTypeName`.
     * @param ctx the parse tree
     */
    exitElementaryTypeName?: (ctx: ElementaryTypeNameContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.addressPayable`.
     * @param ctx the parse tree
     */
    enterAddressPayable?: (ctx: AddressPayableContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.addressPayable`.
     * @param ctx the parse tree
     */
    exitAddressPayable?: (ctx: AddressPayableContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.functionTypeName`.
     * @param ctx the parse tree
     */
    enterFunctionTypeName?: (ctx: FunctionTypeNameContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.functionTypeName`.
     * @param ctx the parse tree
     */
    exitFunctionTypeName?: (ctx: FunctionTypeNameContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.variableDeclaration`.
     * @param ctx the parse tree
     */
    enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.variableDeclaration`.
     * @param ctx the parse tree
     */
    exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.dataLocation`.
     * @param ctx the parse tree
     */
    enterDataLocation?: (ctx: DataLocationContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.dataLocation`.
     * @param ctx the parse tree
     */
    exitDataLocation?: (ctx: DataLocationContext) => void;
    /**
     * Enter a parse tree produced by the `UnaryPrefixOperation`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    enterUnaryPrefixOperation?: (ctx: UnaryPrefixOperationContext) => void;
    /**
     * Exit a parse tree produced by the `UnaryPrefixOperation`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    exitUnaryPrefixOperation?: (ctx: UnaryPrefixOperationContext) => void;
    /**
     * Enter a parse tree produced by the `PrimaryExpression`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    enterPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `PrimaryExpression`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    exitPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `OrderComparison`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    enterOrderComparison?: (ctx: OrderComparisonContext) => void;
    /**
     * Exit a parse tree produced by the `OrderComparison`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    exitOrderComparison?: (ctx: OrderComparisonContext) => void;
    /**
     * Enter a parse tree produced by the `Conditional`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    enterConditional?: (ctx: ConditionalContext) => void;
    /**
     * Exit a parse tree produced by the `Conditional`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    exitConditional?: (ctx: ConditionalContext) => void;
    /**
     * Enter a parse tree produced by the `PayableConversion`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    enterPayableConversion?: (ctx: PayableConversionContext) => void;
    /**
     * Exit a parse tree produced by the `PayableConversion`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    exitPayableConversion?: (ctx: PayableConversionContext) => void;
    /**
     * Enter a parse tree produced by the `Assignment`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    enterAssignment?: (ctx: AssignmentContext) => void;
    /**
     * Exit a parse tree produced by the `Assignment`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    exitAssignment?: (ctx: AssignmentContext) => void;
    /**
     * Enter a parse tree produced by the `UnarySuffixOperation`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    enterUnarySuffixOperation?: (ctx: UnarySuffixOperationContext) => void;
    /**
     * Exit a parse tree produced by the `UnarySuffixOperation`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    exitUnarySuffixOperation?: (ctx: UnarySuffixOperationContext) => void;
    /**
     * Enter a parse tree produced by the `ShiftOperation`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    enterShiftOperation?: (ctx: ShiftOperationContext) => void;
    /**
     * Exit a parse tree produced by the `ShiftOperation`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    exitShiftOperation?: (ctx: ShiftOperationContext) => void;
    /**
     * Enter a parse tree produced by the `BitAndOperation`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    enterBitAndOperation?: (ctx: BitAndOperationContext) => void;
    /**
     * Exit a parse tree produced by the `BitAndOperation`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    exitBitAndOperation?: (ctx: BitAndOperationContext) => void;
    /**
     * Enter a parse tree produced by the `FunctionCall`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    enterFunctionCall?: (ctx: FunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `FunctionCall`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    exitFunctionCall?: (ctx: FunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `IndexRangeAccess`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    enterIndexRangeAccess?: (ctx: IndexRangeAccessContext) => void;
    /**
     * Exit a parse tree produced by the `IndexRangeAccess`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    exitIndexRangeAccess?: (ctx: IndexRangeAccessContext) => void;
    /**
     * Enter a parse tree produced by the `IndexAccess`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    enterIndexAccess?: (ctx: IndexAccessContext) => void;
    /**
     * Exit a parse tree produced by the `IndexAccess`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    exitIndexAccess?: (ctx: IndexAccessContext) => void;
    /**
     * Enter a parse tree produced by the `AddSubOperation`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    enterAddSubOperation?: (ctx: AddSubOperationContext) => void;
    /**
     * Exit a parse tree produced by the `AddSubOperation`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    exitAddSubOperation?: (ctx: AddSubOperationContext) => void;
    /**
     * Enter a parse tree produced by the `BitOrOperation`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    enterBitOrOperation?: (ctx: BitOrOperationContext) => void;
    /**
     * Exit a parse tree produced by the `BitOrOperation`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    exitBitOrOperation?: (ctx: BitOrOperationContext) => void;
    /**
     * Enter a parse tree produced by the `ExpOperation`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    enterExpOperation?: (ctx: ExpOperationContext) => void;
    /**
     * Exit a parse tree produced by the `ExpOperation`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    exitExpOperation?: (ctx: ExpOperationContext) => void;
    /**
     * Enter a parse tree produced by the `AndOperation`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    enterAndOperation?: (ctx: AndOperationContext) => void;
    /**
     * Exit a parse tree produced by the `AndOperation`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    exitAndOperation?: (ctx: AndOperationContext) => void;
    /**
     * Enter a parse tree produced by the `InlineArray`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    enterInlineArray?: (ctx: InlineArrayContext) => void;
    /**
     * Exit a parse tree produced by the `InlineArray`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    exitInlineArray?: (ctx: InlineArrayContext) => void;
    /**
     * Enter a parse tree produced by the `OrOperation`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    enterOrOperation?: (ctx: OrOperationContext) => void;
    /**
     * Exit a parse tree produced by the `OrOperation`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    exitOrOperation?: (ctx: OrOperationContext) => void;
    /**
     * Enter a parse tree produced by the `MemberAccess`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    enterMemberAccess?: (ctx: MemberAccessContext) => void;
    /**
     * Exit a parse tree produced by the `MemberAccess`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    exitMemberAccess?: (ctx: MemberAccessContext) => void;
    /**
     * Enter a parse tree produced by the `MulDivModOperation`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    enterMulDivModOperation?: (ctx: MulDivModOperationContext) => void;
    /**
     * Exit a parse tree produced by the `MulDivModOperation`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    exitMulDivModOperation?: (ctx: MulDivModOperationContext) => void;
    /**
     * Enter a parse tree produced by the `FunctionCallOptions`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    enterFunctionCallOptions?: (ctx: FunctionCallOptionsContext) => void;
    /**
     * Exit a parse tree produced by the `FunctionCallOptions`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    exitFunctionCallOptions?: (ctx: FunctionCallOptionsContext) => void;
    /**
     * Enter a parse tree produced by the `NewExpr`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    enterNewExpr?: (ctx: NewExprContext) => void;
    /**
     * Exit a parse tree produced by the `NewExpr`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    exitNewExpr?: (ctx: NewExprContext) => void;
    /**
     * Enter a parse tree produced by the `BitXorOperation`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    enterBitXorOperation?: (ctx: BitXorOperationContext) => void;
    /**
     * Exit a parse tree produced by the `BitXorOperation`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    exitBitXorOperation?: (ctx: BitXorOperationContext) => void;
    /**
     * Enter a parse tree produced by the `Tuple`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    enterTuple?: (ctx: TupleContext) => void;
    /**
     * Exit a parse tree produced by the `Tuple`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    exitTuple?: (ctx: TupleContext) => void;
    /**
     * Enter a parse tree produced by the `EqualityComparison`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    enterEqualityComparison?: (ctx: EqualityComparisonContext) => void;
    /**
     * Exit a parse tree produced by the `EqualityComparison`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    exitEqualityComparison?: (ctx: EqualityComparisonContext) => void;
    /**
     * Enter a parse tree produced by the `MetaType`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    enterMetaType?: (ctx: MetaTypeContext) => void;
    /**
     * Exit a parse tree produced by the `MetaType`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     */
    exitMetaType?: (ctx: MetaTypeContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.assignOp`.
     * @param ctx the parse tree
     */
    enterAssignOp?: (ctx: AssignOpContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.assignOp`.
     * @param ctx the parse tree
     */
    exitAssignOp?: (ctx: AssignOpContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.tupleExpression`.
     * @param ctx the parse tree
     */
    enterTupleExpression?: (ctx: TupleExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.tupleExpression`.
     * @param ctx the parse tree
     */
    exitTupleExpression?: (ctx: TupleExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.inlineArrayExpression`.
     * @param ctx the parse tree
     */
    enterInlineArrayExpression?: (ctx: InlineArrayExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.inlineArrayExpression`.
     * @param ctx the parse tree
     */
    exitInlineArrayExpression?: (ctx: InlineArrayExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.identifier`.
     * @param ctx the parse tree
     */
    enterIdentifier?: (ctx: IdentifierContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.identifier`.
     * @param ctx the parse tree
     */
    exitIdentifier?: (ctx: IdentifierContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.literal`.
     * @param ctx the parse tree
     */
    enterLiteral?: (ctx: LiteralContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.literal`.
     * @param ctx the parse tree
     */
    exitLiteral?: (ctx: LiteralContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.literalWithSubDenomination`.
     * @param ctx the parse tree
     */
    enterLiteralWithSubDenomination?: (ctx: LiteralWithSubDenominationContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.literalWithSubDenomination`.
     * @param ctx the parse tree
     */
    exitLiteralWithSubDenomination?: (ctx: LiteralWithSubDenominationContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.boolLiteral`.
     * @param ctx the parse tree
     */
    enterBoolLiteral?: (ctx: BoolLiteralContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.boolLiteral`.
     * @param ctx the parse tree
     */
    exitBoolLiteral?: (ctx: BoolLiteralContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.stringLiteral`.
     * @param ctx the parse tree
     */
    enterStringLiteral?: (ctx: StringLiteralContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.stringLiteral`.
     * @param ctx the parse tree
     */
    exitStringLiteral?: (ctx: StringLiteralContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.hexStringLiteral`.
     * @param ctx the parse tree
     */
    enterHexStringLiteral?: (ctx: HexStringLiteralContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.hexStringLiteral`.
     * @param ctx the parse tree
     */
    exitHexStringLiteral?: (ctx: HexStringLiteralContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.unicodeStringLiteral`.
     * @param ctx the parse tree
     */
    enterUnicodeStringLiteral?: (ctx: UnicodeStringLiteralContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.unicodeStringLiteral`.
     * @param ctx the parse tree
     */
    exitUnicodeStringLiteral?: (ctx: UnicodeStringLiteralContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.numberLiteral`.
     * @param ctx the parse tree
     */
    enterNumberLiteral?: (ctx: NumberLiteralContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.numberLiteral`.
     * @param ctx the parse tree
     */
    exitNumberLiteral?: (ctx: NumberLiteralContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.block`.
     * @param ctx the parse tree
     */
    enterBlock?: (ctx: BlockContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.block`.
     * @param ctx the parse tree
     */
    exitBlock?: (ctx: BlockContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.uncheckedBlock`.
     * @param ctx the parse tree
     */
    enterUncheckedBlock?: (ctx: UncheckedBlockContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.uncheckedBlock`.
     * @param ctx the parse tree
     */
    exitUncheckedBlock?: (ctx: UncheckedBlockContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.statement`.
     * @param ctx the parse tree
     */
    enterStatement?: (ctx: StatementContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.statement`.
     * @param ctx the parse tree
     */
    exitStatement?: (ctx: StatementContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.simpleStatement`.
     * @param ctx the parse tree
     */
    enterSimpleStatement?: (ctx: SimpleStatementContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.simpleStatement`.
     * @param ctx the parse tree
     */
    exitSimpleStatement?: (ctx: SimpleStatementContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.ifStatement`.
     * @param ctx the parse tree
     */
    enterIfStatement?: (ctx: IfStatementContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.ifStatement`.
     * @param ctx the parse tree
     */
    exitIfStatement?: (ctx: IfStatementContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.forStatement`.
     * @param ctx the parse tree
     */
    enterForStatement?: (ctx: ForStatementContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.forStatement`.
     * @param ctx the parse tree
     */
    exitForStatement?: (ctx: ForStatementContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.whileStatement`.
     * @param ctx the parse tree
     */
    enterWhileStatement?: (ctx: WhileStatementContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.whileStatement`.
     * @param ctx the parse tree
     */
    exitWhileStatement?: (ctx: WhileStatementContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.doWhileStatement`.
     * @param ctx the parse tree
     */
    enterDoWhileStatement?: (ctx: DoWhileStatementContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.doWhileStatement`.
     * @param ctx the parse tree
     */
    exitDoWhileStatement?: (ctx: DoWhileStatementContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.continueStatement`.
     * @param ctx the parse tree
     */
    enterContinueStatement?: (ctx: ContinueStatementContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.continueStatement`.
     * @param ctx the parse tree
     */
    exitContinueStatement?: (ctx: ContinueStatementContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.breakStatement`.
     * @param ctx the parse tree
     */
    enterBreakStatement?: (ctx: BreakStatementContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.breakStatement`.
     * @param ctx the parse tree
     */
    exitBreakStatement?: (ctx: BreakStatementContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.tryStatement`.
     * @param ctx the parse tree
     */
    enterTryStatement?: (ctx: TryStatementContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.tryStatement`.
     * @param ctx the parse tree
     */
    exitTryStatement?: (ctx: TryStatementContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.catchClause`.
     * @param ctx the parse tree
     */
    enterCatchClause?: (ctx: CatchClauseContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.catchClause`.
     * @param ctx the parse tree
     */
    exitCatchClause?: (ctx: CatchClauseContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.returnStatement`.
     * @param ctx the parse tree
     */
    enterReturnStatement?: (ctx: ReturnStatementContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.returnStatement`.
     * @param ctx the parse tree
     */
    exitReturnStatement?: (ctx: ReturnStatementContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.emitStatement`.
     * @param ctx the parse tree
     */
    enterEmitStatement?: (ctx: EmitStatementContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.emitStatement`.
     * @param ctx the parse tree
     */
    exitEmitStatement?: (ctx: EmitStatementContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.revertStatement`.
     * @param ctx the parse tree
     */
    enterRevertStatement?: (ctx: RevertStatementContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.revertStatement`.
     * @param ctx the parse tree
     */
    exitRevertStatement?: (ctx: RevertStatementContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.assemblyStatement`.
     * @param ctx the parse tree
     */
    enterAssemblyStatement?: (ctx: AssemblyStatementContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.assemblyStatement`.
     * @param ctx the parse tree
     */
    exitAssemblyStatement?: (ctx: AssemblyStatementContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.assemblyFlags`.
     * @param ctx the parse tree
     */
    enterAssemblyFlags?: (ctx: AssemblyFlagsContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.assemblyFlags`.
     * @param ctx the parse tree
     */
    exitAssemblyFlags?: (ctx: AssemblyFlagsContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.variableDeclarationList`.
     * @param ctx the parse tree
     */
    enterVariableDeclarationList?: (ctx: VariableDeclarationListContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.variableDeclarationList`.
     * @param ctx the parse tree
     */
    exitVariableDeclarationList?: (ctx: VariableDeclarationListContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.variableDeclarationTuple`.
     * @param ctx the parse tree
     */
    enterVariableDeclarationTuple?: (ctx: VariableDeclarationTupleContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.variableDeclarationTuple`.
     * @param ctx the parse tree
     */
    exitVariableDeclarationTuple?: (ctx: VariableDeclarationTupleContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.variableDeclarationStatement`.
     * @param ctx the parse tree
     */
    enterVariableDeclarationStatement?: (ctx: VariableDeclarationStatementContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.variableDeclarationStatement`.
     * @param ctx the parse tree
     */
    exitVariableDeclarationStatement?: (ctx: VariableDeclarationStatementContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.expressionStatement`.
     * @param ctx the parse tree
     */
    enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.expressionStatement`.
     * @param ctx the parse tree
     */
    exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.mappingType`.
     * @param ctx the parse tree
     */
    enterMappingType?: (ctx: MappingTypeContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.mappingType`.
     * @param ctx the parse tree
     */
    exitMappingType?: (ctx: MappingTypeContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.mappingKeyType`.
     * @param ctx the parse tree
     */
    enterMappingKeyType?: (ctx: MappingKeyTypeContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.mappingKeyType`.
     * @param ctx the parse tree
     */
    exitMappingKeyType?: (ctx: MappingKeyTypeContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.yulStatement`.
     * @param ctx the parse tree
     */
    enterYulStatement?: (ctx: YulStatementContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.yulStatement`.
     * @param ctx the parse tree
     */
    exitYulStatement?: (ctx: YulStatementContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.yulBlock`.
     * @param ctx the parse tree
     */
    enterYulBlock?: (ctx: YulBlockContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.yulBlock`.
     * @param ctx the parse tree
     */
    exitYulBlock?: (ctx: YulBlockContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.yulVariableDeclaration`.
     * @param ctx the parse tree
     */
    enterYulVariableDeclaration?: (ctx: YulVariableDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.yulVariableDeclaration`.
     * @param ctx the parse tree
     */
    exitYulVariableDeclaration?: (ctx: YulVariableDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.yulAssignment`.
     * @param ctx the parse tree
     */
    enterYulAssignment?: (ctx: YulAssignmentContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.yulAssignment`.
     * @param ctx the parse tree
     */
    exitYulAssignment?: (ctx: YulAssignmentContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.yulIfStatement`.
     * @param ctx the parse tree
     */
    enterYulIfStatement?: (ctx: YulIfStatementContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.yulIfStatement`.
     * @param ctx the parse tree
     */
    exitYulIfStatement?: (ctx: YulIfStatementContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.yulForStatement`.
     * @param ctx the parse tree
     */
    enterYulForStatement?: (ctx: YulForStatementContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.yulForStatement`.
     * @param ctx the parse tree
     */
    exitYulForStatement?: (ctx: YulForStatementContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.yulSwitchCase`.
     * @param ctx the parse tree
     */
    enterYulSwitchCase?: (ctx: YulSwitchCaseContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.yulSwitchCase`.
     * @param ctx the parse tree
     */
    exitYulSwitchCase?: (ctx: YulSwitchCaseContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.yulSwitchStatement`.
     * @param ctx the parse tree
     */
    enterYulSwitchStatement?: (ctx: YulSwitchStatementContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.yulSwitchStatement`.
     * @param ctx the parse tree
     */
    exitYulSwitchStatement?: (ctx: YulSwitchStatementContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.yulFunctionDefinition`.
     * @param ctx the parse tree
     */
    enterYulFunctionDefinition?: (ctx: YulFunctionDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.yulFunctionDefinition`.
     * @param ctx the parse tree
     */
    exitYulFunctionDefinition?: (ctx: YulFunctionDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.yulPath`.
     * @param ctx the parse tree
     */
    enterYulPath?: (ctx: YulPathContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.yulPath`.
     * @param ctx the parse tree
     */
    exitYulPath?: (ctx: YulPathContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.yulFunctionCall`.
     * @param ctx the parse tree
     */
    enterYulFunctionCall?: (ctx: YulFunctionCallContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.yulFunctionCall`.
     * @param ctx the parse tree
     */
    exitYulFunctionCall?: (ctx: YulFunctionCallContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.yulbool`.
     * @param ctx the parse tree
     */
    enterYulbool?: (ctx: YulboolContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.yulbool`.
     * @param ctx the parse tree
     */
    exitYulbool?: (ctx: YulboolContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.yulLiteral`.
     * @param ctx the parse tree
     */
    enterYulLiteral?: (ctx: YulLiteralContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.yulLiteral`.
     * @param ctx the parse tree
     */
    exitYulLiteral?: (ctx: YulLiteralContext) => void;
    /**
     * Enter a parse tree produced by `SolidityParser.yulExpression`.
     * @param ctx the parse tree
     */
    enterYulExpression?: (ctx: YulExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SolidityParser.yulExpression`.
     * @param ctx the parse tree
     */
    exitYulExpression?: (ctx: YulExpressionContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

