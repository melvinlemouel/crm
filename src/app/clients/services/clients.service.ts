import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  constructor(private http: HttpClient) {}

  listClients(): Observable<Client[]> {
    return this.http.get<Client[]>(environment.apiUrl + '/clients');
  }

  getClient(id: number): Observable<Client> {
    return this.http.get<Client>(environment.apiUrl + '/clients/' + id);
  }

  updateClient(client: Client): Observable<Client> {
    return this.http.put<Client>(environment.apiUrl + '/clients/' + client.id, client, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  updateState(client: Client, state: StateClient): Observable<Client> {
    const obj = new Client(client)
    obj.state = state
    return this.updateClient(obj)
  }
}
