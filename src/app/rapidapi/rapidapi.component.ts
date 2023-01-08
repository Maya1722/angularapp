import { Component, OnInit } from '@angular/core';
import { RapidapiService } from '../services/rapidapi.service';

@Component({
  selector: 'app-rapidapi',
  templateUrl: './rapidapi.component.html',
  styleUrls: ['./rapidapi.component.css']
})
export class RapidapiComponent implements OnInit {

  constructor(private _rapidapiService:RapidapiService) { }

  ngOnInit() {
    this._rapidapiService.getDataBBFinance().subscribe(res=>{

      console.log("rapid api data",res);
      
    })
  }

}
