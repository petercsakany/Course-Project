import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test','Simply test','https://c1.staticflickr.com/8/7402/10014488003_c1fc009815.jpg'),
    new Recipe('Test2','Simply test2','https://c1.staticflickr.com/8/7402/10014488003_c1fc009815.jpg'),
    new Recipe('Test3','Simply test3','https://c1.staticflickr.com/8/7402/10014488003_c1fc009815.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
