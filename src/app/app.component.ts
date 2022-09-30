import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weatherapp';
  cityName = 'landon';
  weatherData?: WeatherData;
  minTemperature?: number;
  maxTemperrature?: number;
  wind?: number;
  humidity?: number;
  cold?: boolean;
  temperature?: number;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.weatherService.getWeatherData(this.cityName).subscribe((response) => {
      this.minTemperature = response.main.temp_min;
      this.maxTemperrature = response.main.temp_max;
      this.humidity = response.main.humidity;
      this.wind = response.wind.speed;
      this.cold = this.minTemperature < 15;
      this.temperature = response.main.temp;
    });
  }



}
