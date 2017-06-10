import {Injectable} from '@angular/core';
import {CreateLinkService} from './create-link.service';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BackendSimpleCommunicationService {
  isMocked: boolean;

  public static dataToTable(object, order) {
    let array = [];
    for (let elementKey in object) {
      let element = object[elementKey];
      let singleElement = [element['id']];
      for (let singleTableElement of order) {
        let value = element[singleTableElement];
        singleElement.push(value !== undefined ? value : '');
      }
      array.push(singleElement);
    }
    return array;
  }

  public postObject(url, data) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(url, data, options).map(response => response.json());
  }

  editObject(url, data) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(url, data, options).map(response => response.json());
  }

  public getObjects(url) {
    return this.http.get(url).map(response => response.json());
  }

  constructor(private urlCreator: CreateLinkService, private http: Http) {
    this.isMocked = true;
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
    console.log(url);
    return this.getObjects(url);
  }

  addValuesToFormObject(form, response) {
    for (const formElement in form.list) {
      form.list[formElement].value = response[form.list[formElement].id];
    }
    return form;
  }
}
