import { Component, OnInit } from '@angular/core';
import { FoodlistApiService } from './foodlist-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FoodList';
  public uList:any=[];
  public page:number = 1;
  public searchItem:string='';

  constructor(private uService:FoodlistApiService){}

  ngOnInit(): void{
    let data = this.uService.getInfo();
    console.log(data);
    data.subscribe((res:any)=>{
      console.log(res);
      this.uList=res.foodList;
    });
     
  }

}