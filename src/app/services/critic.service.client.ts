import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CriticServiceClient {

  DOMAIN_URL = 'http://localhost:8080';
  CRITIC_URL = this.DOMAIN_URL + '/api/critic';

  constructor(private http: HttpClient) {
  }

  createCritic(critic) {
    return this.http.post(this.CRITIC_URL, critic);
  }

  updateCritic(critic) {
    return this.http.put(this.CRITIC_URL + '/' + critic.id, critic);
  }
}
