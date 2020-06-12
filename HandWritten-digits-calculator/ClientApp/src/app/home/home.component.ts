import {AfterViewInit, ChangeDetectorRef, Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {IDraw} from '../shared/models/IDraw';
import {IOperation} from '../shared/models/IOperation';
import {CanvasComponent} from '../shared/components/canvas/canvas.component';
import {BlackboardComponent} from '../shared/components/blackboard/blackboard.component';
import {environment} from '../../environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild(CanvasComponent, {static: false}) canvasComponent;
  @ViewChild(BlackboardComponent, {static: false}) blackboardComponent;
  public operation: IOperation = {
    number1: [],
    number2: []
  };
  public loading = false;
  public canvasSize: number;
  private digitIndex = 0;
  private numberIndex = 0;

  public constructor(private cdRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  clearOperation() {
    this.reset();
    this.canvasComponent.clear();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.defineCanvasSize();
    const blackboardElements = document.querySelectorAll<HTMLImageElement>('app-blackboard img');
    blackboardElements.forEach(i => {
      i.style.visibility = 'hidden';
    });
    this.blackboardComponent.imgSize = '50%';
    this.blackboardComponent.resizeImages();
    setTimeout(() => blackboardElements.forEach(i => {
      i.style.visibility = 'visible';
    }), 0);
  }

  ngAfterViewInit(): void {
    this.defineCanvasSize();
    this.cdRef.detectChanges();
  }

  private setOperator(value: string): void {
    this.operation.operator = value;
    this.digitIndex = 0;
    this.numberIndex++;
    this.blackboardComponent.resizeImages();
  }

  private async sendOperation(): Promise<void> {
    console.log(this.operation);
    this.loading = true;
    let cloneOperation: IOperation = {
      number1: this.operation.number1,
      number2: this.operation.number2,
      operator: this.operation.operator
    };
    if (!this.operation.operator) {
      cloneOperation.operator = '+';
    }
    const options = {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cloneOperation)
    };


    cloneOperation = await fetch(environment.api, options)
      .then(res => res.json())
      .catch(err => {
        throw new Error(err.statusText);
      }) as IOperation;

    this.operation = {
      number1: cloneOperation.number1,
      number2: cloneOperation.number2,
      operator: this.operation.operator ? cloneOperation.operator : undefined,
      operationString: this.operation.operator ? cloneOperation.operationString : String(cloneOperation.predictedNumber1),
      predictedNumber1: cloneOperation.predictedNumber1,
      predictedNumber2: cloneOperation.predictedNumber2,
      result: cloneOperation.result
    };

    this.loading = false;
  }

  private reset() {
    this.digitIndex = 0;
    this.numberIndex = 0;
    this.operation = {
      number1: [],
      number2: [],
      operator: undefined
    };
    this.blackboardComponent.imgSize = '50%';
  }

  private saveDraw(dataURI: string) {
    const draw: IDraw = {
      numberIndex: this.numberIndex,
      digitIndex: this.digitIndex,
      name: this.numberIndex + '_' + this.digitIndex,
      data: dataURI
    };
    if (this.numberIndex === 0) {
      this.operation.number1.push(draw);
    } else {
      this.operation.number2.push(draw);
    }
    this.digitIndex++;
    this.blackboardComponent.resizeImages();
  }

  private defineCanvasSize() {
    this.canvasSize = document.body.offsetWidth > 1200 ? 400 : document.body.offsetWidth < 400 ? 250 : 325;
    this.canvasComponent.canvas.setWidth(this.canvasSize);
    this.canvasComponent.canvas.setHeight(this.canvasSize);
  }
}
