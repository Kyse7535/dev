import { Component, OnInit } from '@angular/core';
import {Film} from "../entity/Film";
import {FilmServiceService} from "../Service/film-service.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {FilmWebServiceService} from "../Service/film-web-service.service";

@Component({
  selector: 'app-les-films',
  templateUrl: './les-films.component.html',
  styleUrls: ['./les-films.component.scss']
})
export class LesFilmsComponent implements OnInit {
  listeFilms: Array<Film> = [];

  constructor(public filmService : FilmServiceService,
              private filmWebService: FilmWebServiceService,
              private route: ActivatedRoute,
              private location: Location) { }


  delete(id : number){
    this.filmService.removeFilm(id)
  }

   ngOnInit() {
    const observable = this.filmWebService.getFilms();
    observable.subscribe((data: Film[]) => this.listeFilms = data)
  }

}
