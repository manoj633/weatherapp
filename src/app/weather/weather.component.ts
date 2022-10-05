import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of, Subject } from 'rxjs';
import { WeatherData } from '../models/weather.model';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weatherDataO$?: Observable<WeatherData>;
  loadingError$ = new Subject<boolean>();
  cityName: string = 'Shivamogga';
  city = this.cityName;
  cityList = ['Bangalore', 'Hubli', 'Mangalore', 'Mysore'];
  url?: string = '../../assets/images/cloudy/cloud1.jpg';

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
  }

  onSubmit() {
    this.getWeatherData(this.city);
  }

  onSelect(cityName: string) {
    this.getWeatherData(cityName);
  }

  private getWeatherData(cityName: string) {
    this.weatherDataO$ = this.weatherService.getWeatherData(cityName).pipe(
      map(response => {
        this.getURL(response.current.weather_descriptions[0]);
        return response;
      }),
      catchError((error) => {
        console.error('error loading the list of users', error);
        this.loadingError$.next(true);
        return of();
      })
    );
  }

  public getURL(weatherDesc: string) {
    let x = Math.floor((Math.random() * 8) + 1);
    if (weatherDesc === 'Sunny' ||
      weatherDesc === 'Clear' ||
      weatherDesc === 'Windy') {
      this.url = "../../assets/images/summer/summer" + x + ".jpg";
    }

    if (weatherDesc === 'Rain' ||
      weatherDesc === 'Rainy' ||
      weatherDesc === 'Drizzle' ||
      weatherDesc === 'Monsoon' ||
      weatherDesc === 'Light rain shower' ||
      weatherDesc === 'Moderate or heavy rain shower' ||
      weatherDesc === 'Patchy rain possible') {
      this.url = "../../assets/images/rain/rain" + x + ".jpg";
    }

    if (weatherDesc === 'Foggy' || weatherDesc === 'Fog') {
      this.url = "../../assets/images/fog/fog" + x + ".jpg";
    }

    if (weatherDesc === 'Snow' ||
      weatherDesc === 'Frost' ||
      weatherDesc === 'Blizzard') {
      this.url = "../../assets/images/snow/snow" + x + ".jpg";
    }

    if (weatherDesc === 'Stormy' ||
      weatherDesc === 'Thunder' ||
      weatherDesc === 'Thunderstorm' ||
      weatherDesc === 'Thunderstorm, Light Rain With Thunderstorm') {
      this.url = "../../assets/images/thunderstorm/thunder" + x + ".jpg";
    }

    if (weatherDesc === 'Cloudy' ||
      weatherDesc === 'Cloud' ||
      weatherDesc === 'Partly cloudy' ||
      weatherDesc === 'Overcast') {
      this.url = "../../assets/images/cloudy/cloud" + x + ".jpg";
    }
    console.log(this.url);
  }
}
