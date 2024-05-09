import { Injectable } from '@angular/core';
//import httpClient for appi facth:
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UniversityApiService {

  constructor(private http:HttpClient) {}
    
    getInfo(){
      return this.http.get('http://universities.hipolabs.com/search?country=india')
    }
   

}
