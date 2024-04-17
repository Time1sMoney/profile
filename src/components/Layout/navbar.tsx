'use client';
import Icons from '../Icons';
import ThemeChange from '../ThemeChange';
interface MenuItem {
  label: string;
  route: string;
}
export default function Navbar() {
  return (
    <div className="container mx-auto flex h-24 p-4 dark:text-white">
      <div className="ml-auto flex items-center space-x-4">
        <a href="https://blog-codercoin.vercel.app" target="_blank">
          <Icons
            name="bookIcon"
            size={24}
            className="cursor-pointer hover:text-primary"
          />
        </a>
        <a href="https://github.com/chenbinli-dev" target="_blank">
          <Icons
            name="githubLogo"
            size={24}
            className="cursor-pointer hover:text-primary"
          />
        </a>
        <a href="https://twitter.com/mozlilove" target="_blank">
          <Icons
            name="twitterLogo"
            size={24}
            className="cursor-pointer hover:text-primary"
          />
        </a>
        <a href="https://space.bilibili.com/164577534" target="_blank">
          <Icons
            name="bilibiliLogo"
            size={24}
            className="cursor-pointer hover:text-primary"
          />
        </a>
        <ThemeChange />
      </div>
    </div>
  );
}
