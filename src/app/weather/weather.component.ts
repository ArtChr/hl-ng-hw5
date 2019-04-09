import { Component, Input } from '@angular/core';
import { IWeather, IHotel } from '../interfaces/hotel.interface';
import { HotelsService } from '../services/hotels.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  public weather: IWeather;
  public hotel: IHotel;

  public constructor(
    private _hotelsService: HotelsService,
  ) { }

  public ngOnInit(): void {
    this.hotel = this._hotelsService.getCurrentHotel();
    this.weather = this.hotel.weather;

  }
}
