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
  url?: string = '../../assets/images/cloudy/cloud1.webp';

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
  }

  onSubmit() {
    this.handleFormSubmission(this.city);
  }

  onSelect(cityName: string) {
    this.handleFormSelection(cityName);
  }

  public handleFormSubmission(cityName: string) {
    try {
      this.getWeatherData(cityName);
    } catch (error) {
      console.error('Error while getting weather data', error);
    }
  }

  private handleFormSelection(cityName: string) {
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

  private getRandomNumber = () => Math.floor((Math.random() * 8) + 1);

  private getURL(weatherDesc: string) {
    let x = this.getRandomNumber();

    switch (weatherDesc) {
      case 'clear sky':
      case 'Clear':
      case 'Windy':
        this.url = `../../assets/images/summer/summer${x}.webp`;
        break;
      case 'light rain':
      case 'moderate rain':
      case 'heavy intensity rain':
      case 'very heavy rain':
      case 'extreme rain':
      case 'freezing rain':
      case 'light intensity shower rain':
      case 'shower rain':
      case 'heavy intensity shower rain':
      case 'ragged shower rain':
      case 'light intensity drizzle':
      case 'drizzle':
      case 'heavy intensity drizzle':
      case 'light intensity drizzle rain':
      case 'drizzle rain':
      case 'heavy intensity drizzle rain':
      case 'shower rain and drizzle':
      case 'heavy shower rain and drizzle':
      case 'shower drizzle':
        this.url = `../../assets/images/rain/rain${x}.webp`;
        break;
      case 'mist':
      case 'Fog':
      case 'Haze':
        this.url = `../../assets/images/fog/fog${x}.webp`;
        break;
      case 'light snow':
      case 'snow':
      case 'heavy snow':
      case 'sleet':
      case 'light shower sleet':
      case 'shower sleet':
      case 'light rain and snow':
      case 'rain and snow':
      case 'light shower snow':
      case 'shower snow':
      case 'heavy shower snow':
        this.url = `../../assets/images/snow/snow${x}.webp`;
        break;
      case 'thunderstorm with light rain':
      case 'thunderstorm with rain':
      case 'thunderstorm with heavy rain':
      case 'light thunderstorm':
      case 'thunderstorm':
      case 'heavy thunderstorm':
      case 'ragged thunderstorm':
      case 'thunderstorm with light drizzle':
      case 'thunderstorm with drizzle':
      case 'thunderstorm with heavy drizzle':
        this.url = `../../assets/images/thunderstorm/thunder${x}.webp`;
        break;
      case 'few clouds':
      case 'scattered clouds':
      case 'broken clouds':
      case 'overcast clouds':
        this.url = `../../assets/images/cloudy/cloud${x}.webp`;
        break;
    }
    console.log(this.url);
  }
}
