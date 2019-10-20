import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {GamesComponent} from './games/games.component';
import {DownloadsComponent} from './downloads/downloads.component';
import {MoneyComponent} from './money/money.component';
import {ReviewsComponent} from './reviews/reviews.component';
import {TemplatesComponent} from './templates/templates.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'money',
      component: MoneyComponent,
    },
    {
      path: 'reviews',
      component: ReviewsComponent,
    },
    {
      path: 'templates',
      component: TemplatesComponent,
    },
    {
      path: 'downloads',
      component: DownloadsComponent,
    },
    {
      path: 'application/:id',
      component: GamesComponent,
    },
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
