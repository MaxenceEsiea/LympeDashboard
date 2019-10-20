import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  reviews: any[] = [];
  todayReview: number = 0;
  totalRate: number = 0;

  constructor(private appService: AppService) {}

  ngOnInit() {
    const today = new Date();
    this.appService.getApps().subscribe((res) => {
      res.forEach(app => {
        app.reviews.forEach(review => {
          review.appId = app.id;
          review.appImage = app.picture;
          review.appTitle = app.title;
          this.reviews.push(review);
          this.totalRate += review.rate;

          const reviewDate = new Date(review.date);
          if ( reviewDate.getDate() === today.getDate()
            && reviewDate.getMonth() === today.getMonth()
            && reviewDate.getFullYear() === today.getFullYear() ) {
            this.todayReview++;
          }
        });
      });
    });
  }
}
