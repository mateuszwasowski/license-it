import {Component, OnInit, Input} from '@angular/core';
import {BackendSimpleCommunicationService} from "../../shared/backend-communication/backend-simple-communication.service";
import {ActivatedRoute} from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: 'app-object-details',
  templateUrl: './object-details.component.html',
  styleUrls: ['./object-details.component.scss'],
  providers: [BackendSimpleCommunicationService]
})
export class ObjectDetailsComponent implements OnInit {
  @Input()
  collections = {};

  @Input()
  url = '';

  @Input()
  editUrl = '';

  keys = [];


  data = {};

  getValue(key) {
    const elements = key.split('.');
    let value = this.data;
    for (const element of elements) {
      value = value[element];
    }
    console.log(elements, value);
    return value;
  }

  constructor(private _location: Location, private backendHandler: BackendSimpleCommunicationService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params['object_id'];
    if (id !== undefined) {
      this.keys = Object.keys(this.collections);
      this.backendHandler.getObjects(this.url + id).subscribe((response) => {
        console.log(response.data);
        this.data = response.data;
      });
    }

  }

  back() {
    this._location.back();
  }
}
