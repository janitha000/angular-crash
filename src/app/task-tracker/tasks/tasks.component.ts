import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/models/Task';
import { TaskService } from '../task.service';
import { UiService } from '../ui.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks!: Task[];
  showAddTask : boolean = false;
  subscription! : Subscription;
  constructor(private taskService : TaskService, private uiService : UiService) { }

  ngOnInit(): void {
    this.taskService.getTaskFromLocal().subscribe(data => {
      console.log(data);
      this.tasks = data;
    })

    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
  }

  onTaskDelete(task : Task){
    this.taskService.deleteTaskLocal(task).subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== task.id);
    })
    
  }

  onD(task : Task) {
    this.taskService.deleteTaskLocal(task).subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== task.id);
    })
  }

  onTaskToggle(task: Task){
    task.reminder = !task.reminder;
  }

  onTaskAdd(task: Task){
    this.tasks = [...this.tasks, task]
  }

}
