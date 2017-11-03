import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      oldpassword: new FormControl(),
      newpassword: new FormControl(),
      newrepassword: new FormControl()
    });
  }

  ngOnInit() {
  }

}
