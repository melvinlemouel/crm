import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  headers: string[] = ['Nom', 'Total CA HT', 'Total CA TTC', 'Etat', 'Actions'];
  clients!: Client[];
  states: string[] = Object.values(StateClient);

  constructor(private clientService: ClientsService, private router: Router) {
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

  editClient(id: number) {
    this.router.navigate(['clients/edit/' + id]);
  }

  deleteClient(id: number) {
    this.clientService
      .deleteClient(id)
      .subscribe(() => (this.clients = this.clients.filter((x) => x.id != id)));
  }
}
