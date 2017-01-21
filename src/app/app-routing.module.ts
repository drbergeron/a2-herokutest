import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'

import { DashboardComponent } from './dashboard/dashboard.component'
import {OrderComponent} from './Order/order.component'
import { OrderDetailComponent } from './Order/order-detail.component'

const ROUTES: Routes = [
    { path: 'orders',       component: OrderComponent  },
    { path: 'dashboard',    component: DashboardComponent  },
    { path: 'orders/:id',   component: OrderDetailComponent  },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }  
]

//add providers for guard services
@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}