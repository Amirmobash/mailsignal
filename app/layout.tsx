import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'MailSignal — Nie wieder umsonst zum Briefkasten',
  description: 'Sichtbarer Briefkasten-Status ohne App, WLAN oder Cloud.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
