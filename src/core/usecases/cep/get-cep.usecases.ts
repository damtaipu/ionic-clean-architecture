import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from 'src/core/base/use-cases';
import { CepReturnModel, CepSendRequest } from 'src/core/domain/cep-model/cep-model';
import { GetCepRepository } from 'src/core/repositories/cep/get-cep.repository';

@Injectable({
    providedIn: 'root'
})

export class GetCepUseCase implements UseCase<CepSendRequest, CepReturnModel>{
    constructor(private getCepRepository: GetCepRepository){}

    execute(param: CepSendRequest): Observable<CepReturnModel> {
        return this.getCepRepository.getCep(param);
    }
}


