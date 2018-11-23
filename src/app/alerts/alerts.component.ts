import { Component, OnInit } from '@angular/core';
import {AlertsService} from '../alerts.service';

export interface Alert {
  type: string;
  message: string;
}

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  constructor(public alertService: AlertsService) { }

  ngOnInit() {
  }

}
