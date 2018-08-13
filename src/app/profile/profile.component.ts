import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Person} from '../models/Person';
import {PersonServiceClient} from '../services/person.service.client';
import {AppComponent} from '../app.component';

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
              private personService: PersonServiceClient, private appComp: AppComponent) {
    this.personService.checkSession().then(
      person => this.person = person, error => alert('could not load user')
    );
    appComp.ngOnInit();
  }

  ngOnInit() {

    if (!this.person) {
      this.person = new Person();
    }
  }

  update(p) {
    if (p.dType === 'ARTIST') {
      console.log(p.dType);
      this.personService.update(p)
        .then(updatedPerson => this.successMsg = 'User details updated successfully');
    }
  }

}
