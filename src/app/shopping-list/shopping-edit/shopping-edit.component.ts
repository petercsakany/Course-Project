import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ShoppingListService} from "../../shared/shoppingList.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient() {
    this.shoppingListService.addIngredient(
      {name: this.nameInput.nativeElement.value, amount: this.amountInput.nativeElement.value}
      );
  }

  onDeleteIngredient() {
    this.shoppingListService.removeIngredient();
  }

  onClear() {
    this.shoppingListService.clearIngredients();
  }

}
