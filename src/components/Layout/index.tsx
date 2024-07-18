import { Inter } from 'next/font/google';
import Footer from './footer';
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});
interface Props {
  children: React.ReactNode;
}
export default function Layout({ children }: Props) {
  return (
    <main
      className={
        'flex h-full flex-col overflow-y-auto bg-gradient-to-tr from-slate-200 to-white bg-fixed dark:from-black dark:to-slate-800 dark:text-white ' +
        inter.className
      }
    >
      <div className="container mx-auto flex-1 dark:text-white">{children}</div>
      <Footer />
    </main>
  );
}
