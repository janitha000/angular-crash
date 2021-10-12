import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherComponent,
    LoginComponent,
    ForbiddenComponent,
    TodoComponent,
    CountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TaskTrackerModule,
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
    StoreRouterConnectingModule.forRoot()
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
