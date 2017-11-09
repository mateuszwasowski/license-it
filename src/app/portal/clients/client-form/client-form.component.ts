import {Component} from '@angular/core';
import {UserService} from "../../../shared/user/user.service";

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent {

  public clientForm: any = {
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
    constData: {
      idGroup: this.userService.getGroup().idGroup
    }
  };

  constructor(private userService: UserService) { }
}
