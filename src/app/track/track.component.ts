import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NapsterServiceClient} from '../services/napster.service.client';
import {Track} from '../models/Track';
import {faThumbsUp, faStar, faEdit} from '@fortawesome/free-solid-svg-icons';
import {PersonServiceClient} from '../services/person.service.client';
import {Person} from '../models/Person';
@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  person: Person;
  trackId: String;
  imageURL: any;
  tracksResult: Track;
  faThumbsUp = faThumbsUp;
  faEdit = faEdit;
  faStar = faStar;

  constructor(private route: ActivatedRoute,
              private napsterService: NapsterServiceClient,
              private personService: PersonServiceClient) {
    this.personService.checkSession().subscribe(
      (person: Person) => this.person = person, error => alert('could not load user')
    );
    this.trackId = this.route.snapshot.paramMap.get('id');
    this.napsterService.findTrackById(this.trackId)
      .subscribe(response => {
          this.tracksResult = response['tracks'][0];
          this.napsterService.findAlbumImagesById(response['tracks'][0].albumId)
            .subscribe(response => {
                this.imageURL = response['images'][0].url;
              },
              error => alert('Server couldn\'t find an album art!'));
        },
        error => alert('Server threw an error!'));
  }

  ngOnInit() {

  }

  likeTrack() {
    console.log("You like this track no "+ this.trackId.split(".").pop());
  }

}
