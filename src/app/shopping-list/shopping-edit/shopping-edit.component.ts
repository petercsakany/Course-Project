import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ShoppingListService} from "../../shared/shoppingList.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedIngredientIndex: number;
  editedIngredient:Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.ingredientEdited.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedIngredientIndex = index;
        this.editedIngredient = this.shoppingListService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedIngredient.name,
          amount: this.editedIngredient.amount
        });
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const newIngredient = new Ingredient(form.value.name, form.value.amount);
      if (this.editMode) {
        this.shoppingListService.updateIngredient(this.editedIngredientIndex, newIngredient);
      }
      else {
        this.shoppingListService.addIngredient(newIngredient);
      }
      this.onClear();
    }
  }

  onDeleteIngredient() {
    this.shoppingListService.removeIngredient(this.editedIngredientIndex);
    this.onClear();
  }

  onClear() {
    this.editMode = false;
    this.slForm.reset();
  }

}
