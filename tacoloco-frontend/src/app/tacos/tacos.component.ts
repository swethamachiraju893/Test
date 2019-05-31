import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Taco } from '../Taco';
import { Router, ActivatedRoute } from '@angular/router';
import { Order } from '../order';

@Component({
  selector: 'app-tacos',
  templateUrl: './tacos.component.html',
  styleUrls: ['./tacos.component.css']
})
export class TacosComponent implements OnInit {
  tacos: Taco[];
  quantities =  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  newOrder:Order;
  count:number =0;
  newPrice =  0;
  totalPrice = 0;
  totalCount = 0;
  id: number;
  constructor(private service: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.service.getTacos().subscribe(response => {
      console.log(response);
      this.tacos = response;
    });
  }

onQuantityChange( value, price){
    console.log(value, price);
    this.newPrice = value * price;
    console.log(this.newPrice);
    this.service.saveTacoDetails(this.newPrice, value);
    this.priceCalculator(this.newPrice, value);
}

priceCalculator(price, value) {
  this.totalCount = this.totalCount + value;
  this.totalPrice = this.totalPrice + price;
  console.log(this.totalPrice, this.totalCount);
}

orderTacos() {
    this.router.navigate(['/order']);
    this.newOrder = new Order(this.id, this.totalPrice, this.totalCount);
    console.log(this.newOrder);
    this.service.saveOrder(this.newOrder)
    .subscribe(data => {console.log(data)},
    err => {
      console.log('Error occured');
    });
}
}
