import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CriticServiceClient {

  DOMAIN_URL = 'http://localhost:8080';
  CRITIC_URL = this.DOMAIN_URL + '/api/critic';
  LIKE_URL = this.DOMAIN_URL + '/api/critic/like';
  UNLIKE_URL = this.DOMAIN_URL + '/api/critic/unlike';

  constructor(private http: HttpClient) {
  }

  createCritic(critic) {
    return this.http.post(this.CRITIC_URL, critic);
  }

  updateCritic(critic) {
    return this.http.put(this.CRITIC_URL + '/' + critic.id, critic);
  }

  likeStatus(tid) {
    return this.http.get(this.LIKE_URL + '/' + tid);
  }

  likeTrack(tid, track) {
    return this.http.post(this.LIKE_URL + '/' + tid, track);
  }

  unlikeTrack(tid) {
    return this.http.delete(this.UNLIKE_URL + '/' + tid);
  }
}
