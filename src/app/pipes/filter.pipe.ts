import { Pipe, PipeTransform } from '@angular/core';
import { IHotel } from '../interfaces/hotel.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  public transform(hotels: IHotel[], searchText: string): IHotel[] {
    if (!searchText) {
      return hotels;
    }

    return hotels.filter((hotel: IHotel) => {
      return `${hotel.title.toLowerCase()}${hotel.description.toLowerCase()}`
        .includes(searchText.toLowerCase());
    });
  }

}
