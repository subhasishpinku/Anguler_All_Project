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
  public TodoList:any=[];
  public startPage:number=1;
  public totalTodos:any='';
  public searchedTodo:any='';
  public newTodo:any=[];

  constructor(private tService:TodoApiService) { 
    this.newTodo=new TodoList('','',this.tService.getDate());
  }

  ngOnInit(): void {
    this.populateTodos();
  }

  populateTodos(){
    this.tService.getAllTods().subscribe((res:any)=>{
      // console.log(res);
      this.TodoList=res;
      console.log(this.TodoList);
      this.totalTodos=res.length;
    });
  }

  AddTodo(){
console.log(this.newTodo);
this.tService.AddNewTodo(this.newTodo).subscribe((res:any)=>{
   console.log(res);
   alert(res.msg);
   this.populateTodos();
  
});
this.newTodo.reset(this.newTodo);
  }
}
