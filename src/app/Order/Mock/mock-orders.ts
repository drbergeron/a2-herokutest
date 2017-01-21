import {Order} from '../order'
import {OrderCount} from '../../Dashboard/order-count'

export const ORDERS: Order[] = [
  {id: 1, orderno: "001", value: 1.11},
  {id: 2, orderno: "002", value: 2.22},
  {id: 3, orderno: "003", value: 3.33},
  {id: 4, orderno: "004", value: 4.44},
  {id: 5, orderno: "005", value: 5.55}
];

export const ORDERCOUNTS: OrderCount[]= [
  {type: 1, name: "New", value: 10},
  {type: 2, name: "Ready To Ship", value: 100},
  {type: 3, name: "Ready To Invoice", value:6}
];
  