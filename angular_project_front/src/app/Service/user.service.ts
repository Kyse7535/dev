import { Injectable } from '@angular/core';
import {User} from "../entity/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users : Array<User> = [

    {username : "MinhTran", password : "MinhTran"},
    {username : "Kyse7535", password : "Kyse7535"},
    {username : "HabibLEWHE", password : "HabibLEWHE"}
  ]

  constructor() { }

  getUsers() : Array<User>{
    return this.users
  }


}
