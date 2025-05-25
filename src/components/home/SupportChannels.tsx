
import React, { useState, useEffect } from 'react';
import { ShoppingCart, Package, CreditCard, Truck } from 'lucide-react';

const SupportChannels = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const supportChannels = [
    {
      id: 1,
      title: "Wholesale Inquiries",
      phone: "+91 75502 29158",
      icon: ShoppingCart,
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-800",
      iconColor: "text-yellow-600"
    },
    {
      id: 2,
      title: "Order Confirmation",
      phone: "+91 75502 29158",
      icon: Package,
      bgColor: "bg-green-100",
      textColor: "text-green-800",
      iconColor: "text-green-600"
    },
    {
      id: 3,
      title: "Payment Verification",
      phone: "+91 75502 29158",
      icon: CreditCard,
      bgColor: "bg-blue-100",
      textColor: "text-blue-800",
      iconColor: "text-blue-600"
    },
    {
      id: 4,
      title: "Shipping Updates",
      phone: "+91 63830 78082",
      icon: Truck,
      bgColor: "bg-purple-100",
      textColor: "text-purple-800",
      iconColor: "text-purple-600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % supportChannels.length);
    }, 3000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Our Dedicated Support Channels
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {supportChannels.map((channel) => {
                const IconComponent = channel.icon;
                return (
                  <div key={channel.id} className="w-full flex-shrink-0">
                    <div className={`${channel.bgColor} rounded-lg p-6 text-center mx-2`}>
                      <div className={`${channel.iconColor} mb-4 flex justify-center`}>
                        <IconComponent size={48} />
                      </div>
                      <h3 className={`${channel.textColor} text-xl font-semibold mb-2`}>
                        {channel.title}
                      </h3>
                      <p className={`${channel.textColor} text-lg font-bold`}>
                        {channel.phone}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="flex justify-center mt-4 space-x-2">
            {supportChannels.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportChannels;
