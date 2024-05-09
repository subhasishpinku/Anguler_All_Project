import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  submitForm(formData:any){
    return this.http.post('http://localhost:3000/submit',formData);
 }

}
