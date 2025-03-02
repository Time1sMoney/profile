'use client';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import React from 'react';
import Icons from './Icons';

interface Props {
  style?: React.CSSProperties;
  className?: string;
}

const ThemeChange: React.FC<Props> = ({ className, style }) => {
  const { theme, setTheme } = useTheme();
  // Use View Transition API to create effect of theme change
  const toggleTheme = (e: React.MouseEvent) => {
    if (!document.startViewTransition) {
      setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'));
      return;
    }
    const x = e.nativeEvent.clientX;
    const y = e.nativeEvent.clientY;
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerWidth - y)
    );
    let isDark: boolean;
    //@ts-ignore
    const transition = document.startViewTransition(() => {
      const root = document.documentElement;
      isDark = root.classList.contains('dark');
      if (isDark) {
        root.classList.remove('dark');
      } else {
        root.classList.add('dark');
      }
      setTheme(() => (isDark ? 'light' : 'dark'));
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
          duration: 1000,
          easing: 'ease-in-out',
          pseudoElement: isDark
            ? '::view-transition-old(root)'
            : '::view-transition-new(root)',
        }
      );
    });
  };

  return (
    <motion.button
      whileHover={{ scale: 1.2, rotate: 360 }}
      whileTap={{
        scale: 0.8,
        rotate: -360,
      }}
      className={
        'group cursor-pointer rounded-full bg-slate-200 p-2 dark:bg-slate-800 ' +
        className
      }
      style={style}
      onClick={toggleTheme}
    >
      <Icons
        name={theme === 'light' ? 'sun' : 'moon'}
        size={24}
        className="group-hover:text-primary "
      />
    </motion.button>
  );
};
export default ThemeChange;
