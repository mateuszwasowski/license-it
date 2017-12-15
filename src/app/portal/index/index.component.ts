import {Component, OnInit} from '@angular/core';
import {UserService} from "../../shared/user/user.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  groupName = '';

  constructor(userService: UserService) {
    this.groupName = userService.getGroup().groupName;
  }

  ngOnInit() {
  }

}
