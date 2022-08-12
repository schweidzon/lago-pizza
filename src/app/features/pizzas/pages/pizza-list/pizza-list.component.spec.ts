import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaListComponent } from './pizza-list.component';

describe('PizzaListComponent', () => {
  let component: PizzaListComponent;
  let fixture: ComponentFixture<PizzaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
