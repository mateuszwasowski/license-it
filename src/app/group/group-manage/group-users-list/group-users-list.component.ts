import { Component, OnInit } from '@angular/core';
import {BackendSimpleCommunicationService} from "../../../shared/backend-communication/backend-simple-communication.service";

@Component({
  selector: 'app-group-users-list',
  templateUrl: './group-users-list.component.html',
  styleUrls: ['./group-users-list.component.scss']
})
export class GroupUsersListComponent implements OnInit {
  assigned = [];
  invited = [];

  constructor(private request: BackendSimpleCommunicationService) { }

  ngOnInit() {
    this.request.getGroupUsers().subscribe(resp => {

    });
  }

}
