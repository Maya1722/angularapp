import { Component, OnInit } from '@angular/core';
import { MaxproductsService } from '../services/maxproducts.service';

@Component({
  selector: 'app-manageproducts',
  templateUrl: './manageproducts.component.html',
  styleUrls: ['./manageproducts.component.css']
})
export class ManageproductsComponent implements OnInit {
  
 
  datatitle='max-products';
  
  constructor(private _maxproductsService:MaxproductsService) { }

   

  products:any=[
       {id:'p1',name:'laptop',price:20000},
       {id:'p2',name:'Tv',price:30000},
       {id:'p3',name:'AC',price:40000}

  ];
  ngOnInit() {


     
  
       
    
      
  } 
  
 onAddProduct(id,name,price){

  this.products.push({
    id:id.value,
    name:name.value,
    price:price.value

  });

 }

 onDeleteProduct(id){
   
  this.products.splice(id,1);
  if(confirm){
    alert("do you want to delete this product?");

    
  }
}
onSaveProduct(){
 this._maxproductsService.saveProduct(this.products).subscribe(res=>{
         
                 

     console.log("post data on firebase",res);
  
     
 });

  
         

  
}

onFetchProduct(){
this._maxproductsService.fetchProduct().subscribe(res=>{
        
      console.log(res);
       const data=JSON.stringify(res);

        console.log(data);
        
});

  
}
 

onEditProduct(){

}

}
