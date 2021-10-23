import { Component, OnInit } from '@angular/core';
import ToDo from 'src/app/components/todo/Todo';
import { TaskObsStore } from '../state/task-obs-state.service';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.css']
})
export class TaskHomeComponent implements OnInit {

  constructor(public todoStore : TaskObsStore) { }

  ngOnInit(): void {
  }

  addTodo(){
    let newTodo : ToDo = { id : 4, title : "add new item"};
    this.todoStore.addTodo(newTodo)
  }

  deleteTodo() {
    this.todoStore.deleteTodo(1);
  }

}
