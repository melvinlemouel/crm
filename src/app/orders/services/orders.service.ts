import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private http: HttpClient) {}

  listOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(environment.apiUrl + '/orders');
  }

  getOrder(id: number): Observable<Order> {
    return this.http.get<Order>(environment.apiUrl + '/orders/' + id);
  }

  deleteOrder(id: number): Observable<void> {
    return this.http.delete<void>(environment.apiUrl + '/orders/' + id);
  }

  updateOrder(order: Order): Observable<Order> {
    return this.http.put<Order>(environment.apiUrl + '/orders/' + order.id, order, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  createOrder(body: Order): Observable<Order> {
    return this.http.post<Order>(environment.apiUrl + '/orders', body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  updateState(item: Order, state: StateOrder): Observable<Order>{
    const obj = new Order(item)
    obj.state = state
    return this.updateOrder(obj)
  }
}
