import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "./ingredient.model";

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Lemon', 3)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  removeIngredient() {
    this.ingredients.splice(-1,1);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  clearIngredients() {
    this.ingredients.splice(0, this.ingredients.length);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
