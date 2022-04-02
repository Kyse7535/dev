import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable, throwError} from 'rxjs';
import {Film} from "../entity/Film";
import {Categorie} from "../entity/Categorie";
import {Version} from "../entity/Version";


interface apiResponse {
  'hydra:member': Array<any>
}

@Injectable({
  providedIn: 'root'
})
export class FilmWebServiceService {

  private apiFilms : string = 'http://localhost:6005/api/films';
  private apiCategories : string = 'http://localhost:6005/api/categories/';
  private apiVersions : string = 'http://localhost:6005/api/versions';


  constructor(private http: HttpClient) {

  }
  getFilms(): Observable<Array<Film>> {
    return this.http.get<apiResponse>(this.apiFilms,
      {responseType: 'json', observe: 'body'})
      .pipe(map((data) => {
        return data['hydra:member']
      }))
  }



  getCategories(): Observable<Array<Categorie>>{
    return this.http.get<apiResponse>( this.apiCategories,
      {responseType: 'json', observe: 'body'})
      .pipe(map((data) => {
        return data['hydra:member']
      }))
  }
  getVersions(): Observable<Array<Version>>{
    return this.http.get<apiResponse>( this.apiVersions,
      {responseType: 'json', observe: 'body'})
      .pipe(map((data) => {
        return data['hydra:member']
      }))
  }
  getFilmsByCategorie(id: number): Observable<Array<Film>>{
    return this.http.get<apiResponse>( this.apiFilms + "?categorie=/api/categories/" + id,
      {responseType: 'json', observe: 'body'})
      .pipe(map((data) => {
        return data['hydra:member']
      }))
  }

/*
  public addFilm(film: Film): Observable<boolean> {
    return this.http.post(this.apiURL,
      film,
      {observe: 'response', responseType: 'json'})
      .pipe(map((response)=>response.status===201))
  }
*/

  public addFilm(film: Object): Observable<boolean> {
    return this.http.post(this.apiFilms,
      film,
      {observe: 'response', responseType: 'json'})
      .pipe(map((response)=>response.status===201))
  }


  public getFilmById(id: number): Observable<Film> {
    return this.http.get<Film>(this.apiFilms+"/"+id.toString(),
      {observe: 'body', responseType: 'json'})
  }
  public getCategorieById(id: Categorie): Observable<Categorie> {
    return this.http.get<Categorie>("http://localhost:6005"+ id.toString(),
      {observe: 'body', responseType: 'json'})
  }
  public getVersionById(id: Version): Observable<Version> {
    return this.http.get<Version>("http://localhost:6005"+ id.toString(),
      {observe: 'body', responseType: 'json'})
  }

  public modifyFilm(id : number, film:Object) :  Observable<boolean>{
    return this.http.put<Film>(this.apiFilms+"/"+id,
      film,
      {observe: 'response', responseType: 'json'})
      .pipe(map((response)=>response.status===200))
  }

  public removeFilm(id : number): Observable<boolean> {
    return this.http.delete(this.apiFilms+"/"+id.toString(),
      {observe: 'response', responseType: 'json'})
      .pipe(map((response)=>response.status===204))
  }
}
