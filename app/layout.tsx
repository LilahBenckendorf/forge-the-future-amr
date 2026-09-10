import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Forge the Future | Advanced Metal Research',
  description:
    'An engineering evening at The Glade in Berkeley on Thursday, Sep. 10 at 6:00 PM exploring robotic welding, metallurgy, AI, and the next manufacturing stack.',
  metadataBase: new URL('https://lilahbenckendorf.github.io/forge-the-future-amr/'),
  openGraph: {
    title: 'Forge the Future | Advanced Metal Research',
    description:
      'Thursday, Sep. 10 at 6:00 PM at The Glade in Berkeley—advanced manufacturing, metallurgy, AI, robotics, and potential Hawthorne internships.',
    images: ['https://lilahbenckendorf.github.io/forge-the-future-amr/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forge the Future | Advanced Metal Research',
    description:
      'Thursday, Sep. 10 at 6:00 PM at The Glade in Berkeley—advanced manufacturing, metallurgy, AI, robotics, and potential Hawthorne internships.',
    images: ['https://lilahbenckendorf.github.io/forge-the-future-amr/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
