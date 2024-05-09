import { Component } from '@angular/core';
//import Separate Model :
import { User } from './Model/User';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
//   title = 'DataBinding';
// }
export class AppComponent {
  public name:string='80+20';
   
  public Value:boolean=false;
 
  public currentUrl:string=window.location.href;

  OnClick(t1:any){
    console.log("Click......0");
    console.log(t1);
    console.log(t1.name);
    console.log(t1.id);
    console.log(t1.value);
  }

  public names:string = "";
  public email:string = "";
  public phone:string = "";

  // public userInfo:any={
  //   'names' : 'Ram',
  //   'email' : 'a@gmail.com',
  //   'phone' : '1243545'
  // }
  public userInfo:any= new User('Ram','a@gmail.com','9163752468')
}
