import { Component } from '@angular/core';
import { CepReturnModel } from '@src/core/domain/cep-model/cep-model';
import { GetCepUseCase } from '@src/core/usecases/cep/get-cep.usecases';

@Component({
  selector: 'cep-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  startVal = true;
  errVal = false;
  loading = false;
  cepData: CepReturnModel = {};
  cepChk = {};

  constructor(
    private getCep: GetCepUseCase
  ) {
    this.cepChk = Object.keys(this.cepData).length;
  }

  async callCep(evt) {
    this.cepData = {};
    this.startVal = evt ? false : true;
    this.errVal = evt ? false : !evt ? false : true;

    if (evt) {
      this.cepChk = {};
      this.cepChk = Object.keys(this.cepData).length;
      this.loading = true;
      const cep = {
        cep: evt
      };

      this.getCep.execute(cep).subscribe(
        rs => {
          this.cepData = rs;
          this.cepChk = rs.erro ? 0 : Object.keys(this.cepData).length;
          this.errVal = rs.erro ? true : false;
          this.loading = false;
        },
        err => {
          console.log(err.error.isTrusted);
          this.cepData = {};
          this.cepChk = Object.keys(this.cepData).length;
          this.errVal = true;
          this.loading = false;
        });
    }else{
      this.cepChk = 0;
    }
  }
}
