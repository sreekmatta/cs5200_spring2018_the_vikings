import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Person} from '../models/Person';
import {PersonServiceClient} from '../services/person.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css', '../../assets/css/style.css']
})
export class ProfileComponent implements OnInit {

  person: Person;
  ng = this;
  successMsg;

  constructor(private router: Router,
              private personService: PersonServiceClient) {
    this.personService.checkSession().then(
      person => this.person = person, error => alert('could not load user')
    );
  }

  ngOnInit() {
    this.person = new Person();
  }

  update(p) {
    if (p.userType === 'Artist') {
      this.personService.update(p)
        .then(updatedPerson => this.successMsg = 'User details updated successfully');
    }
  }

}
