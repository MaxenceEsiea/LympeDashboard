import { NgModule } from '@angular/core';
import {
  NbActionsModule, NbBadgeModule,
  NbButtonModule,
  NbCardModule, NbIconModule, NbListModule,
  NbMenuModule, NbProgressBarModule, NbRadioModule, NbSelectModule,
  NbTabsetModule,
  NbUserModule
} from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import {DownloadsComponent} from './downloads/downloads.component';
import {MoneyComponent} from './money/money.component';
import {ReviewsComponent} from './reviews/reviews.component';
import {FormsModule} from '@angular/forms';
import {NgxEchartsModule} from 'ngx-echarts';
import {CardGameInfoComponent} from '../@theme/components/card-game-info/card-game-info.component';
import {ChartModule} from 'angular2-chartjs';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {ChartPanelHeaderComponent} from '../@theme/components/bars-chart/chart-panel-header/chart-panel-header.component';
import {ChartPanelSummaryComponent} from '../@theme/components/bars-chart/chart-panel-summary/chart-panel-summary.component';
import {ECommerceVisitorsAnalyticsChartComponent} from '../@theme/components/lines-chart/visitors-analytics-chart/visitors-analytics-chart.component';
import {ECommerceVisitorsStatisticsComponent} from '../@theme/components/lines-chart/visitors-statistics/visitors-statistics.component';
import {ECommerceLegendChartComponent} from '../@theme/components/legend-chart/legend-chart.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {GamesComponent} from './games/games.component';
import {InAppPurchasesChartComponent} from '../@theme/components/in-app-purchases-chart/in-app-purchases-chart.component';
import {AdMonetizationChartComponent} from '../@theme/components/ad-monetization-chart/ad-monetization-chart.component';
import {CardNumberInfoComponent} from '../@theme/components/card-number-info/card-number-info.component';
import {CardNumbersSectionComponent} from '../@theme/components/card-numbers-section/card-numbers-section.component';
import {LinesChartComponent} from '../@theme/components/lines-chart/lines-chart.component';
import {BarsChartComponent} from '../@theme/components/bars-chart/bars-chart.component';
import {ReviewsListComponent} from '../@theme/components/reviews-list/reviews-list.component';
import {ProfitChartComponent} from '../@theme/components/bars-chart/charts/profit-chart.component';


@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    FormsModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    NgxEchartsModule,
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
    NbBadgeModule,
  ],
  declarations: [
    ReviewsListComponent,
    CardGameInfoComponent,
    BarsChartComponent,
    ChartPanelHeaderComponent,
    ChartPanelSummaryComponent,
    LinesChartComponent,
    ECommerceVisitorsAnalyticsChartComponent,
    ECommerceVisitorsStatisticsComponent,
    ECommerceLegendChartComponent,
    CardNumbersSectionComponent,
    PagesComponent,
    DownloadsComponent,
    MoneyComponent,
    ReviewsComponent,
    DashboardComponent,
    GamesComponent,
    InAppPurchasesChartComponent,
    AdMonetizationChartComponent,
    CardNumberInfoComponent,
    ProfitChartComponent,
  ],
  exports: [
    BarsChartComponent,
    LinesChartComponent,
    CardNumbersSectionComponent,
    ProfitChartComponent,
  ],
})
export class PagesModule {}
