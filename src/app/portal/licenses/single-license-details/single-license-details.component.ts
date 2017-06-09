import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-license-details',
  templateUrl: './single-license-details.component.html',
  styleUrls: ['./single-license-details.component.scss']
})
export class SingleLicenseDetailsComponent implements OnInit {
  collection = {
    "Client": 1,
    "Number": 1,
    "Version": 1,
    "Is active": 1,
    "Is activated": 1
  };

  constructor() { }

  ngOnInit() {
  }

}
