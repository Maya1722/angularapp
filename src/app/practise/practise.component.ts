import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-practise',
  templateUrl: './practise.component.html',
  styleUrls: ['./practise.component.css']
})
export class PractiseComponent implements OnInit {
  isShow:boolean=true;
  selectedProduct:string;
  constructor(){

  
  }

  ngOnInit() {


}
getProductValue(value){
console.log(value.target.value);
this.selectedProduct=value.target.value;

}


}