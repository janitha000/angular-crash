import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import ToDo from './Todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo$! : Observable<ToDo[]>;
  time$! : Observable<string>;
  timeS$! : Subject<string>;
  showTime : boolean = false;

  constructor(private todoService : TodoService) { }

  ngOnInit(): void {
    this.todo$ = this.todoService.todos$;
    this.time$ = this.todoService.time;
    this.timeS$ = this.todoService.timeS;
    console.log(this.todo$)
  }

  onClick() {
    this.todo$.subscribe(data => {
      console.log(data);
    })
  }

  onAdd() {
    this.todoService.addTodo(new ToDo(4, "title4"));
  }

  onAddTime() {
    this.showTime = !this.showTime;
  }
}
