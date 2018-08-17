import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate-form',
  templateUrl: './rate-form.component.html',
  styleUrls: ['./rate-form.component.css']
})
export class RateFormComponent implements OnInit {

  rating: any;
  constructor() {
    this.rating = 0;
  }

  ngOnInit() {
  }

  rateTrack() {
    console.log('A rating of ' + this.rating);
  }

}
