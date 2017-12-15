import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {FormGroup, FormControl} from '@angular/forms';
import {BackendSimpleCommunicationService} from "../../shared/backend-communication/backend-simple-communication.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  loginForm: FormGroup;
  submitted = false;

  constructor(private service: BackendSimpleCommunicationService) {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      repassword: new FormControl()
    });
  }

  login() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.service.register(this.loginForm.value).subscribe(() => {

      }, () => {

      });
    }
  }

}
