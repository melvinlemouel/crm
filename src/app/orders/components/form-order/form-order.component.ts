import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss'],
})
export class FormOrderComponent implements OnInit, OnChanges {
  states: string[] = Object.values(StateOrder);
  @Input() init!: Order;
  orderForm!: FormGroup;
  @Output() submitted: EventEmitter<Order> = new EventEmitter<Order>();

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.init) {
      this.orderForm = new FormGroup({
        typePresta: new FormControl(this.init.typePresta, [
          Validators.required,
        ]),
        client: new FormControl(this.init.client, [Validators.required]),
        nbJours: new FormControl(this.init.nbJours, [Validators.required]),
        tjmHt: new FormControl(this.init.tjmHt, [Validators.required]),
        tva: new FormControl(this.init.tva, [Validators.required]),
        state: new FormControl(this.init.state, [Validators.required]),
        comment: new FormControl(this.init.comment),
      });
    }
  }

  onSubmit() {
    if (this.orderForm.valid)
      this.submitted.emit({ ...this.init, ...this.orderForm.value });
  }
}
