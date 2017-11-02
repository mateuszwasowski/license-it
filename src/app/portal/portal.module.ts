import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
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

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
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
    SingleLicenseDetailsComponent
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
