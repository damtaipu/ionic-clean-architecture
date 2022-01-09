import { createReducer, on } from '@ngrx/store';
import { cepState } from '@src/shared/store/states/cep/cep-state';
import { cepFalseState, cepTrueState } from '@src/shared/store/actions/cep/cep-actions';

export const cepReducer = createReducer(
    cepState,
    on(cepTrueState, (state) => {
        state = {
            ...state,
            result: true
        };
        return state;
    } ),
    on(cepFalseState, (state) => {
        state = {
            ...state,
            result: false
        };
        return state;
    })
);
