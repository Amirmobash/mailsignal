import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://mailsignal.de'),

  title: 'MailSignal',

  description:
    'MailSignal zeigt direkt am Briefkasten, ob neue Post angekommen ist – ohne App, WLAN oder Cloud.',

  openGraph: {
    title: 'MailSignal',

    description:
      'Ein sichtbares Signal direkt am Briefkasten. Solarbetrieben, offline und werkzeuglos montiert.',

    url: 'https://mailsignal.de',
    siteName: 'MailSignal',

    images: [
      {
        url: '/images/hero.png?v=2',
        width: 1600,
        height: 1000,
        alt: 'MailSignal am Briefkasten',
      },
    ],

    locale: 'de_DE',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'MailSignal',

    description:
      'Ein sichtbares Signal direkt am Briefkasten – ohne App, WLAN oder Cloud.',

    images: ['/images/hero.png?v=2'],
  },

  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#07090c',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
