import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable, Subject} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {BackendSimpleCommunicationService} from '../backend-communication/backend-simple-communication.service';
import {UserService} from "../user/user.service";

@Injectable()
export class AuthenticationService {
  constructor(private backendService: BackendSimpleCommunicationService,
              private router: Router,
              private userService: UserService) {
  }

  login(value): Observable<boolean> {
    const data = {
      username: value.username,
      password: value.password
    };
    const subject = new Subject();
    this.backendService.login(data).subscribe(response => {
      response = JSON.parse(response._body);
      this.userService.setToken(response.token.toString());
      this.router.navigateByUrl('/group');
      subject.next(true);
    }, response => {
      subject.next(false);
    });

    return subject.asObservable().first();
  }

  logout(): void {
    this.userService.removeToken();
    this.router.navigateByUrl('/');
  }

  isLogged(): boolean {
    return this.userService.getToken() !== null;
  }
}
