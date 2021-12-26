import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CepSendRequest, CepReturnModel, CepDataEntity } from '@src/core/domain/cep-model/cep-model';
import { GetCepRepository } from '@src/core/repositories/cep/get-cep.repository';


@Injectable({
    providedIn: 'root'
})

export class CepFindDataRepository extends GetCepRepository {

    constructor(private http: HttpClient){ super(); }

    getCep(param: CepSendRequest): Observable<CepReturnModel> {
        return this.http.get<CepDataEntity>(`https://viacep.com.br/ws/${param.cep}/json/`)
        .pipe(map((rs) => rs));
    }
}
