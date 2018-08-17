import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class PlaylistServiceClient {

  DOMAIN_URL = 'http://localhost:8080';
  PLAYLIST_URL = this.DOMAIN_URL + '/api/playlist/';

  constructor(private http: HttpClient) {}

  findPlaylistsByPersonId(personId) {
    return this.http.get(this.PLAYLIST_URL + 'person/' + personId);
  }

}
