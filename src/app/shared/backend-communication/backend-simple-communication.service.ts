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

  isCurrentGroupAdmin() {
    const currentGroup = this.userService.getGroup().idGroup;
    const currentUser = this.userService.getUserData().userId;

    return this.getGroup(currentGroup).map(response => {
      return Number(response.data.idUserCreator) === Number(currentUser);
    });
  }

  getApplications() {
    const url = this.urlCreator.getApplications(this.userService.getGroup().idGroup);
    return this.get(url, this.getRequestOptionsWithAuthorization());
  }

  getClients() {
    const url = this.urlCreator.getClients(this.userService.getGroup().idGroup);
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

  getGroupUsers() {
    const url = this.urlCreator.getGroupUsers(this.userService.getGroup().idGroup);
    return this.get(url, this.getRequestOptionsWithAuthorization());
  }

  getUserGroups() {
    const user = this.userService.getUserData().userId;
    const url = this.urlCreator.getUserGroup(user);

    return this.get(url, this.getRequestOptionsWithAuthorization());
  }

  addGroup(name) {
    const idUserCreator = this.userService.getUserData().userId;
    const data = {name, idUserCreator, isActive: 1};
    const url = this.urlCreator.getGroupAddition();

    return this.postObject(url, data);
  }

  addApplication(name, version) {
    const idGroup = this.userService.getGroup().idGroup;
    const data = {name, idGroup, version};
    const url = this.urlCreator.getApplicationsAddition();

    return this.postObject(url, data);
  }

  setUserPassword(password, oldPassword) {
    const data = {password, oldPassword};
    const url = this.urlCreator.getUserEdit();

    return this.editObject(url, data);
  }

  register(data) {
    const url = this.urlCreator.getRegister();
    data.isActive = true;

    return this.postObject(url, data);
  }

  inviteUserToGroup(data) {
    const url = this.urlCreator.inviteUserToGroup();
    data.GroupId = this.userService.getGroup().groupId;
    data.IdUserInviting = this.userService.getUserData().userId;

    return this.postObject(url, data).map(resp => JSON.parse(resp._body));
  }

  deleteGroup() {
    const url = this.urlCreator.editGroup();
    const data = {
      id: this.userService.getGroup().idGroup,
      isDelete: 0,
      isActive: 0
    };
    return this.editObject(url, data);
  }

  changeGroupName(data) {
    const url = this.urlCreator.editGroup();
    data.id = this.userService.getGroup().idGroup;

    return this.delete(url, data);
  }

  deleteFromGroup(groupId) {
    const userId = this.userService.getUserData().userId;
    const url = this.urlCreator.removeMeFromGroup(groupId, userId);

    return this.delete(url, this.getRequestOptionsWithAuthorization());
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
