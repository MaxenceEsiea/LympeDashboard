import {Component, Input, OnDestroy} from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

import { Contacts, RecentUsers, UserData } from '../../../@core/data/users';
import {AppService} from '../../../app.service';

@Component({
  selector: 'ngx-contacts',
  styleUrls: ['./contacts.component.scss'],
  templateUrl: './contacts.component.html',
})
export class ContactsComponent implements OnDestroy {

  private alive = true;

  @Input('title') title;
  @Input('reviews') reviews;
  @Input('appId') appId;


  constructor() {
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
