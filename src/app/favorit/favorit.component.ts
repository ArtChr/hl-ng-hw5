import { Component, OnInit } from '@angular/core';
import { IHotel } from '../interfaces/hotel.interface';
import { FavHotelsService } from '../services/favhotels.service';

@Component({
  selector: 'app-favorit',
  templateUrl: './favorit.component.html',
  styleUrls: ['./favorit.component.scss']
})
export class FavoritComponent implements OnInit {

  public favHotels: IHotel[];

  public constructor(
    private _favHotelsService: FavHotelsService
  ) {
  }

  public ngOnInit(): void {
    this.favHotels = this._favHotelsService.getFavHotels();
  }

  public removeHotelFromFav(hotel: IHotel): void {
    this._favHotelsService.removeHotelFromFav(hotel);
  }

}
