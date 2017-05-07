import { Routes } from '@angular/router';

import { IndexComponent } from './portal/index/index.component';
import { LoginComponent } from './portal/login/login.component';
import { NotFoundComponent} from './portal/not-found/not-found.component';

export const appRoutes: Routes = [
    {path: '', component: IndexComponent},
    {path: 'login', component: LoginComponent},
    {path: '**', component: NotFoundComponent}
];
