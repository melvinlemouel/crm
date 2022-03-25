import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss'],
})
export class PageEditOrderComponent implements OnInit {
  order!: Order;

  constructor(
    private orderService: OrdersService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe((param) => {
      this.orderService.getOrder(param['id']).subscribe((order) => {
        this.order = new Order(order);
        console.log(this.order);
      });
    });
  }

  ngOnInit(): void {}

  updateOrder(order: Order) {
    this.orderService
      .updateOrder(order)
      .subscribe(() => this.router.navigate(['orders']));
  }
}
