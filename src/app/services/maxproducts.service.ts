import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaxproductsService {

  constructor(private http:HttpClient) { }


  url="https://angular-crud-operation-8dac1-default-rtdb.firebaseio.com/";
 
 
  saveProduct(products:any=[]){


   return this.http.post(this.url+'products.json',products);
 
 // return this.http.put(this.url,products);

}
fetchProducts(){

  return this.http.get(this.url+'products.json');
}
}
