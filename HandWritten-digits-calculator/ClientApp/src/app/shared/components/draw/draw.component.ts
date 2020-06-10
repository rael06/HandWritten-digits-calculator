import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.scss']
})
export class DrawComponent implements OnInit {
  @Input() dataURI: string;
  @Input() imgSize = '100%';

  constructor() {
  }

  ngOnInit() {
  }

}
