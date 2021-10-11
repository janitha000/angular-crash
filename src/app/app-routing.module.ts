import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuardService } from './auth-guard.service';
import { CountComponent } from './components/counter/count/count.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { TodoComponent } from './components/todo/todo.component';
import { WeatherComponent } from './components/weather/weather.component';

const routes: Routes = [
  { 
    path: 'tasks', loadChildren: () => import('./task-tracker/task-tracker.module').then(m => m.TaskTrackerModule)
  },
  {
    path: 'weather', component : WeatherComponent
  },
  {
    path: 'login', component : LoginComponent
  },
  {
    path: 'todo', component: TodoComponent
  },
  {
    path: 'forbidden', component: ForbiddenComponent
  },
  {
    path: 'counter', component: CountComponent
  },
  {
    path: '', component: HomeComponent, canActivate: [AuthGuardService], data: {
      roles : 'Admin'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
