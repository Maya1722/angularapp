import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KidsComponent } from './kids.component';
import { BagComponent } from './bag/bag.component';
import { ClothComponent } from './cloth/cloth.component';
import { ShoesComponent } from './shoes/shoes.component';
import { UtilityModule } from '../model/utility.module';
import { RouterModule, Routes } from '@angular/router';


const prodRoutes :Routes =[
  {path:'',  component:KidsComponent ,  children:[
    {path:'bag',component:BagComponent},
    {path:'cloth',component:ClothComponent},
    {path:'shoes',component:ShoesComponent},
    
    
  ]},


]
@NgModule({
  declarations: [
    BagComponent,
    ShoesComponent,
    ClothComponent
  ],
  imports: [
    RouterModule.forChild(prodRoutes),
    UtilityModule,
    CommonModule
  ],
  exports:[
    RouterModule
  ]
})
export class KidsModule { }
