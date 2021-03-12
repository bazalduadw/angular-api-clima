import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  

  apiKey = '21eab5726e93a0fe47e55b5e24df3ee3'
  URI: string = '';

  constructor(private http: HttpClient) { 
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&q=`
  }


  getWeather(ciudadNombre: string, paisCodigo: string) {
    return this.http.get(`${this.URI}${ciudadNombre},${paisCodigo}`)
  }


}


