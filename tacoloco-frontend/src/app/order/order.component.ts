import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Order } from '../order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  order: Order[];
  constructor(private service: DataService) { }

  ngOnInit() {
     this.service.getOrder().subscribe(response => {
       this.order = response;
      console.log(this.order);
    })
  }


}
