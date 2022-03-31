import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { AccueilComponent } from './accueil/accueil.component';
import { FilmComponent } from './film/film.component';
import { MenuComponent } from './menu/menu.component';
import { LesFilmsComponent } from './les-films/les-films.component';
import { EditFilmComponent } from './edit-film/edit-film.component';
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { NewFilmComponent } from './new-film/new-film.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    FilmComponent,
    MenuComponent,
    LesFilmsComponent,
    EditFilmComponent,
    NewFilmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
