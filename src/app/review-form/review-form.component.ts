import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CriticServiceClient} from '../services/critic.service.client';
import {Album} from '../models/Album';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {

  @Input() album: Album;
  constructor(private route: ActivatedRoute,
              private criticService: CriticServiceClient) {
  }

  ngOnInit() {
  }

  reviewTrack() {

  }

  updateReviewTrack() {

  }

}
