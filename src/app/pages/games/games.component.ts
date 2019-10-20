import {Component, OnInit} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import {AppService} from '../../app.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-games',
  styleUrls: ['./games.component.scss'],
  templateUrl: './games.component.html',
})
export class GamesComponent implements OnInit {

  appId: number;
  app: any;
  totalRate: number;
  todayReview: number;
  todayRate: number;

  constructor(private themeService: NbThemeService,
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
}
