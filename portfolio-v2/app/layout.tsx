import type { Metadata } from 'next';
import { Space_Mono, DM_Sans } from 'next/font/google';
import './globals.css';

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const dmSans = DM_Sans({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Gabriel Akoi | Cybersecurity Analyst & Full-Stack Developer',
  description:
    'Bridging the gap between software engineering and information security. Specializing in secure application development, network defense, and Python-based security automation.',
  keywords: [
    'cybersecurity',
    'full-stack developer',
    'security analyst',
    'Next.js',
    'TypeScript',
    'Python',
    'Liberia',
  ],
  authors: [{ name: 'Gabriel Akoi' }],
  openGraph: {
    title: 'Gabriel Akoi | Cybersecurity Analyst & Full-Stack Developer',
    description:
      'Bridging the gap between software engineering and information security.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceMono.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
