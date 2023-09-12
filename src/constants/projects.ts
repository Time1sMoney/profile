import { IconifyIcon } from '@iconify/react';
import bookIcon from '@iconify/icons-tabler/book';
import manageProtection from '@iconify/icons-carbon/manage-protection';
import astroIcon from '@iconify/icons-simple-icons/astro';
import logoReact from '@iconify/icons-carbon/logo-react';
interface Project {
  icon: IconifyIcon;
  url: string;
  title: string;
  desc: string;
  tech_icons?: IconifyIcon[];
}
export const projects: Project[] = [
  {
    icon: bookIcon,
    url: 'https://github.com/codercoin98/blog',
    title: "Codercoin'Book",
    desc: 'My tech blog, builded with Astro.',
    tech_icons: [astroIcon, logoReact],
  },
  {
    icon: manageProtection,
    url: 'https://github.com/codercoin98/react-router-guard-example',
    title: 'React Router Guard Example',
    desc: 'A simple example for creating guard in React router.',
    tech_icons: [logoReact],
  },
];
