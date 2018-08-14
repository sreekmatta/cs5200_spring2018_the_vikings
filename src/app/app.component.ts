import {Component, OnInit} from '@angular/core';
import {PersonServiceClient} from './services/person.service.client';
import {Person} from './models/Person';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {SearchResultsComponent} from './search-results/search-results.component';

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
  }

  ngOnInit() {
    this.personService.checkSession().subscribe(
      (person: Person) => this.person = person, error => alert('could not load user')
    );
  }

  searchDomainObject(sq) {
    this.router.navigate(['search/' + sq]);
  }

  logout() {
    this.personService.logout().subscribe(
      res => {
        this.person = null;
      },
      err => {
        alert("Couldn't logout");
      });
    this.router.navigate(['home']);
  }

}
