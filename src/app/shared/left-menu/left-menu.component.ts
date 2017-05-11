import { Component } from '@angular/core';
import { MenuElementClass } from './menu-element/menu-element.class';
import { AuthenticationService } from '../authentication/authentication.service';
import { LeftMenuData } from './left-menu.data';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss'],
  providers: [AuthenticationService]
})
export class LeftMenuComponent {
  data: Array<MenuElementClass>;

  constructor(private service: AuthenticationService) {
    this.data = LeftMenuData;
  }

  logout() {
    if(this.service.isLogged()) {
      this.service.logout();
    }
  }
}
