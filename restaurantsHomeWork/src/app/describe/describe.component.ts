import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-describe',
  templateUrl: './describe.component.html',
  styleUrls: ['./describe.component.css']
})
export class DescribeComponent implements OnInit {

  public imageSrc: string = 'app/images/b1.jpg';

  constructor() { }

  ngOnInit() {
  }

  @Input()
  public setDescribe(hotelId: number): void{
    if(hotelId == 1){
      this.imageSrc = 'app/images/b1.jpg';
    }else if(hotelId == 2){
      this.imageSrc = 'app/images/b2.jpg';
    }else if(hotelId == 3){
      this.imageSrc = 'app/images/b3.jpg';
    }
  }

}
