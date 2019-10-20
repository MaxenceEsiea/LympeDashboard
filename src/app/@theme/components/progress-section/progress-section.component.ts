import {Component, Input, OnDestroy} from '@angular/core';
import { ProgressInfo } from '../../../@core/data/stats-progress-bar';
import {AppService} from '../../../app.service';

@Component({
  selector: 'ngx-progress-section',
  styleUrls: ['./progress-section.component.scss'],
  templateUrl: './progress-section.component.html',
})
export class ECommerceProgressSectionComponent implements OnDestroy {

  private alive = true;

  @Input('period') period;

  progressInfoData: ProgressInfo[];

  constructor(private appService: AppService) {
    this.appService.getProgressData().subscribe((progressData) => {
      this.progressInfoData = progressData[this.period];
    });
  }

  ngOnDestroy() {
    this.alive = true;
  }
}
