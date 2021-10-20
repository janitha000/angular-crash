import { Component, Input, OnInit } from '@angular/core';
import { TaskN } from '../task-ngrx.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task! : TaskN;
  styleOBJ = {'background':'green'};

  constructor() { }

  ngOnInit(): void {
    if(!this.task.isCompleted)
      this.styleOBJ.background = 'red';

  }  

}
