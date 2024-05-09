import { Component } from '@angular/core';
import { user_info } from './Model/User.model'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reactiveforms';
  public myForm:any=[];
  constructor(){
    this.myForm= new user_info("","","","","")
  }
  //Model value :
  // submit(){
  //   console.log(this.myForm);
  // }
  //Froms Data:
  submit(userData:any){
    console.log(userData.value);
  }
}
