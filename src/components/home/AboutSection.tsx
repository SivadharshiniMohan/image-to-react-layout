
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <img 
              src="/placeholder.svg" 
              alt="About K2G Crackers" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">About K2G Crackers</h2>
            <p className="text-gray-700 mb-6">
              Since 1995, K2G Crackers has been crafting premium quality crackers, biscuits, and cookies. 
              Our mission is to bring joy to your snacking experience with products made from the finest ingredients.
            </p>
            <p className="text-gray-700 mb-6">
              We take pride in our traditional recipes passed down through generations, combined with modern 
              techniques to ensure consistent quality and taste in every bite.
            </p>
            <Button asChild>
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
