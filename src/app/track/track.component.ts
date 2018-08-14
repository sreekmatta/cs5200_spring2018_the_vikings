import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NapsterServiceClient} from '../services/napster.service.client';
import {Track} from '../models/Track';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  trackId: String;
  tracksResult: Track;

  constructor(private route: ActivatedRoute,
              private napsterService: NapsterServiceClient) {
    this.trackId = this.route.snapshot.paramMap.get('id');
    this.napsterService.findTrackById(this.trackId)
      .then(response => {
          this.tracksResult = response.tracks[0];
        },
        error => alert('Server threw an error!'));
  }

  ngOnInit() {

  }

}
