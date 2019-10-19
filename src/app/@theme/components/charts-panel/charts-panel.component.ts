import {Component, Input, OnDestroy, ViewChild} from '@angular/core';
import { takeWhile } from 'rxjs/operators';

import { OrdersChartComponent } from './charts/orders-chart.component';
import { ProfitChartComponent } from './charts/profit-chart.component';
import { OrdersChart } from '../../../@core/data/orders-chart';
import { ProfitChart } from '../../../@core/data/profit-chart';
import { OrderProfitChartSummary, OrdersProfitChartData } from '../../../@core/data/orders-profit-chart';
import {AppService} from '../../../app.service';

@Component({
  selector: 'ngx-ecommerce-charts',
  styleUrls: ['./charts-panel.component.scss'],
  templateUrl: './charts-panel.component.html',
})
export class ECommerceChartsPanelComponent implements OnDestroy {

  @Input('appId') appId;

  private alive = true;

  chartPanelSummary: OrderProfitChartSummary[];
  chartPanelSummary2: OrderProfitChartSummary[];
  period: string = 'week';
  ordersChartData: ProfitChart;
  profitChartData: ProfitChart;

  @ViewChild('ordersChart', { static: true }) ordersChart: OrdersChartComponent;
  @ViewChild('profitChart', { static: true }) profitChart: ProfitChartComponent;

  constructor(private ordersProfitChartService: OrdersProfitChartData,
              private appService: AppService) {
    if ( this.appId ) {
      this.appService.getSummaryByAppId(this.appId).subscribe((res) => {
        this.chartPanelSummary = res;
        this.chartPanelSummary2 = res;
      });
    } else {
      this.appService.getSummary().subscribe((res) => {
        this.chartPanelSummary = res;
        this.chartPanelSummary2 = res;
      });
    }

    this.getOrdersChartData(this.period);
    this.getProfitChartData(this.period);
  }

  setPeriodAndGetChartData(value: string): void {
    if (this.period !== value) {
      this.period = value;
    }

    this.getOrdersChartData(value);
    this.getProfitChartData(value);
  }

  getOrdersChartData(period: string) {
    this.ordersProfitChartService.getProfitChartData(period)
      .pipe(takeWhile(() => this.alive))
      .subscribe(profitChartData => {
        this.ordersChartData = profitChartData;
        console.log(JSON.stringify(this.ordersChartData));
      });
  }

  getProfitChartData(period: string) {
    this.ordersProfitChartService.getProfitChartData(period)
      .pipe(takeWhile(() => this.alive))
      .subscribe(profitChartData => {
        this.profitChartData = profitChartData;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
