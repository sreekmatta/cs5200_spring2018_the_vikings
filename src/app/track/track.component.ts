import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NapsterServiceClient} from '../services/napster.service.client';
import {Track} from '../models/Track';
import {faThumbsUp, faThumbsDown, faStar} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  trackId: String;
  imageURL: any;
  tracksResult: Track;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faStar = faStar;

  constructor(private route: ActivatedRoute,
              private napsterService: NapsterServiceClient) {
    this.trackId = this.route.snapshot.paramMap.get('id');
    this.napsterService.findTrackById(this.trackId)
      .subscribe(response => {
          this.tracksResult = response.tracks[0];\
          this.napsterService.findAlbumImagesById(response.tracks[0].albumId)
            .subscribe(response => {
                this.imageURL = response.images[0].url;
              },
              error => alert('Server couldn\'t find an album art!'));
        },
        error => alert('Server threw an error!'));
  }

  ngOnInit() {

  }

}
