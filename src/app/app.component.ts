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
  public title: string = 'hw4';

  public searchText: string;

  // public ngOnInit(): void {
  //   this.currentHotel$.subscribe((data: IHotel) => {
  //     console.log(data);
  //   });
  // }

  public displayStars: number = 0;
  public activeStar: number;
  public stars$: Observable<string[]> = of(stars);
  public favHotels: IHotel[] = [];

  public constructor() {
  }

  // public selectHotel(id: number): void {
  //   this.currentHotel = this.hotels.find((el: IHotel) => el.id === id);
  // }

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

  // public addHotelToFav(id: number): void {
  //   this.favHotels.push(this.hotels.find((el: IHotel) => el.id === id));
  // }

  // public removeHotelFromFav(id: number): void {
  //   // this.favHotels = this.favHotels.filter((el: IHotel) => el.id !== id);
  // }

}
