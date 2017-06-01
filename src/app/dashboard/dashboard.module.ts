import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppUxModule } from '../app-ux/app-ux.module';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';

import { DashboardAuthGuard } from './dashboard-auth.guard';
import { IndexComponent } from './index/index.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        AppUxModule,
        SharedModule,
        FormsModule,

    ],
    declarations: [DashboardComponent, LoginComponent, NotFoundComponent, IndexComponent],
    exports: [DashboardComponent, LoginComponent, NotFoundComponent, IndexComponent],
    providers: [
        DashboardAuthGuard
    ]
})
export class DashboardModule {
}
