import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { DataService } from './../_services/data.service';

@Injectable({
  providedIn: 'root'
})
export class CardsResolve implements Resolve<any> {
  constructor(private dataService: DataService) { }

  resolve() {
    return this.dataService.getDeck();
  }
}
