import {Component, OnInit, Input} from '@angular/core';
import {Track} from '../models/Track';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {
  @Input()
  resultList;

  constructor() {
  }

  ngOnInit() {
    console.log('Result' , this.resultList);
  }

}
