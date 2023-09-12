interface MenuItem {
  label: string;
  route: string;
}
export const MENU: MenuItem[] = [
  {
    label: '',
    route:'/'
  },
  {
    label: 'Navigator',
    route: '/navigator',
  },
  {
    label: 'Projects',
    route: '/projects',
  },
];
