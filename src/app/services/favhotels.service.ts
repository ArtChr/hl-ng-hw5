import { Injectable } from '@angular/core';
import { IHotel } from '../interfaces/hotel.interface';
import { Observable } from 'rxjs';
import { HotelsService } from './hotels.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FavHotelsService {

  public selectedHotel: IHotel;
  public hotels$: Observable<IHotel[]>;
  public _favHotels: IHotel[] = [];

  public constructor(
    private _hotelsService: HotelsService
  ) { }

  public getFavHotels(): IHotel[] {
    return this._favHotels;
  }

  public addHotelToFav(hotel: IHotel): void {
    if (!this._favHotels.includes(hotel)) {
      this._favHotels.push(hotel);
    }
  }

  public removeHotelFromFav(hotel: IHotel): void {
    this._favHotels.splice(this._favHotels.indexOf(hotel), 1);
  }

}
