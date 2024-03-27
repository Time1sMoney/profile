'use client';
import Icons from '@/components/Icons';
import Image from 'next/image';
import logo from 'public/dog.png';
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
      <div className="mt-8 space-y-2">
        <p>😊Hey! Nice to meet you.</p>
      </div>
      <div className="mt-8 text-lg font-semibold">What I Use ?</div>
      <ul className="mt-4 space-y-2">
        <li>
          Client Side : React / Vue / Vite / Next.js / Typescript / Tailwindcss /
          Zustand / Pinia / React-router / Ant Design / Ahooks / Iconify{' '}
        </li>
        <li>Server Side : Node.js / Koa / Nest / Prisma / MongoDB / MySQL</li>
        <li>UI Design : PS / 摹客</li>
        <li>Tools : VSCode / Postman / Apifox</li>
      </ul>
      <div className="mt-8 text-lg font-semibold">About Job</div>
      <ul className="mt-4 space-y-2">
        <li className="flex items-center gap-2">
          <span>Contact Me :</span>
          <span className="flex items-center gap-2">
            <Icons name="mailIcon" />
            1015761882@qq.com | lichenbin1119@gmail.com
          </span>
        </li>
      </ul>
    </div>
  );
}
