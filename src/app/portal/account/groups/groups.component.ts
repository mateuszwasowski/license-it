import {Component, OnInit} from '@angular/core';
import {BackendSimpleCommunicationService} from "../../../shared/backend-communication/backend-simple-communication.service";

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  data = [];
  header = [
    'Name'
  ];

  order = [
    'groupName',
  ];

  constructor(private backendService: BackendSimpleCommunicationService) {
  }

  ngOnInit() {
    this.backendService.getUserGroups().subscribe(response => {
      this.data = response.data;
    });
  }
}
