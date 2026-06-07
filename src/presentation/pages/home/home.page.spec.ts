import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { of, throwError } from 'rxjs';
import { GetCepUseCase } from '@src/core/usecases/cep/get-cep.usecases';
import { cepFalseState, cepTrueState } from '@src/shared/store/actions/cep/cep-actions';
import { HomePage } from './home.page';

class GetCepUseCaseMock {
  execute = jasmine.createSpy('execute').and.returnValue(of({
    cep: '01001-000',
    logradouro: 'Praça da Sé',
    complemento: 'lado ímpar',
    bairro: 'Sé',
    localidade: 'São Paulo',
    uf: 'SP',
    ibge: '3550308',
    gia: '1004',
    ddd: '11',
    siafi: '7107'
  }));
}

class StoreMock {
  dispatch = jasmine.createSpy('dispatch');
}

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let getCepUseCase: GetCepUseCaseMock;
  let store: StoreMock;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: GetCepUseCase, useClass: GetCepUseCaseMock },
        { provide: Store, useClass: StoreMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    getCepUseCase = TestBed.inject(GetCepUseCase) as unknown as GetCepUseCaseMock;
    store = TestBed.inject(Store) as unknown as StoreMock;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search CEP and update state on success', () => {
    component.callCep('01001-000');

    expect(getCepUseCase.execute).toHaveBeenCalledOnceWith({ cep: '01001000' });
    expect(component.cepData[0].localidade).toBe('São Paulo');
    expect(component.errVal).toBeFalse();
    expect(component.loading).toBeFalse();
    expect(store.dispatch).toHaveBeenCalledWith(cepTrueState());
  });

  it('should not call use case when CEP is invalid', () => {
    component.callCep('123');

    expect(getCepUseCase.execute).not.toHaveBeenCalled();
    expect(component.errVal).toBeTrue();
    expect(store.dispatch).toHaveBeenCalledWith(cepFalseState());
  });

  it('should show error state when use case fails', () => {
    getCepUseCase.execute.and.returnValue(throwError(new Error('request failed')));

    component.callCep('01001-000');

    expect(component.cepData).toEqual([]);
    expect(component.errVal).toBeTrue();
    expect(component.loading).toBeFalse();
    expect(store.dispatch).toHaveBeenCalledWith(cepFalseState());
  });
});
