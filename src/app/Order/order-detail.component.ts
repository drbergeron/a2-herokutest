import { Component, Input, OnInit } from '@angular/core';
import { Order }                    from './order';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import {OrderService}                           from './order.service'
import 'rxjs/add/operator/switchMap';

@Component({
    moduleId: module.id,
    selector: 'order-detail',
    templateUrl: './order-detail.template.html',
    providers: [OrderService]
})
export class OrderDetailComponent implements OnInit{
    constructor(
        private orderService: OrderService,
        private route: ActivatedRoute,
        private location: Location
    ){};

    ngOnInit(): void{
        this.route.params.switchMap((params: Params) => this.orderService.getOrder(+params['id']))
        .subscribe(order => this.order = order);
    }
    @Input()
    order: Order;

    goBack(){
        this.location.back();
    }
}