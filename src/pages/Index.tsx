
import React from 'react';
import HeroBanner from '@/components/home/HeroBanner';
import CategorySection from '@/components/home/CategorySection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import AboutSection from '@/components/home/AboutSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import NewsletterSection from '@/components/home/NewsletterSection';

const Index = () => {
  return (
    <div>
      <HeroBanner />
      <CategorySection />
      <FeaturedProducts />
      <AboutSection />
      <TestimonialSection />
      <NewsletterSection />
    </div>
  );
};

export default Index;
