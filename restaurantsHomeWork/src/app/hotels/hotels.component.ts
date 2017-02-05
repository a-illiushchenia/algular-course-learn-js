import {Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  public dateFirst: {temperature: number, waterTemperature} = {temperature: 14, waterTemperature: 20};
  public dateSecond: {temperature: number, waterTemperature} = {temperature: 18, waterTemperature: 22};
  public dateThird: {temperature: number, waterTemperature} = {temperature: 5, waterTemperature: 3};

  @Output()
  public clickOnHotel: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public changeInfo(hotelNum: number): void{
    this.clickOnHotel.next(hotelNum);
  }
}
