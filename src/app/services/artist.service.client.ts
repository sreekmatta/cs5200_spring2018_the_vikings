import {Injectable} from '@angular/core';

@Injectable()
export class ArtistServiceClient {

  DOMAIN_URL = 'http://localhost:8080';
  ARTIST_URL = this.DOMAIN_URL + '/api/artist';

  createArtist(artist) {
    console.log('using artist service.');
    return fetch(this.ARTIST_URL, {
      body: JSON.stringify(artist),
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json(), error => alert('Error occurred while creating an Artist'));
  }

  updateArtist(artist) {
    return fetch(this.ARTIST_URL + '/' + artist.id, {
      body: JSON.stringify(artist),
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json(), error => alert('Error occurred while updating artist'));
  }
}
