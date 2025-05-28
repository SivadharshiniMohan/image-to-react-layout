
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const PromoBanner = () => {
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate('/products');
  };

  return (
    <section className="py-8 bg-gradient-to-r from-pink-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              🚛 Year-Round Availability | Express Delivery Guaranteed
            </h2>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
            <div className="border border-primary rounded-full px-6 py-3 text-primary font-semibold">
              🎆 Minimum Order: ₹3000
            </div>
            <div className="bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-full px-6 py-3 font-bold">
              ⚡ FLASH SALE: 80% OFF!
            </div>
          </div>
          
          <Button 
            onClick={handleShopNowClick}
            size="lg" 
            className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white px-8 py-3 rounded-full text-lg font-bold"
          >
            ORDER NOW →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
