import { Observable } from 'rxjs';
import { CepReturnModel, CepSendRequest } from '@src/core/domain/cep-model/cep-model';

export abstract class GetCepRepository{
    abstract getCep(param: CepSendRequest): Observable<CepReturnModel>;
}
