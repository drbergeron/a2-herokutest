import { Component } from '@angular/core';
import { Order } from './order';
import { OrderService } from './order.service'
import { OnInit } from '@angular/core'

@Component({
  selector: 'orders-root',
  templateUrl: './order.template.html',
  styleUrls: ['./order.component.css'],
  providers: [OrderService]
})
export class OrderComponent implements OnInit{
  constructor(private orderService: OrderService){};
  
  orders: Order[];
  selectedOrder: Order;

  ngOnInit(): void{
    this.getOrders();
  }

  getOrders(): void {
   this.orderService.getOrders().then(o => this.orders = o);
  }

  onselect(order: Order): void {
    this.selectedOrder = order;
  }
}
