import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WeatherStackService } from './tools/weather/weatherstack.service';
import { WeatherComponent } from './tools/weather/weather.component';
import { ClockComponent } from './tools/clock/clock.component';


@NgModule({
  declarations: [AppComponent, WeatherComponent, HomeComponent, ClockComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [WeatherStackService],
  bootstrap: [AppComponent],
})
export class AppModule {}
