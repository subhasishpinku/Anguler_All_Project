import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DirectiveClass';
  public searchFoodList:any=[];
  public selectedFoodItem:any=[];
  public foodItems=[
    {'food_id':1001,'food': 'Chicken Biriyani','price':100, 'img':'./assets/foods/chicken_biriyani.jpg'},
    {'food_id':1002,'food': 'Mutton Biriyani','price':200,'img':'./assets/foods/mutton_biriyani.webp'},
    {'food_id':1003,'food': 'Alu Biriyani','price':300,'img':'./assets/foods/alu_biriyani.jpg'},
    {'food_id':1004,'food': 'Fried Rice','price':500,'img':'./assets/foods/fried_rice.jpg'},
    {'food_id':1005,'food': 'Egg Roll','price':600,'img':'./assets/foods/egg_roll.JPG'},
    {'food_id':1006,'food': 'Chicken Egg Roll','price':700,'img':'./assets/foods/egg_roll.JPG'},

  ];
  onSearch(t1:any){
    if(t1.value.length>3){
    console.log(t1.value);
    let data=t1.value;
    let searchFoodItem = this.foodItems.filter((item)=>{
    return item.food.toLocaleLowerCase().includes(data.toLocaleLowerCase());
    });
    console.log(searchFoodItem);
    this.searchFoodList=searchFoodItem;
    }
    
  } 
  onSelect(f:any){
    console.log(f);
    let foodDitails =f;
    this.selectedFoodItem=foodDitails;
  }

}
