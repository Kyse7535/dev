import { Injectable } from '@angular/core';
import {Categorie} from "../entity/Categorie";
import {Film} from "../entity/Film";

@Injectable({
  providedIn: 'root'
})
export class CategorieServiceService {

  private lesCategories : Array<Categorie> = [
    {id: 1, nom : "Comédie"},
    {id: 2, nom : "Drame"},
    {id: 3, nom : "Aventure"},
    {id: 4, nom : "Science fiction"},
    {id: 5, nom : "Horreur"},
    {id: 6, nom : "Documentraire"}
  ];

  constructor() { }

  public getCategories(): Array<Categorie> {
    return this.lesCategories;
  }
}
