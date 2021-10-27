import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskTrackerModule } from './task-tracker/task-tracker.module';
import { HomeComponent } from './components/home/home.component';
import { WeatherComponent } from './components/weather/weather.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlobalInterceptor } from './GlobalInterceptor';
import { LoginComponent } from './components/login/login.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { TodoComponent } from './components/todo/todo.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { counterReducer } from './store/reducers/counter.reducer';
import { CountComponent } from './components/counter/count/count.component';
import { booksReducer } from './store/reducers/books.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffects } from './store/effects/books.effects';
import { metaReducers, reducers } from './store/reducers/reducer';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { TaskTrackerNgrxModule } from './task-tracker-ngrx/task-tracker-ngrx.module';
import {CheckboxModule} from 'primeng/checkbox';
import {CardModule} from 'primeng/card';
import { ToDoState } from './ngsx-store/todo.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { CommonModule } from '@angular/common';
import { TodoNgsxComponent } from './components/todo-ngsx/todo-ngsx.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherComponent,
    LoginComponent,
    ForbiddenComponent,
    TodoComponent,
    CountComponent,
    TodoNgsxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TaskTrackerModule,
    TaskTrackerNgrxModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // StoreModule.forRoot({
    //   count : counterReducer, 
    //   books : booksReducer
    // }),
    EffectsModule.forRoot([BooksEffects]),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [] ,
    StoreRouterConnectingModule.forRoot(),
    CheckboxModule,
    CardModule,
    NgxsModule.forRoot([
      ToDoState
    ], 
    {
      developmentMode: !environment.production
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    CommonModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : GlobalInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
