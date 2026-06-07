import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CepSendRequest, CepReturnModel } from '@src/core/domain/cep-model/cep-model';
import { GetCepRepository } from '@src/core/repositories/cep/get-cep.repository';

@Injectable({
    providedIn: 'root'
})
export class CepFindDataRepository extends GetCepRepository {
    private readonly apiUrl = 'https://viacep.com.br/ws';

    constructor(private readonly http: HttpClient) {
        super();
    }

    getCep(param: CepSendRequest): Observable<CepReturnModel> {
        return this.http.get<CepReturnModel>(`${this.apiUrl}/${param.cep}/json/`);
    }
}
