import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-edit-client',
  templateUrl: './page-edit-client.component.html',
  styleUrls: ['./page-edit-client.component.scss'],
})
export class PageEditClientComponent implements OnInit {
  client!: Client;

  constructor(
    private clientService: ClientsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe((param) => {
      this.clientService.getClient(param['id']).subscribe((client) => {
        this.client = new Client(client);
      });
    });
  }

  ngOnInit(): void {}

  updateClient(client: Client) {
    this.clientService
      .updateClient(client)
      .subscribe(() => this.router.navigate(['clients']));
  }
}
