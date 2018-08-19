import {Component, Input, OnInit} from '@angular/core';
import {TrackServiceClient} from '../services/track.service.client';
import {AlbumServiceClient} from '../services/album.service.client';

@Component({
  selector: 'app-domain-manager',
  templateUrl: './domain-manager.component.html',
  styleUrls: ['./domain-manager.component.css']
})
export class DomainManagerComponent implements OnInit {

  @Input() entity: string;
  resultSet: any;

  constructor(private trackService: TrackServiceClient,
              private albumService: AlbumServiceClient) {
  }

  ngOnInit() {
    console.log(this.entity);
    if (this.entity === 'album') {
      this.albumService.findAllAlbums().subscribe(
        response => {
          this.resultSet = response;
          console.log(response);
        }, () => alert('Couldn\'t load albums'));
    } else if (this.entity === 'track') {
      this.trackService.findAllTracks().subscribe(
        response => {
          this.resultSet = response;
          console.log(response);
        }, () => alert('Couldn\'t load tracks'));
    }
  }

  delete(entity) {

  }

}
