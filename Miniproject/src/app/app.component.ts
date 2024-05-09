import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DirectiveClass';
  public searchedFoodList:any=[];
  public selectedFoodItem:any=[];
  public foodItems=[
    {'food_id':1001,'food':'Chicken Biriyani','price':100},
    {'food_id':1002,'food':'Mutton Biriyani','price':200},
    {'food_id':1003,'food':'Alu Biriyani','price':90},
    {'food_id':1004,'food':'Fried Rice','price':80},
    {'food_id':1005,'food':'Egg Roll','price':80},
    {'food_id':1006,'food':'Chicken Egg Roll','price':90}

 ];
 onSearch(t1:any){
  if(t1.value.length>=3){
    console.log(t1.value);
    let data=t1.value;
    let searchedFoodItem=this.foodItems.filter((item)=>{
     return item.food.toLocaleLowerCase().includes(data.toLocaleLowerCase());
    });
    console.log(searchedFoodItem);
    this.searchedFoodList=searchedFoodItem;
  }
  
 }
 onSelect(f:any){
  console.log(f);
  let foodDetails=f;
  this.selectedFoodItem=foodDetails;
 }
}
