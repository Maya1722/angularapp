import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from './laptop/laptop.component';
import { TvComponent } from './tv/tv.component';
import { TabletComponent } from './tablet/tablet.component';
import { WashingmashineComponent } from './washingmashine/washingmashine.component';
import { AirconditionerComponent } from './airconditioner/airconditioner.component';
import {  RouterModule, Routes } from '@angular/router';
import { UtilityModule } from '../model/utility.module';
import { ProductComponent } from './product.component';

const prodRoutes :Routes =[
  {path:'', component: ProductComponent ,children:[
    {path:'laptop',component:LaptopComponent},
    {path:'tv',component:TvComponent},
    {path:'tablet',component:TabletComponent},
    {path:'washingMashine',component:WashingmashineComponent},
    {path:'airconditioner',component:AirconditionerComponent}
  ]},


]

@NgModule({
  declarations: [
    LaptopComponent,
    TvComponent,
    TabletComponent,
    WashingmashineComponent,
    AirconditionerComponent,
    ProductComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(prodRoutes),
    UtilityModule

  ],
  exports:[
    RouterModule

  ]

})
export class ProductsModule {
  constructor(){
    console.log("product module called");
    

  }
 }
