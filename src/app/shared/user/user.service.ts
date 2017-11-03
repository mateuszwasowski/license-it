import {Injectable} from '@angular/core';
import {BackendSimpleCommunicationService} from '../backend-communication/backend-simple-communication.service';

@Injectable()
export class UserService {
  private storageName = 'userGroupStorage';
  private userTokenStorage = 'currentUser';

  getGroup() {
    return localStorage.getItem(this.storageName);
  }

  setGroup(value: number) {
    localStorage.setItem(this.storageName, value.toString());
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
    return this.parseJwt(this.getToken());
  }

  private parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');

    return JSON.parse(window.atob(base64));
  };
}
