import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class PersonServiceClient {

  DOMAIN_URL = 'http://localhost:8080';
  REGISTER_URL = this.DOMAIN_URL + '/api/register';
  USER_URL = this.DOMAIN_URL + '/api/login';
  LOGIN_URL = this.DOMAIN_URL + '/api/login';
  LOGOUT_URL = this.DOMAIN_URL + '/api/logout';
  SESSION_URL = this.DOMAIN_URL + '/api/get/session';

  ARTIST_URL = this.DOMAIN_URL + '/api/artist';

  constructor(private http: HttpClient) {
  }

  findAllPersons() {
    return this.http.get(this.USER_URL);
  }

  login(username, password) {
    return this.http.get(this.LOGIN_URL + '?username=' + username + '&password=' + password);
  }

  logout() {
    return this.http.get(this.LOGOUT_URL);
  }

  checkSession() {
    return this.http.get(this.SESSION_URL);
  }

  findUserByEmail(email) {
    return this.http.get(this.USER_URL + '/email/' + email);
  }

  findUserById(id) {
    return this.http.get(this.USER_URL + '/' + id);
  }

  /**
   * @deprecated
   */
  createPerson(person) {
    return this.http.post(this.REGISTER_URL + '/' + person.userType, person);
  }

  /**
   * @deprecated
   */
  update(person) {
    if (person.dType === 'ARTIST') {
      return this.http.put(this.ARTIST_URL + '/' + person.id, person);
    }
  }

// findUserByUsername(username, password) {
//   return fetch(this.USER_URL)
//     .then(response => response.json(),
//       response => alert('Error thrown by server'));
// }
//
// deleteUser(user) {
//   return fetch(this.USER_URL)
//     .then(response => response.json(),
//       response => alert('Error thrown by server'));
// }
}
