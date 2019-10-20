import {Component, Input, OnDestroy} from '@angular/core';
import {AppService} from '../../../app.service';

@Component({
  selector: 'app-card-numbers-section',
  styleUrls: ['./card-numbers-section.component.scss'],
  templateUrl: './card-numbers-section.component.html',
})
export class CardNumbersSectionComponent implements OnDestroy {

  private alive = true;

  @Input('period') period;

  progressInfoData: any[];

  @Input('title') title;

  constructor(private appService: AppService) {
    this.appService.getProgressData().subscribe((progressData) => {
      this.progressInfoData = progressData[this.period];
    });
  }

  ngOnDestroy() {
    this.alive = true;
  }
}
