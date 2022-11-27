import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {
  selectedProduct:string;


  constructor() { }

  ngOnInit() {
  }
  getProductValue(Value){

    console.log(Value); //do this for when we click on mobile then only one mobile shown
    
  }
  }


