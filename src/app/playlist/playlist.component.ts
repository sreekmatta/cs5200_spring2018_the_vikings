import {Component, OnInit} from '@angular/core';
import {PlaylistServiceClient} from '../services/playlist.service.client';
import {Playlist} from '../models/Playlist';
import {ActivatedRoute, Router} from '@angular/router';
import {NapsterServiceClient} from '../services/napster.service.client';
import {Track} from '../models/Track';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css', '../../app/album/album.component.css']
})
export class PlaylistComponent implements OnInit {
  playlist: Playlist;
  playlistId;

  constructor(private route: ActivatedRoute, private router: Router,
              private playlistService: PlaylistServiceClient, private napsterService: NapsterServiceClient) {
  }

  ngOnInit() {
    this.playlistId = this.route.snapshot.paramMap.get('id');
    if (this.playlistId.toString().indexOf('mp') === 0) {
      this.napsterService.findPlaylistById(this.playlistId)
        .subscribe((response: Playlist) => {
          this.playlist = response['playlists'][0];
          this.playlist.imageURL = this.playlist['images'][0].url;
          this.napsterService.getPlaylistTracks(this.playlist['links'].tracks.href)
            .subscribe((res: Track[]) => {
              this.playlist.tracks = res['tracks'];
            });

        });
    } else {
      this.playlistService.findPlaylistById(this.playlistId)
        .subscribe((response: Playlist) => {
          this.playlist = response;
        });
    }
  }

  goToTrackPage(tid) {
    this.router.navigate(['track' + '/' + tid]);
  }

}
