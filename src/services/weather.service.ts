import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  URL='https://api.openweathermap.org/data/2.5/weather?q=';
  APIkey='d3c83df3c7907b318ceb87d68d953401' ;
  constructor(private http:HttpClient) { }

  fetchData(cityName:string){
    return this.http.get(`${this.URL}${cityName}&APPID=${this.APIkey}&units=metric`);
  }
}
