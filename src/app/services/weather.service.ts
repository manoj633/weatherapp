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
    searchParams = searchParams.append('access_key', '8b61ff1300d89deb1a3e80f86c092d88');
    searchParams = searchParams.append('query', cityName);
    return this.http.get<WeatherData>('http://api.weatherstack.com/current', {
      params: searchParams
    })
  }
}
