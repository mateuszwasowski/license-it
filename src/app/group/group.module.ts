import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {AppUxModule} from '../app-ux/app-ux.module';
import {SharedModule} from '../shared/shared.module';

import {GroupChangerComponent} from './group-changer/group-changer.component';
import {GroupFormComponent} from './group-form/group-form.component';
import {GroupGuard} from './group.guard';
import {GroupAdminGuard} from "./group-admin.guard";
import { GroupManageComponent } from './group-manage/group-manage.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    AppUxModule
  ],
  declarations: [
    GroupChangerComponent,
    GroupFormComponent,
    GroupManageComponent
  ],
  providers: [
    GroupGuard,
    GroupAdminGuard
  ]
})
export class GroupModule {
}
