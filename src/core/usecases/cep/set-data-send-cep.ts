import { CepSendRequest } from '@src/core/domain/cep-model/cep-model';

export class SetDataCep {
    private static readonly cepLength = 8;
    private readonly cep: string;

    constructor(cep: string | number) {
        this.cep = String(cep).replace(/\D/g, '');
    }

    isValid(): boolean {
        return this.cep.length === SetDataCep.cepLength;
    }

    infoCep(): CepSendRequest {
        return {
            cep: this.cep
        };
    }
}
