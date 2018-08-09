import {Component} from '@angular/core';
import {PersonServiceClient} from './services/person.service.client';
import {Person} from './models/Person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  person: Person;

  ng = this;

  constructor(private personService: PersonServiceClient) {
    personService.checkSession()
      .then(response => this.person = response, error => {});
  }
}
