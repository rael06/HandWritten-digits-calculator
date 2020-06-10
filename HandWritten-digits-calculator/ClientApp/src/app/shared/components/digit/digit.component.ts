import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {IDraw} from '../../models/IDraw';

@Component({
  selector: 'app-digit',
  templateUrl: './digit.component.html',
  styleUrls: ['./digit.component.scss']
})
export class DigitComponent implements OnInit, OnChanges {
  @Input() digit: IDraw;
  public scores = '';
  @Input() imgSize: string;

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.digit.prediction) {
      this.scores = `Prediction : ${this.digit.prediction.digit}\nScores : \n`;
      for (let i = 0; i < this.digit.prediction.scores.length; i++) {
        this.scores += `${i} : ${this.digit.prediction.scores[i]} %\n`;
      }
    }
  }

}
