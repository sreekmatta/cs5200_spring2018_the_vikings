import {Component, OnInit} from '@angular/core';
import {Person} from '../models/Person';
import {PersonServiceClient} from '../services/person.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../../assets/css/style.css']
})
export class RegisterComponent implements OnInit {

  person: Person;
  ng = this;

  constructor(private router: Router,
              private personService: PersonServiceClient) {
  }

  ngOnInit() {
    this.person = new Person();
    this.person.email = '';
    this.person.password = '';
    this.person.confirmPassword = '';
    this.person.userType = '';
  }

  register(p) {
    if (p.userType === 'Artist') {
      this.personService.createPerson(p)
        .then(createdPerson => this.router.navigate(['profile']));
    }
  }
}
