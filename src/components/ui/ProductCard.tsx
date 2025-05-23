
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
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {product.isFeatured && (
          <Badge className="absolute top-2 left-2 bg-primary">Featured</Badge>
        )}
        {product.isNew && (
          <Badge className="absolute top-2 left-2 bg-green-600">New</Badge>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="font-bold text-primary">${product.price.toFixed(2)}</span>
          
          <div className="flex gap-2">
            <Button size="sm" variant="outline" asChild>
              <Link to={`/product/${product.slug}`}>Details</Link>
            </Button>
            <Button size="sm">
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
