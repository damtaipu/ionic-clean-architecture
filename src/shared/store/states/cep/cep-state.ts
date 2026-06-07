export interface ICepState {
    result: boolean;
}

export interface AppState {
    cep: ICepState;
}

export const cepState: ICepState = {
    result: false
};
