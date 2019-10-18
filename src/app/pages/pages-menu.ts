import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'MENU',
    group: true,
  },
  {
    title: 'Overall Statistics',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Downloads',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Money',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Reviews',
        link: '/pages/forms/buttons',
      },
    ],
  },
  {
    title: 'Applications',
    icon: 'keypad-outline',
    children: [],
  },
];
