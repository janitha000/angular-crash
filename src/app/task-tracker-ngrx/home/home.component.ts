import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TaskN } from '../task-ngrx.model';
import { filterCompletedTasks, retrieveTasksRequest } from '../task-store/actions/tasks.actions';
import { completedTasks, selectTasks } from '../task-store/selectors/tasks.selectors';

// interface AppState {
//   tasks : TaskN[]
// }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  filterEnabled: boolean = false;
  tasks$! : Observable<TaskN[]>;
  btnText : string = "Filter"
  
  constructor(private taskStore : Store<TaskN[]>) {
    this.tasks$ = taskStore.pipe(select(completedTasks));
   }

  ngOnInit(): void {
    this.tasks$.subscribe(data => console.log(data));
  }

  onFilterChange(){
    this.taskStore.dispatch(filterCompletedTasks({completed : this.filterEnabled}))
    // if(this.filterEnabled)
    // {
    //   console.log('filtering')
    //   this.tasks$ = this.taskStore.pipe(select(completedTasks))
    // }
      
  }

  onClick($event : any){
    console.log($event)
  }

}
