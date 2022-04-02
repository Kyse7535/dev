import { Component, OnInit } from '@angular/core';
import {FilmWebServiceService} from "../Service/film-web-service.service";
import {map} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private filmWebService: FilmWebServiceService) { }

  ngOnInit(): void {
  }

  getSubscribed(username: string, password: string, confirmPass: string) {
    console.log("tests", "\n");
    console.log("rest", "\n")
    if (password == confirmPass) {
      //console.log('allo')
      this.filmWebService.register(username, password)
        .subscribe(data => data)
    }

  }
}
