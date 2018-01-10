import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {BackendSimpleCommunicationService} from "../../shared/backend-communication/backend-simple-communication.service";
import {of} from "rxjs/observable/of";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  loginForm: FormGroup;
  submitted = false;
  errors: Observable<boolean | string>;
  success: Observable<boolean | string>;

  constructor(private service: BackendSimpleCommunicationService, private fb: FormBuilder) {
    this.loginForm = fb.group({
      email: [null, Validators.email],
      firstName: [],
      lastName: [],
      password: [],
      repassword: []
    });
  }

  login() {
    this.submitted = true;
    this.success = of(false);
    if (this.loginForm.valid) {
      if (!this.arePasswordSame()) {
        this.errors = of('Password are not same.');
        return;
      }
      this.service.register(this.loginForm.value).map(resp => JSON.parse(resp._body)).subscribe(response => {
        if (response.description === 'OK') {
          this.success = of('Account created successful');
          this.errors = of(false);
        } else {
          this.errors = of(response.description);
        }
      }, response => {
        this.errors = of('Something went wrong during save.');
      });
    }
  }

  private arePasswordSame() {
    return this.loginForm.controls.password.value === this.loginForm.controls.repassword.value;
  }
}
