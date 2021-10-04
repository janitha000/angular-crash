import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import ToDo from './Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos : ToDo[] = [
    new ToDo(1, 'title1'),
    new ToDo(2, 'title2'),
    new ToDo(3, 'title3'),
    
  ]

  private _todo = new BehaviorSubject<ToDo[]>(this.todos);
  readonly todos$ = this._todo.asObservable();

  readonly time = new Observable<string>(observer => {
    setInterval(() => observer.next(new Date().toString()), 1000)
  })

  readonly timeS = new Subject<string>();
  


  
  constructor() { 
    setInterval(() => this.timeS.next(new Date().toString()), 1000)
  }

  addTodo(item : ToDo){
    this.todos.push(item);
    this._todo.next(Object.assign([], this.todos));
  }
}
