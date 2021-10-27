import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ToDoState } from 'src/app/ngsx-store/todo.state';
import {ToDoActions } from '../../ngsx-store/todo.actions'
import ToDo from '../todo/Todo';

@Component({
  selector: 'app-todo-ngsx',
  templateUrl: './todo-ngsx.component.html',
  styleUrls: ['./todo-ngsx.component.css']
})
export class TodoNgsxComponent implements OnInit {
  //todos$!: Observable<ToDo[]>;
  @Select(ToDoState.getToDos) todos$!: Observable<ToDo[]>;

  constructor(private store : Store) { 
    //this.todos$  = this.store.select(state => state.todos.todos);
    
  }

  ngOnInit(): void {
    this.store.dispatch(new ToDoActions.GetTodosAPI())
  }

  AddToDo(){
    this.store.dispatch(new ToDoActions.AddToDo({id : 1, title : "Test Title"}) )
  }

  RemoveToDo(){
    this.store.dispatch(new ToDoActions.RemoveToDo(1))
  }

}
