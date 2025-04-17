import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './styles/globals.css';

import ProviderQueryClient from './providers/queryClientProvider';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  title: 'My Dragons',
  description: 'Application for registering and viewing dragons',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <ProviderQueryClient>{children}</ProviderQueryClient>
      </body>
    </html>
  );
}
