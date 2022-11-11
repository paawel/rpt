import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from "../service/http-service.service";

@Component({
  selector: 'app-task-seven',
  template: '<br><div>Показать границы страны по клику</div><br><div><input type="text" #ctr> <button (click)="showCountryBorders(ctr.value)">show borders</button></div><div *ngIf="borders.length"> <div *ngFor="let ctr of borders">{{ctr}}</div></div>'
})
export class TaskSevenComponent implements OnInit {
  allCountries: any;
  borders: Array<String> = [];

  constructor(private http: HttpServiceService) {
  }

  ngOnInit(): void {
    // TODO:
    // Get allCountries here from http service
  }

  country(el: string) {
    return this.allCountries.filter((elem: any) => elem.name === el)[0];
  }

  showCountryBorders(cntr: string) {
    this.borders = [];
    let country = this.country(cntr);
    country.borders.forEach((el: any) => {
      let c = this.allCountries.filter((elem: any) => {
        if(elem.alpha3Code === el) {
          return elem;
        }
      })[0];
      this.borders.push(c);
    });
  }
}
