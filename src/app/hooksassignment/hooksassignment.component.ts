import { Component, OnInit,SimpleChanges,Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-hooksassignment',
  templateUrl: './hooksassignment.component.html',
  styleUrls: ['./hooksassignment.component.css']
})
export class HooksassignmentComponent implements OnInit,OnChanges {
 
 
 
  @Input() Fruit:string;

 

  constructor() {
    console.log('hooks constructor called');
    
    
  }
  ngOnChanges(changes: SimpleChanges): void {
  


    console.log("HooksComponent ngOnChanges called");
    for (const propname in changes) {
      const prop = changes[propname];

      const {previousValue, currentValue, firstChange} = prop;

      console.log(`Prop name ${propname}`);
      console.log(`Prev  value ${previousValue}`);
      console.log(`Current value ${currentValue}`);
      console.log(`First change ${firstChange}`);
      console.log("---------------")

    }
    
  }

  ngOnInit() {

    console.log('Hooks NgOnInit method called');
    
  }

}
