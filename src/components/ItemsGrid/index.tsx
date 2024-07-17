import Link from 'next/link';
import { useRef, useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import Icons from '../Icons';
import CustomGridItemComponent from './CustomItemComponent';
interface LinkItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
  url: string;
  className?: string;
}

const ResponsiveLayout = WidthProvider(Responsive);

const items: LinkItem[] = [
  {
    key: '1',
    label: 'Blog',
    icon: (
      <Icons
        name="bookIcon"
        size={30}
        className="transition-all duration-300 ease-linear group-hover:scale-125"
      />
    ),
    url: 'https://blog-codercoin.vercel.app',
    className: 'bg-gradient-to-tr from-purple-400 to-purple-800 text-white',
  },
  {
    key: '2',
    label: 'X',
    icon: (
      <Icons
        name="twitterLogo"
        size={30}
        className="transition-all duration-300 ease-linear group-hover:scale-125"
      />
    ),
    url: 'https://twitter.com/mozlilove',
    className: 'bg-gradient-to-br from-blue-600 to-blue-800 text-white',
  },
  {
    key: '3',
    label: 'Github',
    icon: (
      <Icons
        name="githubLogo"
        size={30}
        className="transition-all duration-300 ease-linear group-hover:scale-125"
      />
    ),
    url: 'https://github.com/chenbinli-dev',
    className: 'bg-gradient-to-bl from-slate-600 to-zinc-800 text-white',
  },
  {
    key: '4',
    label: 'Bilibili',
    icon: (
      <Icons
        name="bilibiliLogo"
        size={30}
        className="transition-all duration-300 ease-linear group-hover:scale-125"
      />
    ),
    url: 'https://space.bilibili.com/164577534',
    className: 'bg-gradient-to-bl from-pink-600 to-pink-800 text-white',
  },
];

function generateLayout(items: LinkItem[]) {
  const layput_1 = items.map((item, index) => ({
    i: item.key,
    x: index % 2,
    y: index / 1,
    w: 1,
    h: 1,
  }));
  const layout_2 = items.map((item, index) => ({
    i: item.key,
    x: 0,
    y: index,
    w: 1,
    h: 1,
  }));
  const responsiveLayout: ReactGridLayout.Layouts = {
    xxs: layput_1,
    xs: layput_1,
    lg: layput_1,
    md: layout_2,
    sm: layout_2,
  };
  return responsiveLayout;
}
const ItemsGrid: React.FC = () => {
  const [layouts, setLayouts] = useState(() => generateLayout(items));
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <ResponsiveLayout
      layouts={layouts}
      cols={{ xxs: 2, xs: 2, lg: 2, md: 1, sm: 1 }}
      rowHeight={150}
      isResizable={false}
      className="h-full"
    >
      {items.map((item) => (
        <CustomGridItemComponent
          key={item.key}
          className={
            'hover:scale-120 group relative flex h-full cursor-grab items-center justify-center overflow-hidden rounded-xl hover:shadow ' +
              item.className ?? ''
          }
          onMouseDown={(e) => e.stopPropagation()}
        >
          {item.icon}
          <span className="absolute bottom-2 left-4 translate-y-10 transition-all duration-300 ease-linear group-hover:-translate-y-0 group-active:-translate-y-0">
            {item.label}
          </span>
          <Link
            href={item.url}
            target="_blank"
            className="absolute bottom-2 right-4 z-50 translate-x-10 cursor-pointer rounded-full p-2 transition-all duration-300 ease-linear hover:scale-110 hover:outline hover:outline-purple-100 group-hover:-translate-x-0 group-active:-translate-x-0"
          >
            <Icons name="linkIcon" size={20} />
          </Link>
        </CustomGridItemComponent>
      ))}
    </ResponsiveLayout>
  );
};
export default ItemsGrid;
