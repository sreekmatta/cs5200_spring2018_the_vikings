import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class AdminServiceClient {

  DOMAIN_URL = 'http://localhost:8080';
  ADMIN_URL = this.DOMAIN_URL + '/api/admin/';

  constructor(private http: HttpClient) {
  }

  updateAdmin(admin) {
    return this.http.put(this.ADMIN_URL + '/' + admin.id, admin);
  }

}
