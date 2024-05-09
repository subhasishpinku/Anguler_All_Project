import { Injectable } from '@angular/core';
import { Subject,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Using Subject :
  // SharingData=new Subject();

  // Using BehaviorSubject: 
  // Here we need a sssign a initial value 0 :
  SharingData=new BehaviorSubject(0);
  SharingData1=new BehaviorSubject(0);
  constructor() { }
}
