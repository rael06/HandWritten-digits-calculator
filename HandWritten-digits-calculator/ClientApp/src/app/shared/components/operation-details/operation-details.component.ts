import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-operation-details',
  templateUrl: './operation-details.component.html',
  styleUrls: ['./operation-details.component.scss']
})
export class OperationDetailsComponent implements OnInit {
  @Input() operationDetails = '';
  @Input() loading: boolean;
  @Input() resultScreenSize: number;
  public loadingImage = '../../assets/load.gif';
  constructor() { }

  ngOnInit() {
  }
}
