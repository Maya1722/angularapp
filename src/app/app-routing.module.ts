import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DemopostsComponent } from './demoposts/demoposts.component';
import { PostDeatilsComponent } from './post-deatils/post-deatils.component';
import { AuthGuard } from './auth.guard';
import { AdduserComponent } from './adduser/adduser.component';
import { UnSavedChangesGuard } from './un-saved-changes.guard';
import { SimpletemplateformComponent } from './simpletemplateform/simpletemplateform.component';
import { ManageproductsComponent } from './manageproducts/manageproducts.component';

const routes: Routes = [  

  {path: '' , redirectTo: 'login', pathMatch: 'full'},
   {path:'home',component:HomeComponent},  //localhost/4200/home
   {path:'login',component:LoginComponent},
  {path:'aboutus', component:AboutusComponent},     //localhost/4200/aboutus
  {path:'manageproducts',component:ManageproductsComponent},  //localhost/4200/contactus
  //{path:'',  component:ProductComponent ,  children:[
    //{path:'laptop',component:LaptopComponent},
    //{path:'tv',component:TvComponent},
    //{path:'tablet',component:TabletComponent},
    //{path:'washingMachine',component:WashingmashineComponent},
    //{path:'airconditioner',component:AirconditionerComponent}
  //]},
       //localhost/4200/product
  {path:'demoposts', component:DemopostsComponent},
  {path:'post-deatils/:id',component:PostDeatilsComponent},
  {path:'adduser',component:AdduserComponent,canDeactivate:[UnSavedChangesGuard]},
  {path:'product',canActivate:[AuthGuard],loadChildren:'./product/products.module#ProductsModule'},
  {path:'kids',loadChildren:'./kids/kids.module#KidsModule'},
  {path:'orders',loadChildren:'./orders/orders.module#OrdersModule'},
  {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
