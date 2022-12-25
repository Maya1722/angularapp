import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GallaryComponent } from './gallary/gallary.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [  

  //{path: '' , redirectTo: 'login', pathMatch: 'full'},
   {path:'home',component:HomeComponent},  //localhost/4200/home
   {path:'login',component:LoginComponent},
  {path:'aboutus', component:AboutusComponent},     //localhost/4200/aboutus
  {path:'contactus',component:ContactusComponent},  //localhost/4200/contactus
  {path:'product',component:ProductComponent},       //localhost/4200/product
  {path:'gallary', component:GallaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
