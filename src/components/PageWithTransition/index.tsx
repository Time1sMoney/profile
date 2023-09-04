// components/PageWithTransition.tsx
import { useState, useEffect } from 'react';
import { AppProps } from 'next/app';
import cn from 'classnames';
const PageWithTransition = ({ Component, pageProps, router }: AppProps) => {
  const [transitioning, setTransitioning] = useState(false);
  useEffect(() => {
    const handleStart = () => setTransitioning(true);
    const handleComplete = () => setTransitioning(false);
    
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router.events]);

  return (
    <div
      className={cn({
        transition: true,
        'animate-in fade-in slide-in-from-bottom-20 duration-1000':
          !transitioning,
        'animate-out fade-out slide-out-to-top-20 duration-1000': transitioning,
      })}
    >
      <Component {...pageProps} />
    </div>
  );
};
export default PageWithTransition;
