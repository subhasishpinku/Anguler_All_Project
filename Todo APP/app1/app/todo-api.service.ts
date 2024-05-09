import { Injectable } from '@angular/core';
//Import HttClient :
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  constructor(private http:HttpClient) { }

  getDate(){
    let dt=new Date();
    let d=dt.getDate();
    let m=dt.getMonth()+1;
    let y=dt.getFullYear();
    let h=dt.getHours();
    let min=dt.getMinutes();
    let sec=dt.getSeconds();

    let currentTimeStamp=d+'-'+m+'-'+y+' '+h+':'+min+':'+sec;
    return currentTimeStamp;
  }
  // Geeting All Todos From DataBase
  getAllTods(){
    return this.http.get('https://todolist-api.glitch.me/api/todos');
  }

  // Adding new Todo in DataBase:
  AddNewTodo(data:any){
    return this.http.post('https://todolist-api.glitch.me/api/todo',data)
  }
}
