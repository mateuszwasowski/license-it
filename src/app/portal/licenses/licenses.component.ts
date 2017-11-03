import {Component, OnInit} from '@angular/core';
import { BackendSimpleCommunicationService} from '../../shared/backend-communication/backend-simple-communication.service';

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

  constructor(private service: BackendSimpleCommunicationService) {
  }

  ngOnInit() {
    this.service.getApplications().subscribe((response) => {
      this.data = response.data;
    });
  }
}
