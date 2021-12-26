import { Component } from '@angular/core';
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

  getLengthCepData(): number {
    return this.cepData.length;
  }

  async callCep(evt) {
    this.cepData = [];
    this.startVal = evt ? false : true;
    this.errVal = evt ? false : !evt ? false : true;

    if (!evt) {
      this.cepData = [];

    } else {
      this.loading = true;
      const cep = {
        cep: evt
      };

      this.getCep.execute(cep).subscribe(
        rs => {
          this.cepData = [rs];
          this.loading = false;
        },
        err => {
          console.log(err.error.isTrusted);
          this.cepData = [];
          this.errVal = true;
          this.loading = false;
        });
    }
  }
}
