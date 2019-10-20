import { NgModule } from '@angular/core';
import {
  NbActionsModule,
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
import {StatusCardComponent} from '../@theme/components/status-card/status-card.component';
import {TemperatureDraggerComponent} from '../@theme/components/temperature/temperature-dragger/temperature-dragger.component';
import {ContactsComponent} from '../@theme/components/contacts/contacts.component';
import {RoomSelectorComponent} from '../@theme/components/rooms/room-selector/room-selector.component';
import {TemperatureComponent} from '../@theme/components/temperature/temperature.component';
import {RoomsComponent} from '../@theme/components/rooms/rooms.component';
import {KittenComponent} from '../@theme/components/kitten/kitten.component';
import {SecurityCamerasComponent} from '../@theme/components/security-cameras/security-cameras.component';
import {ElectricityComponent} from '../@theme/components/electricity/electricity.component';
import {ElectricityChartComponent} from '../@theme/components/electricity/electricity-chart/electricity-chart.component';
import {WeatherComponent} from '../@theme/components/weather/weather.component';
import {PlayerComponent} from '../@theme/components/rooms/player/player.component';
import {SolarComponent} from '../@theme/components/solar/solar.component';
import {TrafficComponent} from '../@theme/components/traffic/traffic.component';
import {TrafficChartComponent} from '../@theme/components/traffic/traffic-chart.component';
import {ChartModule} from 'angular2-chartjs';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {StatsCardFrontComponent} from '../@theme/components/profit-card/front-side/stats-card-front.component';
import {StatsAreaChartComponent} from '../@theme/components/profit-card/back-side/stats-area-chart.component';
import {StatsBarAnimationChartComponent} from '../@theme/components/profit-card/front-side/stats-bar-animation-chart.component';
import {ProfitCardComponent} from '../@theme/components/profit-card/profit-card.component';
import {ECommerceChartsPanelComponent} from '../@theme/components/charts-panel/charts-panel.component';
import {ChartPanelHeaderComponent} from '../@theme/components/charts-panel/chart-panel-header/chart-panel-header.component';
import {ChartPanelSummaryComponent} from '../@theme/components/charts-panel/chart-panel-summary/chart-panel-summary.component';
import {OrdersChartComponent} from '../@theme/components/charts-panel/charts/orders-chart.component';
import {ProfitChartComponent} from '../@theme/components/charts-panel/charts/profit-chart.component';
import {StatsCardBackComponent} from '../@theme/components/profit-card/back-side/stats-card-back.component';
import {TrafficRevealCardComponent} from '../@theme/components/traffic-reveal-card/traffic-reveal-card.component';
import {TrafficBarChartComponent} from '../@theme/components/traffic-reveal-card/back-side/traffic-bar-chart.component';
import {TrafficFrontCardComponent} from '../@theme/components/traffic-reveal-card/front-side/traffic-front-card.component';
import {TrafficBackCardComponent} from '../@theme/components/traffic-reveal-card/back-side/traffic-back-card.component';
import {TrafficBarComponent} from '../@theme/components/traffic-reveal-card/front-side/traffic-bar/traffic-bar.component';
import {TrafficCardsHeaderComponent} from '../@theme/components/traffic-reveal-card/traffic-cards-header/traffic-cards-header.component';
import {CountryOrdersComponent} from '../@theme/components/country-orders/country-orders.component';
import {CountryOrdersMapComponent} from '../@theme/components/country-orders/map/country-orders-map.component';
import {CountryOrdersChartComponent} from '../@theme/components/country-orders/chart/country-orders-chart.component';
import {ECommerceVisitorsAnalyticsComponent} from '../@theme/components/visitors-analytics/visitors-analytics.component';
import {ECommerceVisitorsAnalyticsChartComponent} from '../@theme/components/visitors-analytics/visitors-analytics-chart/visitors-analytics-chart.component';
import {ECommerceVisitorsStatisticsComponent} from '../@theme/components/visitors-analytics/visitors-statistics/visitors-statistics.component';
import {ECommerceLegendChartComponent} from '../@theme/components/legend-chart/legend-chart.component';
import {ECommerceUserActivityComponent} from '../@theme/components/user-activity/user-activity.component';
import {ECommerceProgressSectionComponent} from '../@theme/components/progress-section/progress-section.component';
import {SlideOutComponent} from '../@theme/components/slide-out/slide-out.component';
import {EarningCardComponent} from '../@theme/components/earning-card/earning-card.component';
import {EarningCardFrontComponent} from '../@theme/components/earning-card/front-side/earning-card-front.component';
import {EarningCardBackComponent} from '../@theme/components/earning-card/back-side/earning-card-back.component';
import {EarningPieChartComponent} from '../@theme/components/earning-card/back-side/earning-pie-chart.component';
import {EarningLiveUpdateChartComponent} from '../@theme/components/earning-card/front-side/earning-live-update-chart.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CountryOrdersMapService} from '../@theme/components/country-orders/map/country-orders-map.service';
import {GamesComponent} from './games/games.component';
import {InAppPurchasesChartComponent} from '../@theme/components/in-app-purchases-chart/in-app-purchases-chart.component';
import {AdMonetizationChartComponent} from '../@theme/components/ad-monetization-chart/ad-monetization-chart.component';


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
  ],
  declarations: [
    StatusCardComponent,
    TemperatureDraggerComponent,
    ContactsComponent,
    RoomSelectorComponent,
    TemperatureComponent,
    RoomsComponent,
    KittenComponent,
    SecurityCamerasComponent,
    ElectricityComponent,
    ElectricityChartComponent,
    WeatherComponent,
    PlayerComponent,
    SolarComponent,
    TrafficComponent,
    TrafficChartComponent,
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
    PagesComponent,
    DownloadsComponent,
    MoneyComponent,
    ReviewsComponent,
    DashboardComponent,
    GamesComponent,
    InAppPurchasesChartComponent,
    AdMonetizationChartComponent,
  ],
  providers: [
    CountryOrdersMapService,
  ],
  exports: [
    ECommerceChartsPanelComponent,
    ECommerceVisitorsAnalyticsComponent,
    ECommerceProgressSectionComponent,
    ProfitChartComponent,
  ],
})
export class PagesModule {
}

