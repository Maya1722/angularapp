import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Product } from './model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularapp';
  uname='i am use angular app';
  public uid:number;
  public  fruitName:string;
  user: string[] = [];

  data:string="red";
  name:string;
  price:number;
  product:Product=new Product();
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
ngOnInit() {
 
      
        

}

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
}