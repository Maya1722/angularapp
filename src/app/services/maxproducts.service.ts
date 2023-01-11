import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaxproductsService {

  constructor(private httpClient:HttpClient) { }


  url="https://angular-crud-operation-8dac1-default-rtdb.firebaseio.com/products.json";
 
 
  saveProduct(products:any[]){


    //return this.httpClient.post(this.url+'products.json',products);
 
       return this.httpClient.put(this.url,products);

}
fetchProduct(){

  return this.httpClient.get(this.url);
}


deleteProduct(id){
   return this.httpClient.delete(id);

}
}


