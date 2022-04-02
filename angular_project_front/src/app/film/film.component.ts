import { Component, OnInit } from '@angular/core';
import {Film} from "../entity/Film";
import {FilmServiceService} from "../Service/film-service.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';
import {FilmWebServiceService} from "../Service/film-web-service.service";

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  film!: Film;

  constructor(public filmService: FilmServiceService,
              public filmWebService: FilmWebServiceService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  goBack(): void {
    this.location.back();
  }

  delete(id: number) {
    this.filmWebService.removeFilm(id)
    this.goBack()
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id !== null) {
      this.filmWebService.getFilmById(Number(id))
        .subscribe((film) => {
          this.film = film
          this.filmWebService.getCategorieById(this.film.categorie).subscribe(
            (categorie) => this.film.categorie = categorie
          )
          this.filmWebService.getVersionById(this.film.version).subscribe(
            (version) => this.film.version = version
          )
        })
    }
  }
}
