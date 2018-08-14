import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Person} from '../models/Person';
import {PersonServiceClient} from '../services/person.service.client';
import {ArtistServiceClient} from '../services/artist.service.client';
import {CriticServiceClient} from '../services/critic.service.client';
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
              private personService: PersonServiceClient,
              private artistService: ArtistServiceClient,
              private criticService: CriticServiceClient) {
    this.personService.checkSession().subscribe(
      (person: Person) => this.person = person, error => alert('could not load user')
    );
  }

  ngOnInit() {

    if (!this.person) {
      this.person = new Person();
    }
  }

  update(p) {
    if (p.dType === 'ARTIST') {
      this.artistService.updateArtist(p)
        .subscribe(updatedPerson => this.successMsg = 'Artist details updated successfully');
    } else if (p.dType === 'CRITIC') {
      this.criticService.updateCritic(p)
        .subscribe(updatedPerson => this.successMsg = 'Critic details updated successfully');
    }
  }
}
