import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {
  public component3Data:any='';
  constructor(private DataSharing:DataService) { 
  this.DataSharing.SharingData1.subscribe((res:any)=>{
    console.log(res);
    this.component3Data=res;
  })
  }
  ngOnInit(): void {
  }

}
