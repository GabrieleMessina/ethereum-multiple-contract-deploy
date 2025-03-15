import { InterfaceDefinitionContext, SolidityParser, StateVariableDeclarationContext, VariableDeclarationContext } from "./generated/SolidityParser.mjs";
import { SolidityLexer } from "./generated/SolidityLexer.mjs";
import {SolidityParserListener as baseListener} from "./generated/SolidityParserListener.mjs";
import * as antlr4ng from "antlr4ng";
import { InterfaceUsage } from "./InterfaceUsage.js";
import { InterfaceDefinition } from "./InterfaceDefinition.js";

export class SolidityParserListener extends baseListener {
    interfaceDefinitions: InterfaceDefinition[] = []; //interface name definitions in source.
    interfaceUsages: InterfaceUsage[] = []; //(interface names, variable names) used in source.
    variableName: string | undefined;
    address: string | undefined;
    
    constructor(variableName?:string, address?: string) {
        super();
        this.variableName = variableName;
        this.address = address;
    }

    enterInterfaceDefinition = (ctx: InterfaceDefinitionContext) => {
        const interfaceName = ctx._name?.getText();
        if(interfaceName){
            this.interfaceDefinitions.push(new InterfaceDefinition(interfaceName));
        }
    }

    enterStateVariableDeclaration = (ctx: StateVariableDeclarationContext) => {
        const interfaceName = ctx._type_?.getText().split(" ")[0];
        const variableName = ctx._name?.getText();
        if(interfaceName && variableName){
            this.interfaceUsages.push(new InterfaceUsage(interfaceName, variableName, ctx));
        }

        if(this.variableName && this.address){
            
        }
    }

    static GetInterfaceUsageInSource(sourceCode: string): InterfaceUsage[] {
        // Give the lexer our input as a stream of characters
        const charStream = antlr4ng.CharStream.fromString(sourceCode);
        const lexer = new SolidityLexer(charStream);

        // Create a stream of tokens and give it to the parser
        const tokenStream = new antlr4ng.CommonTokenStream(lexer);
        const parser = new SolidityParser(tokenStream);

        // Walk the syntax tree from the ‘file’ rule as the beginning
        const programRoot = parser.sourceUnit();
        const listener = new SolidityParserListener();
        antlr4ng.ParseTreeWalker.DEFAULT.walk(listener, programRoot);

        return listener.interfaceUsages;
    }

    static GetInterfaceDefinitionsInSource(sourceCode: string): InterfaceDefinition[]{
        // Give the lexer our input as a stream of characters
        const charStream = antlr4ng.CharStream.fromString(sourceCode);
        const lexer = new SolidityLexer(charStream);

        // Create a stream of tokens and give it to the parser
        const tokenStream = new antlr4ng.CommonTokenStream(lexer);
        const parser = new SolidityParser(tokenStream);

        // Walk the syntax tree from the sourceUnit rule as the beginning
        const programRoot = parser.sourceUnit();
        const listener = new SolidityParserListener();
        antlr4ng.ParseTreeWalker.DEFAULT.walk(listener, programRoot);

        return listener.interfaceDefinitions;
    }

    static AlterInterfaceUsageWithAddress(sourceCode: string, interfaceUsage: InterfaceUsage, address: string): string{
        // Give the lexer our input as a stream of characters
        const charStream = antlr4ng.CharStream.fromString(sourceCode);
        const lexer = new SolidityLexer(charStream);
        
        // Create a stream of tokens and give it to the parser
        const tokenStream = new antlr4ng.CommonTokenStream(lexer);
        const rewriter = new antlr4ng.TokenStreamRewriter(tokenStream);
        const parser = new SolidityParser(tokenStream);
        parser.sourceUnit();
        
        const ctx = interfaceUsage.ctx as StateVariableDeclarationContext;

        if (ctx._initialValue) {
            rewriter.replace(ctx._initialValue.start?.tokenIndex!, ctx._initialValue.stop?.tokenIndex!, `${interfaceUsage.interfaceName}(${address})`);
        }
        else{
            rewriter.insertBefore(ctx.stop?.tokenIndex!, ` = ${interfaceUsage.interfaceName}(${address})`);
        }

        return rewriter.getText();
    }
}