import {Version} from "./Version";
import {Categorie} from "./Categorie";

export interface Film {
  id : number;
  titre : string;
  duree : number;
  resume : string;
  version : Version;
  categorie : Categorie;
}
