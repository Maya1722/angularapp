import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RapidapiService {

  url='https://bb-finance.p.rapidapi.com/market/auto-complete?query=apple';

  constructor(private httpClient:HttpClient) {}
    getDataBBFinance():Observable<any>{
      let headers=new HttpHeaders({
        'X-RapidAPI-Key': '969e01bdffmsh898701d1776da7bp14dd7fjsndb8cbec6a3bd',
        'X-RapidAPI-Host': 'bb-finance.p.rapidapi.com'
      });

   
      return this.httpClient.get(this.url,{headers:headers});
  
    }
   }

