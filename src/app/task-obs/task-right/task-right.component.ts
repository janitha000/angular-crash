import { Component, OnInit } from '@angular/core';
import { ToggleService } from 'src/app/services/toggle.service';
import { TaskObsStore } from '../state/task-obs-state.service';

@Component({
  selector: 'app-task-right',
  templateUrl: './task-right.component.html',
  styleUrls: ['./task-right.component.css']
})
export class TaskRightComponent implements OnInit {

  constructor(public todoStore : TaskObsStore) { }

  ngOnInit(): void {
    
  }

}
