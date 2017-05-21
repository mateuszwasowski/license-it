import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-single-license',
  templateUrl: './single-license.component.html',
  styleUrls: ['./single-license.component.scss']
})
export class SingleLicenseComponent implements OnInit {
  public categoryForm: any = {
    headers: {
      add: 'Add licence',
      edit: 'Edit licence'
    },
    urlList: 'http://www.licenseit.pro:5000/api/License/Add',
    urlElement: 'http://127.0.0.1:8000/categories/:id/',
    list: [
      {
        id: 'idClients',
        title: 'Client',
        value: '',
        type: 'number'
      },
      {
        id: 'number',
        title: 'Number',
        value: '',
        type: 'text'
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
        value: '',
        type: 'number',
      },
      {
        id: 'isActivated',
        title: 'Activated',
        value: '',
        type: 'number',
      }
    ],
    constData: {
      idApplication: 0,
      inclusion:	'2017-05-21T13:55:32',
      expiration:	'9999-12-31T23:59:59'
    }
  };

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.categoryForm.constData.idApplication = params['id'];
    });
  }
}
