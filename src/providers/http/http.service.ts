import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { User } from '../../models/user';

/*
  Generated class for the HttpServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class HttpProvider {

  url: string = 'http://localhost:27042/api';

  constructor(public http: Http) {
    console.log('Hello HttpServiceProvider Provider');
  }

  public getLogin(): Promise<boolean> {
    return this.http.get(this.url + '/login', { withCredentials: true })
    .toPromise()
    .then(response => {
      if ( response.status >= 200 && response.status < 300 ) {
        return Promise.resolve(true);
      } else {
        return Promise.resolve(false);
      }
    })
    .catch(this.handleError);
  }

  public postLogin(username: string, password: string): Promise<boolean> {
    return this.http.post(this.url + '/login', {username: username, password: password})
    .toPromise()
    .then(response => {
      if ( response.status >= 200 && response.status < 300 ) {
        return Promise.resolve(true);
      } else {
        return Promise.resolve(false);
      }
    })
    .catch(this.handleError);
  }

  public deleteLogin(): Promise<boolean> {
    return this.http.delete(this.url + '/login')
    .toPromise()
    .then(response => {
      if ( response.status >= 200 && response.status < 300 ) {
        return Promise.resolve(true);
      } else {
        return Promise.resolve(false);
      }
    })
    .catch(this.handleError);
  }

  public getUsers(): Promise<User[]> {
    return this.http.get(this.url + '/users')
      .toPromise()
      .then(response => response.json() as User[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
