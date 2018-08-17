import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NapsterServiceClient} from '../services/napster.service.client';
import {Track} from '../models/Track';
import {faThumbsUp, faStar, faEdit} from '@fortawesome/free-solid-svg-icons';
import {PersonServiceClient} from '../services/person.service.client';
import {Person} from '../models/Person';
import {CriticServiceClient} from '../services/critic.service.client'

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  person: Person;
  trackId: String;
  imageURL: any;
  previewURL: any;
  tracksResult: Track;
  faThumbsUp = faThumbsUp;
  faEdit = faEdit;
  faStar = faStar;
  like: any;
  saveTrack: Track;

  constructor(private route: ActivatedRoute,
              private napsterService: NapsterServiceClient,
              private personService: PersonServiceClient,
              private criticService: CriticServiceClient) {
    this.personService.checkSession().subscribe(
      (person: Person) => this.person = person, error => alert('could not load user')
    );
    this.trackId = this.route.snapshot.paramMap.get('id');
    this.napsterService.findTrackById(this.trackId)
      .subscribe(response => {
          this.tracksResult = response['tracks'][0];
          this.previewURL = response['tracks'][0].previewURL;
          this.napsterService.findAlbumImagesById(response['tracks'][0].albumId)
            .subscribe(response => {
                this.imageURL = response['images'][0].url;
              },
              error => alert('Server couldn\'t find an album art!'));
        },
        error => alert('Server threw an error!'));
     this.criticService.likeStatus(this.trackId.split(".").pop())
       .subscribe(resp => {
           console.log(resp);
         },
         err => {
           alert("Couldn't like Item");
       });
  }

  ngOnInit() {
    console.log(this.like);
  }

  likeTrack() {
    this.tracksResult.id = parseInt(this.trackId.split(".").pop());
    this.criticService.likeTrack(this.trackId.split(".").pop(), this.tracksResult)
      .subscribe(resp => {
        console.log("Hello")
      },
        err => {
          alert("Couldn't like Item");
      });
  }

  unlikeTrack() {
    this.criticService.unlikeTrack(this.trackId.split(".").pop(), this.person)
      .subscribe(resp => {
          console.log("Hello")
        },
        err => {
          alert("Couldn't like Item");
        });
  }

}
