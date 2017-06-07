import {Component, OnInit} from '@angular/core';
import {BackendSimpleCommunicationService} from '../../../shared/backend-communication/backend-simple-communication.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {
  data = [];
  appName = '';
  singleElement = '/panel/licenses/application/:id/licence/add';
  header = [
    'Number',
    'Client',
    'Is active',
    'Is activated'
  ];

  private order = [
    'number',
    'clientName',
    'isActive',
    'isActivated'
  ];

  constructor(private service: BackendSimpleCommunicationService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.service.getApplicationLicenses(params['id']).subscribe((response) => {
        this.singleElement = this.singleElement.replace(':id', params['id']);
        this.appName = response.data[0].applicationModel.name;
        this.data = BackendSimpleCommunicationService.dataToTable(response.data, this.order);
      });
    });
  }

}
