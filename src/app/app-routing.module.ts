import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component'
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { TvComponent } from './product/tv/tv.component';
import { TabletComponent } from './product/tablet/tablet.component';
import { WashingmashineComponent } from './product/washingmashine/washingmashine.component';
import { AirconditionerComponent } from './product/airconditioner/airconditioner.component';
import { DemopostsComponent } from './demoposts/demoposts.component';
import { PostDeatilsComponent } from './post-deatils/post-deatils.component';


const routes: Routes = [  

  {path: '' , redirectTo: 'login', pathMatch: 'full'},
   {path:'home',component:HomeComponent},  //localhost/4200/home
   {path:'login',component:LoginComponent},
  {path:'aboutus', component:AboutusComponent},     //localhost/4200/aboutus
  {path:'contactus',component:ContactusComponent},  //localhost/4200/contactus
  {path:'',  component:ProductComponent ,  children:[
    {path:'laptop',component:LaptopComponent},
    {path:'tv',component:TvComponent},
    {path:'tablet',component:TabletComponent},
    {path:'washingMachine',component:WashingmashineComponent},
    {path:'airconditioner',component:AirconditionerComponent}
  ]},
       //localhost/4200/product
  {path:'demoposts', component:DemopostsComponent},
  {path:'post-deatils/:id',component:PostDeatilsComponent},
  {path:'product',loadChildren:'/.product/products.module#ProductsModule'},
  {path:'kids',loadChildren:'/.kids/kids.module#KidsModule'},
  {path:'orders',loadChildren:'/.orders/orders.module#OrdersModule'},
  {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
