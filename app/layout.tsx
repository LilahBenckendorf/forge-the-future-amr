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
    'A 6 PM Berkeley evening for engineers exploring robotic welding, metallurgy, AI, and the next manufacturing stack.',
  metadataBase: new URL('https://forge-the-future-amr.lilahbenckendorf.chatgpt.site'),
  openGraph: {
    title: 'Forge the Future | Advanced Metal Research',
    description:
      'A 6 PM Berkeley evening for mechanical and mechatronics engineers exploring advanced manufacturing, metallurgy, AI, robotics, and potential Hawthorne internships.',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forge the Future | Advanced Metal Research',
    description:
      'A 6 PM Berkeley evening for mechanical and mechatronics engineers exploring advanced manufacturing, metallurgy, AI, robotics, and potential Hawthorne internships.',
    images: ['/og.png'],
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
