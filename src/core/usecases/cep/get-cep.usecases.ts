import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from 'src/core/base/use-cases';
import { CepReturnModel, CepSendEntities } from 'src/core/domain/cep-model/cep-model';
import { GetCepRepository } from 'src/core/repositories/cep/get-cep.repository';

@Injectable({
    providedIn: 'root'
})

export class GetCepUseCase implements UseCase<CepSendEntities, CepReturnModel>{
    constructor(private getCepRepository: GetCepRepository){}

    execute(param: CepSendEntities): Observable<CepReturnModel> {
        return this.getCepRepository.getCep(param);
    }
}


