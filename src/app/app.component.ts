import { Component } from '@angular/core';
import { IHotel } from './interfaces/hotel.interface';
import { stars } from './data';
import { Observable, of } from 'rxjs';
import { delay, first, take, filter, map } from 'rxjs/operators';
import { HotelsService } from './services/hotels.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'hw5';
  public searchText: string;
  public displayStars: number = 0;
  public activeStar: number;
  public stars$: Observable<string[]> = of(stars);
  public currentHotel$: Observable<IHotel>;

  public constructor(
    private _hotelsService: HotelsService
  ) {
    this.currentHotel$ = this._hotelsService.getHotels().pipe(
      map((items: IHotel[]) => {
        return items[0];
      })
    );
  }

  public search(event: Event): void {
    this.searchText = (event.target as HTMLInputElement).value;
  }

  public clickStars(index: number): void {
    this.activeStar = index;
    index > 0 ? this.displayStars = index + 1 : this.displayStars = 0;
  }

  public isActive(index: number): boolean {
    return this.activeStar === index;
  }

}
