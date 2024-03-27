'use client';
import { useLocalStorageState } from 'ahooks';
import { useEffect } from 'react';
import Icons from './Icons';

const ThemeChange: React.FC = () => {
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
          duration: 1000,
          easing: 'ease-in-out',
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
  }, [theme]);
  return (
    <Icons
      name={theme === 'light' ? 'sun' : 'moon'}
      size={24}
      className="cursor-pointer hover:text-slate-900 dark:hover:text-slate-300"
      onClick={toggleTheme}
    />
  );
};
export default ThemeChange;
