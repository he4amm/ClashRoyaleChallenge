import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = 'https://clashapi.now.sh';
  }

  getDeck(): Observable<any> {
    return this
      .http
      .get(this.baseUrl + `/api/cards/`);
  }

  getCardDetails( idName: string ): Observable<any> {
    return this
      .http
      .get(this.baseUrl + `/api/cards/${idName}`);
  }
}
