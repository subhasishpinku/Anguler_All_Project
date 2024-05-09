import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[Check-Age]'
})
export class CheckAgeDirective {

  constructor(private eRef:ElementRef) {
    this.eRef.nativeElement.value=22;
    
   }
   @HostListener('keyup') abc(){
    //validation logic:
    let age=parseInt(this.eRef.nativeElement.value);
    if(age>=18 && age<80){
      this.eRef.nativeElement.classList.remove('is-invalid');
    }else{
      this.eRef.nativeElement.classList.add('is-invalid');

    }
   }
}
