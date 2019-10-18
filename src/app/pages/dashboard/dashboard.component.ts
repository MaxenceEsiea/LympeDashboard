import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  today: number = Date.now();

  ngOnInit(): void {
    setInterval(() => {
      this.today = Date.now();
    }, 1000);
  }
}
