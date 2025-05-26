
import React from 'react';
import HeroBanner from '@/components/home/HeroBanner';
import PromoBanner from '@/components/home/PromoBanner';
import SupportChannels from '@/components/home/SupportChannels';
import AboutSection from '@/components/home/AboutSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import NewsletterSection from '@/components/home/NewsletterSection';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { newMockData } from '@/data/mockData';
import NewProductCard from '@/components/ui/NewProductCard';

const Index = () => {
  return (
    <div>
      <HeroBanner />
      <PromoBanner />
      <SupportChannels />
      
      {/* Display products by category */}
      {Object.entries(newMockData).map(([category, products]) => (
        <section key={category} className="py-8">
          <div className="container mx-auto px-4">
            {/* Category header with red background and white text */}
            <div className="bg-primary py-3 mb-6 rounded">
              <h2 className="text-white text-center text-xl font-bold">{category}</h2>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {products.map((product, index) => (
                <NewProductCard key={`${category}-${index}`} product={product} />
              ))}
            </div>
          </div>
        </section>
      ))}
      
      <AboutSection />
      <TestimonialSection />
      <NewsletterSection />
      
      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Index;
