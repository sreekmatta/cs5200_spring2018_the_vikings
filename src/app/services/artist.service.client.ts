import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ArtistServiceClient {

  DOMAIN_URL = 'http://localhost:8080';
  ARTIST_URL = this.DOMAIN_URL + '/api/artist';

  constructor(private http: HttpClient) {
  }

  createArtist(artist) {
    console.log(artist);
    return this.http.post(this.ARTIST_URL, artist);
  }

  updateArtist(artist) {
    return this.http.put(this.ARTIST_URL + '/' + artist.id, artist);
  }
}
