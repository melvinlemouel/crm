import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-edit-client',
  templateUrl: './page-edit-client.component.html',
  styleUrls: ['./page-edit-client.component.scss'],
})
export class PageEditClientComponent implements OnInit {
  client!: Client;
  clientForm!: FormGroup;

  constructor(
    private clientService: ClientsService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((param) => {
      this.clientService.getClient(param['id']).subscribe((client) => {
        this.client = client;
        this.clientForm = new FormGroup({
          name: new FormControl(this.client.name),
          comment: new FormControl(this.client.comment),
        });
      });
    });
  }

  ngOnInit(): void {}

  saveClient() {
    this.clientService
      .updateClient(
        new Client({ ...this.client, ...this.clientForm.value })
      )
      .subscribe((x) => console.log(x));
  }
}
