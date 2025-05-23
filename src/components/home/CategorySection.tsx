
import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/mockData';
import CategoryCard from '@/components/ui/CategoryCard';
import { Button } from '@/components/ui/button';

const CategorySection = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="section-header mb-6">
          <h2>Product Categories</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
