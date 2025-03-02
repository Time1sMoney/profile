import Layout from '@/components/Layout';
import '@/styles/globals.css';
import { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
export const metadata: Metadata = {
  title: 'Codercoin',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class">
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
