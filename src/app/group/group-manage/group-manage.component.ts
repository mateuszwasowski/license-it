import {Component, ViewChild} from '@angular/core';
import {BackendSimpleCommunicationService} from "../../shared/backend-communication/backend-simple-communication.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import {UserService} from "../../shared/user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-group-manage',
  templateUrl: './group-manage.component.html',
  styleUrls: ['./group-manage.component.scss']
})
export class GroupManageComponent {
  state = 'invite';
  form: FormGroup;
  nameForm: FormGroup;
  dialogs = {
    error: '',
    success: ''
  };

  popup = {
    changeGroupNamePopup: false,
    deleteGroupPopup: false
  };

  constructor(private router: Router,
              private userService: UserService,
              private requestService: BackendSimpleCommunicationService,
              private fb: FormBuilder) {
    this.form = fb.group({
      'email': [null, Validators.email]
    });

    this.nameForm = fb.group({
      'name': new FormControl()
    });
  }

  deleteGroup() {
    this.requestService.deleteGroup().subscribe(() => {
      this.userService.removeGroup();
      this.router.navigate(['/group']);
    }, () => {
    });
  }

  changeGroupName() {
    this.requestService.changeGroupName(this.nameForm.value).subscribe(resp => {
      if (resp.status === 200) {
        this.dialogs.success = 'Group name changed.';
      } else {
        this.dialogs.error = 'Something went wrong.';
      }
    });
  }

  inviteUser() {
    if (this.form.valid) {
      this.requestService.inviteUserToGroup(this.form.value).subscribe(resp => {
        if (resp.status === 200) {
          this.dialogs.success = 'Invitation send.';
        } else {
          this.dialogs.error = 'Something went wrong.';
        }
        console.log(this.dialogs);
      });
    }
  }

  changeGroupNamePopup() {
    if (this.nameForm.valid) {
      this.showPopup('changeGroupNamePopup');
    }
  }

  showPopup(name) {
    this.popup[name] = true;
    console.log(this.popup);
  }

  setActiveTab(string) {
    this.state = string;
  }

  getActiveTab(string) {
    return this.state === string;
  }

}
