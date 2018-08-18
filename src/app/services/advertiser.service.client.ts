import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AdvertiserServiceClient {

  DOMAIN_URL = 'http://localhost:8080';
  ADVERTISER_URL = this.DOMAIN_URL + '/api/advertiser';

  constructor(private http: HttpClient) {
  }

  createAdvertiser(advertiser) {
    return this.http.post(this.ADVERTISER_URL, advertiser);
  }
}
