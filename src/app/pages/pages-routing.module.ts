import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DownloadsComponent} from './dashboard/downloads/downloads.component';
import {MoneyComponent} from './dashboard/money/money.component';
import {ReviewsComponent} from './dashboard/reviews/reviews.component';

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
      path: 'downloads',
      component: DownloadsComponent,
    },
    {
      path: 'application/:id',
      component: DashboardComponent,
    },
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
