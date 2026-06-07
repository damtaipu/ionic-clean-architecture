import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { SearchComponent } from './search.component';

class StoreMock {
  select = jasmine.createSpy('select').and.returnValue(of(false));
}

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: Store, useClass: StoreMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit a sanitized value', () => {
    spyOn(component.searchTermEvent, 'emit');

    component.sendValue(' 01001-000 ');

    expect(component.searchTermEvent.emit).toHaveBeenCalledOnceWith('01001-000');
  });
});
