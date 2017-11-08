import {Component} from '@angular/core';
import {MenuElementClass} from './menu-element/menu-element.class';
import {AuthenticationService} from '../authentication/authentication.service';
import {UserService} from '../user/user.service';
import {LeftMenuData} from './left-menu.data';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss'],
  providers: [AuthenticationService]
})
export class LeftMenuComponent {
  data: Array<MenuElementClass>;
  teamName: string;

  constructor(private authService: AuthenticationService, private userService: UserService) {
    this.data = LeftMenuData;
    this.teamName = userService.getGroup().groupName;
  }

  logout() {
    if (this.authService.isLogged()) {
      this.authService.logout();
      this.userService.removeGroup();
    }
  }
}
