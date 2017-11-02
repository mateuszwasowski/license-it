import {Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard/dashboard.component';
import {PortalComponent} from './portal/portal/portal.component';
import {NotFoundComponent} from './dashboard/not-found/not-found.component';
import {PortalAuthGuard} from './portal/portal-auth.guard';
import {DashboardAuthGuard} from './dashboard/dashboard-auth.guard';
import {GroupGuard} from './group/group.guard';

import {portalRoutes} from './portal/routes';
import {dashboardRoutes} from './dashboard/routes';
import {groupRoutes} from './group/routes';

export const appRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: dashboardRoutes,
    canActivate: [
      DashboardAuthGuard
    ]
  },
  {
    path: 'group',
    children: groupRoutes,
    canActivate: [
      PortalAuthGuard
    ]
  },
  {
    path: 'panel',
    component: PortalComponent,
    children: portalRoutes,
    canActivate: [
      PortalAuthGuard,
      GroupGuard
    ]
  },
  {path: '**', component: NotFoundComponent}
];
