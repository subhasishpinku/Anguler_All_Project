import { Component } from '@angular/core';

// Import FormGroup , FromControl
import{FormGroup,FormControl,FormBuilder,Validators, FormArray} from '@angular/forms'
import { checkPas } from './Validation/password-mismatch';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public myForm:any=[];
  public stateWiseCity:any=[
  {'state':'West Bengal','city':['Kolkata','Haldia']},
  {'state':'Maharastra','city':['Mumbai','Pune']},
  {'state':'Gujrat','city':['Surat','Ghandinagar']},

  ];

  public cityList:any=[];
  
  // For adding Alternative Emails :
  public static count:number=1;

  constructor(private fBuilder:FormBuilder){
    /*
    Porcess 1 : 
   this.myForm=new FormGroup({
    'name':new FormControl('Anjan'),
    'phone':new FormControl('8016025019'),
    'email':new FormControl('a@gmail.com'),
    'pas1':new FormControl('a123'),
    'pas2':new FormControl('a123')

   });
   Process 2 : Using FormBuilder Class:
   */
  this.myForm=this.fBuilder.group({
    'name':['',[Validators.required,Validators.pattern('^[a-zA-Z]{3,32}$')]],
    'genderSelect':this.fBuilder.group({
      'gender':['']
    }),
    'phone':['',[Validators.required]],
    'email':[''],
    'alternativeEmails':this.fBuilder.array([]),
    // Nested field add : 
    'address':this.fBuilder.group({
      'state':[''],
      'city':[''],
      'pincode':['',[Validators.required,Validators.maxLength(6),Validators.minLength(6),Validators.pattern('[0-9]{6,6}')]]
    }),
    'pas1':[''],
    'pas2':[''],
    'file':[]
  },{validator:checkPas});


  }
   public get name(){
    return this.myForm.get('name') as FormControl;
  }
  public get gender(){
    return this.myForm.get('genderSelect').get('gender') as FormControl;
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
  public get pincode(){
    return this.myForm.get('address').get('pincode') as FormControl;
  }
 public get alternativeEmails(){
  return this.myForm.get('alternativeEmails') as FormArray;
 }
  onState(){
    let selectedState=this.state.value;
    console.log(selectedState);
    this.stateWiseCity.forEach((item:any)=>{
      if(item.state==selectedState){
        console.log(item.city);
        this.cityList=item.city;
      }
    });
  }
  onSelect(event:any){
//     if (event.target.files.length > 0) {
    const file = event.target.files[0];
    console.log(file);
     this.myForm.patchValue({
    file: file
  });

}
addEmails(){
if(AppComponent.count<=5){ 
this.alternativeEmails.push(this.fBuilder.control(''));
console.log('Add Emails');
}else{
  alert('Maximum limit Cross...!');
  AppComponent.count--;
}
 AppComponent.count++;
}
removeEmails(i:number){
this.alternativeEmails.removeAt(i);
console.log('Remove Email');
AppComponent.count--;
}  
  submit(){
   console.log(this.myForm.value); 
  }
}
