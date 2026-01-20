import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nuna Siva Hambami Fathika – Portfolio',
  description: 'Portfolio of Nuna Siva Hambami Fathika, a Psychology student with HR experience.',
  icons: {
    icon: '/profile.jpeg',
    shortcut: '/profile.jpeg',
    apple: '/profile.jpeg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
