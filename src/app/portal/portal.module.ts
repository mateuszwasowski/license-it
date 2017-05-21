import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppUxModule } from '../app-ux/app-ux.module';
import { SharedModule } from '../shared/shared.module';

import { PortalComponent } from './portal/portal.component';
import { IndexComponent } from './index/index.component';
import { AccountComponent } from './account/account.component';
import { LicensesComponent } from './licenses/licenses.component';
import { UsersComponent } from './users/users.component';
import { PermissionsComponent } from './permissions/permissions.component';

import { PortalAuthGuard } from './portal-auth.guard';
import { ApplicationComponent } from './licenses/application/application.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { SingleLicenseComponent } from './licenses/single-license/single-license.component';

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
        PermissionsComponent,
        ApplicationComponent,
        UserFormComponent,
        SingleLicenseComponent
    ],
    exports: [
        IndexComponent,
        PortalComponent,
        AccountComponent,
        LicensesComponent,
        UsersComponent,
        PermissionsComponent
    ],
    providers: [
        PortalAuthGuard
    ]
})
export class PortalModule {
}
