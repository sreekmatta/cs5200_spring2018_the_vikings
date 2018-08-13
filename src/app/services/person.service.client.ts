import {Injectable} from '@angular/core';

@Injectable()
export class PersonServiceClient {
  REGISTER_URL = 'http://localhost:8080/api/register';
  USER_URL = 'http://localhost:8080/api/login';
  LOGIN_URL = 'http://localhost:8080/api/login';
  LOGOUT_URL = 'http://localhost:8080/api/logout';
  SESSION_URL = 'http://localhost:8080/api/get/session';

  findAllPersons() {
    return fetch(this.USER_URL)
      .then(response => response.json(),
        response => alert('Error thrown by server'));
  }

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

// findUserByUsername(username, password) {
//   return fetch(this.USER_URL)
//     .then(response => response.json(),
//       response => alert('Error thrown by server'));
// }
//
  update(user) {
    return fetch(this.USER_URL)
      .then(response => response.json(),
        response => alert('Error thrown by server'));
  }

//
// deleteUser(user) {
//   return fetch(this.USER_URL)
//     .then(response => response.json(),
//       response => alert('Error thrown by server'));
// }
}
