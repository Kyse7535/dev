import { Component, OnInit } from '@angular/core';
import {FilmServiceService} from "../Service/film-service.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {Film} from "../entity/Film";
import {Categorie} from "../entity/Categorie";
import {CategorieServiceService} from "../Service/categorie-service.service";
import {FilmWebServiceService} from "../Service/film-web-service.service";
import {Version} from "../entity/Version";

@Component({
  selector: 'app-new-film',
  templateUrl: './new-film.component.html',
  styleUrls: ['./new-film.component.scss']
})
export class NewFilmComponent implements OnInit {

  listeCategories: Array<Categorie> = [];
  listeVersions: Array<Version> = [];

  film : Film = {
    id : Number(),
    titre : "",
    duree : Number(),
    resume : "",
    version : {id: Number(), type: "allo"},
    categorie : {id: Number(), nom: ""}
  }

  constructor(public filmService : FilmServiceService,
              public filmWebService : FilmWebServiceService,
              public  categorieService : CategorieServiceService,
              private route: ActivatedRoute,
              private location: Location) { }

  goBack(): void {
    this.location.back()
  }

  private set(titre: string, duree: number, resume: string, version: string, categorie: string): void {
    this.film.titre = titre,
      this.film.duree = duree,
      this.film.resume = resume
      //this.film.version = version,
      //this.film.categorie = categorie
  }

  create(titre: string, duree: string, resume: string, version: string, categorie: string): void {
    this.set(titre, Number(duree), resume, version, categorie)
    this.filmWebService.addFilm({titre, version: "/api/versions/"+ version, duree: this.film.duree, resume,
    categorie: "/api/categories/" + categorie})
      .subscribe((r)=>this.goBack())
  }

  ngOnInit(): void {
    const observable = this.filmWebService.getCategories();
    observable.subscribe((data: Categorie[]) => this.listeCategories = data)

    const observableVersion = this.filmWebService.getVersions();
    observableVersion.subscribe((data: Version[]) => this.listeVersions = data)
    //this.listeCategories = this.categorieService.getCategories();
  }

}
