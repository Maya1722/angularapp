import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-servicecomp3',
  templateUrl: './servicecomp3.component.html',
  styleUrls: ['./servicecomp3.component.css']
})
export class Servicecomp3Component implements OnInit {
userData:any=[];
  constructor(private _demoService:DemoService) { }

  ngOnInit() {
    this._demoService.getUsersData().subscribe(data => {

      console.log('getting data from api',data);
        
      this.userData=data;

    })
    
    }
    


  }