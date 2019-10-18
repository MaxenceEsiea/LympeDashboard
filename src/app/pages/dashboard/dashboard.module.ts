import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { ProfitCardComponent } from '../../@theme/components/profit-card/profit-card.component';
import { ECommerceChartsPanelComponent } from '../../@theme/components/charts-panel/charts-panel.component';
import { OrdersChartComponent } from '../../@theme/components/charts-panel/charts/orders-chart.component';
import { ProfitChartComponent } from '../../@theme/components/charts-panel/charts/profit-chart.component';
import { ChartPanelHeaderComponent } from '../../@theme/components/charts-panel/chart-panel-header/chart-panel-header.component';
import { ChartPanelSummaryComponent } from '../../@theme/components/charts-panel/chart-panel-summary/chart-panel-summary.component';
import { ChartModule } from 'angular2-chartjs';
import { StatsCardBackComponent } from '../../@theme/components/profit-card/back-side/stats-card-back.component';
import { StatsAreaChartComponent } from '../../@theme/components/profit-card/back-side/stats-area-chart.component';
import { StatsBarAnimationChartComponent } from '../../@theme/components/profit-card/front-side/stats-bar-animation-chart.component';
import { StatsCardFrontComponent } from '../../@theme/components/profit-card/front-side/stats-card-front.component';
import { TrafficRevealCardComponent } from '../../@theme/components/traffic-reveal-card/traffic-reveal-card.component';
import { TrafficBarComponent } from '../../@theme/components/traffic-reveal-card/front-side/traffic-bar/traffic-bar.component';
import { TrafficFrontCardComponent } from '../../@theme/components/traffic-reveal-card/front-side/traffic-front-card.component';
import { TrafficCardsHeaderComponent } from '../../@theme/components/traffic-reveal-card/traffic-cards-header/traffic-cards-header.component';
import { TrafficBackCardComponent } from '../../@theme/components/traffic-reveal-card/back-side/traffic-back-card.component';
import { TrafficBarChartComponent } from '../../@theme/components/traffic-reveal-card/back-side/traffic-bar-chart.component';
import {
  ECommerceVisitorsAnalyticsComponent,
} from '../../@theme/components/visitors-analytics/visitors-analytics.component';
import {
  ECommerceVisitorsAnalyticsChartComponent,
} from '../../@theme/components/visitors-analytics/visitors-analytics-chart/visitors-analytics-chart.component';
import {
  ECommerceVisitorsStatisticsComponent,
} from '../../@theme/components/visitors-analytics/visitors-statistics/visitors-statistics.component';
import { ECommerceLegendChartComponent } from '../../@theme/components/legend-chart/legend-chart.component';
import { ECommerceUserActivityComponent } from '../../@theme/components/user-activity/user-activity.component';
import { ECommerceProgressSectionComponent } from '../../@theme/components/progress-section/progress-section.component';
import { SlideOutComponent } from '../../@theme/components/slide-out/slide-out.component';

import { CountryOrdersComponent } from '../../@theme/components/country-orders/country-orders.component';
import { CountryOrdersMapComponent } from '../../@theme/components/country-orders/map/country-orders-map.component';
import { CountryOrdersMapService } from '../../@theme/components/country-orders/map/country-orders-map.service';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { CountryOrdersChartComponent } from '../../@theme/components/country-orders/chart/country-orders-chart.component';
import { EarningCardComponent } from '../../@theme/components/earning-card/earning-card.component';
import { EarningCardBackComponent } from '../../@theme/components/earning-card/back-side/earning-card-back.component';
import { EarningPieChartComponent } from '../../@theme/components/earning-card/back-side/earning-pie-chart.component';
import { EarningCardFrontComponent } from '../../@theme/components/earning-card/front-side/earning-card-front.component';
import { EarningLiveUpdateChartComponent } from '../../@theme/components/earning-card/front-side/earning-live-update-chart.component';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    ChartModule,
    NbProgressBarModule,
    NgxEchartsModule,
    NgxChartsModule,
    LeafletModule,
  ],
  declarations: [
    DashboardComponent,
    StatsCardFrontComponent,
    StatsAreaChartComponent,
    StatsBarAnimationChartComponent,
    ProfitCardComponent,
    ECommerceChartsPanelComponent,
    ChartPanelHeaderComponent,
    ChartPanelSummaryComponent,
    OrdersChartComponent,
    ProfitChartComponent,
    StatsCardBackComponent,
    TrafficRevealCardComponent,
    TrafficBarChartComponent,
    TrafficFrontCardComponent,
    TrafficBackCardComponent,
    TrafficBarComponent,
    TrafficCardsHeaderComponent,
    CountryOrdersComponent,
    CountryOrdersMapComponent,
    CountryOrdersChartComponent,
    ECommerceVisitorsAnalyticsComponent,
    ECommerceVisitorsAnalyticsChartComponent,
    ECommerceVisitorsStatisticsComponent,
    ECommerceLegendChartComponent,
    ECommerceUserActivityComponent,
    ECommerceProgressSectionComponent,
    SlideOutComponent,
    EarningCardComponent,
    EarningCardFrontComponent,
    EarningCardBackComponent,
    EarningPieChartComponent,
    EarningLiveUpdateChartComponent,
  ],
  providers: [
    CountryOrdersMapService,
  ],
  exports: [
    ECommerceChartsPanelComponent,
    DashboardComponent,
    ECommerceVisitorsAnalyticsComponent,
    ECommerceProgressSectionComponent,
  ],
})
export class DashboardModule { }
