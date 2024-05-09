import { Component, OnInit } from '@angular/core';

// Import data service :
import { DataService } from '../data.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  public component2Data:any='';
  constructor(private DataSharing:DataService) { 
  this.DataSharing.SharingData.subscribe((res:any)=>{
    console.log(res);
    this.component2Data=res;
  })
  }
  onSubmit(data:any){
    this.DataSharing.SharingData1.next(data.value);
    }
  ngOnInit(): void {
  }

}
