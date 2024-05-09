import { Injectable } from '@angular/core';
//Import HttClient :
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TodoApiService {
  [x: string]: any;

  constructor(private http:HttpClient) { }

  // Geeting All Todos From DataBase
  getInfo(){
    return this.http.get('https://foodrestro.glitch.me/api/foods');
  }

}
