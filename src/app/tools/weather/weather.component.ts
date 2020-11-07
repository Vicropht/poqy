import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeatherStackService } from './weatherstack.service';

@Component({
  selector: 'poqy-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  public weatherData: any;

  constructor(
    private formBuilder: FormBuilder,
    private weatherService: WeatherStackService,
    ) { }

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  sendToWeatherStack(formValues): void {
    this.weatherService.getWeather(formValues.location).subscribe((data) => this.weatherData = data);
    console.log(this.weatherData);

  }

}
