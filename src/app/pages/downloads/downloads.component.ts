import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.scss'],
})
export class DownloadsComponent implements OnInit {

  apps: any[];
  todayDownloads: number = 0;
  totalDownloads: number = 0;
  chartData: any;

  constructor(private appService: AppService) {}

  ngOnInit() {
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
}
