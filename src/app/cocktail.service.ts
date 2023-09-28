import { Injectable } from '@angular/core';
import { cocktailModel } from './cocktail';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(public http: HttpClient) {}
  

  getCocktails(): Observable<cocktailModel[]>{
    return this.http.get<cocktailModel[]>('assets/cocktails.json')
  }
}
