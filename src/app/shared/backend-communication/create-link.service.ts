import { Injectable } from '@angular/core';

@Injectable()
export class CreateLinkService {
  private mockedDataURl = 'mocked-data';
  private backendUrl = '';

  private prepareLink(partial: string | Array<string>, isMocked: boolean = true) {
    let array = [this.backendUrl];
    if(isMocked) {
      array = [this.mockedDataURl];
    }
    if(Array.isArray(partial)) {
      array.concat(partial);
    } else {
      array.push(partial);
    }
    return array.join('/');
  }

  public getLoginUrl() {
    let data = 'login.json';
    return this.prepareLink(data);
  }

  public isLoggedUrl() {
    let data = 'login.json';
    return this.prepareLink(data)
  }
}
