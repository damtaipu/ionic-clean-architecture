import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, ObservableInput, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()

export class CepInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next
        .handle(request)
        .pipe(
            catchError((err: any, caught: Observable<HttpEvent<any>>): ObservableInput<any> => {
                if(err && (err.status === 401)){
                    console.log('Logout');
                }
                return throwError(err);
            })
        );
    }
}
