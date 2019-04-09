import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IHotel } from '../interfaces/hotel.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  private currentHotel: IHotel;

  public constructor(
    private _http: HttpClient
  ) { }

  public getHotels(): Observable<IHotel[]> {
    return this._http.get<IHotel[]>('http://localhost:3001/hotels');
  }

  public setCurrentHotel(hotel: IHotel): void {
    this.currentHotel = hotel;
  }

  public getCurrentHotel(): IHotel | [] {
    if (this.currentHotel) {
      return this.currentHotel;
    }
    return [];
  }

}
