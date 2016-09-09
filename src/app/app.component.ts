import { Component } from '@angular/core';
import { WeatherService } from './weather/weather.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [WeatherService]
})
export class AppComponent {
  searchKey: string;
  weather: any;
  city: string = 'cebu';

  constructor(private weatherService: WeatherService) {}

  onSubmit() {
    if (this.city != '') {
      this.weatherService.getByCity(this.city)
          .subscribe(weather => {
            this.weather = weather;
            console.log(this.weather);
          });
    }
  }
}
