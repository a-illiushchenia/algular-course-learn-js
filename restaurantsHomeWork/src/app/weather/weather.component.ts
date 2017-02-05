import {Component, OnInit, Input, Output} from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public temperature: number = 14;
  public waterTemperature: number = 20;

  @Input()
  public setWeather(hotelId: number): void{
    if(hotelId == 1){
      this.temperature = 14;
      this.waterTemperature = 20;
    }else if(hotelId == 2){
      this.temperature = 19;
      this.waterTemperature = 24;
    }else if(hotelId == 3){
      this.temperature = 22;
      this.waterTemperature = 15;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
