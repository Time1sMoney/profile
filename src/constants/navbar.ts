interface MenuItem {
  label: string;
  route: string;
}
export const MENU: MenuItem[] = [
  {
    label: '',
    route: '/',
  },
  {
    label: 'Projects',
    route: '/projects',
  },
  {
    label: 'Kits',
    route: '/kits',
  },
];
