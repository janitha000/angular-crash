import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TaskTrackerNgrxRoutingModule } from './task-tracker-ngrx-routing.module';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task/task.component';
import {CheckboxModule} from 'primeng/checkbox';
import { FormsModule }    from '@angular/forms';
import {CardModule} from 'primeng/card';



@NgModule({
  declarations: [
    HomeComponent,
    TaskListComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    TaskTrackerNgrxRoutingModule,
    CheckboxModule,
    FormsModule,
    CardModule
  ]
})
export class TaskTrackerNgrxModule { }
