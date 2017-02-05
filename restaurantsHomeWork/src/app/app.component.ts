import { Component, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import {WeatherComponent} from '../app/weather/weather.component'
import {DescribeComponent} from '../app/describe/describe.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  @ViewChild('appWeather', {read:WeatherComponent})
  public appWeather: WeatherComponent;

  @ViewChild('appDescribe', {read:DescribeComponent})
  public appDescribe: DescribeComponent;

  public clickOnHotelChild(value: number): void{
    this.appWeather.setWeather(value);
    this.appDescribe.setDescribe(value);
  }
}
