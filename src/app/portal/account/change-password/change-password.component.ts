import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BackendSimpleCommunicationService} from '../../../shared/backend-communication/backend-simple-communication.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  form: FormGroup;
  isValid = true;
  isSubmitted = false;

  constructor(private backendService: BackendSimpleCommunicationService) {
    this.form = new FormGroup({
      oldpassword: new FormControl(),
      newpassword: new FormControl(),
      newrepassword: new FormControl()
    });
  }

  ngOnInit() {
  }

  changePassword() {
    this.isSubmitted = true;
    if (this.form.valid) {
      this.backendService.setUserPassword(this.form.controls.newpassword, this.form.controls.oldpassword)
        .subscribe(() => this.isValid = true, () => this.isValid = false);
    }
  }
}
