import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import '@/styles/globals.css';
import '@/styles/theme.css';
import { siteConfig } from '@/lib/config/site';
import { generateMetadata as genMeta } from '@/lib/seo/meta';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import NewsTicker from '@/components/common/NewsTicker';
import AnnouncementBar from '@/components/layout/AnnouncementBar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = genMeta({
  title: siteConfig.brand,
  description: siteConfig.tagline,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={siteConfig.locale} className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">
        <div className="relative z-50">
          <NewsTicker />
          <AnnouncementBar />
          <Navbar />
        </div>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

