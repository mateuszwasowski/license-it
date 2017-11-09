import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {TooltipModule} from "ngx-tooltip";

import {LeftMenuComponent} from './left-menu/left-menu.component';
import {MenuElementComponent} from './left-menu/menu-element/menu-element.component';

import {CreateLinkService} from './backend-communication/create-link.service';
import {BackendSimpleCommunicationService} from './backend-communication/backend-simple-communication.service';
import {AuthenticationService} from './authentication/authentication.service';
import {SingleChooseContainerComponent} from './single-choose-container/single-choose-container.component';

import {UserService} from './user/user.service';
import {BooleanIconPipe} from './boolean-icon/boolean-icon.pipe';
import {SimpleDateStringPipe} from './simple-date-string/simple-date-string.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TooltipModule
  ],
  declarations: [LeftMenuComponent, MenuElementComponent, SingleChooseContainerComponent, BooleanIconPipe, SimpleDateStringPipe],
  exports: [LeftMenuComponent, SingleChooseContainerComponent],
  providers: [
    CreateLinkService,
    BackendSimpleCommunicationService,
    AuthenticationService,
    UserService,
    BooleanIconPipe,
    SimpleDateStringPipe
  ]
})
export class SharedModule {
}
