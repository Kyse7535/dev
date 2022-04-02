import {Injectable} from '@angular/core';
import {Film} from "../entity/Film";
import {Categorie} from "../entity/Categorie";
import {Version} from "../entity/Version";

@Injectable({
  providedIn: 'root'
})
export class FilmServiceService {

  private lesFilms: Array<Film> = [

  ];
  /*
  * {
      id: 1,
      titre: "Game of throne",
      duree: 60,
      resume: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      version: "Version original",
      categorie: "Drame"
    },
    {
      id: 2,
      titre: "Spider Man: Far from home",
      duree: 120,
      resume: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      version: "Version francais",
      categorie: "Science fiction"
    },
    {
      id: 3,
      titre: "Insterstella",
      duree: 60,
      resume: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      version: "Version original",
      categorie: "Drame"
    },
    {
      id: 4,
      titre: "Game of throne",
      duree: 60,
      resume: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      version: "Version original",
      categorie: "Drame"
    },
    {
      id: 5,
      titre: "Game of throne",
      duree: 60,
      resume: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      version: "Version original",
      categorie: "Drame"
    },
    {
      id: 6,
      titre: "Game of throne",
      duree: 60,
      resume: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      version: "Version original",
      categorie: "Drame"
    },
    {
      id: 7,
      titre: "Game of throne",
      duree: 60,
      resume: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      version: "Version original",
      categorie: "Drame"
    },
    {
      id: 8,
      titre: "Game of throne",
      duree: 60,
      resume: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      version: "Version original",
      categorie: "Drame"
    },
    {
      id: 9,
      titre: "Game of throne",
      duree: 60,
      resume: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      version: "Version original",
      categorie: "Drame"
    },
    {
      id: 10,
      titre: "Game of throne",
      duree: 60,
      resume: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      version: "Version original",
      categorie: "Drame"
    },
    {
      id: 11,
      titre: "Game of throne",
      duree: 60,
      resume: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      version: "Version original",
      categorie: "Drame"
    },
    {
      id: 12,
      titre: "Game of throne",
      duree: 60,
      resume: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
      version: "Version original",
      categorie: "Drame"
    }*/

  constructor() {
  }

  public getFilms(): Array<Film> {
    return this.lesFilms;
  }

  /*public addFilm(titre: string, duree: number, resume : string, version : Version, categorie : string): void {
    const newId = Math.max(...this.lesFilms.map(film => film.id)) + 1;
    this.lesFilms.push({id: newId, titre, duree, resume, version, categorie});
  }

  */


  public getFilmById(id: number): Film | undefined {
    return this.lesFilms.find(film => film.id === id);
  }

  public modifyFilm(id : number, film:Film){
    console.log("id " + id)

    const index = this.lesFilms.findIndex(film => film.id === id)
    console.log("index " + index)
    this.lesFilms[index].id = film.id
    this.lesFilms[index].titre = film.titre
    this.lesFilms[index].duree = film.duree
    this.lesFilms[index].resume = film.resume
    this.lesFilms[index].version = film.version
    this.lesFilms[index].categorie = film.categorie
  }

  public removeFilm(id : number): void {
    const index: number = this.lesFilms.findIndex(film => film.id === id);
    this.lesFilms.splice(index, 1);
  }

}
