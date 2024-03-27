import Icons, { IconNames } from '@/components/Icons';
import Link from 'next/link';
interface Project {
  iconName: IconNames;
  url: string;
  title: string;
  desc: string;
  tech_icons?: IconNames[];
}
const projects: Project[] = [
  {
    iconName: 'bookIcon',
    url: 'https://github.com/chenbinli-dev/blog',
    title: "Codercoin'Book",
    desc: 'My tech blog, builded with Astro.',
    tech_icons: ['astroIcon', 'reactIcon'],
  },
  {
    iconName: 'templateIcon',
    url: 'https://github.com/chenbinli-dev/template-vite-react',
    title: 'template-vite-react',
    desc: 'A opinionated basic template for creating vite project.',
    tech_icons: ['viteIcon', 'reactIcon'],
  },
  {
    iconName: 'jsonIcon',
    url: 'https://github.com/chenbinli-dev/react-json-editor',
    title: 'React Json Editor',
    desc: 'Create JSON more easily using form form',
    tech_icons: ['viteIcon', 'reactIcon'],
  },
  {
    iconName: 'chartIcon',
    url: 'https://github.com/chenbinli-dev/echarts-ssr',
    title: 'ECharts SSR Server',
    desc: 'Server Side Renderer for generating echarts',
    tech_icons: ['jsIcon'],
  },
];
export default function NoteBook() {
  return (
    <div className="container mx-auto mt-24 space-y-8">
      <ul className="grid auto-rows-max gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map(({ title, iconName, desc, url, tech_icons }) => (
          <Link key={url} href={url} target="_blank">
            <li className="card" key={url}>
              <Icons name={iconName} size={30} />
              <div className="flex-1">
                <div className="pr-10 text-lg font-semibold">{title}</div>
                <p className="line-clamp-2 overflow-hidden text-ellipsis text-slate-500">
                  {desc}
                </p>
              </div>
              <div className="absolute right-2 top-2 flex gap-2 text-base">
                {tech_icons?.map((tech_icon, index) => (
                  <Icons key={index} name={tech_icon} />
                ))}
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
