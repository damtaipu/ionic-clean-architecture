import { Observable } from 'rxjs';
import { CepReturnModel, CepSendEntities } from '@src/core/domain/cep-model/cep-model';

export abstract class GetCepRepository{
    abstract getCep(param: CepSendEntities): Observable<CepReturnModel>;
}
