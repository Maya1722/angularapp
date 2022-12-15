import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {


  defaultValue:string='Advanced';
  submitted:boolean=true;
  constructor() { }

  ngOnInit() {
  }
  
  OnSubmit(form:NgForm){
  
    console.log(form);
    

  }

}
