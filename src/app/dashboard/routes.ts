import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './index/about/about.component';
import { DocsComponent } from './index/docs/docs.component';

export const dashboardRoutes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'about', component: AboutComponent},
  {path: 'docs', component: DocsComponent}
];
