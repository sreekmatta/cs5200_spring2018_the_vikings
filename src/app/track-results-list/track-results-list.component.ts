import {Component, OnInit, Input} from '@angular/core';
import {Track} from '../models/Track';
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-results-list',
  templateUrl: './track-results-list.component.html',
  styleUrls: ['./track-results-list.component.css']
})
export class TrackResultsListComponent implements OnInit {
  @Input()
  resultList;
  @Input()
  domainObject;


  faThumbsUp = faThumbsUp;

  constructor() {
  }

  ngOnInit() {
    console.log('Result', this.resultList);
  }

  likeTrack(trackId) {
  }

}
