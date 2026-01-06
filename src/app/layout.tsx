import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Portfolio - Windows 95 Style',
  description: 'A portfolio website with Windows 95 aesthetic featuring CV, library, skills, and professional links',
  keywords: ['portfolio', 'CV', 'developer', 'Windows 95'],
  authors: [{ name: 'Portfolio Owner' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  themeColor: '#008080'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
