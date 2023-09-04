import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/dog.png';
import { Icon } from '@iconify/react';
import mailIcon from '@iconify/icons-tabler/mail';
export default function Home() {
  return (
    <div className="container mx-auto h-full overflow-auto p-10">
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
      <div className="space-y-2 mt-8">
        <p>😊Hey!,I am codercoin,a front-end engineer.</p>
        <p>
          <span>
            This is my personal website, is to collect some technical community
            or interesting web sites.you can find those in
          </span>
          <Link href="./navigator" className="underline">
            <span className="ml-1 hover:text-slate-900 dark:hover:text-slate-300">
              here
            </span>
          </Link>
        </p>
      </div>
      <div className="mt-8 text-lg font-semibold">What i use in my work ?</div>
      <ul className="mt-4 space-y-2">
        <li>
          Front-End : React / Vue / Next.js / Typescript / Tailwindcss / Zustand
          / Pinia / React-router / Ant Design / Ahooks / Iconify{' '}
        </li>
        <li>
          Back-end: Node.js / Python / Koa / Nest / Prisma / MongoDB / MySQL
        </li>
        <li>Design: PS / 摹客</li>
        <li>Tools: VSCode / Postman / Apifox</li>
      </ul>
      <div className="mt-8 text-lg font-semibold">About Work</div>
      <ul className="mt-4 space-y-2">
        <li className="flex items-center gap-2">
          <span>Contact me:</span>
          <span className="flex items-center gap-2">
            <Icon icon={mailIcon} />
            lichenbin1119@qq.com
          </span>
        </li>
      </ul>
    </div>
  );
}
