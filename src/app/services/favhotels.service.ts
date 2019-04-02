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

  public addHotelToFav(hotelId: number) {
    const hotel$: Observable<IHotel[]> = this._hotelsService.getProducts().pipe(
      map((items: IHotel[]) => {
        return items.filter((item: IHotel) => item.id === hotelId);
      })
    );

    hotel$.subscribe(hotel => {
      this.selectedHotel = hotel[0];
      this._favHotels.push(this.selectedHotel);
    });
  }

  public getFavHotels(): IHotel[] {
    return this._favHotels;
  }

}
