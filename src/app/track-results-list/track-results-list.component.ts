import {Component, OnInit, Input} from '@angular/core';
import {Track} from '../models/Track';

@Component({
  selector: 'app-results-list',
  templateUrl: './track-results-list.component.html',
  styleUrls: ['./track-results-list.component.css']
})
export class TrackResultsListComponent implements OnInit {
  @Input()
  resultList;

  constructor() {
  }

  ngOnInit() {
    console.log('Result' , this.resultList);
  }

}
