import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NapsterServiceClient} from '../services/napster.service.client';
import {Track} from '../models/Track';
import {Playlist} from '../models/Playlist';
import {Album} from '../models/Album';
import {Artist} from '../models/Artist';
import {Person} from '../models/Person';
import {PersonServiceClient} from '../services/person.service.client';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css', '../../assets/css/style.css']
})
export class SearchResultsComponent implements OnInit {

  searchQuery;
  tracksResultList: Track[];
  playlistsResultList: Playlist[];
  albumsResultList: Album[];
  artistsResultList: Artist[];
  peopleResultList: Person[];

  constructor(private route: ActivatedRoute, private napsterService: NapsterServiceClient, private personService: PersonServiceClient) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.searchQuery = params['query'];
        this.personService.findUserByUsername(this.searchQuery)
          .subscribe((response: Person[]) => {
            this.peopleResultList = response;
          });
        this.napsterService.findAllDomainObjectsByName(this.searchQuery)
          .subscribe((response) => {
            this.tracksResultList = response['search'].data.tracks;
            this.playlistsResultList = response['search'].data.playlists;
            this.albumsResultList = response['search'].data.albums;
            this.artistsResultList = response['search'].data.artists;
          });
      }
    );
  }

}

