import {Component, OnInit} from '@angular/core';
import {BackendSimpleCommunicationService} from '../../shared/backend-communication/backend-simple-communication.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  data = [];

  header = [
    'Name',
    'Is active',
    'Creation'
  ];

  order = [
    'name',
    'isActive',
    'creation'
  ];

  callbacks = {
    'Creation': (value) => {
      const date = new Date(value);
      const month = date.getMonth() > 9 ? date.getMonth() : '0' + date.getMonth().toString();
      const day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate().toString();

      return day + '.' + month + '.' + date.getFullYear();
    }
  };

  constructor(private service: BackendSimpleCommunicationService) {}

  ngOnInit() {
    this.service.getClients().subscribe((response) => {
      this.data = response.data;
    });
  }

}
