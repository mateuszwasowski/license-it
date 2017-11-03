import {Component, OnInit} from '@angular/core';
import {BackendSimpleCommunicationService} from '../../shared/backend-communication/backend-simple-communication.service';
import {BooleanIconPipe} from '../../shared/boolean-icon/boolean-icon.pipe';
import {SimpleDateStringPipe} from '../../shared/simple-date-string/simple-date-string.pipe';

@Component({
  selector: 'app-licenses',
  templateUrl: './licenses.component.html',
  styleUrls: ['./licenses.component.scss']
})
export class LicensesComponent implements OnInit {
  data = [];

  header = [
    'Name',
    'Version',
    'Is active',
    'Created'
  ];

  order = [
    'name',
    'version',
    'isActive',
    'creation'
  ];

  callbacks = {
    'Created': (value) => {
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
    this.service.getApplications().subscribe((response) => {
      this.data = response.data;
    });
  }
}
