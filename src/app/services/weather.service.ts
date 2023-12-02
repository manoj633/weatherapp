import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
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

  getWeatherDataByCords(lat: number, long: number): Observable<WeatherData> {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('lat', lat);
    searchParams = searchParams.append('lon', long);
    searchParams = searchParams.append('units', 'metric');
    searchParams = searchParams.append('appid', '1afe03d3bafd98b815af4850f400cb7d');
    return this.http.get<WeatherData>('https://api.openweathermap.org/data/2.5/weather', {
      params: searchParams
    })
  }

  getGeoLocation() {
    if (navigator.geolocation) {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          position => {
            const coordinates = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            };
            resolve(coordinates);
          },
          error => {
            reject(error);
          }
        );
      });
    } else {
      return Promise.reject("Geolocation is not supported by this browser.");
    }
  }
}
