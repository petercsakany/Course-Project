import {Injectable} from "@angular/core";
import {Recipe} from "./recipe.model";
import {Ingredient} from "./ingredient.model";
import {Subject} from "rxjs/internal/Subject";

@Injectable()
export class RecipeService {
  private imgPath: string = 'https://image.ibb.co/eeznEJ/pexels_photo_1243488.jpg';
  private recipes: Recipe[] = [
    new Recipe('Test','Simply test',this.imgPath, [new Ingredient('apple',5)]),
    new Recipe('Test2','Simply test2',this.imgPath, [new Ingredient('pear',1)]),
    new Recipe('Test3','Simply test3',this.imgPath, [new Ingredient('strawberry',4)])
  ];

  recipesChanged = new Subject<Recipe[]>();

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeById(id: number): Recipe {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  removeRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
