import {Injectable} from '@angular/core';
import {Film} from "../entity/Film";
import {Categorie} from "../entity/Categorie";

@Injectable({
  providedIn: 'root'
})
export class FilmServiceService {

  private lesFilms: Array<Film> = [
    {
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
    }
  ];

  constructor() {
  }

  public getCours(): Array<Film> {
    return this.lesFilms;
  }

  public addFilm(titre: string, duree: number, resume : string, version : string, categorie : string): void {
    const newId = Math.max(...this.lesFilms.map(film => film.id)) + 1;
    this.lesFilms.push({id: newId, titre, duree, resume, version, categorie});
  }

  public getFilmById(id: number): Film | undefined {
    return this.lesFilms.find(film => film.id === id);
  }

  public removeFilm(film: Film): void {
    const index: number = this.lesFilms.indexOf(film);
    this.lesFilms.splice(index, 1);
  }

}
