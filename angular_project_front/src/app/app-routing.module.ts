import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuComponent} from "./menu/menu.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {FilmComponent} from "./film/film.component";

const routes: Routes = [

  {path: 'menu', component: MenuComponent},
  {path: '.', component: AccueilComponent},
  {path: 'film', component: FilmComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
