import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { WeatherData } from '../models/weather.model';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weatherDataO$?: Observable<WeatherData>;
  cityName: string = 'Shivamogga';
  city = this.cityName;
  cityList = ['Bangalore', 'Hubli', 'Mangalore', 'Mysore'];
  selected?: boolean;
  url?: string;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.selected = false;
  }

  onSubmit() {
    if (!this.selected) {
      this.getWeatherData(this.city);
      this.selected = false;
    }
  }

  onSelect(cityName: string) {
    this.getWeatherData(cityName);
    this.selected = true;
  }

  private getWeatherData(cityName: string) {
    this.weatherDataO$ = this.weatherService.getWeatherData(cityName).pipe(
      map(response => {
        this.getURL(response.current.weather_descriptions[0]);
        return response;
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
      weatherDesc === 'Moderate or heavy rain shower') {
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
  }
}
