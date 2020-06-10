import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {fabric} from 'fabric';
import {SignDictionaryService} from '../../services/sign-dictionary.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit, OnChanges {
  @Output() drawWritten: EventEmitter<string> = new EventEmitter<string>();
  @Input() allow: boolean;
  @Input() canvasSize: number;
  public canvas: fabric.Canvas;

  constructor(private signDictionaryService: SignDictionaryService) {
  }

  ngOnInit() {
    this.canvas = new fabric.Canvas('canvas', {
      backgroundColor: 'black',
      isDrawingMode: true,
    });
    this.canvas.freeDrawingBrush.color = 'white';
    this.canvas.freeDrawingBrush.width = 25;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.canvas) {
      this.canvas.isDrawingMode = this.allow;
    }
  }

  showPleaseClearModal() {
    if (!this.allow) {
      console.log('test');
    }
  }

  private write() {
    const dataURL = this.canvas.toDataURL({
      format: 'jpeg',
      quality: 0.8
    });
    const dataURI = dataURL.substring(23);
    if (dataURI !== this.signDictionaryService.get['empty']) {
      this.drawWritten.emit(dataURI);
      this.clear();
    }
    // else showmodal not empty canvas please
  }

  private clear() {
    this.canvas.clear();
    this.canvas.backgroundColor = 'black';
  }
}
