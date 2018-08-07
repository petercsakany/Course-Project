import {Injectable} from "@angular/core";
import {Recipe} from "./recipe.model";
import {Subject} from "rxjs/internal/Subject";
import {Http} from "@angular/http";
import {map} from "rxjs/operators";

@Injectable()
export class RecipeService {

  constructor(private http: Http) {}

  private recipesUrl = "https://ng-recipe-book-b7e9c.firebaseio.com/data.json";
  private recipes: Recipe[] = [];

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

  updateRecipes(newRecipes: Recipe[]) {
    this.recipes = newRecipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  removeRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  storeRecipes() {
    return this.http.put(this.recipesUrl,this.getRecipes());
  }

  fetchRecipes() {
    this.http.get(this.recipesUrl).pipe(
      map((response: Response) => {
      return response.json();
    }),
      map((recipes: Recipe[]) => {
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      })).subscribe((recipes: Recipe[]) => {
        this.updateRecipes(recipes);
    })
  }
}
