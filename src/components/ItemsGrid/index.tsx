import { useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import Icons from '../Icons';
import ThemeChange from '../ThemeChange';
import CustomGridItemComponent from './CustomItemComponent';
interface LinkItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
  url?: string;
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
    url: 'https://twitter.com/_codercoin',
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
    url: 'https://github.com/Time1sMoney',
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
  },
  {
    key: 'email',
    label: 'Email',
  },
  {
    key: 'theme',
    label: 'Theme',
  },
];

function generateLayout(items: LinkItem[]) {
  const layout_1 = items.map((item, index) => ({
    i: item.key,
    x: index % 2,
    y: index / 1,
    w: item.key === 'email' ? 2 : 1,
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
    lg: layout_1,
    md: layout_1,
    sm: layout_1,
    xs: layout_1,
    xxs: layout_2,
  };
  return responsiveLayout;
}
const ItemsGrid: React.FC = () => {
  const [layouts, setLayouts] = useState(() => generateLayout(items));

  return (
    <ResponsiveLayout
      layouts={layouts}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 2, md: 2, sm: 2, xs: 2, xxs: 1 }}
      rowHeight={150}
      isResizable={false}
      margin={[20, 20]}
      draggableCancel=".cancelDrag"
    >
      {items
        .filter((item) => item.key !== 'email' && item.key !== 'theme')
        .map((item) => (
          <CustomGridItemComponent
            key={item.key}
            className={'grid-item group ' + item.className}
          >
            {item.icon}
            <span className="absolute bottom-2 left-4 translate-y-10 transition-all duration-300 ease-linear group-hover:-translate-y-0 group-active:-translate-y-0">
              {item.label}
            </span>
            <a
              href={item.url}
              target="_blank"
              className="cancelDrag absolute bottom-2 right-4 z-50 translate-x-10 cursor-pointer rounded-full p-2 transition-all duration-300 ease-linear hover:scale-110 hover:outline hover:outline-purple-500 group-hover:-translate-x-0 group-active:-translate-x-0"
            >
              <Icons name="linkIcon" size={20} />
            </a>
          </CustomGridItemComponent>
        ))}
      <CustomGridItemComponent key="email" className="grid-item group">
        <div className="flex flex-wrap items-center gap-4">
          <Icons
            name="mailIcon"
            size={24}
            className="transition-all duration-300 ease-linear group-hover:scale-125"
          />
          <div className="flex flex-col text-lg">
            <em className="cursor-copy hover:underline hover:underline-offset-4">
              1015761882@qq.com
            </em>
            <em className="cursor-copy hover:underline hover:underline-offset-4">
              lichenbin1119@gmail.com
            </em>
          </div>
        </div>
        <span className="absolute bottom-2 left-4 translate-y-10 transition-all duration-300 ease-linear group-hover:-translate-y-0 group-active:-translate-y-0">
          Contact Me
        </span>
      </CustomGridItemComponent>
      <CustomGridItemComponent key="theme" className="grid-item group">
        <ThemeChange className="cancelDrag" />
        <span className="absolute bottom-2 left-4 translate-y-10 transition-all duration-300 ease-linear group-hover:-translate-y-0 group-active:-translate-y-0">
          Theme
        </span>
      </CustomGridItemComponent>
    </ResponsiveLayout>
  );
};
export default ItemsGrid;
