import { Injectable } from '@angular/core'
import {ORDERS} from './Mock/mock-orders'
import {Order} from './order'

@Injectable()
export class OrderService{
    getOrders(): Promise<Order[]> {
        return Promise.resolve(ORDERS);

        /*return new Promise(resolve =>{
            setTimeout(() => resolve(ORDERS), 2000);
        });*/
    }

    getOrder(id: number): Promise<Order> {
        return this.getOrders().then(orders => orders.find(o => o.id === id));
    }

}
