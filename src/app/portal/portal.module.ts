import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {AppUxModule} from '../app-ux/app-ux.module';
import {SharedModule} from '../shared/shared.module';
import {GroupModule} from '../group/group.module';

import {PortalComponent} from './portal/portal.component';
import {IndexComponent} from './index/index.component';
import {AccountComponent} from './account/account.component';
import {LicensesComponent} from './licenses/licenses.component';
import {ClientsComponent} from './clients/clients.component';

import {PortalAuthGuard} from './portal-auth.guard';
import {ApplicationComponent} from './licenses/application/application.component';
import {ClientFormComponent} from './clients/client-form/client-form.component';
import {SingleLicenseComponent} from './licenses/single-license/single-license.component';
import {SingleLicenseDetailsComponent} from './licenses/single-license-details/single-license-details.component';
import {GroupsComponent} from './account/groups/groups.component';
import {ChangePasswordComponent} from './account/change-password/change-password.component';
import {ApplicationFormComponent} from './licenses/application/application-form/application-form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AppUxModule,
    SharedModule,
    GroupModule
  ],
  declarations: [
    IndexComponent,
    PortalComponent,
    AccountComponent,
    LicensesComponent,
    ClientsComponent,
    ApplicationComponent,
    ClientFormComponent,
    SingleLicenseComponent,
    SingleLicenseDetailsComponent,
    GroupsComponent,
    ChangePasswordComponent,
    ApplicationFormComponent
  ],
  exports: [
    IndexComponent,
    PortalComponent,
    AccountComponent,
    LicensesComponent,
    ClientsComponent
  ],
  providers: [
    PortalAuthGuard
  ]
})
export class PortalModule {
}
