import { SetDataCep } from './set-data-send-cep';

describe('SetDataCep', () => {
    it('should normalize CEP keeping only digits', () => {
        const cep = new SetDataCep('01001-000');

        expect(cep.infoCep()).toEqual({ cep: '01001000' });
    });

    it('should validate CEP length', () => {
        expect(new SetDataCep('01001-000').isValid()).toBeTrue();
        expect(new SetDataCep('123').isValid()).toBeFalse();
    });
});
