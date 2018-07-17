import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../shared/recipe.model";
import {ShoppingListService} from "../../shared/shoppingList.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
    alert('Ingredients added to shopping list!');
  }

}
