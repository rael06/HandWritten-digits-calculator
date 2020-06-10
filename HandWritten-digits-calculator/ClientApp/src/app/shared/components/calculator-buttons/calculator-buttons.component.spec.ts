import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorButtonsComponent } from './calculator-buttons.component';

describe('CalculatorButtonsComponent', () => {
  let component: CalculatorButtonsComponent;
  let fixture: ComponentFixture<CalculatorButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
