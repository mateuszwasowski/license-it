import {Routes} from '@angular/router';

import {IndexComponent} from './index/index.component';
import {AccountComponent} from './account/account.component';
import {LicensesComponent} from './licenses/licenses.component';
import {ClientsComponent} from './clients/clients.component';
import {ClientFormComponent} from './clients/client-form/client-form.component';
import {ApplicationComponent} from './licenses/application/application.component';
import {SingleLicenseComponent} from './licenses/single-license/single-license.component';
import {SingleLicenseDetailsComponent} from './licenses/single-license-details/single-license-details.component';
import {GroupManageComponent} from '../group/group-manage/group-manage.component';

export const portalRoutes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'account', component: AccountComponent},
  {path: 'licenses', component: LicensesComponent},
  {path: 'licenses/application/:id', component: ApplicationComponent},
  {path: 'licenses/application/:id/license/add', component: SingleLicenseComponent},
  {path: 'licenses/application/:id/license/edit/:object_id', component: SingleLicenseComponent},
  {path: 'licenses/application/:id/license/:object_id', component: SingleLicenseDetailsComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'clients/add', component: ClientFormComponent},
  {path: 'group', component: GroupManageComponent}
];
