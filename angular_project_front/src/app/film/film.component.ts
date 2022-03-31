import { Component, OnInit } from '@angular/core';
import {Film} from "../entity/Film";
import {FilmServiceService} from "../Service/film-service.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  film: Film | undefined = undefined;

  constructor(public filmService : FilmServiceService,
              private route: ActivatedRoute,
              private location: Location) { }

  goBack(): void {
    this.location.back();
  }

  delete(id : number){
    this.filmService.removeFilm(id)
    this.goBack()
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if(id!==null) {
      this.film = this.filmService.getFilmById(Number(id));
    }
  }
}
