import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IHotel } from '../interfaces/hotel.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  public constructor(
    private _http: HttpClient
  ) { }

  public getProducts(): Observable<IHotel[]> {
    return this._http.get<IHotel[]>('http://localhost:3001/hotels')
  }

}
