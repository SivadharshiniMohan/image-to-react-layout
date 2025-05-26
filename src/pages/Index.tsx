
import React from 'react';
import HeroBanner from '@/components/home/HeroBanner';
import PromoBanner from '@/components/home/PromoBanner';
import SupportChannels from '@/components/home/SupportChannels';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import AboutSection from '@/components/home/AboutSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import NewsletterSection from '@/components/home/NewsletterSection';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import PriceListButton from '@/components/ui/PriceListButton';
import { newMockData } from '@/data/newMockData';

interface Product {
  name: string;
  actualPrice: number;
  discountPrice: number;
  image: string;
}

const Index = () => {
  // Convert new data structure to display format
  const allProducts: Product[] = Object.values(newMockData).flat();
  const featuredProducts = allProducts.slice(0, 6);
  const newArrivals = newMockData["New Arrivals"] || [];
  
  return (
    <div>
      <HeroBanner />
      <PromoBanner />
      <SupportChannels />
      
      {/* Featured Products */}
      <FeaturedProducts />
      
      {/* Display products by category with red background headers */}
      {Object.entries(newMockData).map(([category, products]) => (
        <section key={category} className="py-8">
          <div className="container mx-auto px-4">
            <div className="mb-6">
              <div className="bg-primary py-3 px-6 rounded-lg">
                <h2 className="text-white text-xl font-bold text-center">{category}</h2>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {products.map((product, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-[420px]">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-52 object-contain p-2"
                    />
                  </div>
                  
                  <div className="p-4 flex-grow flex flex-col">
                    <h3 className="font-semibold text-center mb-2 line-clamp-2 text-sm">{product.name}</h3>
                    
                    <div className="mt-auto flex flex-col items-center justify-center gap-3">
                      <div className="text-center">
                        <div className="flex flex-col items-center">
                          <span className="text-gray-500 line-through text-sm">₹{product.discountPrice.toFixed(2)}</span>
                          <span className="font-bold text-primary text-lg">₹{product.actualPrice.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
      
      <AboutSection />
      <TestimonialSection />
      <NewsletterSection />
      
      {/* WhatsApp and Price List Buttons */}
      <WhatsAppButton />
      <PriceListButton />
    </div>
  );
};

export default Index;
