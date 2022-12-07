import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';  

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

@Input() Employee:any;
@Output() foodevent:EventEmitter<string>=new EventEmitter<string>();

  constructor() {
  
   }

  ngOnInit() {
    
       console.log(this.Employee);
       
  }

  addtofood(value){

        this.foodevent.emit(value);

      }

    
}
