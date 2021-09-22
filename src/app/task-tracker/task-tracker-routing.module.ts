import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskTrackerHomeComponent } from './task-tracker-home/task-tracker-home.component';


const routes: Routes = [
  {
    path: '',
    component: TaskTrackerHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskTrackerRoutingModule { }