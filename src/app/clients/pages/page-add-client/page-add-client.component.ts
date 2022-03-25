import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss'],
})
export class PageAddClientComponent implements OnInit {
  client: Client = new Client();

  constructor(private clientService: ClientsService, private router: Router) {}

  ngOnInit(): void {}

  createClient(client: Client) {
    this.clientService.createClient(client).subscribe(() => {
      this.router.navigate(['clients']);
    });
  }
}
