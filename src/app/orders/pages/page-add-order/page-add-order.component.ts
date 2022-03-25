import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss'],
})
export class PageAddOrderComponent implements OnInit {
  order: Order = new Order();

  constructor(private orderService: OrdersService, private router: Router) {
  }

  ngOnInit(): void {}

  createOrder(order: Order) {
    this.orderService.createOrder(order).subscribe(() => {
      this.router.navigate(['orders']);
    });
  }
}
