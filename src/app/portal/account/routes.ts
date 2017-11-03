import {GroupsComponent} from './groups/groups.component';
import {ChangePasswordComponent} from './change-password/change-password.component';

export const accountRoutes = [
  {
    path: 'groups',
    component: GroupsComponent
  },
  {
    path: 'password',
    component: ChangePasswordComponent
  }
];
