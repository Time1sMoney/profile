import Image from 'next/image';
import logo from '@/../public/dog.png';
import { Icon } from '@iconify/react';
import githubLogo from '@iconify/icons-carbon/logo-github';
import bilibiliLogo from '@iconify/icons-tabler/brand-bilibili';
import sunFilled from '@iconify/icons-tabler/sun-filled';
import moonFilled from '@iconify/icons-tabler/moon-filled';
import { useLocalStorageState } from 'ahooks';
export default function Navbar() {
  const [theme, setTheme] = useLocalStorageState('theme', {
    defaultValue: 'light',
  });
  const handleThemeChange = () => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    setTheme((state) => (state === 'light' ? 'dark' : 'light'));
  };
  return (
    <div className="fixed left-0 right-0 top-0 z-[999] flex h-24 items-center justify-between border-b px-10 shadow-slate-500 drop-shadow dark:border-none dark:bg-gray-900">
      <div className="flex items-center space-x-4">
        <Image
          src={logo}
          width={80}
          alt="codercoin"
          priority
          className="hover-transition h-auto cursor-pointer hover:scale-105"
        />
        <div className="flex flex-col dark:text-white">
          <span className="font-bold italic antialiased">欢迎来到硬币小屋</span>
          <code className="cursor-pointer ">
            <a href="https://codercoin.top">codercoin.top</a>
          </code>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <a href="https://github.com/coderlcb" target="_blank">
          <Icon
            icon={githubLogo}
            fontSize={30}
            className="cursor-pointer hover:scale-110 dark:text-white"
          />
        </a>
        <a href="https://space.bilibili.com/164577534" target="_blank">
          <Icon
            icon={bilibiliLogo}
            fontSize={30}
            className="cursor-pointer hover:scale-110 dark:text-white"
          />
        </a>
        <button type="button" onClick={handleThemeChange}>
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
