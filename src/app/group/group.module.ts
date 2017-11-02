import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {SharedModule} from '../shared/shared.module';

import {GroupChangerComponent} from './group-changer/group-changer.component';
import {GroupFormComponent} from './group-form/group-form.component';
import {GroupGuard} from './group.guard';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    GroupChangerComponent,
    GroupFormComponent
  ],
  providers: [
    GroupGuard
  ]
})
export class GroupModule {
}
