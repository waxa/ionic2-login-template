import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { User } from '../../models/user';

@Injectable()
export class HttpProvider {

  url: string = 'http://localhost:27042/api';
  credentials: any = { withCredentials: true };
  showMenuSubj: Subject<boolean>;

  constructor(public http: Http) {
    console.log('Hello HttpServiceProvider Provider');
    this.showMenuSubj = new Subject();
  }

  public getLogin(): Promise<boolean> {
    return this.http.get(this.url + '/login', this.credentials)
    .toPromise()
    .then( response => this.handleResponse(response) )
    .catch( error => this.handleError(error) );
  }

  public postLogin(username: string, password: string): Promise<boolean> {
    return this.http.post(this.url + '/login', {username: username, password: password}, this.credentials)
    .toPromise()
    .then( response => this.handleResponse(response) )
    .catch( error => this.handleError(error) );
  }

  public deleteLogin(): Promise<boolean> {
    return this.http.delete(this.url + '/login', this.credentials)
    .toPromise()
    .then( response => this.handleResponse(response) )
    .catch( error => this.handleError(error) );
  }

  public postUsers(username: string, password: string): Promise<boolean> {
    return this.http.post(this.url + '/users', {username: username, password: password}, this.credentials)
    .toPromise()
    .then( response => this.handleResponse(response) )
    .catch( error => this.handleError(error) );
  }

  public getShowMenuSubj(): Observable<boolean> {
    return this.showMenuSubj;
  }

  public handleResponse(response: any): Promise<boolean> {
    this.showMenuSubj.next(true);
    return Promise.resolve(true);
  }

  private handleError(error: any): Promise<any> {
    console.error('handleError: An error occurred', error); // for demo purposes only
    if (error.status == 401) {
      this.showMenuSubj.next(false);
    }
    return Promise.reject(error.message || error);
  }

}
