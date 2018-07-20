import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "../recipes/recipes.component";
import {ShoppingListComponent} from "../shopping-list/shopping-list.component";
import {ErrorPageComponent} from "../error-page/error-page.component";

const appRoutes: Routes = [
  {path: 'recipes', component: RecipesComponent},
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
