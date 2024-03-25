import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Providers } from '@/lib';
import './globals.css';

const quicksand = Quicksand({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chasers Juice - Admin',
  description: 'v0.1.0',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Providers>
        <body className={quicksand.className}>{children}</body>
        <ReactQueryDevtools initialIsOpen={false} />
        <ToastContainer limit={4} autoClose={3000} position='bottom-right' />
      </Providers>
    </html>
  );
}
