export interface CepReturnModel {
    cep?: string;
    logradouro?: string;
    complemento?: string;
    bairro?: string;
    localidade?: string;
    uf?: string;
    ibge?: string;
    gia?: string;
    ddd?: string;
    siafi?: string;
    erro?: boolean;
}

export interface CepReturnEntity {
    cep?: string;
    logradouro?: string;
    complemento?: string;
    bairro?: string;
    localidade?: string;
    uf?: string;
    ibge?: string;
    gia?: string;
    ddd?: string;
    siafi?: string;
    erro?: boolean;
}

export interface CepSendRequest {
    cep: number;
}
