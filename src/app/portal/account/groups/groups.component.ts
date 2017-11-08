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
    'Name',
    'Action'
  ];

  order = [
    'groupName',
    'id',
  ];

  callbacks = {
    'Action': (value) => {
      return `<a class="btn btn-danger" (click)="removeFromGroup($event, ${value})">Remove from group</a>`;
    }
  };

  constructor(private backendService: BackendSimpleCommunicationService) {
  }

  ngOnInit() {
    this.backendService.getUserGroups().subscribe(response => {
      this.data = response.data;
    });
  }

  removeFromGroup($event, id) {
    $event.stopPropagation();
    console.log(id);
  }
}
