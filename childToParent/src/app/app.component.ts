import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public ChildData:any=[];
  title = 'childToParent';
  public message:any=[];
  OnSendAgain(n1:any,e1:any){
   this.message={
    'm11':n1.value,
    'm22':e1.value
   }
  }
}
