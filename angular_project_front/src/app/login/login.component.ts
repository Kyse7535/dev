import { Component, OnInit } from '@angular/core';
import {UserService} from "../Service/user.service";
import {User} from "../entity/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users : Array<User> = []

  constructor(private userService : UserService) {
    this.users = this.userService.getUsers()
  }

  ngOnInit(): void {
  }

  getConnected(username : string, password : string) {

    this.users.forEach(function (value){
      if (value.username === username) {
        if (value.password === password) {
          alert("Vous êtes bien connecté")
        }
        else{
          alert("Mot de passe incorrect ! ")
        }
      }
      else {
        alert("Vous n'exitez pas dans notre base")
      }
    })

  }
}
