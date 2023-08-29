import Image from 'next/image';
import Link from 'next/link';
import logo from '@/../public/dog.png';
import { Icon } from '@iconify/react';
import githubLogo from '@iconify/icons-carbon/logo-github';
import twitterLogo from '@iconify/icons-carbon/logo-twitter';
import bilibiliLogo from '@iconify/icons-tabler/brand-bilibili';
import sunFilled from '@iconify/icons-tabler/sun-filled';
import moonFilled from '@iconify/icons-tabler/moon-filled';
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
          clipPath: isDark ? clipPath.reverse() : clipPath,
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
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, [theme]);
  return (
    <div className="fixed left-0 right-0 top-0 z-[999] flex h-24 items-center justify-between border-b bg-slate-50 px-10 shadow-slate-500 drop-shadow dark:border-none dark:bg-gray-900 dark:text-slate-300">
      <div className="flex items-center space-x-4">
        <Image
          src={logo}
          width={40}
          alt="codercoin"
          priority
          className="hover-transition h-auto cursor-pointer hover:scale-105"
        />
        <span className="cursor-pointer font-semibold max-sm:hidden sm:text-lg lg:text-lg xl:text-xl">
          <a href="https://codercoin.top">Codercoin</a>
        </span>
      </div>
      <ul className="mx-20 flex flex-1 items-center justify-end gap-8 text-lg">
        {MENU.map((item) => (
          <li
            key={item.label}
            className={`cursor-pointer hover:text-yellow-500 ${
              router.asPath === item.route ? ' text-yellow-500' : undefined
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
            fontSize={30}
            className="cursor-pointer hover:text-yellow-500"
          />
        </a>
        <a href="https://twitter.com/mozlilove" target="_blank">
          <Icon
            icon={twitterLogo}
            fontSize={30}
            className="cursor-pointer hover:text-yellow-500"
          />
        </a>
        <a href="https://space.bilibili.com/164577534" target="_blank">
          <Icon
            icon={bilibiliLogo}
            fontSize={30}
            className="cursor-pointer hover:text-yellow-500"
          />
        </a>
        <button type="button" onClick={toggleTheme}>
          {theme === 'light' ? (
            <Icon
              icon={sunFilled}
              fontSize={30}
              className="cursor-pointer text-yellow-400 hover:scale-110"
            />
          ) : (
            <Icon
              icon={moonFilled}
              fontSize={30}
              className="cursor-pointer text-blue-300 hover:scale-110"
            />
          )}
        </button>
      </div>
    </div>
  );
}
