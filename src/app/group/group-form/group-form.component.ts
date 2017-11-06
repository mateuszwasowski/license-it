import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BackendSimpleCommunicationService} from "../../shared/backend-communication/backend-simple-communication.service";

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.scss']
})
export class GroupFormComponent implements OnInit {
  groupForm: FormGroup;

  constructor(private backendService: BackendSimpleCommunicationService){}

  ngOnInit() {
    this.groupForm = new FormGroup({
      name: new FormControl()
    });
  }

  addGroup() {
    if (this.groupForm.valid) {
      this.backendService.addGroup().subscribe(() => {

      })
    }
  }
}
