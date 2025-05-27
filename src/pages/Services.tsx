
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: "🌿",
      title: "Wholesale Fireworks Supply",
      description: "Get bulk fireworks at competitive prices. Perfect for events, festivals, and large celebrations.",
      features: [
        "Extensive range of crackers",
        "Bulk order discounts", 
        "Quality-assured products from Sivakasi"
      ]
    },
    {
      icon: "🛒",
      title: "Online Fireworks Store",
      description: "Convenient online shopping for all your fireworks needs. Browse, select, and order from the comfort of your home.",
      features: [
        "User-friendly website",
        "Secure payment options",
        "Quick delivery across India"
      ]
    },
    {
      icon: "🚚",
      title: "Custom Delivery Services",
      description: "Reliable and safe delivery of fireworks directly to your doorstep.",
      features: [
        "Nationwide shipping",
        "Secure packaging",
        "Timely and tracked deliveries"
      ]
    },
    {
      icon: "🎁",
      title: "Festival Special Packages",
      description: "Curated fireworks collections for Diwali, New Year, and other special occasions.",
      features: [
        "Themed fireworks sets",
        "Family-friendly options",
        "Budget-friendly packages"
      ]
    },
    {
      icon: "📅",
      title: "Event Planning Support",
      description: "Professional consultation for fireworks display planning for weddings, corporate events, and celebrations.",
      features: [
        "Expert consultation",
        "Custom display design",
        "Safety compliance guidance"
      ]
    },
    {
      icon: "❓",
      title: "Safety Guidance & Support",
      description: "Comprehensive safety information and expert advice on fireworks usage.",
      features: [
        "Safety guidelines",
        "Usage instructions",
        "24/7 customer support"
      ]
    }
  ];

  const handleConnectService = () => {
    navigate('/contact');
  };

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive fireworks services to make your celebrations memorable and safe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={handleConnectService}
            size="lg"
            className="bg-primary hover:bg-red-700 px-8 py-3 text-lg"
          >
            Connect as Service
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
