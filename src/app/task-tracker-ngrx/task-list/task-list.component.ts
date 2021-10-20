import { Component, OnInit } from '@angular/core';
import { TaskN } from '../task-ngrx.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks! : TaskN[];

  constructor(private taskService : TaskService) { }

  ngOnInit(): void {
    this.taskService.getTaskList().subscribe(data => {
      this.tasks = data;
      console.log(this.tasks)
    })
  }

}
