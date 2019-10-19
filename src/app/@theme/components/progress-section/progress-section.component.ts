import { Component, OnDestroy } from '@angular/core';
import { ProgressInfo } from '../../../@core/data/stats-progress-bar';
import {AppService} from '../../../app.service';

@Component({
  selector: 'ngx-progress-section',
  styleUrls: ['./progress-section.component.scss'],
  templateUrl: './progress-section.component.html',
})
export class ECommerceProgressSectionComponent implements OnDestroy {

  private alive = true;

  progressInfoData: ProgressInfo[];

  constructor(private appService: AppService) {
    this.appService.getProgressData().subscribe((progressData) => {
      this.progressInfoData = progressData;
    });
  }

  ngOnDestroy() {
    this.alive = true;
  }
}
