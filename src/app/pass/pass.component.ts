import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pass',
  templateUrl: './pass.component.html',
  styleUrls: ['./pass.component.css']
})
export class PassComponent implements OnInit {

  password:string;
  resetPassword:string;
@Input() myinputMsg:string;

  constructor() { 

  }

  ngOnInit() {


    console.log('hii am using s',this.myinputMsg);
    
  }

}
