import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { ProgressInfo, StatsProgressBarData } from '../data/stats-progress-bar';

@Injectable()
export class StatsProgressBarService extends StatsProgressBarData {
  private progressInfoData: ProgressInfo[] = [
    {
      title: 'Today’s Download',
      value: 1596378,
      activeProgress: 30,
      description: 'Better than yesterday (30%)',
      icon: 'download',
    },
    {
      title: 'Today’s Profit',
      value: 572900,
      activeProgress: 70,
      description: 'Better than yesterday (70%)',
      icon: 'euro-sign',
    },
    {
      title: 'New Reviews',
      value: 79,
      activeProgress: 55,
      description: 'Better than yesterday (55%)',
      icon: 'comment',
    },
  ];

  getProgressInfoData(): Observable<ProgressInfo[]> {
    return observableOf(this.progressInfoData);
  }
}
