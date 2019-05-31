import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Taco } from '../Taco';
import { Order } from '../order';
import { BehaviorSubject } from 'rxjs';
const headers=  new HttpHeaders({
  'Content-Type':  'application/json',
})

@Injectable({
  providedIn: 'root'
})
export class DataService {

   tacoPrice: number;

 tacoQuantity: number;

  constructor(private http: HttpClient) {
  }

  getTacos() {
   return this.http.get<Taco[]>('http://localhost:8000/taco/details');
  }
  saveOrder(order) {
   console.log(order);
   console.log(JSON.stringify(order));
   return this.http.post(`http://localhost:8000/order`, JSON.stringify(order), {
    headers: headers,
    observe: 'response'
  }
  );
  }
  saveTacoDetails(price, quantity){
      this.tacoPrice = price;
      this.tacoQuantity = quantity;

  }
  getOrder() { 
    return this.http.get<Order[]>(`http://localhost:8000/order/details`);
  }


}
