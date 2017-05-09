import { Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { AccountComponent } from './account/account.component';
import { LicensesComponent } from './licenses/licenses.component';
import { UsersComponent } from './users/users.component';
import { PermissionsComponent } from './permissions/permissions.component';

export const portalRoutes: Routes = [
    {path: '', component: IndexComponent},
    {path: 'account', component: AccountComponent},
    {path: 'licenses', component: LicensesComponent},
    {path: 'users', component: UsersComponent},
    {path: 'permissions', component: PermissionsComponent},
];
