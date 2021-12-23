import { Observable } from 'rxjs';

export interface UseCase<S, R>{
    execute(param: S): Observable<R>;
}
