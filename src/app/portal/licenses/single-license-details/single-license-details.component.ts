import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-single-license-details',
  templateUrl: './single-license-details.component.html',
  styleUrls: ['./single-license-details.component.scss']
})
export class SingleLicenseDetailsComponent implements OnInit {
  collection = {
    'Client': 'clientName',
    'Number': 'number',
    'Version': 'assignedVersion',
    'Is active': 'isActive',
    'Is activated': 'isActivated'
  };

  url = 'http://www.licenseit.pro:5000/api/License/Get/';
  editUrl = '/panel/licenses/application/:id/license/edit/:object_id';

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.editUrl = this.editUrl.replace(':id', params['id'])
        .replace(':object_id', params['object_id']);
    });
  }

}
