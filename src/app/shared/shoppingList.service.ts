import {Injectable} from "@angular/core";
import {Ingredient} from "./ingredient.model";
import {Subject} from "rxjs/internal/Subject";

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Lemon', 3)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  removeIngredient() {
    this.ingredients.splice(-1,1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  clearIngredients() {
    this.ingredients.splice(0, this.ingredients.length);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
