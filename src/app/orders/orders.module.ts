import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule {
  constructor(){

    console.log("orders module called");
    
  }
 }
