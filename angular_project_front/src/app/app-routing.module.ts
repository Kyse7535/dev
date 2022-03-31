import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuComponent} from "./menu/menu.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {FilmComponent} from "./film/film.component";
import {LesFilmsComponent} from "./les-films/les-films.component";
import {EditFilmComponent} from "./edit-film/edit-film.component";
import {NewFilmComponent} from "./new-film/new-film.component";

const routes: Routes = [

  {path: 'menu', component: MenuComponent},
  {path: '.', component: AccueilComponent},
  {path: 'les-films', component: LesFilmsComponent},
  {path: 'edit-film/:id', component: EditFilmComponent},
  {path: 'film/:id', component: FilmComponent},
  {path: 'new-film', component: NewFilmComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
