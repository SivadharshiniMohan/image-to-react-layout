
import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/mockData';
import CategoryCard from '@/components/ui/CategoryCard';
import { Button } from '@/components/ui/button';

const CategorySection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Product Categories</h2>
          <Button variant="outline" asChild>
            <Link to="/products">Browse All</Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
