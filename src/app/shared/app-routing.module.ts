import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "../recipes/recipes.component";
import {ShoppingListComponent} from "../shopping-list/shopping-list.component";
import {ErrorPageComponent} from "../error-page/error-page.component";
import {RecipeStartComponent} from "../recipes/recipe-start/recipe-start.component";
import {RecipeDetailComponent} from "../recipes/recipe-detail/recipe-detail.component";

const appRoutes: Routes = [
  {path: 'recipes', component: RecipesComponent, children: [
      {path: '', component: RecipeStartComponent},
      {path: ':id', component: RecipeDetailComponent}
    ]},
  {path: 'shoppinglist', component: ShoppingListComponent},
  {path: 'not-found', component: ErrorPageComponent},
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: '**', redirectTo: '/not-found'},
];

@NgModule (
  {
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  }
)
export class AppRoutingModule {}
