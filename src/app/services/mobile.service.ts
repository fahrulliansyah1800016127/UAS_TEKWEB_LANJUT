import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mobile } from '../entities/mobile.entity';

@Injectable()
export class MobileService {
  private BASE_URL: string = 'http://localhost:8080//api/mobile/';

  constructor(private httpClient: HttpClient) {}

  findAll() {
    return this.httpClient
      .get(this.BASE_URL + 'findall')
      .toPromise()
      .then(res => res as Mobile[]);
  }

  find(id: number) {
    return this.httpClient
      .get(this.BASE_URL + 'find/' + id)
      .toPromise()
      .then(res => res as Mobile);
  }

  create(mobile: Mobile) {
    return this.httpClient
      .post(this.BASE_URL + 'create', mobile)
      .toPromise()
      .then(res => res);
  }

  update(mobile: Mobile) {
    return this.httpClient
      .put(this.BASE_URL + 'update', mobile)
      .toPromise()
      .then(res => res);
  }

  delete(id: number) {
    return this.httpClient
      .delete(this.BASE_URL + 'delete/' + id)
      .toPromise()
      .then(res => res);
  }
}
