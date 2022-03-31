import { Component, OnInit } from '@angular/core';
import {Film} from "../entity/Film";
import {FilmServiceService} from "../Service/film-service.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-edit-film',
  templateUrl: './edit-film.component.html',
  styleUrls: ['./edit-film.component.scss']
})
export class EditFilmComponent implements OnInit {

  id : number | undefined = undefined

  film : Film = {
    id : Number(),
    titre : "",
    duree : Number(),
    resume : "",
    version : "",
    categorie : ""
  }

  constructor(public filmService : FilmServiceService,
              private route: ActivatedRoute,
              private location: Location) { }

  goBack(): void {
    this.location.back()
  }

  private set(titre: string, duree: number, resume: string, version: string, categorie: string): void {
    this.film.titre = titre,
    this.film.duree = duree,
    this.film.resume = resume,
    this.film.version = version,
    this.film.categorie = categorie
  }

  create(titre: string, duree: number, resume: string, version: string, categorie: string): void {
    this.set(titre, duree, resume, version, categorie)
    this.filmService.addFilm(titre, duree, resume, version, categorie)
    this.goBack()
  }

  update(titre: string, duree: number, resume: string, version: string, categorie: string): void {
    if (this.id !== undefined) {
      this.set(titre, duree, resume, version, categorie)
      this.goBack()
    }
  }

  ngOnInit(): void {
  }

}
