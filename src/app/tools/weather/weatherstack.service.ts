import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherStackService {

  constructor(private http: HttpClient) { }

  getWeather(location): Observable<object> {
    return this.http
      .get('http://api.weatherstack.com/current?access_key=eef0c0b55a2dc2faa3a144be986f0465&query=' + location);
  }
}
