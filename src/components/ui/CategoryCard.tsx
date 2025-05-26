
import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '@/data/mockData';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link 
      to={`/products/${category.slug}`}
      className="group block"
    >
      <div className="bg-white border border-gray-200 rounded overflow-hidden aspect-square relative hover:shadow-md transition-shadow duration-300">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-contain p-2"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-primary py-2">
          <h3 className="text-white text-sm font-bold text-center px-2">
            {category.name}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
