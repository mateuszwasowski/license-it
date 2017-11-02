import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {AppUxModule} from '../app-ux/app-ux.module';
import {SharedModule} from '../shared/shared.module';

import {PortalComponent} from './portal/portal.component';
import {IndexComponent} from './index/index.component';
import {AccountComponent} from './account/account.component';
import {LicensesComponent} from './licenses/licenses.component';
import {UsersComponent} from './users/users.component';

import {PortalAuthGuard} from './portal-auth.guard';
import {ApplicationComponent} from './licenses/application/application.component';
import {UserFormComponent} from './users/user-form/user-form.component';
import {SingleLicenseComponent} from './licenses/single-license/single-license.component';
import {SingleLicenseDetailsComponent} from './licenses/single-license-details/single-license-details.component';
import {GroupChangerComponent} from './group-changer/group-changer.component';
import {GroupFormComponent} from './group-form/group-form.component';
import {UserService} from './user.service';
import {GroupGuard} from './group.guard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    AppUxModule,
    SharedModule
  ],
  declarations: [
    IndexComponent,
    PortalComponent,
    AccountComponent,
    LicensesComponent,
    UsersComponent,
    ApplicationComponent,
    UserFormComponent,
    SingleLicenseComponent,
    SingleLicenseDetailsComponent,
    GroupChangerComponent,
    GroupFormComponent
  ],
  exports: [
    IndexComponent,
    PortalComponent,
    AccountComponent,
    LicensesComponent,
    UsersComponent
  ],
  providers: [
    PortalAuthGuard,
    UserService,
    GroupGuard
  ]
})
export class PortalModule {
}
