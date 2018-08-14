import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ArtistServiceClient {

  DOMAIN_URL = 'http://localhost:8080';
  ARTIST_URL = this.DOMAIN_URL + '/api/artist';

  constructor(private http: HttpClient) {
  }

  createArtist(artist) {
    console.log('using artist service.');
    return this.http.post(this.ARTIST_URL, {
      body: JSON.stringify(artist),
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  updateArtist(artist) {
    return this.http.put(this.ARTIST_URL + '/' + artist.id, {
      body: JSON.stringify(artist),
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
