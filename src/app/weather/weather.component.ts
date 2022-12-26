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
        this.getURL(response.weather[0].description);
        response.dt = new Date();
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
    if (weatherDesc === 'clear sky' ||
      weatherDesc === 'Clear' ||
      weatherDesc === 'Windy') {
      this.url = "../../assets/images/summer/summer" + x + ".jpg";
    }

    if (weatherDesc === 'light rain' ||
      weatherDesc === 'moderate rain' ||
      weatherDesc === 'heavy intensity rain' ||
      weatherDesc === 'very heavy rain' ||
      weatherDesc === 'extreme rain' ||
      weatherDesc === 'freezing rain' ||
      weatherDesc === 'light intensity shower rain' ||
      weatherDesc === 'shower rain' ||
      weatherDesc === 'heavy intensity shower rain' ||
      weatherDesc === 'ragged shower rain' ||
      weatherDesc === 'light intensity drizzle' ||
      weatherDesc === 'drizzle' ||
      weatherDesc === 'heavy intensity drizzle' ||
      weatherDesc === 'light intensity drizzle rain' ||
      weatherDesc === 'drizzle rain' ||
      weatherDesc === 'heavy intensity drizzle rain' ||
      weatherDesc === 'shower rain and drizzle' ||
      weatherDesc === 'heavy shower rain and drizzle' ||
      weatherDesc === 'shower drizzle') {
      this.url = "../../assets/images/rain/rain" + x + ".jpg";
    }

    if (weatherDesc === 'mist' || weatherDesc === 'Fog' || weatherDesc === 'Haze') {
      this.url = "../../assets/images/fog/fog" + x + ".jpg";
    }

    if (weatherDesc === 'light snow' ||
      weatherDesc === 'Snow' ||
      weatherDesc === 'Heavy snow' ||
      weatherDesc === 'Sleet' ||
      weatherDesc === 'Light shower sleet' ||
      weatherDesc === 'Shower sleet' ||
      weatherDesc === 'Light rain and snow' ||
      weatherDesc === 'Rain and snow' ||
      weatherDesc === 'Light shower snow' ||
      weatherDesc === 'Shower snow' ||
      weatherDesc === 'Heavy shower snow') {
      this.url = "../../assets/images/snow/snow" + x + ".jpg";
    }

    if (weatherDesc === 'thunderstorm with light rain' ||
      weatherDesc === 'thunderstorm with rain' ||
      weatherDesc === 'thunderstorm with heavy rain' ||
      weatherDesc === 'light thunderstorm' ||
      weatherDesc === 'thunderstorm' ||
      weatherDesc === 'heavy thunderstorm' ||
      weatherDesc === 'ragged thunderstorm' ||
      weatherDesc === 'thunderstorm with light drizzle' ||
      weatherDesc === 'thunderstorm with drizzle' ||
      weatherDesc === 'thunderstorm with heavy drizzle') {
      this.url = "../../assets/images/thunderstorm/thunder" + x + ".jpg";
    }

    if (weatherDesc === 'few clouds' ||
      weatherDesc === 'scattered clouds' ||
      weatherDesc === 'broken clouds' ||
      weatherDesc === 'overcast clouds') {
      this.url = "../../assets/images/cloudy/cloud" + x + ".jpg";
    }
    console.log(this.url);
  }
}
