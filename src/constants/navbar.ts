interface MenuItem {
  label: string;
  route: string;
}
export const MENU: MenuItem[] = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Tools',
    route: '/tools',
  },
];
