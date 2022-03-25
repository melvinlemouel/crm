import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  orders!: Order[];
  title: string = 'Order list';
  headers: string[] = [
    'Type',
    'Client',
    'Nb Jours',
    'TJM',
    'Total HT',
    'Total TTC',
    'Etat',
    'Actions',
  ];
  states: string[] = Object.values(StateOrder);

  constructor(private orderService: OrdersService, private router: Router) {
    this.orderService
      .listOrders()
      .subscribe((orders) => (this.orders = orders));
  }

  ngOnInit(): void {}

  updateState(item: Order, event: any) {
    const state: StateOrder = event.target.value;
    this.orderService
      .updateState(item, state)
      .subscribe((data) => Object.assign(item, data));
  }

  editOrder(id: number) {
    this.router.navigate(['orders/edit/' + id]);
  }

  deleteOrder(id: number) {
    this.orderService
      .deleteOrder(id)
      .subscribe(() => (this.orders = this.orders.filter((x) => x.id != id)));
  }
}
