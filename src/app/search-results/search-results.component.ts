import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NapsterServiceClient} from '../services/napster.service.client';
import {Track} from '../models/Track';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css', '../../assets/css/style.css']
})
export class SearchResultsComponent implements OnInit {

  searchQuery;
  tracksResultList: Track[];

  constructor(private route: ActivatedRoute, private napsterService: NapsterServiceClient) {
    this.route.params.subscribe(params => this.searchQuery = params['query']);
  }

  ngOnInit() {
    this.napsterService.findAllDomainObjectsByName(this.searchQuery)
      .then(response => {
        this.tracksResultList = response.search.data.tracks;
        console.log(this.tracksResultList);
      });
  }

}

