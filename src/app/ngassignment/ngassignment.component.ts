import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngassignment',
  templateUrl: './ngassignment.component.html',
  styleUrls: ['./ngassignment.component.css']
})
export class NgassignmentComponent implements OnInit {
  selectedProduct:string;
  constructor() { }

  ngOnInit() {
  }
  getProductValue(Value){

    console.log(Value.target.Value);
    this.selectedProduct=Value.target.Value; //do this for when we click on mobile then only one mobile shown
    
  }

}
