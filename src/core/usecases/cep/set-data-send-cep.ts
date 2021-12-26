export class SetDataCep {
    private cep: number;

    constructor(cep: number) {
        this.cep = cep;
    }

    infoCep() {
        const cep = {
            cep: this.cep
        };
        return cep;
    }
}
