import { Injectable } from '@angular/core';

@Injectable()
export class CreateLinkService {
  private mockedDataURl = 'http://localhost:4200/assets/mocked-data';
  private backendUrl = 'http://www.licenseit.pro:5000';

  private prepareLink(partial: string | Array<string>, isMocked: boolean = true) {
    let array = [this.backendUrl];
    if(isMocked) {
      array = [this.mockedDataURl];
    }
    if(Array.isArray(partial)) {
      array = array.concat(partial);
    } else {
      array.push(partial);
    }
    return array.join('/');
  }

  public getLoginUrl() {
    let data = 'login.json';
    return this.prepareLink(data);
  }

  public getUser() {
    let data = 'user.json';
    return this.prepareLink(data);
  }

  public getApplications() {
    let data = 'api/Applications/Get';
    return this.prepareLink(data, false);
  }

  public getApplicationLicenses(id) {
    let data = ['api/License/GetByApplication', id];
    return this.prepareLink(data, false);
  }

  public getClients() {
    let data = 'api/Clients/Get';
    return this.prepareLink(data, false);
  }
}
