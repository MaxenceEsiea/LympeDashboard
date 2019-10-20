import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';

@Component({
  selector: 'ngx-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.scss']
})
export class MoneyComponent implements OnInit {

  chartData: any;
  apps: any[];

  totalMoney = 0;
  todayMoney = 0;

  constructor(private appService: AppService) {
    this.appService.getApps().subscribe((apps) => {
      this.apps = apps;
      this.apps.forEach(app => {
        this.totalMoney += app.money;
        this.todayMoney += app.todayMoney;
      });
    });
    this.appService.getMoneyChart().subscribe((datas) => {
      this.chartData = datas;
    });
  }

  ngOnInit() {
  }

}
