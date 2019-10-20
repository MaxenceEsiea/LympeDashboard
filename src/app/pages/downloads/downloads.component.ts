import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';

@Component({
  selector: 'ngx-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.scss'],
})
export class DownloadsComponent implements OnInit {

  apps: any[];
  todayDownloads = 0;
  totalDownloads = 0;
  chartData: any;

  constructor(private appService: AppService) {
    this.appService.getApps().subscribe((apps) => {
      this.apps = apps;
      this.apps.forEach(app => {
        this.totalDownloads += app.downloads;
        this.todayDownloads += app.todayDownloads;
      });
    });

    this.appService.getDownloadsChart().subscribe((datas) => {
      this.chartData = datas;
    });
  }

  ngOnInit() {
  }

}
