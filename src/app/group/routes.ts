import {GroupChangerComponent} from './group-changer/group-changer.component';
import {GroupFormComponent} from './group-form/group-form.component';

export const groupRoutes = [
  {
    path: '',
    component: GroupChangerComponent
  },
  {
    path: 'new',
    component: GroupFormComponent
  }
];
