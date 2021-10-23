import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import ToDo from 'src/app/components/todo/Todo';
import { ToggleService } from 'src/app/services/toggle.service';
import { TaskObsStore } from '../state/task-obs-state.service';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.css']
})
export class TaskHomeComponent implements OnInit {
  isRightEnabled : Boolean = false;
  toggle$! : Observable<any>;
  constructor(public todoStore : TaskObsStore,  private toggleService : ToggleService) {
    
   }

  ngOnInit(): void {
    // this.isRightEnabled = this.toggleService.checkToggle("Test");
    
      this.toggleService.toggle$.subscribe(result => {
      //this.toggleService.getToggleObs().subscribe(result => {
      console.log(result)
      this.isRightEnabled = result.filter(x => x.name === "Test")[0]?.enabled
    })
  }

  addTodo(){
    let newTodo : ToDo = { id : 4, title : "add new item"};
    this.todoStore.addTodo(newTodo)
  }

  deleteTodo() {
    this.todoStore.deleteTodo(1);
  }

}
