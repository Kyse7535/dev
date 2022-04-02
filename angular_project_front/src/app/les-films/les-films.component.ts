import { Component, OnInit } from '@angular/core';
import {Film} from "../entity/Film";
import {FilmServiceService} from "../Service/film-service.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {FilmWebServiceService} from "../Service/film-web-service.service";
import {Categorie} from "../entity/Categorie";

@Component({
  selector: 'app-les-films',
  templateUrl: './les-films.component.html',
  styleUrls: ['./les-films.component.scss']
})
export class LesFilmsComponent implements OnInit {
  listeFilms: Array<Film> = [];
  listeCategories: Array<Categorie> = [];

  constructor(public filmService : FilmServiceService,
              private filmWebService: FilmWebServiceService) { }


  delete(id : number){
    this.filmWebService.removeFilm(id)
  }

   ngOnInit() {
    const observable = this.filmWebService.getFilms();
    observable.subscribe((data: Film[]) => this.listeFilms = data,
      (error) => {
        alert("Problème de chargement ! Les films que vous voyez sont fakes.")
        this.filmService.getFilms()
      })

     const observableCategories = this.filmWebService.getCategories();
     observableCategories.subscribe((data: Categorie[]) => this.listeCategories = data)
  }

  filtrer(type: string) {
    this.filmWebService.getFilmsByCategorie(Number(type))
      .subscribe((data) => this.listeFilms = data)

  }
}
