import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaRegisterComponent } from './pizza-register.component';

describe('PizzaRegisterComponent', () => {
  let component: PizzaRegisterComponent;
  let fixture: ComponentFixture<PizzaRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
