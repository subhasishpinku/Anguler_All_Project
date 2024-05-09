import { Component, OnInit } from '@angular/core';

// Importing data service here :
import { DataService } from '../data.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor(private DataSharing:DataService) { }

  ngOnInit(): void {
  }
  onSubmit(data:any){
  this.DataSharing.SharingData.next(data.value);
  }
}
