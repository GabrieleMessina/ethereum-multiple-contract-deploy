export class InterfaceUsage {
    interfaceName: string;
    variableName: string;
    ctx: any;
    constructor(interfaceName: string, variableName: string, ctx: any) {
        this.interfaceName = interfaceName;
        this.variableName = variableName;
        this.ctx = ctx;
    }
}
