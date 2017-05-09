import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { PortalComponent } from './portal/portal/portal.component';
import { NotFoundComponent } from './dashboard/not-found/not-found.component';
import { PortalAuthGuard } from './portal/portal-auth.guard';
import { portalRoutes } from './portal/routes';
import { dashboardRoutes } from './dashboard/routes';

export const appRoutes: Routes = [
    {path: '', component: DashboardComponent, children: dashboardRoutes},
    {
        path: 'panel',
        component: PortalComponent,
        children: portalRoutes,
        canActivate: [
            PortalAuthGuard
        ]
    },
    {path: '**', component: NotFoundComponent}
];
