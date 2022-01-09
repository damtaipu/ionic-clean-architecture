import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { SetDataCep } from '@src/core/usecases/cep/set-data-send-cep';
import { ICepState } from '@src/shared/store/states/cep/cep-state';
import { GetCepUseCase } from '@src/core/usecases/cep/get-cep.usecases';
import { cepFalseState, cepTrueState } from '@src/shared/store/actions/cep/cep-actions';

@Component({
  selector: 'cep-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  startVal = true;
  errVal = false;
  loading = false;
  cepData = [];


  constructor(
    private getCep: GetCepUseCase,
    private cepNgx: Store<{cep: ICepState}>
  ) {
   }

  async callCep(evt) {
    this.cepData = [];
    this.startVal = evt ? false : true;
    this.errVal = evt ? false : !evt ? false : true;

    if (!evt) {
      this.cepData = [];
      this.cepStateFalse();

    } else {
      this.loading = true;
      const cep = new SetDataCep(evt);
      this.getCep.execute(cep.infoCep()).subscribe(this.onSuccess, this.onError);
    }
  }

  onSuccess = (rs) => {
    this.cepData.push(rs);
    this.loading = false;
    this.cepStateTrue();
  };

  onError = (err) => {
    this.cepData = [];
    this.errVal = true;
    this.loading = false;
    this.cepStateFalse();
  };

  getLengthCepData(): number {
    return this.cepData.length;
  }

  // Dispatch ngRx CEP
  cepStateTrue(){
    this.cepNgx.dispatch(cepTrueState());
  }

  cepStateFalse(){
    this.cepNgx.dispatch(cepFalseState());
  }
}

