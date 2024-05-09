import { Component } from '@angular/core';
// Import FormGroup , FromControl
import{FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public myForm:any=[];
  // constructor(private fBuilder:FormBuilder){
  //   this.myForm.fBuilder.group({
  //       'name': ['Ram'],
  //       'phone': ['6290532924'],
  //        'email':['a@gmail.com'],
  //         'pas1':['123'],
  //         'pas2': ['123']
  //     });
  // }
  constructor(private fBuilder:FormBuilder){
  //  this.myForm=new FormGroup({
  //   'name':new FormControl('Anjan'),
  //   'phone':new FormControl('8016025019'),
  //   'email':new FormControl('a@gmail.com'),
  //   'pas1':new FormControl('a123'),
  //   'pas2':new FormControl('a123')

  //  });
  this.myForm=this.fBuilder.group({
    'name':['',[Validators.required,Validators.pattern('^[a-zA-Z]{3,32}$')]],
    'phone':['',[Validators.required]],
    'email':[''],
    // Nested field add :
    'address':this.fBuilder.group({
      'state':[''],
      'city':[''],
      'pincode':['',[Validators.required]]
    }),
    'pas1':[''],
    'pas2':['']
  });
  }
  public get name(){
    return this.myForm.get('name') as FormControl;
  }
  public get phone(){
    return this.myForm.get('phone') as FormControl;
  }
  public get state(){
    return this.myForm.get('address').get('state') as FormControl;
  }
  public get city(){
    return this.myForm.get('address').get('city') as FormControl;
  }
  submit(){
   console.log(this.myForm.value);
  }
}