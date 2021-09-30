import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Weather } from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  baseUrl : string = 'https://localhost:5001/';

  constructor(private http: HttpClient) { }

  getWeatherInformation() : Observable<Weather[]> {
    return this.http.get<Weather[]>(this.baseUrl + 'WeatherForecast')
      .pipe(
        catchError((err) => {
          console.log(err);
          return throwError(err);
        })
      )
  }
}
