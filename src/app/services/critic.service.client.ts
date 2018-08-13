import {Injectable} from '@angular/core';

@Injectable()
export class CriticServiceClient {

  DOMAIN_URL = 'http://localhost:8080';
  CRITIC_URL = this.DOMAIN_URL + '/api/critic';

  createCritic(critic) {
    console.log('using critic service.');
    return fetch(this.CRITIC_URL, {
      body: JSON.stringify(critic),
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json(), error => alert('Error occurred while creating a Critic'));
  }

}
