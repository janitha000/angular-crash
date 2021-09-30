import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuardService } from './auth-guard.service';
import { HomeComponent } from './components/home/home.component';
import { WeatherComponent } from './components/weather/weather.component';

const routes: Routes = [
  { 
    path: 'tasks', loadChildren: () => import('./task-tracker/task-tracker.module').then(m => m.TaskTrackerModule)
  },
  {
    path: 'weather', component : WeatherComponent
  },
  {
    path: '', component: HomeComponent, canActivate: [AuthGuardService], data: {
      expectedRole : 'Admin'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
