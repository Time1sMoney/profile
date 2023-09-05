import Link from 'next/link';
import { Icon } from '@iconify/react';
import homeIcon from '@iconify/icons-tabler/home';
import githubLogo from '@iconify/icons-carbon/logo-github';
import twitterLogo from '@iconify/icons-carbon/logo-twitter';
import bilibiliLogo from '@iconify/icons-tabler/brand-bilibili';
import sun from '@iconify/icons-tabler/sun';
import moon from '@iconify/icons-tabler/moon';
import { useLocalStorageState } from 'ahooks';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { MENU } from '@/constants/navbar';

export default function Navbar() {
  const router = useRouter();
  const [theme, setTheme] = useLocalStorageState('theme', {
    defaultValue: 'light',
  });
  // Change theme
  const toggleTheme = (e: React.MouseEvent) => {
    // @ts-expect-error: View transition API
    if (!document.startViewTransition) {
      setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'));
      return;
    }
    const x = e.clientX;
    const y = e.clientY;
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerWidth - y)
    );
    let isDark: boolean;
    //@ts-ignore
    const transition = document.startViewTransition(() => {
      const root = document.documentElement;
      isDark = root.classList.contains('dark');
      setTheme(() => (isDark ? 'light' : 'dark'));
      root.classList.remove(isDark ? 'dark' : 'light');
      root.classList.add(isDark ? 'light' : 'dark');
    });
    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];
      document.documentElement.animate(
        {
          clipPath: isDark ? [...clipPath].reverse() : clipPath,
        },
        {
          duration: 300,
          easing: 'ease-in',
          pseudoElement: isDark
            ? '::view-transition-old(root)'
            : '::view-transition-new(root)',
        }
      );
    });
  };

  useEffect(() => {
    // @ts-expect-error
    // if current browser doesn't support the view transition api
    if (!document.startViewTransition) {
      if (theme === 'light') {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
      } else {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
      }
    }
  }, [ theme]);
  return (
    <div className="container fixed left-0  right-0 top-0 z-[999] mx-auto flex h-24 items-center justify-between px-4">
      {router.pathname !== '/' && (
        <Link href="/">
          <Icon icon={homeIcon} fontSize={24} />
        </Link>
      )}
      <ul className="mx-10 flex flex-1 items-center justify-end gap-4 text-lg">
        {MENU.map((item) => (
          <li
            key={item.label}
            className={`cursor-pointer hover:text-slate-900 dark:hover:text-slate-300 ${
              router.asPath === item.route
                ? ' text-slate-900 dark:text-slate-300'
                : undefined
            }`}
          >
            <Link href={item.route}>{item.label}</Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center space-x-4">
        <a href="https://github.com/coderlcb" target="_blank">
          <Icon
            icon={githubLogo}
            fontSize={24}
            className="cursor-pointer hover:text-slate-900 dark:hover:text-slate-300"
          />
        </a>
        <a href="https://twitter.com/mozlilove" target="_blank">
          <Icon
            icon={twitterLogo}
            fontSize={24}
            className="cursor-pointer hover:text-slate-900 dark:hover:text-slate-300"
          />
        </a>
        <a href="https://space.bilibili.com/164577534" target="_blank">
          <Icon
            icon={bilibiliLogo}
            fontSize={24}
            className="cursor-pointer hover:text-slate-900 dark:hover:text-slate-300"
          />
        </a>
        <Icon
          icon={theme === 'light' ? sun : moon}
          fontSize={24}
          className="cursor-pointer hover:text-slate-900 dark:hover:text-slate-300"
          onClick={toggleTheme}
        />
      </div>
    </div>
  );
}
