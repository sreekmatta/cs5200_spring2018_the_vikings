import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class NapsterServiceClient {

  NAPSTER_KEY = 'YWJkMTA2MTMtN2I5Zi00MDE1LWE1MGQtMzJjNTZhOTFlMzBh';
  NAPSTER_SEARCH_QUERY_URL = 'http://api.napster.com/v2.2/search?apikey=' + this.NAPSTER_KEY + '&query=';

  constructor(private http: HttpClient) {
  }

  findAllDomainObjectsByName(searchString) {
    return this.http.get(this.NAPSTER_SEARCH_QUERY_URL + searchString);
  }

  findTrackByName(searchString) {
    return this.http.get(this.NAPSTER_SEARCH_QUERY_URL + searchString + '&type=track');
  }

  findPlaylistByName(searchString) {
    return this.http.get(this.NAPSTER_SEARCH_QUERY_URL + searchString + '&type=playlist');
  }

  findAlbumByName(searchString) {
    return this.http.get(this.NAPSTER_SEARCH_QUERY_URL + searchString + '&type=album');
  }

  findArtistByName(searchString) {
    return this.http.get(this.NAPSTER_SEARCH_QUERY_URL + searchString + '&type=artist');
  }

}
