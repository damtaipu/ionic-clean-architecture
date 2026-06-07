import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { finalize } from 'rxjs/operators';
import { CepAddressModel, CepErrorModel, CepReturnModel } from '@src/core/domain/cep-model/cep-model';
import { SetDataCep } from '@src/core/usecases/cep/set-data-send-cep';
import { GetCepUseCase } from '@src/core/usecases/cep/get-cep.usecases';
import { cepFalseState, cepTrueState } from '@src/shared/store/actions/cep/cep-actions';
import { AppState } from '@src/shared/store/states/cep/cep-state';

@Component({
  selector: 'cep-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  startVal = true;
  errVal = false;
  loading = false;
  cepData: CepAddressModel[] = [];

  constructor(
    private readonly getCep: GetCepUseCase,
    private readonly store: Store<AppState>
  ) {}

  callCep(value: string): void {
    this.resetSearchState(value);

    const cep = new SetDataCep(value);

    if (!cep.isValid()) {
      this.handleInvalidCep();
      return;
    }

    this.loading = true;
    this.getCep.execute(cep.infoCep())
      .pipe(finalize(() => this.loading = false))
      .subscribe({
        next: (response) => this.handleSuccess(response),
        error: () => this.handleError()
      });
  }

  private resetSearchState(value: string): void {
    this.cepData = [];
    this.startVal = !value;
    this.errVal = false;
    this.setCepState(false);
  }

  private handleInvalidCep(): void {
    this.errVal = !this.startVal;
  }

  private handleSuccess(response: CepReturnModel): void {
    if (this.isCepError(response)) {
      this.handleError();
      return;
    }

    this.cepData = [response];
    this.setCepState(true);
  }

  private handleError(): void {
    this.cepData = [];
    this.errVal = true;
    this.setCepState(false);
  }

  private isCepError(response: CepReturnModel): response is CepErrorModel {
    return 'erro' in response && response.erro;
  }

  private setCepState(result: boolean): void {
    this.store.dispatch(result ? cepTrueState() : cepFalseState());
  }
}
