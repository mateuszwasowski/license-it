import { Component } from '@angular/core';
import { MenuElementClass } from './menu-element/menu-element.class';
import { LeftMenuData } from './left-menu.data';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent {
  data: Array<MenuElementClass>;

  constructor() {
    this.data = LeftMenuData;
  }

}
