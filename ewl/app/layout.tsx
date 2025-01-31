import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Demo Site',
  description: 'A demo site showcasing live chat, leaderboard, geolocation, and WATI integration.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          
        </header>
        <main>{children}</main>
        <footer>
          <p>© 2025 EWL Demo Site</p>
        </footer>
      </body>
    </html>
  );
}