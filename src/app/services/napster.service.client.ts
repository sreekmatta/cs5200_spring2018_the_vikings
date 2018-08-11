import {Injectable} from '@angular/core';

@Injectable()
export class NapsterServiceClient {

  NAPSTER_KEY = 'YWJkMTA2MTMtN2I5Zi00MDE1LWE1MGQtMzJjNTZhOTFlMzBh';
  NAPSTER_SEARCH_QUERY_URL = 'http://api.napster.com/v2.2/search?apikey=' + this.NAPSTER_KEY + '&query=';

  findAllDomainObjectsByName(searchString) {
    return fetch(this.NAPSTER_SEARCH_QUERY_URL + searchString)
      .then(response => response.json(),
        response => alert('Error thrown by server'));
  }

  findTrackByName(searchString) {
    return fetch(this.NAPSTER_SEARCH_QUERY_URL + searchString + '&type=track')
      .then(response => response.json(),
        response => alert('Error thrown by server'));
  }

  findPlaylistByName(searchString) {
    return fetch(this.NAPSTER_SEARCH_QUERY_URL + searchString + '&type=playlist')
      .then(response => response.json(),
        response => alert('Error thrown by server'));
  }

  findAlbumByName(searchString) {
    return fetch(this.NAPSTER_SEARCH_QUERY_URL + searchString + '&type=album')
      .then(response => response.json(),
        response => alert('Error thrown by server'));
  }

  findArtistByName(searchString) {
    return fetch(this.NAPSTER_SEARCH_QUERY_URL + searchString + '&type=artist')
      .then(response => response.json(),
        response => alert('Error thrown by server'));
  }

}
