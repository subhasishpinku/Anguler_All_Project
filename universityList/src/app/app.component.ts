import { Component, OnInit } from '@angular/core';
import { UniversityApiService } from './university-api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'universityList';
  public uList:any=[];
  public page:number = 1;
  public sList:any=[];
  public shortValue:any = '';
  constructor(private uService:UniversityApiService){}
  ngOnInit(): void{
    let data = this.uService.getInfo();
    console.log(data);
    data.subscribe((res)=>{
      console.log(res);
      this.uList=res;
      console.log("this.uList"+this.uList);
      let stateList = this.uList.map((item:any)=>{
          return item['state-province'];
      });
      console.log("StateList"+stateList);
      let s1List = stateList.filter((item:any)=>{
       return item!=null;
      });
      console.log("s1List"+s1List);
      let finalList = s1List.filter((item:any,pos:any,self:any)=>{
      return self.indexOf(item)==pos;
      });
      console.log("finalList"+finalList);
      this.sList = finalList;
    })
  }
  short(o1:any){
    this.shortValue = o1.value;
    console.log("shortValue"+this.shortValue);

  }
   ChangeColor(index:any){
    let i = index;
    let tableColors:any = ["table-primary","table-secondary","table-success","table-danger","table-warning","table-info"];
    let l = tableColors.length;
    if(i<l){
      return tableColors[i];
    } else if(l == i){
      return tableColors[0];
    }else {
      let mod = i%l;
      return tableColors[mod];
    }
   }
  
}
