
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">About K2G Crackers</h1>
        
        {/* Hero section */}
        <div className="mb-16 relative h-96 rounded-lg overflow-hidden">
          <img 
            src="/placeholder.svg" 
            alt="K2G Crackers Factory" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-white text-center px-4">
              <h2 className="text-3xl font-bold mb-4">Our Story Since 1995</h2>
              <p className="text-xl max-w-2xl">Crafting premium crackers and biscuits with passion and tradition</p>
            </div>
          </div>
        </div>
        
        {/* Our story */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 mb-4">
              K2G Crackers was founded in 1995 by the Johnson family in their small hometown bakery. 
              What started as a local favorite quickly grew into a nationally recognized brand known for quality and taste.
            </p>
            <p className="text-gray-700 mb-4">
              For over 25 years, we've maintained our commitment to using only premium ingredients and traditional 
              recipes while continuously innovating to meet our customers' evolving preferences.
            </p>
            <p className="text-gray-700">
              Today, K2G Crackers offers a wide range of crackers, biscuits, cookies, and wafers that are enjoyed 
              by families across the country. Despite our growth, we remain true to our roots and the values 
              that have guided us from the beginning: quality, integrity, and customer satisfaction.
            </p>
          </div>
        </div>
        
        {/* Values */}
        <div className="mb-16 bg-gray-50 py-16 px-4 rounded-lg">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-gray-700">
                We use only the finest ingredients and maintain rigorous quality control standards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Family</h3>
              <p className="text-gray-700">
                Family-owned and operated, we bring family values to every aspect of our business.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white">
                  <path d="M12 22V8" />
                  <path d="m9 12 3-3 3 3" />
                  <path d="M10 2v6h4V2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-700">
                We continually innovate while honoring traditional baking techniques.
              </p>
            </div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Try Our Products Today</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Experience the K2G difference with our premium crackers, biscuits, and more. 
            We're confident you'll taste the quality in every bite.
          </p>
          <Button asChild size="lg">
            <Link to="/products">Browse Our Products</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
