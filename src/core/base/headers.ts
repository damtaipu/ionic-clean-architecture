import { HttpHeaders } from '@angular/common/http';

const setHeaders = () => new HttpHeaders()
    .append('accept', 'aplication/json')
    .append('content-type', 'aplication/json');
