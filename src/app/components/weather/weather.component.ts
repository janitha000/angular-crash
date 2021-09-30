import { Component, OnInit } from '@angular/core';
import { Weather } from './weather';
import { WeatherService } from './weather.service';
import { map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weatherInfomation!: Weather[];
  constructor(private weatherService : WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getWeatherInformation().pipe(
      tap(n => { console.log(n)}),
      map(data => {
        for(let item of data){
          item.tempreture = `The tempreture in C is ${item.temperatureC}`
        }
        return data;
      })
    ).subscribe((data) => {
      this.weatherInfomation = data;
    },
    (error) => {
      console.log(error);
      throw error;
    });
  }

}
