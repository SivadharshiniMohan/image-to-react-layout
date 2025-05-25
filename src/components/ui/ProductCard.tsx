
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '@/data/mockData';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();

  const increaseQuantity = (e: React.MouseEvent) => {
    e.stopPropagation();
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = (e: React.MouseEvent) => {
    e.stopPropagation();
    setQuantity(prev => prev > 0 ? prev - 1 : 0);
  };

  const addToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (quantity > 0) {
      // Update cart count in header
      if ((window as any).updateCartCount) {
        (window as any).updateCartCount(quantity);
      }
      
      // Show toast or notification here if needed
      console.log(`Added ${quantity} ${product.name} to cart`);
      
      // Reset quantity after adding to cart
      setQuantity(0);
    }
  };

  const handleCardClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(`/product/${product.slug}`);
  };

  return (
    <div 
      className="bg-white border border-gray-200 rounded overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-[420px] cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-52 object-contain p-2"
        />
        {product.isNew && (
          <Badge className="absolute top-2 left-2 bg-green-600">New</Badge>
        )}
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-semibold text-center mb-2 line-clamp-2 text-sm">{product.name}</h3>
        <p className="text-gray-600 text-xs mb-3 text-center line-clamp-2">{product.description}</p>
        
        <div className="mt-auto flex flex-col items-center justify-center gap-3">
          <div className="text-center">
            {product.offerPrice ? (
              <div className="flex flex-col items-center">
                <span className="text-gray-500 line-through text-sm">₹{product.price.toFixed(2)}</span>
                <span className="font-bold text-primary text-lg">₹{product.offerPrice.toFixed(2)}</span>
              </div>
            ) : (
              <span className="font-bold text-primary text-lg">₹{product.price.toFixed(2)}</span>
            )}
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center gap-2 mb-2">
            <Button 
              size="sm" 
              variant="outline" 
              onClick={decreaseQuantity}
              className="w-8 h-8 p-0"
            >
              -
            </Button>
            <span className="font-semibold min-w-[2rem] text-center">{quantity}</span>
            <Button 
              size="sm" 
              variant="outline" 
              onClick={increaseQuantity}
              className="w-8 h-8 p-0"
            >
              +
            </Button>
          </div>
          
          <div className="w-full">
            <Button 
              size="sm" 
              className="bg-primary hover:bg-red-700 w-full" 
              onClick={addToCart}
              disabled={quantity === 0}
            >
              <ShoppingCart className="w-4 h-4 mr-1" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
