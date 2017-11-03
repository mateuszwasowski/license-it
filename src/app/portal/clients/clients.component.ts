import {Component, OnInit} from '@angular/core';
import {BackendSimpleCommunicationService} from '../../shared/backend-communication/backend-simple-communication.service';
import {BooleanIconPipe} from '../../shared/boolean-icon/boolean-icon.pipe';
import {SimpleDateStringPipe} from '../../shared/simple-date-string/simple-date-string.pipe';

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
      return this.dateStringPipe.transform(value);
    },
    'Is active': (value) => {
      return this.booleanPipe.transform(value);
    }
  };

  constructor(private service: BackendSimpleCommunicationService,
              private booleanPipe: BooleanIconPipe,
              private dateStringPipe: SimpleDateStringPipe) {
  }

  ngOnInit() {
    this.service.getClients().subscribe((response) => {
      this.data = response.data;
    });
  }

}
