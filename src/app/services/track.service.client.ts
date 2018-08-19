import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class TrackServiceClient {

  DOMAIN_URL = 'http://localhost:8080';
  TRACK_URL = this.DOMAIN_URL + '/api/track/';

  constructor(private http: HttpClient) {
  }

  findTracksByArtistId(artistId) {
    return this.http.get(this.TRACK_URL + 'artist/' + artistId);
  }

  findTrackById(trackId) {
    return this.http.get(this.TRACK_URL + 'id/' + trackId);
  }

  findTrackByName(name) {
    return this.http.get(this.TRACK_URL + 'name/' + name);
  }
}
