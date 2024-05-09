import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public PMValue:any = '';
 constructor(){}
  ngOnInit() : void{ }
  quantity:number=1;
  i=1
  plus(p1:any){
    this.PMValue=p1.value;
    this.quantity =this.PMValue;
    console.log("PMValue1"+this.PMValue);
    if(this.i !=100){
      this.i++;
      this.quantity=this.i;
    }
  }
  minus(m1:any){
    this.PMValue=m1.value;
    this.quantity =this.PMValue;
    console.log("PMValue0"+this.PMValue);
    if(this.i !=1){
      this.i--;
      this.quantity=this.i;
    }
  }
}
