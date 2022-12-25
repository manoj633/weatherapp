import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData> {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('appid', '1afe03d3bafd98b815af4850f400cb7d');
    searchParams = searchParams.append('q', cityName);
    searchParams = searchParams.append('units', 'metric');
    return this.http.get<WeatherData>('https://api.openweathermap.org/data/2.5/weather', {
      params: searchParams
    })
  }
}
