import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Film} from "../entity/Film";


interface apiResponse {
  'hydra:member': Array<Film>
}

@Injectable({
  providedIn: 'root'
})
export class FilmWebServiceService {

  constructor(private http: HttpClient) {

  }
  getFilms(): Observable<Array<Film>> {

    return this.http.get<apiResponse>('http://localhost:6005/api/films',
      {responseType: 'json', observe: 'body'})
      .pipe(map((data) => data['hydra:member']))
  }
}
