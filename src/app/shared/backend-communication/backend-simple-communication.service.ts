import {Injectable} from '@angular/core';
import {CreateLinkService} from './create-link.service';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {UserService} from '../user/user.service';

@Injectable()
export class BackendSimpleCommunicationService {
  constructor(private urlCreator: CreateLinkService, private http: Http, private userService: UserService) {
  }

  postObject(url, data) {
    const headers = this.prepareAuthorizationHeader();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers});

    return this.post(url, data, options);
  }

  editObject(url, data) {
    const headers = this.prepareAuthorizationHeader();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers});

    return this.put(url, data, options);
  }

  getObjects(url) {
    return this.get(url, this.getRequestOptionsWithAuthorization());
  }

  login(data) {
    const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    const options = new RequestOptions({headers: headers});
    const url = this.urlCreator.getLoginUrl();
    const body = new URLSearchParams();
    body.set('username', data.username);
    body.set('password', data.password);

    return this.post(url, body.toString(), options);
  }

  getApplications() {
    const url = this.urlCreator.getApplications();
    return this.get(url, this.getRequestOptionsWithAuthorization());
  }

  getClients() {
    const url = this.urlCreator.getClients();
    return this.get(url, this.getRequestOptionsWithAuthorization());
  }

  getApplicationLicenses(id) {
    const url = this.urlCreator.getApplicationLicenses(id);
    return this.get(url, this.getRequestOptionsWithAuthorization());
  }

  getGroup(group) {
    const url = this.urlCreator.getGroup(group);
    return this.get(url, this.getRequestOptionsWithAuthorization());
  }

  private prepareAuthorizationHeader() {
    const string = `Bearer ${this.userService.getToken()}`;
    return new Headers({'Authorization': string});
  }

  private getRequestOptionsWithAuthorization() {
    return new RequestOptions({headers: this.prepareAuthorizationHeader()});
  }

  private get(...args): Observable<{ [key: string]: any }> {
    return this.runHttp('get', args).map(response => response.json());
  }

  private put(...args): Observable<{ [key: string]: any }> {
    return this.runHttp('put', args);
  }

  private post(...args): Observable<{ [key: string]: any }> {
    return this.runHttp('post', args);
  }

  private delete(...args): Observable<{ [key: string]: any }> {
    return this.http.delete.apply(this.http, args);
  }

  private runHttp(method: string, args: Array<string>) {
    return this.http[method].apply(this.http, args);
  }
}
