import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cep-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  @Output() searchTermEvent = new EventEmitter<string>();
  //filterTerm: string;

  constructor() { }

  ngOnInit() {}

  sedvalue(val){
    this.searchTermEvent.emit(val);
  }

}
