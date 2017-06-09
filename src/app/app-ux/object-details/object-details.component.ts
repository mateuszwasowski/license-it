import { Component, OnInit, Input } from '@angular/core';
import { BackendSimpleCommunicationService } from "../../shared/backend-communication/backend-simple-communication.service";
import { ActivatedRoute } from "@angular/router";

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

  keys = [];


  data = {};

  constructor(private backendHandler: BackendSimpleCommunicationService,
              private route: ActivatedRoute) {
  }
  ngOnInit() {
    const id = this.route.snapshot.params['object_id'];
    if (id !== undefined) {
      this.keys = Object.keys(this.collections);
      this.backendHandler.getObjects(this.url ='/id').subscribe((response) => {
        console.log(response);
        this.data = response.data;
      });
    }

  }

}
