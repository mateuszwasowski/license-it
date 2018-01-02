import {Injectable} from '@angular/core';

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
    const data = ['api/Groups/GetById', group];
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

  getApplicationsAddition() {
    const data = 'api/Applications/Add';
    return this.prepareLink(data);
  }

  getUserEdit() {
    const data = 'api/User/Edit';
    return this.prepareLink(data);
  }

  getRegister() {
    const data = 'api/User/Add';
    return this.prepareLink(data);
  }

  inviteUserToGroup() {
    const data = 'api/group/invite';
    return this.prepareLink(data);
  }

  deleteGroup() {
    const data = 'api/group/delete';
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
