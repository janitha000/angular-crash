import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TaskN } from '../task-ngrx.model';
import { filterCompletedTasks, retrieveTasksRequest } from '../task-store/actions/tasks.actions';
import { completedTasks, selectTasks } from '../task-store/selectors/tasks.selectors';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks! : TaskN[];
  tasks$! : Observable<TaskN[]>;
  filterEnabled : boolean = false;


  constructor(private taskStore : Store<TaskN[]>) {
    this.tasks$ = taskStore.pipe(select(selectTasks))
   }

  ngOnInit(): void {
    // this.taskService.getTaskList().subscribe(data => {
    //   this.tasks = data;
    //   console.log(this.tasks)
    // })

    this.taskStore.dispatch(retrieveTasksRequest())
  }

  onFilterChange() {
    if(this.filterEnabled)
      this.tasks$ = this.taskStore.pipe(select(completedTasks));
    else
      this.tasks$ = this.taskStore.pipe(select(selectTasks))
  }

}
