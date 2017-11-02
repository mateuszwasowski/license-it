import {Injectable} from '@angular/core';
import {BackendSimpleCommunicationService} from '../backend-communication/backend-simple-communication.service';

@Injectable()
export class UserService {
  private storageName = 'user-group-storage';

  constructor(private backendService: BackendSimpleCommunicationService) {
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

  currentGroup() {
    return this.backendService.isAdministratorOfGroup(this.getGroup());
  }
}
