import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  today: number = Date.now();

  ngOnInit(): void {
    setInterval(() => {
      this.today = Date.now();
    }, 1000);
  }
}
