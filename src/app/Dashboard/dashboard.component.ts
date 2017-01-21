import { Component } from '@angular/core';
import { OrderCount } from './order-count'
import {DashboardService} from './dashboard.service'
import { OnInit } from '@angular/core'

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.template.html',
    styleUrls: ['./dashboard.component.css'],
    providers: [DashboardService]
})
export class DashboardComponent implements OnInit{ 
    constructor(private dashboardService: DashboardService){};
    counts: OrderCount[]

    ngOnInit(): void{
        this.getOrderCounts();
    }

    getOrderCounts(): void{
        this.dashboardService.getOrderCounts().then(c => this.counts = c);
    }
}