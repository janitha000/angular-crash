import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskHomeComponent } from './task-home/task-home.component';
import { TaskObsRoutingModule } from './task-obs-routing.module';
import { TaskRightComponent } from './task-right/task-right.component';



@NgModule({
  declarations: [
    TaskHomeComponent,
    TaskRightComponent
  ],
  imports: [
    CommonModule,
    TaskObsRoutingModule
  ]
})
export class TaskObsModule { }
