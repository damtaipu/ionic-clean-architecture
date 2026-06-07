import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { cepFalseState, cepTrueState } from '@src/shared/store/actions/cep/cep-actions';
import { cepState, ICepState } from '@src/shared/store/states/cep/cep-state';

export const cepFeatureKey = 'cep';

export const cepReducer = createReducer(
    cepState,
    on(cepTrueState, (state) => ({
        ...state,
        result: true
    })),
    on(cepFalseState, (state) => ({
        ...state,
        result: false
    }))
);

export const selectCepState = createFeatureSelector<ICepState>(cepFeatureKey);

export const selectCepResult = createSelector(
    selectCepState,
    (state) => state.result
);
