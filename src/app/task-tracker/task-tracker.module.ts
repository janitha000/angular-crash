import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './task/task.component';
import { ButtonComponent } from './button/button.component';
import { TaskTrackerHomeComponent } from './task-tracker-home/task-tracker-home.component';
import { TaskTrackerRoutingModule } from './task-tracker-routing.module';
import { AddTaskComponent } from './add-task/add-task.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    TasksComponent,
    TaskComponent,
    ButtonComponent,
    TaskTrackerHomeComponent,
    AddTaskComponent
  ],
  imports: [
    CommonModule,
    TaskTrackerRoutingModule,
    FormsModule
  ],
  exports: [
  ]
})
export class TaskTrackerModule { }
