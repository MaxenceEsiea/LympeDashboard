import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-review',
  styleUrls: ['./review.component.scss'],
  templateUrl: './review.component.html',

})
export class ReviewComponent {

  @Input('title') title;
  @Input('value') value;
  @Input('subtitle') subtitle;
  @Input('appId') appId;

  constructor() {}
}
