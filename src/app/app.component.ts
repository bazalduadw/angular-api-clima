import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  weather;
  
  constructor(private weatherServices: WeatherService){

  }

  ngOnInit() {
    
  }

  getWeather(ciudadNombre: string, paisCodigo: string){
    this.weatherServices.getWeather(ciudadNombre, paisCodigo)
      .subscribe(
        res => this.weather = res,
        err => console.log(err)
      )
  }

  submitLocation(ciudadNombre: HTMLInputElement, paisCodigo: HTMLInputElement){

    if(ciudadNombre.value && paisCodigo){
      this.getWeather(ciudadNombre.value, paisCodigo.value)
      ciudadNombre.value = '';
      paisCodigo.value = '';
    } else {
      alert("Valores incompletos o no validos")
    }

    

    
    ciudadNombre.focus();

    return false;
  }

}
