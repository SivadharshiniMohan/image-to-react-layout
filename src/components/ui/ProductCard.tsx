
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/data/mockData';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white border border-gray-200 rounded overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-contain p-2"
        />
        {product.isFeatured && (
          <Badge className="absolute top-2 left-2 bg-primary">Featured</Badge>
        )}
        {product.isNew && (
          <Badge className="absolute top-2 left-2 bg-green-600">New</Badge>
        )}
      </div>
      
      <div className="p-3 flex-grow flex flex-col">
        <h3 className="font-semibold text-center mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 text-center line-clamp-2">{product.description}</p>
        
        <div className="mt-auto flex flex-col items-center justify-center gap-2">
          <span className="font-bold text-primary text-center block mb-2">${product.price.toFixed(2)}</span>
          
          <div className="flex gap-2">
            <Button size="sm" variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-white">
              <Link to={`/product/${product.slug}`}>Details</Link>
            </Button>
            <Button size="sm" className="bg-primary hover:bg-red-700">
              <ShoppingCart className="w-4 h-4 mr-1" />
              Add
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
