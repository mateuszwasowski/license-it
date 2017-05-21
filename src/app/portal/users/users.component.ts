import { Component, OnInit } from '@angular/core';
import { BackendSimpleCommunicationService} from '../../shared/backend-communication/backend-simple-communication.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  data = [];

  header = [
    'Name',
    'Is active',
    'Creation'
  ];

  private order = [
    'name',
    'isActive',
    'creation'
  ];

  constructor(private service: BackendSimpleCommunicationService) {
  }

  ngOnInit() {
    this.service.getClients().subscribe((response) => {
      this.data = BackendSimpleCommunicationService.dataToTable(response.data, this.order);
    });
  }

}
