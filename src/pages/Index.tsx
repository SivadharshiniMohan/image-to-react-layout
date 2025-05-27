
import React from 'react';
import HeroBanner from '@/components/home/HeroBanner';
import PromoBanner from '@/components/home/PromoBanner';
import SupportChannels from '@/components/home/SupportChannels';
import AboutSection from '@/components/home/AboutSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import NewsletterSection from '@/components/home/NewsletterSection';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { p1 } from '@/data/mockData';
import ProductCard from '@/components/ui/ProductCard';

const Index = () => {
  
  
  return (
    <div>
      <HeroBanner />
      <PromoBanner />
      <SupportChannels />
      
   
      
      {/* New Products */}
      {/* <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="section-header mb-6">
            <h2>New Arrivals</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {newProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section> */}
      
      {/* Popular Products */}
      {/* <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="section-header mb-6">
            <h2>Popular Fireworks</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {popularProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section> */}
       {
        Object.entries(p1).map(([category, items]) => {
          return  <section key={category} className="py-8">
        <div className="container mx-auto px-4">
          <div className="section-header mb-6">
             <h2 className="bg-red-600 text-white text-center text-xl font-semibold py-2 rounded">
    {category}
  </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {items?.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section> 
        })
       }      
      <AboutSection />
      <TestimonialSection />
      <NewsletterSection />
      
      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Index;
