import { MenuElementClass } from './menu-element/menu-element.class';

export const LeftMenuData: Array<MenuElementClass> = [
  {
    header: 'Clients',
    route: 'clients',
    icon: 'assets/icons/group_icon.svg'
  },
  {
    header: 'Licenses',
    route: 'licenses',
    icon: 'assets/icons/permissions_icon.svg'
  },
  {
    header: 'Group',
    route: 'group',
    icon: 'assets/icons/group_icon.svg',
    conditional: true
  },
  {
    header: 'My account',
    route: 'account/groups',
    icon: 'assets/icons/singleperson_icon.svg'
  },
  {
    header: 'Switch group',
    route: '/group',
    icon: 'assets/icons/switchgroup_icon.svg'
  }
];
