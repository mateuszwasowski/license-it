import { Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { AccountComponent } from './account/account.component';
import { LicensesComponent } from './licenses/licenses.component';
import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { ApplicationComponent } from './licenses/application/application.component';
import { SingleLicenseComponent } from './licenses/single-license/single-license.component';
import { SingleLicenseDetailsComponent } from './licenses/single-license-details/single-license-details.component';

export const portalRoutes: Routes = [
    {path: '', component: IndexComponent},
    {path: 'account', component: AccountComponent},
    {path: 'licenses', component: LicensesComponent},
    {path: 'licenses/application/:id', component: ApplicationComponent},
    {path: 'licenses/application/:id/licence/add', component: SingleLicenseComponent},
    {path: 'licenses/application/:id/licence/edit/:object_id', component: SingleLicenseComponent},
    {path: 'licenses/application/:id/licence/:object_id', component: SingleLicenseDetailsComponent},
    {path: 'users', component: UsersComponent},
    {path: 'users/add', component: UserFormComponent}
];
