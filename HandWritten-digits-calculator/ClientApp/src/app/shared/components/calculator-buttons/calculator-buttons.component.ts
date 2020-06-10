import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-calculator-buttons',
  templateUrl: './calculator-buttons.component.html',
  styleUrls: ['./calculator-buttons.component.scss']
})
export class CalculatorButtonsComponent implements OnInit {
  @Output() operatorEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() askResultEvent: EventEmitter<void> = new EventEmitter();
  @Output() clearEvent: EventEmitter<void> = new EventEmitter();
  @Input() allowAll: boolean;
  @Input() loading: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  private emitOperatorEvent(operator: string) {
    this.operatorEvent.emit(operator);
  }

  private emitAskResultEvent() {
    this.askResultEvent.emit();
  }

  private emitClearEvent() {
    this.clearEvent.emit();
  }
}
