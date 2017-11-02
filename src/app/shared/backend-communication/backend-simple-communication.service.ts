import {Injectable} from '@angular/core';
import {CreateLinkService} from './create-link.service';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BackendSimpleCommunicationService {
  isMocked: boolean;

  static dataToTable(object, order) {
    const array = [];
    for (const elementKey in object) {
      if (object.hasOwnProperty(elementKey)) {
        const element = object[elementKey];
        const singleElement = [element['id']];
        for (const singleTableElement of order) {
          const value = element[singleTableElement];
          singleElement.push(value !== undefined ? value : '');
        }
        array.push(singleElement);
      }
    }
    return array;
  }
  static addValuesToFormObject(form, response) {
    for (const formElement in form.list) {
      if (form.list.hasOwnProperty(formElement)) {
        form.list[formElement].value = response[form.list[formElement].id];

      }
    }
    return form;
  }

  constructor(private urlCreator: CreateLinkService, private http: Http) {
    this.isMocked = true;
  }

  postObject(url, data) {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    return this.http.post(url, data, options).map(response => response.json());
  }

  editObject(url, data) {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    return this.http.put(url, data, options).map(response => response.json());
  }

  getObjects(url) {
    return this.http.get(url).map(response => response.json());
  }

  getUser() {
    const url = this.urlCreator.getUser();
    return this.getObjects(url);
  }

  login(data) {
    const url = this.urlCreator.getLoginUrl();
    if (this.isMocked) {
      return this.getObjects(url);
    }
    return this.postObject(url, data);
  }

  getApplications() {
    const url = this.urlCreator.getApplications();
    return this.getObjects(url);
  }

  getClients() {
    const url = this.urlCreator.getClients();
    return this.getObjects(url);
  }

  getApplicationLicenses(id) {
    const url = this.urlCreator.getApplicationLicenses(id);
    return this.getObjects(url);
  }
}
