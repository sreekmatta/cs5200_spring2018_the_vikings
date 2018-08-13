import {Injectable} from '@angular/core';

@Injectable()
export class PersonServiceClient {
  DOMAIN_URL = 'http://localhost:8080';
  REGISTER_URL = this.DOMAIN_URL + '/api/register';
  USER_URL = this.DOMAIN_URL + '/api/login';
  LOGIN_URL = this.DOMAIN_URL + '/api/login';
  LOGOUT_URL = this.DOMAIN_URL + '/api/logout';
  SESSION_URL = this.DOMAIN_URL + '/api/get/session';

  ARTIST_URL = this.DOMAIN_URL + '/api/artist';

  findAllPersons() {
    return fetch(this.USER_URL)
      .then(response => response.json(),
        response => alert('Error thrown by server'));
  }

  login(username, password) {
    return fetch(this.LOGIN_URL + '?username=' + username + '&password=' + password)
      .then(response => response.json(), error => alert('Can\'t Login'));
  }

  logout() {
    return fetch(this.LOGOUT_URL)
      .then(response => response.json(), error => alert('Can\'t Logout'));
  }

  checkSession() {
    return fetch(this.SESSION_URL)
      .then(response => response.json());
  }

  findUserByEmail(email) {
    return fetch(this.USER_URL + '/email/' + email)
      .then(response => response.json(),
        response => alert('Error thrown by server'));
  }

  findUserById(id) {
    return fetch(this.USER_URL + '/' + id, {
      credentials: 'include', // include, same-origin, *omit
    })
      .then(response => response.json(),
        response => alert('User not found by Id: ' + id));
  }

  /**
   * @deprecated
   */
  createPerson(person) {
    return fetch(this.REGISTER_URL + '/' + person.userType, {
      body: JSON.stringify(person),
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json(), error => alert('Error occurred while creating a Person'));
  }

  /**
   * @deprecated
   */
  update(person) {
    if(person.dType === 'ARTIST') {
      return fetch(this.ARTIST_URL + '/' + person.id, {
        body: JSON.stringify(person),
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        }
      })
        .then(response => response.json(), error => alert('Error occurred while updating artist'));
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
