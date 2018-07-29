import {Component, OnInit} from '@angular/core';
import {ShoppingListService} from "../../shared/shoppingList.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient(form: NgForm) {
    this.shoppingListService.addIngredient(
      {name: form.value.name, amount: form.value.amount}
      );
  }

  onDeleteIngredient() {
    this.shoppingListService.removeIngredient();
  }

  onClear() {
    this.shoppingListService.clearIngredients();
  }

}
