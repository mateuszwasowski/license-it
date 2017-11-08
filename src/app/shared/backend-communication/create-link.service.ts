import { Injectable } from '@angular/core';

@Injectable()
export class CreateLinkService {
  private backendUrl = 'http://www.licenseit.pro:5000';

  getLoginUrl() {
    const data = 'api/token';
    return this.prepareLink(data);
  }

  getUser() {
    const data = 'user.json';
    return this.prepareLink(data);
  }

  getApplications(groupId) {
    const data = ['api/Applications/GetByGroup', groupId];
    return this.prepareLink(data);
  }

  getApplicationLicenses(id) {
    const data = ['api/License/GetByApplication', id];
    return this.prepareLink(data);
  }

  getClients(groupId) {
    const data = ['api/Clients/GetByGroup', groupId];
    return this.prepareLink(data);
  }

  getGroup(group) {
    const data = ['api/Group/get', group];
    return this.prepareLink(data);
  }

  getUserGroup(user) {
    const data = ['api/UserGroup/GetByIdUser', user];
    return this.prepareLink(data);
  }

  getGroupAddition() {
    const data = 'api/Groups/Add';
    return this.prepareLink(data);
  }

  private prepareLink(partial: string | Array<string>) {
    let array = [this.backendUrl];
    if (Array.isArray(partial)) {
      array = array.concat(partial);
    } else {
      array.push(partial);
    }
    return array.join('/');
  }
}
