
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
              src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600&h=400&fit=crop" 
              alt="K2G Crackers Sivakasi Fireworks" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">About K2G Crackers</h2>
            <p className="text-gray-700 mb-6">
              Since 1995, K2G Crackers has been Sivakasi's trusted name in premium fireworks and crackers. 
              We bring joy and sparkle to your festivals with authentic, high-quality products that light up 
              your celebrations safely and beautifully.
            </p>
            <p className="text-gray-700 mb-6">
              From traditional Diwali celebrations to grand weddings, our extensive range of sparklers, 
              fancy crackers, and aerial shots creates magical moments for families across India. 
              We pride ourselves on safety, quality, and timely delivery to make your festivals memorable.
            </p>
            <Button asChild className="bg-primary hover:bg-red-700">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
