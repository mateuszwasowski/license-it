import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { BackendSimpleCommunicationService } from '../backend-communication/backend-simple-communication.service';


@Injectable()
export class AuthenticationService {
    public token: string|null;

    constructor(private backendService: BackendSimpleCommunicationService, private router: Router) {
        this.token = localStorage.getItem('currentUser');
    }

    login(username: string, password: string): Observable<boolean> {
        const subject = new Subject<boolean>();
        const data = {
            username: username,
            password: password
        };

        this.backendService.login(data).subscribe(response => {
            const checkStatus = response && response.status;
            if (checkStatus) {
                localStorage.setItem('currentUser', response.token);
                this.router.navigateByUrl('/group');
            }
            subject.next(checkStatus);
        });
        return subject.asObservable().first();
    }

    logout(): void {
        this.token = null;
        localStorage.removeItem('currentUser');
        this.router.navigateByUrl('/');
    }

    isLogged(): boolean {
        return this.getUserToken() !== null;
    }

    getUserToken(): string {
        return localStorage.getItem('currentUser');
    }
}
