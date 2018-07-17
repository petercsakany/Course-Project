import {EventEmitter, Injectable} from "@angular/core";
import {Recipe} from "./recipe.model";
import {Ingredient} from "./ingredient.model";

@Injectable()
export class RecipeService {
  private imgPath: string = 'https://c1.staticflickr.com/8/7402/10014488003_c1fc009815.jpg';
  private recipes: Recipe[] = [
    new Recipe('Test','Simply test',this.imgPath, [new Ingredient('apple',5)]),
    new Recipe('Test2','Simply test2',this.imgPath, [new Ingredient('pear',1)]),
    new Recipe('Test3','Simply test3',this.imgPath, [new Ingredient('strawberry',4)])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  recipeSelected = new EventEmitter<Recipe>();
}
