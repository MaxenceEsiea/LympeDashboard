import {Component, OnInit} from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import {AppService} from '../app.service';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnInit {

  menu = MENU_ITEMS;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.getApps().subscribe((apps: any[]) => {
      apps.forEach(app => {
        this.menu[3].children.push({
          title: app.title,
          link: '/pages/application/' + app.id,
        });
      });
    });
  }
}
