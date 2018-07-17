import {Injectable} from "@angular/core";
import {Ingredient} from "./ingredient.model";

@Injectable()
export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Lemon', 3)
  ];

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  removeIngredient() {
    this.ingredients.splice(-1,1);
  }

  clearIngredients() {
    this.ingredients.splice(0, this.ingredients.length)
  }
}
