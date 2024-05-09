import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-compo',
  templateUrl: './child-compo.component.html',
  styleUrls: ['./child-compo.component.css']
})
export class ChildCompoComponent implements OnInit,OnChanges{
  @Input ('ParentData') public data:any=[];
//Declare EventEmitter Class...
@Output()
public ChildEvent = new EventEmitter();
  constructor() { 
    console.log('Child compo constructor called....');
  }

  ngOnInit(): void {
    console.log('Child compo initilized.................');

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes');

  }
  OnSendAgain(n1:any,e1:any){
    console.log('Button clicked....');
    console.log(n1.value);
    console.log(e1.value);
    this.ChildEvent.emit(
    {
      'm11':n1.value,
      'm22':e1.value
    }//$event ['m11':n1.value, 'm2':e1.value]
    )
    console.log('Event is trigered.....');
  }

}
