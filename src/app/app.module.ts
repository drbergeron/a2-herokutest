import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { OrderDetailComponent } from './Order/order-detail.component'
import {OrderComponent} from './Order/order.component'
import {OrderService} from './Order/order.service';
import { DashboardComponent } from './dashboard/dashboard.component'

import {AppRoutingModule} from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    OrderDetailComponent,
    OrderComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }

;