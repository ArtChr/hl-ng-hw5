import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IHotel } from '../interfaces/hotel.interface';
import { Observable } from 'rxjs';
import { HotelsService } from '../services/hotels.service';
import { map } from 'rxjs/operators';
import { FavHotelsService } from '../services/favhotels.service';

@Component({
  selector: 'app-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss'],
})
export class ListComponent {

  @Input()
  public searchText: string;

  @Input()
  public displayStars: number;

  public hotels$: Observable<IHotel[]>;
  public currentHotel$: Observable<IHotel>;

  public constructor(
    private _hotelsService: HotelsService,
    private _favHotelsService: FavHotelsService
  ) {
    this.hotels$ = this._hotelsService.getHotels();
    this.currentHotel$ = this._hotelsService.getHotels().pipe(
      map((items: IHotel[]) => {
        return items[0];
      })
    );
  }

  public addHotelToFav(hotel: IHotel): void {
    event.stopPropagation();
    this._favHotelsService.addHotelToFav(hotel);
  }

  public selectHotel(hotel: IHotel): void {
    this._hotelsService.setCurrentHotel(hotel);
  }

}
