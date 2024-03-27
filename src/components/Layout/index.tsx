import { Inter } from 'next/font/google';
import Footer from './footer';
import Navbar from './navbar';
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});
interface Props {
  children: React.ReactNode;
}
export default function DefaultLayout({ children }: Props) {
  return (
    <main
      className={
        'flex h-full flex-col overflow-auto text-slate-500 dark:bg-neutral-900 dark:text-slate-400' +
        inter.className
      }
    >
      <Navbar />
      <div className="container mx-auto flex-1 p-4">{children}</div>
      <Footer />
    </main>
  );
}
