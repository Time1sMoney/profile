import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout/index';
import PageWithTransition from '@/components/PageWithTransition/index';
export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <Layout>
      <PageWithTransition
        Component={Component}
        pageProps={pageProps}
        router={router}
      />
    </Layout>
  );
}
