import {Component, Input, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-bars-chart',
  styleUrls: ['./bars-chart.component.scss'],
  templateUrl: './bars-chart.component.html',
})
export class BarsChartComponent implements OnDestroy {

  @Input('appId') appId;

  private alive = true;

  constructor() {}

  ngOnDestroy() {
    this.alive = false;
  }
}
