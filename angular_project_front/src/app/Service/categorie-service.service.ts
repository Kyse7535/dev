import { Injectable } from '@angular/core';
import {Categorie} from "../entity/Categorie";

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
}
