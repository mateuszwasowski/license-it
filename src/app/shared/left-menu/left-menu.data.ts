import { MenuElementClass } from './menu-element/menu-element.class';

export const LeftMenuData: Array<MenuElementClass> = [
  {
    header: 'Dashboard',
    route: '/',
    icon: 'assets/icons/accounticon.svg'
  },
  {
    header: 'Clients',
    route: 'clients',
    icon: 'assets/icons/groupicon1.svg'
  },
  {
    header: 'Licenses',
    route: 'licenses',
    icon: 'assets/icons/permissionsicon.svg'
  },
  {
    header: 'Group',
    route: 'group',
    icon: 'assets/icons/groupicon1.svg',
    conditional: true
  },
  {
    header: 'My account',
    route: 'account/groups',
    icon: 'assets/icons/singleperson.svg'
  }
];
