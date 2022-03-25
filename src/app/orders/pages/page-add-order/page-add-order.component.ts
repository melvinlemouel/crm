import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss'],
})
export class PageAddOrderComponent implements OnInit {
  orderForm!: FormGroup;
  states: string[] = Object.values(StateOrder);
  order: Order = new Order();

  constructor(private orderService: OrdersService) {
    this.orderForm = new FormGroup({
      client: new FormControl(this.order.client, [Validators.required]),
      typePresta: new FormControl(this.order.typePresta, [Validators.required]),
      tva: new FormControl(this.order.tva, [Validators.required]),
      comment: new FormControl(this.order.comment, [Validators.required]),
      tjmHt: new FormControl(this.order.tjmHt, [Validators.required]),
      nbJours: new FormControl(this.order.nbJours, [Validators.required]),
      state: new FormControl(this.order.state, [Validators.required]),
    });
  }

  ngOnInit(): void {}

  createOrder() {
    if (this.orderForm.valid) {
      this.orderService.createOrder(this.orderForm.value).subscribe();
    }
  }
}
