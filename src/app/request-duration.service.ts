import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestDurationService {

  constructor(private http: HttpClient) {}

  fetchData(): Observable<any> {
    const url = 'http://localhost:4200/assets/cocktail.json';
    return this.http.get(url);
  }
}
