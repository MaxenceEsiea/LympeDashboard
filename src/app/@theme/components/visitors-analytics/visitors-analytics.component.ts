import { Component, OnDestroy } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { NbThemeService } from '@nebular/theme';
import {AppService} from '../../../app.service';

@Component({
  selector: 'ngx-ecommerce-visitors-analytics',
  styleUrls: ['./visitors-analytics.component.scss'],
  templateUrl: './visitors-analytics.component.html',
})
export class ECommerceVisitorsAnalyticsComponent implements OnDestroy {
  private alive = true;

  chartLegend: {iconColor: string; title: string}[];
  visitorsAnalyticsData: any;

  constructor(private themeService: NbThemeService,
              private appService: AppService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.setLegendItems(theme.variables.visitorsLegend);
      });

    this.appService.getDownloadsChart().subscribe((datas) => {
      this.visitorsAnalyticsData = datas;
    });
  }

  setLegendItems(visitorsLegend): void {
    this.chartLegend = [
      {
        iconColor: visitorsLegend.firstIcon,
        title: 'Android',
      },
      {
        iconColor: visitorsLegend.secondIcon,
        title: 'IOS',
      },
    ];
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
