import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
  private storageName = 'user-group-storage';

  getGroup() {
    return localStorage.getItem(this.storageName);
  }

  setGroup(value: number) {
    localStorage.setItem(this.storageName, value.toString());
  }

  removeGroup() {
    localStorage.removeItem(this.storageName);
  }
}
