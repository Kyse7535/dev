import { Component, OnInit } from '@angular/core';
import {Film} from "../entity/film";

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
