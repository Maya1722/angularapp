import { Component, OnInit,OnChanges,Input,SimpleChanges, DoCheck, AfterContentInit, ContentChild, ElementRef, AfterContentChecked, ViewChild, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
 
  export class HooksComponent implements OnInit, OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  
  
    @Input() userid: number;
    @Input() parentData:string;
    @Input() product:string;
    @ContentChild("child",{static:false})contentChild:ElementRef;
    @ViewChild("childhook",{static:false})viewChild:ElementRef;
  pi;
    constructor() {
      this.pi = 3.14;
      console.log("HooksComponent constructor called");
      
     }
     ngOnDestroy(): void {
       console.log("ngOnDestroy called");
       
     }
     ngAfterViewChecked(): void {
       console.log("ngAfterViewChecked Called");
       this.viewChild.nativeElement.setAttribute('style',`color:${this.parentData}`);
       
       
     }
     ngAfterViewInit(): void {
       
       console.log("view int access",this.viewChild);
      // this.viewChild.nativeElement.setAttribute('style','color:red');
       
       
     }
     ngAfterContentChecked(): void {
       console.log("ngAfterContentChecked");
       this.contentChild.nativeElement.setAttribute('style',`color:${this.parentData}`);
       
     }

     ngAfterContentInit(): void {
       console.log("ngAfterContentInit called",this.contentChild);
       console.log("view int access",this.viewChild);
       
       //this.contentChild.nativeElement.setAttribute('style','color:green');
       //this.contentChild.nativeElement.setAttribute('style',`color:${this.parentData}`);
     }
     ngDoCheck():void{
      console.log("ngDoCheck called");
      console.log("ngDoCheck called",this.contentChild);

      
     }
  
    ngOnChanges(changes: SimpleChanges): void {
  
      console.log("HooksComponent ngOnChanges called");
      //console.log(this.parentData);
//for (const propname in changes) {
        //const prop = changes[propname];
  
       // const {previousValue, currentValue, firstChange} = prop;
  
       // console.log(`Prop name ${propname}`);
      //  console.log(`Prev  value ${previousValue}`);
      //  console.log(`Current value ${currentValue}`);
       // console.log(`First change ${firstChange}`);
      //  console.log("---------------")
  
    //  }
      
    }
  
     // hooks 
    ngOnInit() {
      console.log("HooksComponent ngOnInit called")
    }
  
  }
  
