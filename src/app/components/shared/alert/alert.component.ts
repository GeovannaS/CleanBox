import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { AlertService } from './alert.service';
import { IAlert } from './IAlert';

@Component({
  selector: 'app-modal-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})

export class AlertComponent implements OnInit {

  ngOnInit() {

  }

  @ViewChild('alerta', {static: false}) alerta: ElementRef;

  @Input()
  public alerts: Array<IAlert> = [];

  constructor(private _alertService: AlertService) {
    this.alerts = _alertService.GetAllMessages();
  }

  public closeAlert(alert: IAlert) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

  public reset() {
    this.alerts.splice(0, this.alerts.length);
  }
}