import {Component, OnInit} from '@angular/core';
import {MenuElementClass} from './menu-element/menu-element.class';
import {AuthenticationService} from '../authentication/authentication.service';
import {UserService} from '../user/user.service';
import {LeftMenuData} from './left-menu.data';
import {BackendSimpleCommunicationService} from "../backend-communication/backend-simple-communication.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss'],
  providers: [AuthenticationService]
})
export class LeftMenuComponent implements OnInit {
  data: Array<MenuElementClass>;
  teamName: string;
  isAdmin: boolean;

  constructor(private authService: AuthenticationService, private userService: UserService,
              private backendService: BackendSimpleCommunicationService) {
    this.data = LeftMenuData;
    this.teamName = userService.getGroup().groupName;
  }

  ngOnInit() {
    this.backendService.isCurrentGroupAdmin().subscribe(isAdmin => {
      this.isAdmin = isAdmin;
      this.userService.insertToUserData('isGroupAdmin', isAdmin);
    });
  }

  logout() {
    if (this.authService.isLogged()) {
      this.authService.logout();
      this.userService.removeGroup();
    }
  }
}
