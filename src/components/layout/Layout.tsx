
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import PriceListButton from '@/components/ui/PriceListButton';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      <PriceListButton />
    </div>
  );
};

export default Layout;
