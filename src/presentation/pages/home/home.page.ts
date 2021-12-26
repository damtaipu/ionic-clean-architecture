import { Component } from '@angular/core';
import { SetDataCep } from '@src/core/usecases/cep/set-data-send-cep';
import { GetCepUseCase } from 'src/core/usecases/cep/get-cep.usecases';

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
    private getCep: GetCepUseCase
  ) {}

  async callCep(evt) {
    this.cepData = [];
    this.startVal = evt ? false : true;
    this.errVal = evt ? false : !evt ? false : true;

    if (!evt) {
      this.cepData = [];

    } else {
      this.loading = true;
      const cep = new SetDataCep(evt);
      this.getCep.execute(cep.infoCep()).subscribe(this.onSuccess, this.onError);
    }
  }

  onSuccess = (rs) => {
    this.cepData.push(rs);
    this.loading = false;
  };

  onError = (err) => {
    this.cepData = [];
    this.errVal = true;
    this.loading = false;
  };

  getLengthCepData(): number {
    return this.cepData.length;
  }
}
