import {Component} from '@angular/core';
import {BackendSimpleCommunicationService} from "../../shared/backend-communication/backend-simple-communication.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import {UserService} from "../../shared/user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-group-manage',
  templateUrl: './group-manage.component.html',
  styleUrls: ['./group-manage.component.scss']
})
export class GroupManageComponent {
  form: FormGroup;
  groupConfirmationPopup = false;
  groupDeleteStatus = false;
  dialogs = {
    error: '',
    success: ''
  };

  constructor(private router: Router,
              private userService: UserService,
              private requestService: BackendSimpleCommunicationService,
              private fb: FormBuilder) {
    this.form = fb.group({
      'email': [null, Validators.email]
    });
  }

  deleteGroupPopup(show: boolean) {
    this.groupConfirmationPopup = show;
    if (show) {
      Observable.timer(15000).take(1).subscribe(val => {
        this.groupConfirmationPopup = false;
        this.groupDeleteStatus = false;
      });
    }
  }

  deleteGroup() {
    this.requestService.deleteGroup().subscribe(() => {
      this.userService.removeGroup();
      this.router.navigate(['/group']);
    }, () => {
      this.groupDeleteStatus = true;
      this.deleteGroupPopup(true);
    });
  }

  inviteUser() {
    if (this.form.valid) {
      this.requestService.inviteUserToGroup(this.form.value).subscribe(resp => {
        if (resp.status === 200) {
          this.showHint('success', 'Invitation send.');
        } else {
          this.showHint('error', resp.description);
        }
      });
    }
  }

  showHint(variable, message, time = 3000) {
    this.dialogs[variable] = message;

    Observable.timer(time).take(1).subscribe(() => {
      this.dialogs[variable] = '';
    });
  }

  isHintVisible() {
    return this.dialogs.error.length > 0 || this.dialogs.success.length > 0;
  }

  getHintMessage() {
    return this.dialogs.success || this.dialogs.error;
  }

  getHintClass() {
    for (const name in this.dialogs) {
      if (this.dialogs.hasOwnProperty(name) && this.dialogs[name].length > 0) {
        return name;
      }
    }

    return '';
  }
}
