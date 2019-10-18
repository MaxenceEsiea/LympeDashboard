import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
})
export class ECommerceComponent implements OnInit {

  today: number = Date.now();

  ngOnInit(): void {
    setInterval(() => {
      this.today = Date.now();
    }, 1000);
  }
}
