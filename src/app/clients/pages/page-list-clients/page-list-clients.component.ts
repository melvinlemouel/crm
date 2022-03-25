import { Component, OnInit } from '@angular/core';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss'],
})
export class PageListClientsComponent implements OnInit {
  title: string = 'Client list';
  headers: string[] = ['Nom', 'Total CA HT', 'Total CA TTC', 'Etat'];
  clients!: Client[];
  states: string[] = Object.values(StateClient);

  constructor(private clientService: ClientsService) {
    this.clientService
      .listClients()
      .subscribe((clients) => (this.clients = clients));
  }

  ngOnInit(): void {}

  updateState(client: Client, event: any) {
    const state: StateClient = event?.target.value;
    this.clientService
      .updateState(client, state)
      .subscribe((res) => Object.assign(client, res));
  }
}
