import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './hotel-list/hotel-list.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SortByStarsPipe } from './pipes/sort-by-stars.pipe';
import { FavoritComponent } from './favorit/favorit.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
   declarations: [
      AppComponent,
      WeatherComponent,
      ProfileComponent,
      FooterComponent,
      ListComponent,
      FilterPipe,
      SortByStarsPipe,
      FavoritComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
