import AnonAutoLogin from '@/components/AnonAutoLogin';
import './globals.css';

import { MuseoModerno } from 'next/font/google';

export const metadata = {
  title: 'Mantis',
  description: 'Achieve your goals',
};

const museoModerno = MuseoModerno({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={museoModerno.className}>
      <AnonAutoLogin />
      <body>{children}</body>
    </html>
  );
}
