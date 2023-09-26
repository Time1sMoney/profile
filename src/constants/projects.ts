import { IconifyIcon } from '@iconify/react';
import bookIcon from '@iconify/icons-tabler/book';
import manageProtection from '@iconify/icons-carbon/manage-protection';
import templateIcon from '@iconify/icons-tabler/template';
import jsonIcon from '@iconify/icons-tabler/json';
import astroIcon from '@iconify/icons-simple-icons/astro';
import reactIcon from '@iconify/icons-carbon/logo-react';
import viteIcon from '@iconify/icons-tabler/brand-vite';
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
    tech_icons: [astroIcon, reactIcon],
  },
  {
    icon: manageProtection,
    url: 'https://github.com/codercoin98/react-router-guard-example',
    title: 'React Router Guard Example',
    desc: 'A simple example for creating guard in React router.',
    tech_icons: [viteIcon, reactIcon],
  },
  {
    icon: templateIcon,
    url: 'https://github.com/codercoin98/template-vite-react',
    title: 'template-vite-react',
    desc: 'A opinionated basic template for creating vite project.',
    tech_icons: [viteIcon, reactIcon],
  },
  {
    icon: jsonIcon,
    url: 'https://github.com/codercoin98/react-json-editor',
    title: 'React Json Editor',
    desc: 'Create JSON more easily using form form',
    tech_icons: [viteIcon, reactIcon],
  },
];
