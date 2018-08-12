import {Component, OnInit} from '@angular/core';
import {PersonServiceClient} from './services/person.service.client';
import {Person} from './models/Person';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  person: Person;
  searchQuery;

  ng = this;

  constructor(private router: Router, private personService: PersonServiceClient) {
    personService.checkSession()
      .then(response => this.person = response, error => {
      });
  }

  ngOnInit() {
  }

  searchDomainObject(sq) {
    this.router.navigate(['search/' + sq]);
    this.ngOnInit();
  }

}
