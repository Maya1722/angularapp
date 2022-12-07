import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dire',
  templateUrl: './dire.component.html',
  styleUrls: ['./dire.component.css']
})
export class DireComponent implements OnInit {

  showSecret=false;
  log=[];
  constructor() { }

  ngOnInit() {
  }
onToggleDetails(){

this.showSecret=!this.showSecret;
this.log.push(this.log.length+1);


}
}
