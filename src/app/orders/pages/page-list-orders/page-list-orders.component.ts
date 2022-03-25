import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  orders$: Observable<Order[]>;
  title: string = 'Order list';
  headers: string[] = [
    'Type',
    'Client',
    'Nb Jours',
    'TJM',
    'Total HT',
    'Total TTC',
    'Etat',
  ];
  states: string[] = Object.values(StateOrder);

  constructor(private orderService: OrdersService) {
    this.orders$ = this.orderService.listOrders();
  }

  ngOnInit(): void {
    // this.orderService
    //   .createOrder({
    //     tjmHt: 900,
    //     nbJours: 25,
    //     tva: 20,
    //     state: StateOrder.OPTION,
    //     typePresta: 'formation',
    //     client: 'Atos',
    //     comment: 'RAS',
    //     id: 6,
    //   })
    //   .subscribe(console.log);
  }

  updateState(item: Order, event: any) {
    const state: StateOrder = event.target.value;
    this.orderService
      .updateState(item, state)
      .subscribe((data) => Object.assign(item, data));
  }
}
