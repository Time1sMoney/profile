import Head from 'next/head';
import Navbar from './navbar';
import Footer from './footer';
import { Inter } from 'next/font/google';
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});
interface Props {
  children: JSX.Element;
}
export default function DefaultLayout({ children }: Props) {
  return (
    <>
      <Head>
        <title>硬币小屋</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={
          'flex h-full min-w-[400px] flex-col bg-slate-50 dark:bg-gray-800 ' +
          inter.className
        }
      >
        <Navbar />
        <div className="mb-16 mt-24 overflow-auto flex-1">{children}</div>
        <Footer />
      </main>
    </>
  );
}
