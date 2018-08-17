import { Component, OnInit, Input } from '@angular/core';
import {CriticServiceClient} from '../services/critic.service.client';
import {ActivatedRoute} from '@angular/router';
import {Track} from '../models/Track';

@Component({
  selector: 'app-rate-form',
  templateUrl: './rate-form.component.html',
  styleUrls: ['./rate-form.component.css']
})
export class RateFormComponent implements OnInit {

  rating: any;
  @Input() track: Track;

  constructor(private route: ActivatedRoute,
              private criticService: CriticServiceClient) {
    this.rating = 0;
  }

  ngOnInit() {
  }

  rateTrack() {
    console.log(this.track.id);
    this.track.id = this.track.id.split(".").pop();
    this.criticService.rateTrack(this.rating, this.track)
      .subscribe(response => {
        console.log(response);
      },
        error => alert('Couldn\'t rate this track'));
  }

}
