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
      <body className={quicksand.className}>
        <main>
          <Providers>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
          </Providers>
        </main>

        <ToastContainer limit={4} autoClose={3000} position='bottom-right' />
      </body>
    </html>
  );
}
