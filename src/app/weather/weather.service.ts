import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {
  constructor(private http: Http) { }

  getByCity(city: string) {
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=ff0d2f4770db74d57f60f3fbe9e53f9d`)
      .map((res: Response) => res.json());
  }
}
