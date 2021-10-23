import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import ToDo from 'src/app/components/todo/Todo';

@Injectable({
  providedIn: 'root'
})
export class TaskObsServiceService {
  todoItems : ToDo[] = [
    {
      id : 1,
      title : "test"
    },
    {
      id : 2,
      title : "test 1"
    },
    {
      id : 3,
      title : "test 2"
    }
  ]
  constructor() { }

  getTodoItems() {
    return of(this.todoItems);
  }

  addTodo(todo : ToDo){
    return of(todo);
  }
}
