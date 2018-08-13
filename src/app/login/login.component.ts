import { Component, OnInit } from '@angular/core';
import {PersonServiceClient} from '.././services/person.service.client';
import {Person} from '.././models/Person';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../assets/css/style.css']
})
export class LoginComponent implements OnInit {

  person: Person;

  constructor(private router: Router,
              private personService: PersonServiceClient) {
  }

  ngOnInit() {
    this.person = new Person();
  }

  login() {
    this.personService.login(this.person.username, this.person.password)
      .then(login => this.router.navigate(['dashboard']));
  }

}
