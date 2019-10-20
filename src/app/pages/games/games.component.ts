import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { SolarData } from '../../@core/data/solar';
import {AppService} from '../../app.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./games.component.scss'],
  templateUrl: './games.component.html',
})
export class GamesComponent implements OnDestroy, OnInit {

  private alive = true;
  appId: number;
  app: any;
  totalRate = 0;
  todayReview = 0;

  constructor(private themeService: NbThemeService,
              private solarService: SolarData,
              private appService: AppService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.appId = +params.id;
      this.appService.getAppById(this.appId).subscribe(app => {
        this.app = app;
        this.app.reviews.forEach(review => {
          this.totalRate += review.rate;
        });
      });
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
