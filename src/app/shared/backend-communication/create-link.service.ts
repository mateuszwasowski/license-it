import { Injectable } from '@angular/core';

@Injectable()
export class CreateLinkService {
  private backendUrl = 'http://www.licenseit.pro:5000';

  private prepareLink(partial: string | Array<string>) {
    let array = [this.backendUrl];
    if (Array.isArray(partial)) {
      array = array.concat(partial);
    } else {
      array.push(partial);
    }
    return array.join('/');
  }

  public getLoginUrl() {
    const data = 'api/token';
    return this.prepareLink(data);
  }

  public getUser() {
    const data = 'user.json';
    return this.prepareLink(data);
  }

  public getApplications() {
    const data = 'api/Applications/Get';
    return this.prepareLink(data);
  }

  public getApplicationLicenses(id) {
    const data = ['api/License/GetByApplication', id];
    return this.prepareLink(data);
  }

  public getClients() {
    const data = 'api/Clients/Get';
    return this.prepareLink(data);
  }

  public getGroup(group) {
    const data = ['api/Group/get', group];
    return this.prepareLink(data);
  }

  public getUserGroup(user) {
    const data = ['api/UserGroup/GetByIdUser/', user];
    return this.prepareLink(data);
  }
}
