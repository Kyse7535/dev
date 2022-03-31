import { Injectable } from '@angular/core';
import {Categorie} from "../entity/Categorie";
import {Film} from "../entity/Film";

@Injectable({
  providedIn: 'root'
})
export class CategorieServiceService {

  private lesCategories : Array<Categorie> = [
    {nomCategorie : "Comédie"},
    {nomCategorie : "Drame"},
    {nomCategorie : "Aventure"},
    {nomCategorie : "Science fiction"},
    {nomCategorie : "Horreur"},
    {nomCategorie : "Documentraire"}
  ];

  constructor() { }

  public getCategories(): Array<Categorie> {
    return this.lesCategories;
  }
}
