import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {map} from 'rxjs/operators'
import { Task } from '../models/Task';
import { TasksComponent } from './tasks/tasks.component';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  tasks : Task[] = [
    {
      id: 1,
      day: '2020/10/12',
      reminder: true,
      text: "Feed cat"
    },
    {
      id: 2,
      day: '2020/11/12',
      reminder: true,
      text: "Get Grocery"
    },
    {
      id: 3,
      day: '2020/11/12',
      reminder: false,
      text: "Clean Home"
    }
  ]

  constructor() { }

  getTaskFromLocal() : Observable<Task[]> {
    return of(this.tasks);
  }

  deleteTaskLocal(task: Task) : Observable<Task>{
    return of(task);
  }
}
