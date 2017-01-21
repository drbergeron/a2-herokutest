import { Injectable } from '@angular/core'
import {ORDERCOUNTS} from '../Order/Mock/mock-orders'
import {OrderCount} from './order-count'

@Injectable()
export class DashboardService{
    getOrderCounts(): Promise<OrderCount[]> {
        return Promise.resolve(ORDERCOUNTS);

        /*return new Promise(resolve =>{
            setTimeout(() => resolve(ORDERS), 2000);
        });*/
    }
}