import { Component } from '@angular/core';
import { User_info } from './Model/User.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'TDF';
  public myForm:any=[];
  public show:boolean=false;
  public misMatchPassError:boolean=false;
  constructor(){
    this.myForm=new User_info('','','','','');
  }
  password(){
      this.show=!this.show
  }
  submit(userData:any){
    console.log(userData.value);
  }
  checkpass(pass1:any,pass2:any){
    if(pass1.value==pass2.value){
      this.misMatchPassError=false;
    }else{
      this.misMatchPassError=true;
    }
  }
}
