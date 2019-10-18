import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { GamesComponent } from './games.component';
import { StatusCardComponent } from '../../@theme/components/status-card/status-card.component';
import { ContactsComponent } from '../../@theme/components/contacts/contacts.component';
import { RoomsComponent } from '../../@theme/components/rooms/rooms.component';
import { RoomSelectorComponent } from '../../@theme/components/rooms/room-selector/room-selector.component';
import { TemperatureComponent } from '../../@theme/components/temperature/temperature.component';
import { TemperatureDraggerComponent } from '../../@theme/components/temperature/temperature-dragger/temperature-dragger.component';
import { KittenComponent } from '../../@theme/components/kitten/kitten.component';
import { SecurityCamerasComponent } from '../../@theme/components/security-cameras/security-cameras.component';
import { ElectricityComponent } from '../../@theme/components/electricity/electricity.component';
import { ElectricityChartComponent } from '../../@theme/components/electricity/electricity-chart/electricity-chart.component';
import { WeatherComponent } from '../../@theme/components/weather/weather.component';
import { SolarComponent } from '../../@theme/components/solar/solar.component';
import { PlayerComponent } from '../../@theme/components/rooms/player/player.component';
import { TrafficComponent } from '../../@theme/components/traffic/traffic.component';
import { TrafficChartComponent } from '../../@theme/components/traffic/traffic-chart.component';
import { FormsModule } from '@angular/forms';
import {DashboardModule} from '../dashboard/dashboard.module';
import { DownloadsComponent } from '../downloads/downloads.component';
import { MoneyComponent } from '../money/money.component';
import { ReviewsComponent } from '../reviews/reviews.component';

@NgModule({
  imports: [
    FormsModule,
    ThemeModule,
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
    DashboardModule,
  ],
  declarations: [
    GamesComponent,
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
    DownloadsComponent,
    MoneyComponent,
    ReviewsComponent,
  ],
})
export class GamesModule { }
