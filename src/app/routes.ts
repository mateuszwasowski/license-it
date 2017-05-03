import { Routes } from '@angular/router';

import { IndexComponent } from './portal/index/index.component';
import { NotFoundComponent} from './portal/not-found/not-found.component';

export const appRoutes: Routes = [
    {path: '', component: IndexComponent},
    {path: '**', component: NotFoundComponent}
];
