import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://c.pxhere.com/photos/99/04/tagliatelle_pasta_on_a_fork_food_italian_meal_cuisine_italy_traditional-1375412.jpg!d')
  ];

  constructor() { }

  ngOnInit() {
  }

}
