
import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '@/data/mockData';
import ProductCard from '@/components/ui/ProductCard';
import { Button } from '@/components/ui/button';

const FeaturedProducts = () => {
  const featuredProducts = products.filter(product => product.isFeatured).slice(0, 8);

  const handleViewAllClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="section-header mb-6">
          <h2>Featured Fireworks</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button asChild className="bg-primary hover:bg-red-700">
            <Link to="/products" onClick={handleViewAllClick}>View All Fireworks</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
