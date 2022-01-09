import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICepState } from '@src/shared/store/states/cep/cep-state';
import { map } from 'rxjs/operators';

@Component({
  selector: 'cep-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})

export class SearchComponent implements OnInit {

  @Output() searchTermEvent = new EventEmitter<string>();
  //filterTerm: string;
  cepState$ = this.cepNgx.select('cep').pipe(map(e => e.result));
  showState: boolean;

  constructor(private cepNgx: Store<{cep: ICepState}>) {
    this.cepState$.subscribe(e => this.showState = e);
  }

  ngOnInit() {}

  sedvalue(val){
    this.searchTermEvent.emit(val);
  }

}
