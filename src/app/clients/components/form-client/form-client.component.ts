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
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss'],
})
export class FormClientComponent implements OnInit, OnChanges {
  states: string[] = Object.values(StateClient);
  @Input() init!: Client;
  clientForm!: FormGroup;
  @Output() submitted: EventEmitter<Client> = new EventEmitter<Client>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.init) {
      this.clientForm = new FormGroup({
        name: new FormControl(this.init.name, [Validators.required]),
        totalCaHt: new FormControl(this.init.totalCaHt, [Validators.required]),
        tva: new FormControl(this.init.tva, [Validators.required]),
        state: new FormControl(this.init.state, [Validators.required]),
        comment: new FormControl(this.init.comment),
      });
    }
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.clientForm.valid) this.submitted.emit({...this.init, ...this.clientForm.value});
  }
}
