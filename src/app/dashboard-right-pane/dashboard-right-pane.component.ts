import {Component, Input, OnInit} from '@angular/core';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {Track} from '../models/Track';
import {NapsterServiceClient} from '../services/napster.service.client';
import {TrackServiceClient} from '../services/track.service.client';
import {PersonServiceClient} from '../services/person.service.client';
import {Person} from '../models/Person';

@Component({
  selector: 'app-dashboard-right-pane',
  templateUrl: './dashboard-right-pane.component.html',
  styleUrls: ['./dashboard-right-pane.component.css']
})
export class DashboardRightPaneComponent implements OnInit {
  @Input()
  domainObject;

  tracksResultList: Track[];
  person: Person;
  faPlusCircle = faPlusCircle;

  constructor(private tracksService: TrackServiceClient, private personService: PersonServiceClient) {
  }

  ngOnInit() {
    this.personService.checkSession().subscribe(
      (person: Person) => {
        this.person = person;
        this.tracksService.findTracksByArtistId(this.person.id).subscribe((tracks: Track[]) => {
          this.tracksResultList = tracks;
        });
      }, error => alert('could not load user')
    );
  }

}
