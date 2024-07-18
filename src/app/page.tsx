'use client';
import ItemsGrid from '@/components/ItemsGrid';
import { motion } from 'framer-motion';
import type { MouseEvent } from 'react';
export default function Home() {
  const handleClick = (e: MouseEvent) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(e.currentTarget.innerHTML);
    }
  };
  return (
    <div className="container mx-auto grid h-full grid-cols-2 pt-10 max-md:grid-cols-1">
      <div className="col-span-1 h-full space-y-10 p-10">
        <div className="cursor-pointer text-2xl font-semibold">Hey.</div>
        <p className="break-words text-lg">
          I am a web developer and independent game producer.
        </p>
        <p className="break-words text-lg">
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
        <p className="whitespace-pre-line text-lg">
          Besides writing programs, I enjoy playing video games and riding
          bikes.
        </p>
      </div>
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: '50%' }}
        transition={{ duration: 1 }}
      >
        <ItemsGrid />
      </motion.div>
    </div>
  );
}
