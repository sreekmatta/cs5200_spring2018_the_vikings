import {Component, Injectable, Input, OnInit} from '@angular/core';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {Track} from '../models/Track';
import {NapsterServiceClient} from '../services/napster.service.client';
import {TrackServiceClient} from '../services/track.service.client';
import {PersonServiceClient} from '../services/person.service.client';
import {Person} from '../models/Person';
import {Playlist} from '../models/Playlist';
import {Album} from '../models/Album';
import {Artist} from '../models/Artist';
import {PlaylistServiceClient} from '../services/playlist.service.client';
import {AlbumServiceClient} from '../services/album.service.client';

@Component({
  selector: 'app-dashboard-right-pane',
  templateUrl: './dashboard-right-pane.component.html',
  styleUrls: ['./dashboard-right-pane.component.css']
})
@Injectable()
export class DashboardRightPaneComponent implements OnInit {
  @Input()
  domainObject;

  resultList;

  person: Person;
  faPlusCircle = faPlusCircle;

  constructor(private tracksService: TrackServiceClient, private personService: PersonServiceClient,
              private playlistsService: PlaylistServiceClient, private albumService: AlbumServiceClient) {
  }

  ngOnInit() {
    this.personService.checkSession().subscribe(
      (person: Person) => {
        this.person = person;
        if (this.domainObject === 'track') {
          this.tracksService.findTracksByArtistId(this.person.id).subscribe((tracks: Track[]) => {
            this.resultList = tracks;
          });
        }
        if (this.domainObject === 'album') {
          this.albumService.findAlbumsByArtistId(this.person.id).subscribe((albums: Album[]) => {
            this.resultList = albums;
          });
        }
        if (this.domainObject === 'playlist') {
          this.playlistsService.findPlaylistsByPersonId(this.person.id).subscribe((playlists: Playlist[]) => {
            this.resultList = playlists;
          });
        }
      }, error => alert('could not load user')
    );
  }

}
