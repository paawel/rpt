import { Inject, Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllCountries() {
    // TODO:
    // get this.api from app module

    // return this.http.get(`${this.api}/all`);
  }
}
