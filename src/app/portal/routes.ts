import {Routes} from '@angular/router';

import {IndexComponent} from './index/index.component';
import {AccountComponent} from './account/account.component';
import {ClientsComponent} from './clients/clients.component';
import {ClientFormComponent} from './clients/client-form/client-form.component';

import {GroupManageComponent} from '../group/group-manage/group-manage.component';
import {accountRoutes} from './account/routes';
import {licenseRoutes} from './licenses/routes';

export const portalRoutes: Routes = [
  {path: '', component: IndexComponent},
  {
    path: 'account',
    component: AccountComponent,
    children: accountRoutes
  },
  {
    path: 'licenses',
    children: licenseRoutes
  },
  {path: 'clients', component: ClientsComponent},
  {path: 'clients/add', component: ClientFormComponent},
  {path: 'group', component: GroupManageComponent}
];
