import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FoodlistApiService {

  constructor(private http:HttpClient) {}
    
    getInfo(){
      return this.http.get('https://rest-food-api.glitch.me/api/foods')  
    }
   

}