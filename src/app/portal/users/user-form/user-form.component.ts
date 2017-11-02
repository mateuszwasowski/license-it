import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BackendSimpleCommunicationService } from 'app/shared/backend-communication/backend-simple-communication.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

public categoryForm: any = {
    headers: {
      add: 'Add a new client.',
      edit: 'Edit client'
    },
    urlList: 'http://www.licenseit.pro:5000/api/Clients/Add',
    urlElement: 'http://127.0.0.1:8000/categories/:id/',
    list: [
      {
        id: 'name',
        title: 'Name',
        value: '',
        type: 'text'
      },
      {
        id: 'isActive',
        title: 'Active',
        value: 'true',
        type: 'boolean',
      }
    ],
  };

   constructor(private activatedRoute: ActivatedRoute,
              private service: BackendSimpleCommunicationService) {
  }

  ngOnInit() {

  }

}
