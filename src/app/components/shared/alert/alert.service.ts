import { Injectable } from '@angular/core';

import { IAlert } from './IAlert';
import { TypeMessageEnum } from '../core/helpers/TypeMessageEnum';
import { MessagesEnum } from '../core/helpers/MessagesEnum';

@Injectable()
export class AlertService {
  private alerts: Array<IAlert> = [];

  constructor() { }

  public GetAllMessages(): IAlert[] {
    return this.alerts;
  }

  public ClearAllMessages(): void {

    while (this.alerts.length > 0)
      this.alerts.splice(0, 1)
  }

  public NewMessage(message: any, type: TypeMessageEnum): void {
    if (!message)
      message = MessagesEnum._998;

    this.alerts.push({
      id: (this.alerts.length + 1),
      type: type,
      message: message,
    });

    setTimeout(() => {
      if (this.alerts.length > 0) {
        this.alerts.splice(0, 1)
      }
    }, 10000);
  }
}