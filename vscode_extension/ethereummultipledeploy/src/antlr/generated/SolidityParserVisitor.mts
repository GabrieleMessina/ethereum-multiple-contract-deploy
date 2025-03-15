// Generated from d:/Users/gabry/Universita/ing_sis_dis/remix/vscode_extension/ethereummultipledeploy/src/antlr/SolidityParser.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SolidityParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class SolidityParserVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `SolidityParser.sourceUnit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSourceUnit?: (ctx: SourceUnitContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.pragmaDirective`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPragmaDirective?: (ctx: PragmaDirectiveContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.importDirective`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImportDirective?: (ctx: ImportDirectiveContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.importAliases`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImportAliases?: (ctx: ImportAliasesContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.path`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPath?: (ctx: PathContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.symbolAliases`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSymbolAliases?: (ctx: SymbolAliasesContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.contractDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitContractDefinition?: (ctx: ContractDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.interfaceDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterfaceDefinition?: (ctx: InterfaceDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.libraryDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLibraryDefinition?: (ctx: LibraryDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.inheritanceSpecifierList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInheritanceSpecifierList?: (ctx: InheritanceSpecifierListContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.inheritanceSpecifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInheritanceSpecifier?: (ctx: InheritanceSpecifierContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.contractBodyElement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitContractBodyElement?: (ctx: ContractBodyElementContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.namedArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamedArgument?: (ctx: NamedArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.callArgumentList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCallArgumentList?: (ctx: CallArgumentListContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.identifierPath`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierPath?: (ctx: IdentifierPathContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.modifierInvocation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModifierInvocation?: (ctx: ModifierInvocationContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.visibility`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVisibility?: (ctx: VisibilityContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.parameterList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameterList?: (ctx: ParameterListContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.parameterDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameterDeclaration?: (ctx: ParameterDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.constructorDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstructorDefinition?: (ctx: ConstructorDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.stateMutability`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStateMutability?: (ctx: StateMutabilityContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.overrideSpecifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOverrideSpecifier?: (ctx: OverrideSpecifierContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.functionDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionDefinition?: (ctx: FunctionDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.modifierDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModifierDefinition?: (ctx: ModifierDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.fallbackFunctionDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFallbackFunctionDefinition?: (ctx: FallbackFunctionDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.receiveFunctionDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReceiveFunctionDefinition?: (ctx: ReceiveFunctionDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.structDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStructDefinition?: (ctx: StructDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.structMember`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStructMember?: (ctx: StructMemberContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.enumDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumDefinition?: (ctx: EnumDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.userDefinedValueTypeDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUserDefinedValueTypeDefinition?: (ctx: UserDefinedValueTypeDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.stateVariableDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStateVariableDeclaration?: (ctx: StateVariableDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.constantVariableDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstantVariableDeclaration?: (ctx: ConstantVariableDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.eventParameter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEventParameter?: (ctx: EventParameterContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.eventDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEventDefinition?: (ctx: EventDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.errorParameter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitErrorParameter?: (ctx: ErrorParameterContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.errorDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitErrorDefinition?: (ctx: ErrorDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.userDefinableOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUserDefinableOperator?: (ctx: UserDefinableOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.usingDirective`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUsingDirective?: (ctx: UsingDirectiveContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.usingAliases`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUsingAliases?: (ctx: UsingAliasesContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.typeName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeName?: (ctx: TypeNameContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.elementaryTypeName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElementaryTypeName?: (ctx: ElementaryTypeNameContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.addressPayable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAddressPayable?: (ctx: AddressPayableContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.functionTypeName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionTypeName?: (ctx: FunctionTypeNameContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.variableDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.dataLocation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDataLocation?: (ctx: DataLocationContext) => Result;
    /**
     * Visit a parse tree produced by the `UnaryPrefixOperation`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnaryPrefixOperation?: (ctx: UnaryPrefixOperationContext) => Result;
    /**
     * Visit a parse tree produced by the `PrimaryExpression`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `OrderComparison`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrderComparison?: (ctx: OrderComparisonContext) => Result;
    /**
     * Visit a parse tree produced by the `Conditional`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConditional?: (ctx: ConditionalContext) => Result;
    /**
     * Visit a parse tree produced by the `PayableConversion`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPayableConversion?: (ctx: PayableConversionContext) => Result;
    /**
     * Visit a parse tree produced by the `Assignment`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignment?: (ctx: AssignmentContext) => Result;
    /**
     * Visit a parse tree produced by the `UnarySuffixOperation`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnarySuffixOperation?: (ctx: UnarySuffixOperationContext) => Result;
    /**
     * Visit a parse tree produced by the `ShiftOperation`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShiftOperation?: (ctx: ShiftOperationContext) => Result;
    /**
     * Visit a parse tree produced by the `BitAndOperation`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBitAndOperation?: (ctx: BitAndOperationContext) => Result;
    /**
     * Visit a parse tree produced by the `FunctionCall`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionCall?: (ctx: FunctionCallContext) => Result;
    /**
     * Visit a parse tree produced by the `IndexRangeAccess`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndexRangeAccess?: (ctx: IndexRangeAccessContext) => Result;
    /**
     * Visit a parse tree produced by the `IndexAccess`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndexAccess?: (ctx: IndexAccessContext) => Result;
    /**
     * Visit a parse tree produced by the `AddSubOperation`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAddSubOperation?: (ctx: AddSubOperationContext) => Result;
    /**
     * Visit a parse tree produced by the `BitOrOperation`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBitOrOperation?: (ctx: BitOrOperationContext) => Result;
    /**
     * Visit a parse tree produced by the `ExpOperation`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpOperation?: (ctx: ExpOperationContext) => Result;
    /**
     * Visit a parse tree produced by the `AndOperation`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAndOperation?: (ctx: AndOperationContext) => Result;
    /**
     * Visit a parse tree produced by the `InlineArray`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInlineArray?: (ctx: InlineArrayContext) => Result;
    /**
     * Visit a parse tree produced by the `OrOperation`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrOperation?: (ctx: OrOperationContext) => Result;
    /**
     * Visit a parse tree produced by the `MemberAccess`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMemberAccess?: (ctx: MemberAccessContext) => Result;
    /**
     * Visit a parse tree produced by the `MulDivModOperation`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMulDivModOperation?: (ctx: MulDivModOperationContext) => Result;
    /**
     * Visit a parse tree produced by the `FunctionCallOptions`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionCallOptions?: (ctx: FunctionCallOptionsContext) => Result;
    /**
     * Visit a parse tree produced by the `NewExpr`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNewExpr?: (ctx: NewExprContext) => Result;
    /**
     * Visit a parse tree produced by the `BitXorOperation`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBitXorOperation?: (ctx: BitXorOperationContext) => Result;
    /**
     * Visit a parse tree produced by the `Tuple`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTuple?: (ctx: TupleContext) => Result;
    /**
     * Visit a parse tree produced by the `EqualityComparison`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEqualityComparison?: (ctx: EqualityComparisonContext) => Result;
    /**
     * Visit a parse tree produced by the `MetaType`
     * labeled alternative in `SolidityParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMetaType?: (ctx: MetaTypeContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.assignOp`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignOp?: (ctx: AssignOpContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.tupleExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTupleExpression?: (ctx: TupleExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.inlineArrayExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInlineArrayExpression?: (ctx: InlineArrayExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.identifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifier?: (ctx: IdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLiteral?: (ctx: LiteralContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.literalWithSubDenomination`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLiteralWithSubDenomination?: (ctx: LiteralWithSubDenominationContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.boolLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBoolLiteral?: (ctx: BoolLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.stringLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStringLiteral?: (ctx: StringLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.hexStringLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHexStringLiteral?: (ctx: HexStringLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.unicodeStringLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnicodeStringLiteral?: (ctx: UnicodeStringLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.numberLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumberLiteral?: (ctx: NumberLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlock?: (ctx: BlockContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.uncheckedBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUncheckedBlock?: (ctx: UncheckedBlockContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatement?: (ctx: StatementContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.simpleStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleStatement?: (ctx: SimpleStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.ifStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfStatement?: (ctx: IfStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.forStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForStatement?: (ctx: ForStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.whileStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhileStatement?: (ctx: WhileStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.doWhileStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDoWhileStatement?: (ctx: DoWhileStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.continueStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitContinueStatement?: (ctx: ContinueStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.breakStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBreakStatement?: (ctx: BreakStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.tryStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTryStatement?: (ctx: TryStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.catchClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCatchClause?: (ctx: CatchClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.returnStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturnStatement?: (ctx: ReturnStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.emitStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEmitStatement?: (ctx: EmitStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.revertStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRevertStatement?: (ctx: RevertStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.assemblyStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssemblyStatement?: (ctx: AssemblyStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.assemblyFlags`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssemblyFlags?: (ctx: AssemblyFlagsContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.variableDeclarationList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableDeclarationList?: (ctx: VariableDeclarationListContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.variableDeclarationTuple`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableDeclarationTuple?: (ctx: VariableDeclarationTupleContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.variableDeclarationStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableDeclarationStatement?: (ctx: VariableDeclarationStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.expressionStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.mappingType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMappingType?: (ctx: MappingTypeContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.mappingKeyType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMappingKeyType?: (ctx: MappingKeyTypeContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.yulStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitYulStatement?: (ctx: YulStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.yulBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitYulBlock?: (ctx: YulBlockContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.yulVariableDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitYulVariableDeclaration?: (ctx: YulVariableDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.yulAssignment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitYulAssignment?: (ctx: YulAssignmentContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.yulIfStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitYulIfStatement?: (ctx: YulIfStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.yulForStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitYulForStatement?: (ctx: YulForStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.yulSwitchCase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitYulSwitchCase?: (ctx: YulSwitchCaseContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.yulSwitchStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitYulSwitchStatement?: (ctx: YulSwitchStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.yulFunctionDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitYulFunctionDefinition?: (ctx: YulFunctionDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.yulPath`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitYulPath?: (ctx: YulPathContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.yulFunctionCall`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitYulFunctionCall?: (ctx: YulFunctionCallContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.yulbool`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitYulbool?: (ctx: YulboolContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.yulLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitYulLiteral?: (ctx: YulLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `SolidityParser.yulExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitYulExpression?: (ctx: YulExpressionContext) => Result;
}

