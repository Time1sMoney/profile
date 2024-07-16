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
        I am a web developer and independent game producer.
      </p>
      <p className="w-1/2 break-words text-lg">
        I mainly use{' '}
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
        to build applications, and similarly I like to use{' '}
        <a
          href="https://nodejs.org/"
          target="_blank"
          className="link font-semibold"
        >
          Node.js
        </a>{' '}
        and{' '}
        <a
          href="https://go.dev/"
          target="_blank"
          className="link font-semibold"
        >
          Golang
        </a>{' '}
        to write server-side applications. In addition to the front-end
        development work, I will use{' '}
        <a
          href="https://godotengine.org/"
          target="_blank"
          className="link font-semibold"
        >
          Godot
        </a>{' '}
        to make independent games in my spare time, which is a big project for
        me, and the project is still in the early stages.
      </p>
      <p className="w-1/2 whitespace-pre-line text-lg">
        Besides writing programs, I enjoy playing video games and riding bikes.
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
