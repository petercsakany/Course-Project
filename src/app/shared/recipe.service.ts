import {EventEmitter, Injectable} from "@angular/core";
import {Recipe} from "../recipes/recipe.model";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Test','Simply test','https://c1.staticflickr.com/8/7402/10014488003_c1fc009815.jpg'),
    new Recipe('Test2','Simply test2','https://c1.staticflickr.com/8/7402/10014488003_c1fc009815.jpg'),
    new Recipe('Test3','Simply test3','https://c1.staticflickr.com/8/7402/10014488003_c1fc009815.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  recipeSelected = new EventEmitter<Recipe>();
}
