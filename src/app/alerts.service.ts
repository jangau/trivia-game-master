import { Injectable } from '@angular/core';
import { Alert } from './alerts/alerts.component';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  alerts: Alert[] = [];

  constructor() { }

  add(alert: Alert) {
    this.alerts.push(alert);
  }

  dismiss(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }
}
