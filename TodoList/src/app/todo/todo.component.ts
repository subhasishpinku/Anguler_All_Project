import { Component, OnInit } from '@angular/core';
import { TodoApiService } from '../todo-api.service';

// Import Todo Model :
import { TodoList } from './Model/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public uList:any=[];
  public startPage:number=1;
  public totalTodos:any='';
  public searchItem:string='';
  constructor(private tService:TodoApiService) { 
  }

  ngOnInit(): void {
    this.populateTodos();
  }

  populateTodos(){
    this.tService.getInfo().subscribe((res:any)=>{
      // console.log(res);
      this.uList=res;
      console.log(this.uList);
      this.totalTodos=res.length;
    });
  }

  
}
