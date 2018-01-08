import {Routes} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard/dashboard.component';
import {dashboardRoutes} from './dashboard/routes';
import {DashboardAuthGuard} from './dashboard/dashboard-auth.guard';

import {PortalComponent} from './portal/portal/portal.component';
import {portalRoutes} from './portal/routes';
import {PortalAuthGuard} from './portal/portal-auth.guard';

import {groupRoutes} from './group/routes';
import {GroupGuard} from './group/group.guard';

import {NotFoundComponent} from './dashboard/not-found/not-found.component';

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
