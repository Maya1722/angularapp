import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  apiUrl= 'https://jsonplaceholder.typicode.com/users';
 products =[
  {name:' Mobile' ,id:'101'},
  {name:'Tv',id:'102'},
  {name:'Laptop',id:'103'}
 ]
  constructor( private http: HttpClient) { }
display(){


   alert('subscribed successfully');
}

getUsersData(){

   return this.http.get(this.apiUrl);
}
}