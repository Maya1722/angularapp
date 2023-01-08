import { Component, OnInit } from '@angular/core';
import { RapidapiService } from '../services/rapidapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // arryapiquote:any[]=[];
  // arryapinews:any[]=[];

  apiNews:any=[];
  apiQuote:any=[];

  constructor(private _rapidAPIService:RapidapiService) { }

  ngOnInit() {
    this._rapidAPIService.getDataBBFinance().subscribe(res=>{
      //console.log('rapid finace data',res);
      // this.arryapiquote.push(res.quote);
      // console.log('array quote data',this.arryapiquote);
      // this.arryapinews.push(res.news);
      // console.log('array  News data',this.arryapinews);


      console.log('Rapid API Finance Data',res);
      this.apiNews=res.news;
      console.log('Rapid API News Data',this.apiNews);
      this.apiQuote=res.quote;
      console.log('Rapid API Quote Data',this.apiQuote);
    })
   }

}