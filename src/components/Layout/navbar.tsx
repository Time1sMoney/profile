'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icons from '../Icons';
import ThemeChange from '../ThemeChange';
interface MenuItem {
  label: string;
  route: string;
}
const MENU: MenuItem[] = [
  {
    label: '',
    route: '/',
  },
  {
    label: 'Projects',
    route: '/projects',
  },
];
export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="container mx-auto flex h-24 items-center justify-between p-4">
      {pathname !== '/' && (
        <Link
          href="/"
          className="hover:animate-spin hover:text-slate-900 dark:hover:text-slate-300"
        >
          <Icons name="homeIcon" size={24} />
        </Link>
      )}
      <ul className="mx-10 flex flex-1 items-center justify-end gap-4 text-lg">
        {MENU.map((item) => (
          <li
            key={item.label}
            className={`cursor-pointer hover:text-slate-900 dark:hover:text-slate-300 ${
              pathname === item.route
                ? ' text-slate-900 dark:text-slate-300'
                : undefined
            }`}
          >
            <Link href={item.route}>{item.label}</Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center space-x-4">
        <a href="https://blog.codercoin.top" target="_blank">
          <Icons
            name="bookIcon"
            size={24}
            className="cursor-pointer hover:text-slate-900 dark:hover:text-slate-300"
          />
        </a>
        <a href="https://github.com/chenbinli-dev" target="_blank">
          <Icons
            name="githubLogo"
            size={24}
            className="cursor-pointer hover:text-slate-900 dark:hover:text-slate-300"
          />
        </a>
        <a href="https://twitter.com/mozlilove" target="_blank">
          <Icons
            name="twitterLogo"
            size={24}
            className="cursor-pointer hover:text-slate-900 dark:hover:text-slate-300"
          />
        </a>
        <a href="https://space.bilibili.com/164577534" target="_blank">
          <Icons
            name="bilibiliLogo"
            size={24}
            className="cursor-pointer hover:text-slate-900 dark:hover:text-slate-300"
          />
        </a>
        <ThemeChange />
      </div>
    </div>
  );
}
