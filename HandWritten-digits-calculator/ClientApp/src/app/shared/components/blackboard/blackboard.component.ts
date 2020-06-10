import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {IOperation} from '../../models/IOperation';
import {SignDictionaryService} from '../../services/sign-dictionary.service';
import {IDraw} from '../../models/IDraw';

@Component({
  selector: 'app-blackboard',
  templateUrl: './blackboard.component.html',
  styleUrls: ['./blackboard.component.scss']
})
export class BlackboardComponent implements OnInit, OnChanges {
  @Input() operation: IOperation;
  public imgSize = '50%';
  public result: IDraw[] = [];

  constructor(private signDictionaryService: SignDictionaryService) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.checkOperationResult();
  }

  public resizeImages(): void {
    setTimeout(() => {
      const images = document.querySelectorAll<HTMLImageElement>('app-blackboard img');
      const imagesSizes: number[] = [];
      images.forEach(i => {
        imagesSizes.push(i.offsetWidth);
      });
      this.imgSize = Math.min(...imagesSizes) + 'px';
    }, 0);
  }

  private checkOperationResult(): void {
    if (this.operation.result || this.operation.result === 0) {
      const resultString = String(this.operation.result);
      for (let i = 0; i < resultString.length; i++) {

        this.result.push({
          digitIndex: i,
          data: this.signDictionaryService.get[String(resultString.charAt(i))]
        });
      }
    } else {
      this.result = [];
    }
  }
}
