import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {BackendSimpleCommunicationService} from 'app/shared/backend-communication/backend-simple-communication.service';

@Component({
  selector: 'app-single-license',
  templateUrl: './single-license.component.html',
  styleUrls: ['./single-license.component.scss']
})
export class SingleLicenseComponent implements OnInit {
  private clientsList = [];
  public categoryForm: any = {
    headers: {
      add: 'Add license',
      edit: 'Edit license'
    },
    newResponse: true,
    urlList: 'http://www.licenseit.pro:5000/api/License/AddReturnId',
    urlElement: 'http://www.licenseit.pro:5000/api/License/Get/:id',
    editElement: 'http://www.licenseit.pro:5000/api/License/Edit  ',
    list: [
      {
        id: 'idClient',
        title: 'Client',
        value: '',
        options: this.clientsList,
        type: 'select'
      },
      {
        id: 'assignedVersion',
        title: 'Version',
        value: '',
        type: 'number'
      },
      {
        id: 'isActive',
        title: 'Active',
        value: 'true',
        type: 'boolean',
      },
      {
        id: 'isActivated',
        title: 'Activated',
        value: 'false',
        type: 'boolean',
      }
    ],
    constData: {
      idApplication: 0,
      inclusion: '2017-05-21T13:55:32',
      expiration: '9999-12-31T23:59:59'
    }
  };

  constructor(private activatedRoute: ActivatedRoute,
              private service: BackendSimpleCommunicationService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.categoryForm.constData.idApplication = parseInt(params['id'], 10);
    });

    this.service.getClients().subscribe((response) => {
      const clients = response.data;
      for (const client of clients) {
        this.clientsList.push({
          value: client.id,
          label: client.name
        });
      }
    });
  }

}
