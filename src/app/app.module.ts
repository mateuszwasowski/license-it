import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppUxModule} from './app-ux/app-ux.module';
import {SharedModule} from './shared/shared.module';
import {PortalModule} from './portal/portal.module';
import {DashboardModule} from './dashboard/dashboard.module';

import {appRoutes} from './routes';

import {AppComponent} from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    AppUxModule,
    SharedModule,
    PortalModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
