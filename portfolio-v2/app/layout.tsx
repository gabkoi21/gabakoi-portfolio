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
  title: 'Gabriel Akoi | Aspiring SOC Analyst',
  description:
    'Aspiring SOC Analyst developing hands-on skills in security monitoring, alert investigation, phishing analysis, SIEM, and incident response.',
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
    title: 'Gabriel Akoi | Aspiring SOC Analyst',
    description:
      'Cybersecurity and SOC analyst candidate with a strong full-stack development background.',
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
