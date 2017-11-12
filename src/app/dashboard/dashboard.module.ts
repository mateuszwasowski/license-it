import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AppUxModule} from '../app-ux/app-ux.module';
import {SharedModule} from '../shared/shared.module';

import {DashboardComponent} from './dashboard/dashboard.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {LoginComponent} from './login/login.component';

import {DashboardAuthGuard} from './dashboard-auth.guard';
import {IndexComponent} from './index/index.component';
import {AboutComponent} from './index/about/about.component';
import {DocsComponent} from './index/docs/docs.component';
import {NavComponent} from './index/nav/nav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AppUxModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    LoginComponent,
    NotFoundComponent,
    IndexComponent,
    AboutComponent,
    NavComponent,
    DocsComponent
  ],
  exports: [
    DashboardComponent,
    LoginComponent,
    NotFoundComponent,
    IndexComponent,
    AboutComponent,
    NavComponent,
    DocsComponent
  ],
  providers: [
    DashboardAuthGuard
  ]
})
export class DashboardModule {
}
