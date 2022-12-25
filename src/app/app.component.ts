import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Product } from './model/product';
import { NgForm } from '@angular/forms';
import { DemoService } from './services/demo.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  constructor(){

  }
  ngOnInit():void{
     
     
  }
  title = 'angularapp';
  uname='i am use angular app';
  public uid:number;
  public  fruitName:string;
  user: string[] = [];

  data:string="red";
  name:string;
  price:number;
  product:Product=new Product();
  appChildExists:boolean=true;
  currentitem='television';
  items=[];


  Users=[{
        name:'jack',
        age:28,
        Company:'wipro'
  
  },
  {
      name:'mile',
      age:28,
      Company:'infosys'

  },

  {
    name:'jack',
    age:28,
    Company:'weils'

}
]


  getDataFromChild(value) {
    console.log(value);
    this.user.push(value);
  

}

addItem(newItem){
this.items.push(newItem);
}
handleData(value){
  this.data=value.target.value;
}

updateProduct(){
  //this.product= new Product();
  this.product.name=this.name;
  this.product.price=this.price;
}
Destroy(){
  this.appChildExists=false;
}









}

