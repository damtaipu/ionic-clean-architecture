import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCepResult } from '@src/shared/store/reducers/cep/cep-reducer';
import { AppState } from '@src/shared/store/states/cep/cep-state';

@Component({
  selector: 'cep-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() searchTermEvent = new EventEmitter<string>();

  readonly showState$: Observable<boolean> = this.store.select(selectCepResult);

  constructor(private readonly store: Store<AppState>) {}

  sendValue(value: string | number | null | undefined): void {
    this.searchTermEvent.emit(String(value ?? '').trim());
  }
}
