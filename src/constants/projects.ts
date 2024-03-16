import reactIcon from '@iconify/icons-carbon/logo-react';
import astroIcon from '@iconify/icons-simple-icons/astro';
import bookIcon from '@iconify/icons-tabler/book';
import viteIcon from '@iconify/icons-tabler/brand-vite';
import jsonIcon from '@iconify/icons-tabler/json';
import chartIcon from '@iconify/icons-tabler/chart-area';
import jsIcon from '@iconify/icons-simple-icons/nodedotjs'
import templateIcon from '@iconify/icons-tabler/template';
import { IconifyIcon } from '@iconify/react';
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
    url: 'https://github.com/chenbinli-dev/blog',
    title: "Codercoin'Book",
    desc: 'My tech blog, builded with Astro.',
    tech_icons: [astroIcon, reactIcon],
  },
  {
    icon: templateIcon,
    url: 'https://github.com/chenbinli-dev/template-vite-react',
    title: 'template-vite-react',
    desc: 'A opinionated basic template for creating vite project.',
    tech_icons: [viteIcon, reactIcon],
  },
  {
    icon: jsonIcon,
    url: 'https://github.com/chenbinli-dev/react-json-editor',
    title: 'React Json Editor',
    desc: 'Create JSON more easily using form form',
    tech_icons: [viteIcon, reactIcon],
  },
  {
    icon: chartIcon,
    url: 'https://github.com/chenbinli-dev/echarts-ssr',
    title: 'ECharts SSR Server',
    desc: 'Server Side Renderer for generating echarts',
    tech_icons: [jsIcon]
  }
];
