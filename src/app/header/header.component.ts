import {Component} from "@angular/core";
import {RecipeService} from "../shared/recipe.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  constructor(private recipeService: RecipeService) {}

  onSave() {
    this.recipeService.storeRecipes().subscribe(()=>{}, (error) => {
      console.log(error);
    });
  }

  onFetch() {
    this.recipeService.fetchRecipes();
  }
}
