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
  getProductValue(value){

    console.log(value.target.value);
    this.selectedProduct = value.target.value; //do this for when we click on mobile then only one mobile shown
    
  }

}
