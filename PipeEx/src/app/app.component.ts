import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PipeEx';
  public searchedData:string='';
  public foodItems=[
    {'food_id':1001,'food': 'Chicken Biriyani','price':100, 'img':'./assets/foods/chicken_biriyani.jpg'},
    {'food_id':1002,'food': 'Mutton Biriyani','price':200,'img':'./assets/foods/mutton_biriyani.webp'},
    {'food_id':1003,'food': 'Alu Biriyani','price':300,'img':'./assets/foods/alu_biriyani.jpg'},
    {'food_id':1004,'food': 'Fried Rice','price':500,'img':'./assets/foods/fried_rice.jpg'},
    {'food_id':1005,'food': 'Egg Roll','price':600,'img':'./assets/foods/egg_roll.JPG'},
    {'food_id':1006,'food': 'Chicken Egg Roll','price':700,'img':'./assets/foods/egg_roll.JPG'},

  ];
  onAdd(){
    this.foodItems.push(
      {'food_id':1001,'food': 'Chicken Biriyani','price':100, 'img':'./assets/foods/chicken_biriyani.jpg'},

    );
    alert('One item added.......!')
  }
}
