export interface CepAddressModel {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
    erro?: false;
}

export interface CepErrorModel {
    erro: true;
}

export type CepReturnModel = CepAddressModel | CepErrorModel;

export type CepDataEntity = CepReturnModel;

export interface CepSendRequest {
    cep: string;
}
