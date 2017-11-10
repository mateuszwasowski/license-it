import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../../shared/user/user.service';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent implements OnInit {
  public appForm: any = {
    headers: {
      add: 'Add a new application',
      edit: 'Edit license'
    },
    newResponse: true,
    urlList: 'http://www.licenseit.pro:5000/api/Applications/add',
    list: [
      {
        id: 'name',
        title: 'Name',
        value: '',
        type: 'text'
      },
      {
        id: 'version',
        title: 'Version',
        value: '',
        type: 'number'
      },
    ],
    constData: {
      idGroup: this.userService.getGroup().idGroup
    }
  };

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
