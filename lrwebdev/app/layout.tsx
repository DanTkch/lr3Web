import type { Metadata } from 'next';
import Header from '@/components/HeaderModule/Header';
import Footer from '@/components/FooterModule/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'GroceryExpress — Швидка доставка їжі додому',
  description: 'Ваша улюблена їжа прямо до рідної хати — свіжа, гаряча та швидка.',
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="uk">
      <body>
      <Header />
      {children}
      <Footer />
      </body>
      </html>
  );
}