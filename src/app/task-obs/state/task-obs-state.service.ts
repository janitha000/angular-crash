import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import ToDo from 'src/app/components/todo/Todo';
import { TaskObsServiceService } from './task-obs-service.service';


@Injectable({
  providedIn: 'root'
})
export class TaskObsStore {
  initialState : ToDo[] = [];
  private _todos : BehaviorSubject<ToDo[]> = new BehaviorSubject(this.initialState);

  public readonly todos$ : Observable<ToDo[]> = this._todos.asObservable();

  constructor(private service : TaskObsServiceService) { 
    this.loadInitialData();
  }

  loadInitialData() {
    this.service.getTodoItems().subscribe(data => {
      this._todos.next(data);
    },
    error => console.log("error while fetching todo list items"))
  }

  addTodo(newTodo : ToDo)  {
    let obs$ = this.service.addTodo(newTodo);

    obs$.subscribe(res => {
      this._todos.next([...this._todos.getValue(), newTodo]);
    })

    return obs$;
  }

  deleteTodo(id : number){
    let todos = this._todos.getValue();
    let newTodos = todos.filter(x => x.id !== id);
    this._todos.next(newTodos);
  }
}
