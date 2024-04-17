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
        'h-full overflow-y-auto bg-gradient-to-tr from-slate-200 to-white bg-fixed dark:from-black dark:to-slate-800 dark:text-white' +
        inter.className
      }
    >
      <Navbar />
      <div className="container mx-auto flex-1 p-4 dark:text-white">
        {children}
      </div>
      <Footer />
    </main>
  );
}
