import {Injectable} from '@angular/core';
import {BackendSimpleCommunicationService} from '../backend-communication/backend-simple-communication.service';

@Injectable()
export class UserService {
  private storageName = 'userGroupStorage';
  private userTokenStorage = 'currentUser';
  private userData: any;

  getGroup(): any {
    return JSON.parse(localStorage.getItem(this.storageName));
  }

  setGroup(value) {
    localStorage.setItem(this.storageName, JSON.stringify(value));
  }

  removeGroup() {
    localStorage.removeItem(this.storageName);
  }

  getToken(): string {
    return localStorage.getItem(this.userTokenStorage);
  }

  removeToken() {
    localStorage.removeItem(this.userTokenStorage);
  }

  setToken(token) {
    localStorage.setItem(this.userTokenStorage, token);
  }

  getUserData() {
    if (!this.userData) {
      this.userData = this.parseJwt(this.getToken());
    }
    return this.userData;
  }

  private parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');

    return JSON.parse(window.atob(base64));
  };
}
