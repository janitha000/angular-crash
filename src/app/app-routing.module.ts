import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  { 
    path: 'tasks', loadChildren: () => import('./task-tracker/task-tracker.module').then(m => m.TaskTrackerModule)
  },
  {
    path: '', component: AppComponent, canActivate: [AuthGuardService], data: {
      expectedRole : 'Admin'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
