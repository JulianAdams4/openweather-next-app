import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import './globals.css';
import Head from 'next/head';

const NunitoSans = Nunito_Sans({
  weight: ['400', '600'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Weather App',
  description: 'Weather app made with Nextjs, TS and Tailwind',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </Head>
      <body className={NunitoSans.className}>{children}</body>
    </html>
  );
}
