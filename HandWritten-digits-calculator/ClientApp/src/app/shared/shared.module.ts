import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CanvasComponent} from './components/canvas/canvas.component';
import {CalculatorButtonsComponent} from './components/calculator-buttons/calculator-buttons.component';
import {BlackboardComponent} from './components/blackboard/blackboard.component';
import {DigitComponent} from './components/digit/digit.component';
import {OperationDetailsComponent} from './components/operation-details/operation-details.component';
import { DrawComponent } from './components/draw/draw.component';


@NgModule({
  declarations: [
    CanvasComponent,
    CalculatorButtonsComponent,
    BlackboardComponent,
    DigitComponent,
    OperationDetailsComponent,
    DrawComponent
  ],
  exports: [
    CanvasComponent,
    CalculatorButtonsComponent,
    BlackboardComponent,
    OperationDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
