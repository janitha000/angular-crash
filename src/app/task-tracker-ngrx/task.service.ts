import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TaskN } from './task-ngrx.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  mockTasks : TaskN[] = [
    {
      id: 1,
      title: "Get Chicken",
      description: "Get chicken for sunday breakfirst",
      isCompleted: false,
      updatedAt : new Date()
    },
    {
      id: 2,
      title: "Get Tablets",
      description: "Get drugs for treatment",
      isCompleted: true,
      updatedAt : new Date()
    },
    {
      id: 1,
      title: "Get Apples",
      description: "Get apples for everyday use",
      isCompleted: false,
      updatedAt : new Date()
    }
  ]

  getTaskList() : Observable<TaskN[]>{
    return of(this.mockTasks);
  }
}


