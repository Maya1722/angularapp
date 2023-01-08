import { Component, OnInit } from '@angular/core';
import { MaxproductsService } from '../services/maxproducts.service';

@Component({
  selector: 'app-manageproducts',
  templateUrl: './manageproducts.component.html',
  styleUrls: ['./manageproducts.component.css']
})
export class ManageproductsComponent implements OnInit {
 
  datatitle='max-products'
  
  constructor(private _maxproductsService:MaxproductsService) { }
  data:any=[];
  ngOnInit() {


    this._maxproductsService.fetchProducts().subscribe(res=>{


      console.log(res);

        this.data=res;
    })
        
    
      
  } 
  products:any=[];
  



 

 onAddProduct(id,name,price){

  this.products.push({
    id:id.value,
    name:name.value,
    price:price.value

  })

 }

 onDeleteProduct(id){
   
  this.products.splice(id,1);
    console.warn("do you want to delete this product?");
    
}
onSaveProduct(){
 this._maxproductsService.saveProduct(this.products).subscribe(res=>{

  console.log('product data ',res);
     
    
 }) 
  
}

onFetchProduct(){
this._maxproductsService.fetchProducts().subscribe(res=>{


   console.log(res);
   this.data=res;
});


}

}
