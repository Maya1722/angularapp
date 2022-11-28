import { Directive ,ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appCustdir]'
})
export class CustdirDirective {

  constructor(private e1:ElementRef,private render:Renderer2) {

    console.log('custom directive applied');
   // e1.nativeElement.style.backgroundColor='gray';
    //e1.nativeElement.style.display='none';
    render.setStyle(e1.nativeElement,'backgroundColor','yellow');
    
   }



}
