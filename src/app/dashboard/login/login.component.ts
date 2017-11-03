import {Component} from '@angular/core';
import {AuthenticationService} from '../../shared/authentication/authentication.service';
import {Observable} from "rxjs/Observable";
import {FormGroup, FormControl} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent {
  isValid$: Observable<boolean>;
  loginForm: FormGroup;
  submitted = false;

  constructor(private service: AuthenticationService) {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });

    this.isValid$ = new Observable((observer) => {
      observer.next(true);
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.isValid$ = this.service.login(this.loginForm.value);
      this.submitted = true;
    }
  }

}
