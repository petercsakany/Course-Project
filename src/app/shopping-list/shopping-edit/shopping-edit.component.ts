import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() addIngredient = new EventEmitter<Ingredient>();
  @Output() deleteIngredient = new EventEmitter<void>();
  @Output() clearIngredients = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient() {
    this.addIngredient.emit({name: this.nameInput.nativeElement.value, amount: this.amountInput.nativeElement.value});
  }

  onDeleteIngredient() {
    this.deleteIngredient.emit();
  }

  onClear() {
    this.clearIngredients.emit();
  }

}
