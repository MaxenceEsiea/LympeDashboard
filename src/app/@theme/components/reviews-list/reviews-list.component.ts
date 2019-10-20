import {Component, Input, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-reviews-list',
  styleUrls: ['./reviews-list.component.scss'],
  templateUrl: './reviews-list.component.html',
})
export class ReviewsListComponent implements OnDestroy {

  private alive = true;

  @Input('title') title;
  @Input('reviews') reviews;

  constructor() {
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
