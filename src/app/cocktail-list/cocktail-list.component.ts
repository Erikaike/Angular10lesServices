import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { cocktailModel } from '../cocktail';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  public cocktails: cocktailModel[] = [];

  constructor(public CocktailService: CocktailService) {};

  ngOnInit(): void {
    this.CocktailService.getCocktails().subscribe(cocktailsFromJsonFile => {
      this.cocktails = cocktailsFromJsonFile;
    });
  }
  
}
