import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {NbThemeService} from '@nebular/theme';
import {ProfitChart} from '../../../@core/data/profit-chart';
import {AppService} from '../../../app.service';

@Component({
  selector: 'ngx-in-app-purchases-chart',
  templateUrl: './in-app-purchases-chart.component.html',
  styleUrls: ['./in-app-purchases-chart.component.scss']
})
export class InAppPurchasesChartComponent implements AfterViewInit {

  chartData: ProfitChart;
  options: any = {};
  chartLegend: any = [];
  period = 'week';
  chartPanelSummary: any;

  constructor(private theme: NbThemeService,
              private appService: AppService) {}

  ngAfterViewInit() {
    this.appService.getInAppPurchases().subscribe((res) => {
      this.chartData = res[this.period];

      this.theme.getJsTheme().subscribe(config => {
        const eTheme: any = config.variables.profit;
        const legendTheme = config.variables.orderProfitLegend;

        this.setOptions(eTheme);
        this.setLegendItems(legendTheme);
      });
    });

    this.appService.getSummary().subscribe((summary) => {
      this.chartPanelSummary = summary;
    });
  }

  setPeriodAndGetChartData(value: string): void {
    if (this.period !== value) {
      this.period = value;
    }

    this.appService.getInAppPurchases().subscribe((res) => {
      this.chartData = res[this.period];
    });
  }

  setLegendItems(orderProfitLegend) {
    this.chartLegend = [
      {
        iconColor: orderProfitLegend.firstItem,
        title: 'Android',
      },
      {
        iconColor: orderProfitLegend.secondItem,
        title: 'IOS',
      },
    ];
  }

  setOptions(eTheme) {
    this.options = {
      backgroundColor: eTheme.bg,
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
          shadowStyle: {
            color: 'rgba(0, 0, 0, 0.3)',
          },
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          data: this.chartData.chartLabel,
          axisTick: {
            alignWithLabel: true,
          },
          axisLine: {
            lineStyle: {
              color: eTheme.axisLineColor,
            },
          },
          axisLabel: {
            color: eTheme.axisTextColor,
            fontSize: eTheme.axisFontSize,
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: eTheme.axisLineColor,
            },
          },
          splitLine: {
            lineStyle: {
              color: eTheme.splitLineColor,
            },
          },
          axisLabel: {
            color: eTheme.axisTextColor,
            fontSize: eTheme.axisFontSize,
          },
        },
      ],
      series: [
        {
          name: 'Android',
          type: 'bar',
          barGap: 0,
          barWidth: '20%',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: eTheme.thirdLineGradFrom,
              }, {
                offset: 1,
                color: eTheme.thirdLineGradTo,
              }]),
            },
          },
          data: this.chartData.data[0],
        },
        {
          name: 'IOS',
          type: 'bar',
          barWidth: '20%',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: eTheme.secondLineGradFrom,
              }, {
                offset: 1,
                color: eTheme.secondLineGradTo,
              }]),
            },
          },
          data: this.chartData.data[1],
        },
      ],
    };
  }
}
