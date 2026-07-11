import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://mailsignal.de'),
  title: 'MailSignal — Nie wieder umsonst zum Briefkasten',
  description: 'Sichtbarer Briefkasten-Status ohne App, WLAN oder Cloud.',
  openGraph: {
    title: 'MailSignal — Nie wieder umsonst zum Briefkasten',
    description: 'Solarbetriebener Statusindikator für Briefkästen. Offline. Werkzeuglos. Sichtbar.',
    url: 'https://mailsignal.de',
    siteName: 'MailSignal',
    images: [{ url: '/images/hero.png', width: 1600, height: 1000, alt: 'MailSignal am Briefkasten' }],
    locale: 'de_DE',
    type: 'website',
  },
  icons: { icon: '/favicon.svg' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#07090c',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
