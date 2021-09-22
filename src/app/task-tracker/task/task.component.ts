import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;
  @Output() onTaskDelete: EventEmitter<Task> = new EventEmitter();
  @Output() onTaskToggle: EventEmitter<Task> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: Task) {
    this.onTaskDelete.emit(task);
  }

  onToggleRemindder(){
   this.onTaskToggle.emit(this.task);
  }

}
