import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-number-info',
  styleUrls: ['./card-number-info.component.scss'],
  templateUrl: './card-number-info.component.html',

})
export class CardNumberInfoComponent {

  @Input('title') title;
  @Input('value') value;
  @Input('subtitle') subtitle;
  @Input('appId') appId;

  constructor() {}
}
