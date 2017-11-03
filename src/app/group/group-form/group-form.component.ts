import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.scss']
})
export class GroupFormComponent implements OnInit {
  groupForm: FormGroup;

  ngOnInit() {
    this.groupForm = new FormGroup({
      name: new FormControl()
    });
  }

  addGroup() {
    if (this.groupForm) {

    }
  }
}
