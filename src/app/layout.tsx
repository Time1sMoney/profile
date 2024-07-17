import Layout from '@/components/Layout';
import '@/styles/globals.css';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Codercoin',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
