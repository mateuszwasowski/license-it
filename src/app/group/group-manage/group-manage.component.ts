import {Component, OnInit} from '@angular/core';
import {UserService} from '../../shared/user/user.service';

@Component({
  selector: 'app-group-manage',
  templateUrl: './group-manage.component.html',
  styleUrls: ['./group-manage.component.scss']
})
export class GroupManageComponent implements OnInit {
  isAdmin = false;
  group: {};

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.currentGroup().subscribe((resp) => {
      this.group = resp;
    });
  }

}
