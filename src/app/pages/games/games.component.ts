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
  totalRate: any;
  todayReview: any;
  todayRate: any;

  constructor(private themeService: NbThemeService,
              private solarService: SolarData,
              private appService: AppService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    const today = new Date();
    this.route.params.subscribe(params => {
      this.totalRate = 0;
      this.todayReview = 0;
      this.todayRate = 0;
      this.appId = +params.id;
      this.appService.getAppById(this.appId).subscribe(app => {
        this.app = app;
        this.app.reviews.forEach(review => {
          this.totalRate += review.rate;
          const reviewDate = new Date(review.date);
          if ( reviewDate.getDate() === today.getDate()
            && reviewDate.getMonth() === today.getMonth()
            && reviewDate.getFullYear() === today.getFullYear() ) {
            this.todayReview++;
            this.todayRate += review.rate;
          }
        });
      });
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
