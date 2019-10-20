import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { NbThemeService } from '@nebular/theme';
import {AppService} from '../../../app.service';

@Component({
  selector: 'ngx-ecommerce-visitors-analytics',
  styleUrls: ['./visitors-analytics.component.scss'],
  templateUrl: './visitors-analytics.component.html',
})
export class ECommerceVisitorsAnalyticsComponent implements OnDestroy, OnInit {
  private alive = true;

  chartLegend: {iconColor: string; title: string}[];

  @Input('chartData') chartData: any;
  @Input('title') title: any;
  @Input('subtitle') subtitle: any;
  @Input('legends') legends: any[];

  constructor(private themeService: NbThemeService,
              private appService: AppService) {}

  ngOnInit(): void {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.setLegendItems(theme.variables.visitorsLegend);
      });

    this.appService.getDownloadsChart().subscribe((datas) => {
      this.chartData = datas;
    });
  }

  setLegendItems(visitorsLegend): void {
    this.chartLegend = [
      {
        iconColor: visitorsLegend.firstIcon,
        title: this.legends[0],
      },
      {
        iconColor: visitorsLegend.secondIcon,
        title: this.legends[1],
      },
    ];
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
