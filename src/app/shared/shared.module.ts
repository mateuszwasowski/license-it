import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { LeftMenuComponent } from './left-menu/left-menu.component';
import { MenuElementComponent } from './left-menu/menu-element/menu-element.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [LeftMenuComponent, MenuElementComponent],
  exports: [LeftMenuComponent]
})
export class SharedModule { }
