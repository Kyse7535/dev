import { Component, OnInit } from '@angular/core';
import {Film} from "../entity/Film";
import {FilmServiceService} from "../Service/film-service.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {CategorieServiceService} from "../Service/categorie-service.service";
import {Categorie} from "../entity/Categorie";

@Component({
  selector: 'app-edit-film',
  templateUrl: './edit-film.component.html',
  styleUrls: ['./edit-film.component.scss']
})
export class EditFilmComponent implements OnInit {

  listeCategories: Array<Categorie> = [];

  film : Film = {
    id : Number(),
    titre : "",
    duree : Number(),
    resume : "",
    version : "",
    categorie : ""
  }

  constructor(public filmService : FilmServiceService,
              public  categorieService : CategorieServiceService,
              private route: ActivatedRoute,
              private location: Location) { }


  private set(titre: string, duree: number, resume: string, version: string, categorie: string): void {
    this.film.titre = titre,
    this.film.duree = duree,
    this.film.resume = resume,
    this.film.version = version,
    this.film.categorie = categorie
  }

  goBack(): void {
    this.location.back()
  }

  create(titre: string, duree: string, resume: string, version: string, categorie: string): void {
    this.set(titre, Number(duree), resume, version, categorie)
    this.filmService.addFilm(titre, Number(duree), resume, version, categorie)
    this.goBack()
  }

  update(titre: string, duree: string, resume: string, version: string, categorie: string, id: number): void {
   if (id !== undefined) {
     this.set(titre, Number(duree), resume, version, categorie)
     this.filmService.modifyFilm(id, this.film)
     this.goBack()
    }
  }

  delete(id : number){
    this.filmService.removeFilm(id)
    this.goBack()
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if(id!==null) {
      const film = this.filmService.getFilmById(Number(id));

      if (film !== undefined)
        this.film = film
    }

    this.listeCategories = this.categorieService.getCategories();
  }

}
