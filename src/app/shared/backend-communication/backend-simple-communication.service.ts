import { Injectable } from '@angular/core';
import { CreateLinkService } from './create-link.service';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BackendSimpleCommunicationService {
    isMocked : boolean;

    postObject(url, data) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        return this.http.post(url, data, options).map(response => response.json());
    }

    getObjects(url) {
        return this.http.get(url).map(response => response.json());
    }

    constructor(private urlCreator: CreateLinkService, private http: Http) {
        this.isMocked = true
    }

    getUser() {
        let url = this.urlCreator.getUser();
        return this.getObjects(url);
    }

    login(data) {
        let url = this.urlCreator.getLoginUrl();
        if(this.isMocked) {
            return this.getObjects(url);
        }
        return this.postObject(url, data);
    }
}
