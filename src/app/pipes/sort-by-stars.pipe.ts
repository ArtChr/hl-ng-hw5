import { Pipe, PipeTransform } from '@angular/core';
import { IHotel } from '../interfaces/hotel.interface';

@Pipe({
  name: 'sortByStars'
})
export class SortByStarsPipe implements PipeTransform {

  public transform(hotels: IHotel[], stars: number): IHotel[] | boolean {
    if (!stars) {
      return hotels;
    }

    return hotels.filter((hotel: IHotel) => {
      return hotel.stars === stars;
    });
  }

}
