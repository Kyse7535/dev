import { Component, OnInit } from '@angular/core';
import {Film} from "../entity/Film";
import {FilmServiceService} from "../Service/film-service.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {CategorieServiceService} from "../Service/categorie-service.service";
import {Categorie} from "../entity/Categorie";
import {FilmWebServiceService} from "../Service/film-web-service.service";
import {Version} from "../entity/Version";

@Component({
  selector: 'app-edit-film',
  templateUrl: './edit-film.component.html',
  styleUrls: ['./edit-film.component.scss']
})
export class EditFilmComponent implements OnInit {

  listeCategories: Array<Categorie> = [];
  listeVersions: Array<Version> = [];

  film : Film = {
    id : Number(),
    titre : "",
    duree : Number(),
    resume : "",
    version : {id: Number(), type:""},
    categorie : {id: Number(), nom: ""}
  }

  constructor(public filmService : FilmServiceService,
              public filmWebService : FilmWebServiceService,
              public  categorieService : CategorieServiceService,
              private route: ActivatedRoute,
              private location: Location) { }


  private set(titre: string, duree: number, resume: string, version: string, categorie: string): void {
    this.film.titre = titre,
    this.film.duree = duree,
    this.film.resume = resume
  }

  goBack(): void {
    this.location.back()
  }

  /*create(titre: string, duree: string, resume: string, version: string, categorie: string): void {
    this.set(titre, Number(duree), resume, version, categorie)
    this.filmService.addFilm(titre, Number(duree), resume, version, categorie)
    this.goBack()
  }

/*  update(titre: string, duree: string, resume: string, version: string, categorie: string, id: number): void {
   if (id !== undefined) {
     this.set(titre, Number(duree), resume, version, categorie)
     this.filmService.modifyFilm(id, this.film)
     this.goBack()
    }
  }

  delete(id : number){
    this.filmService.removeFilm(id)
    this.goBack()
  }*/

  update(titre: string, duree: string, resume: string, version: string, categorie: string, id: number): void {
    if (id !== undefined) {
      //this.set(titre, Number(duree), resume, version, categorie)
      //this.filmService.modifyFilm(id, this.film)
      this.filmWebService.modifyFilm(id, {titre, duree: Number(duree), version: "/api/versions/" + version,
      categorie: "/api/categories/" + categorie, id: "/api/films/"+id, resume}).subscribe(
        (film) => {
          this.goBack()
        }
      )
    }
  }

  delete(id : number){
    this.filmWebService.removeFilm(id).subscribe(() => this.goBack())

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');


    if(id!==null) {
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

    const observable = this.filmWebService.getCategories();
    observable.subscribe((data: Categorie[]) => this.listeCategories = data)

    const observableVersions = this.filmWebService.getVersions();
    observableVersions.subscribe((data: Version[]) => this.listeVersions = data)

  }

}
