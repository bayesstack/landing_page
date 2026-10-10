import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/inter';
import '@fontsource-variable/outfit';
import '@fontsource-variable/jetbrains-mono';
import './globals.css';

export const metadata: Metadata = {
  title: 'BayesStack | Institutional Learning System',
  description:
    'Industry-shaped programs, hands-on labs, and meaningful partnerships for forward-looking universities.',
  metadataBase: new URL('https://bayesstack.com'),
  icons: {
    icon: [
      { url: '/brand/favicons/favicon.svg', type: 'image/svg+xml' },
      { url: '/brand/favicons/favicon-32x32.png', sizes: '32x32' },
    ],
    apple: '/brand/favicons/apple-touch-icon.png',
  },
  openGraph: {
    title: 'BayesStack | Take learning beyond the classroom',
    description: 'An institutional learning system built to connect curriculum, practice, and industry.',
    images: ['/brand/social/og-image-light-1200x630.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/brand/social/twitter-card-1200x600.png'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F8FAFC',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
