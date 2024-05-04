'use client';
import Icons from '@/components/Icons';
import type { MouseEvent } from 'react';
export default function Home() {
  const handleClick = (e: MouseEvent) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(e.currentTarget.innerHTML);
    }
  };
  return (
    <div className="container mx-auto h-full space-y-10 overflow-auto p-10">
      <div className="cursor-pointer text-2xl font-semibold">Hey.</div>
      <p className="w-1/2 break-words text-lg">
        I am a web developer and independent game producer.I mainly use{' '}
        <a
          href="https://react.dev/"
          target="_blank"
          className="link font-semibold"
        >
          React.js
        </a>{' '}
        and{' '}
        <a
          href="https://vuejs.org/"
          target="_blank"
          className="link font-semibold"
        >
          Vue.js
        </a>{' '}
        to build applications, while I prefer to use{' '}
        <a
          href="https://nodejs.org/"
          target="_blank"
          className="link font-semibold"
        >
          Node.js
        </a>{' '}
        to service my applications. Yes, I love the experience of writing
        JavaScript, even though it has a lot of shortcomings. In addition to
        working as a front-end development engineer, I will devote my spare time
        to game production, which is a big project, and I will finish it slowly
        and carefully, because it has always been my dream.
      </p>
      <p className="w-1/2 whitespace-pre-line text-lg">
        Like most people, I like to play video games, but in addition to that,
        pixel art and cycling also fascinate me.
      </p>
      <p className="w-1/2 whitespace-pre-line text-lg">
        If you have any questions, please contact me by email.
      </p>
      <div className="flex items-center gap-2">
        <Icons name="mailIcon" size={24} />
        <span
          className="cursor-copy hover:underline hover:underline-offset-4"
          onClick={handleClick}
        >
          1015761882@qq.com
        </span>
        |
        <span
          className="cursor-copy hover:underline hover:underline-offset-4"
          onClick={handleClick}
        >
          lichenbin1119@gmail.com
        </span>
      </div>
    </div>
  );
}
