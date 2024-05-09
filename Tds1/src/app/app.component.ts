import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { user } from './Model/User';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public misMatchPassError:boolean=false;  
  public myForm:any ;
  public show: boolean =false;
  constructor(private aService:ApiService){
    this.myForm = new user('','','','','','');
  }
  password() {
    this.show =!this.show;
}
  checkPass(pass1:any,pass2:any){
      if(pass1.value ===pass2.value){
          this.misMatchPassError=false;
      }else{
         this.misMatchPassError=true;
        }
    }
  /*Model Value
  onSubmit(){
  console.log(this.myForm);
  }
   Form Value:
  */
  onSubmit(userData:any){
    console.log(userData.value);
    let formData={
      'name':userData.value.t1,
      'phone':userData.value.t2,
      'email':userData.value.t3,
      'pass1':userData.value.t4
    }
    console.log('server data');
    console.log(formData);
    this.aService.
    submitForm(formData).
    subscribe((res:any)=>{
      console.log(res);
      alert(res.message);
      userData.reset();
    });
  }
  
  }