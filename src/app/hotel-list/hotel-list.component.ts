import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IHotel } from '../interfaces/hotel.interface';
import { Observable } from 'rxjs';
import { HotelsService } from '../services/hotels.service';
import { map } from 'rxjs/operators';
import { FavHotelsService } from '../services/favhotels.service';

@Component({
  selector: 'app-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class ListComponent {
  @Input()
  public searchText: string;

  @Input()
  public displayStars: number;

  // @Output()
  // public hotelSelected: EventEmitter<number> = new EventEmitter();

  // @Output()
  // public hotelFav: EventEmitter<number> = new EventEmitter();

  // public selectHotel(id: number): void {
  //   this.hotelSelected.emit(id);
  // }

  public hotels$: Observable<IHotel[]>;
  public currentHotel$: Observable<IHotel>;

  public constructor(
    private _hotelsService: HotelsService,
    private _favHotelsService: FavHotelsService
  ) {
    this.hotels$ = this._hotelsService.getProducts();
    this.currentHotel$ = this._hotelsService.getProducts().pipe(
        map((items: IHotel[]) => {
          return items[0];
        })
      );
  }

  public addHotelToFav(hotel: IHotel): void {
    event.stopPropagation();
    this._favHotelsService.addHotelToFav(hotel);
  }

}
