import {Injectable} from '@angular/core';

@Injectable()
export class NapsterServiceClient {

  NAPSTER_KEY = 'YWJkMTA2MTMtN2I5Zi00MDE1LWE1MGQtMzJjNTZhOTFlMzBh';
  NAPSTER_SEARCH_PREFIX = 'http://api.napster.com/v2.2'
  NAPSTER_SEARCH_QUERY_URL = this.NAPSTER_SEARCH_PREFIX + '/search?apikey=' + this.NAPSTER_KEY + '&query=';

  findAllDomainObjectsByName(searchString, offset = 0) {
    return fetch(this.NAPSTER_SEARCH_QUERY_URL + searchString + '&offset=' + offset)
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

  findTrackById(id) {
    return fetch(this.NAPSTER_SEARCH_PREFIX + '/tracks/' + id + '?apikey=' + this.NAPSTER_KEY)
      .then(response => response.json(),
        response => alert('Error thrown by server'));
  }
}
