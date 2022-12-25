import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DemosService {

  apiUrl= 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }

  
  getUsersData(){

    return this.http.get(this.apiUrl);
 }
}
