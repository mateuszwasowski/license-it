import { Injectable } from '@angular/core';
import { CreateLinkService } from './create-link.service';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BackendSimpleCommunicationService {
    private postObject(url, data) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        return this.http.post(url, data, options).map(response => response.json());
    }

    private getObjects(url) {
        return this.http.get(url).map(response => response.json());
    }

    constructor(private urlCreator: CreateLinkService, private http: Http) {
    }

    public login(username, password) {
        let data = {
            'username': username,
            'password': password
        };
        let url = this.urlCreator.getLoginUrl();
        return this.postObject(url, data);
    }

    public isLogged() {
        let url = this.urlCreator.isLoggedUrl();
        return this.getObjects(url);
    }
}
