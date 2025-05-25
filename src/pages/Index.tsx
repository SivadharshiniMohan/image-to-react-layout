
import React from 'react';
import HeroBanner from '@/components/home/HeroBanner';
import CategorySection from '@/components/home/CategorySection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import AboutSection from '@/components/home/AboutSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import NewsletterSection from '@/components/home/NewsletterSection';
import { products } from '@/data/mockData';
import ProductCard from '@/components/ui/ProductCard';

const Index = () => {
  // Get different product groups for various sections
  const newProducts = products.filter(product => product.isNew).slice(0, 6);
  const popularProducts = products.slice(0, 6);
  
  return (
    <div>
      <HeroBanner />
      <CategorySection />
      
      {/* Featured Products */}
      <FeaturedProducts />
      
      {/* New Products */}
      <section className="py-8">
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
      </section>
      
      {/* Popular Products */}
      <section className="py-8">
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
      </section>
      
      <AboutSection />
      <TestimonialSection />
      <NewsletterSection />
    </div>
  );
};

export default Index;
