import {Injectable} from '@angular/core';
import {BackendSimpleCommunicationService} from '../backend-communication/backend-simple-communication.service';

@Injectable()
export class UserService {
  private storageName = 'user-group-storage';
  private userTokenStorage = 'currentUser';

  constructor() {
  }

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
}
