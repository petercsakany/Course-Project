import {Injectable} from "@angular/core";
import {Recipe} from "./recipe.model";
import {Ingredient} from "./ingredient.model";

@Injectable()
export class RecipeService {
  private imgPath: string = 'https://image.ibb.co/eeznEJ/pexels_photo_1243488.jpg';
  private recipes: Recipe[] = [
    new Recipe('Test','Simply test',this.imgPath, [new Ingredient('apple',5)]),
    new Recipe('Test2','Simply test2',this.imgPath, [new Ingredient('pear',1)]),
    new Recipe('Test3','Simply test3',this.imgPath, [new Ingredient('strawberry',4)])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeById(id: number): Recipe {
    return this.recipes[id];
  }
}
