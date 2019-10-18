import {Component, OnDestroy, OnInit} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { SolarData } from '../../@core/data/solar';
import {AppService} from '../../app.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnDestroy, OnInit {

  private alive = true;
  appId: number;
  app: any;
  constructor(private themeService: NbThemeService,
              private solarService: SolarData,
              private appService: AppService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.appId = +params.id;
      this.appService.getAppById(this.appId).subscribe(app => {
        this.app = app;
      });
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
