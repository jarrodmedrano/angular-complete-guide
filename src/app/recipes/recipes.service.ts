import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://c.pxhere.com/photos/99/04/tagliatelle_pasta_on_a_fork_food_italian_meal_cuisine_italy_traditional-1375412.jpg!d'),
    new Recipe('Another recipe', 'This is simply a test again', 'https://c.pxhere.com/photos/99/04/tagliatelle_pasta_on_a_fork_food_italian_meal_cuisine_italy_traditional-1375412.jpg!d')
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  constructor() { }
}
