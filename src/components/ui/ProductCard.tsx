
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '@/data/mockData';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Package } from 'lucide-react';

interface ProductCardProps {
  product: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();

  const increaseQuantity = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    
    // Automatically add to cart
    if ((window as any).updateCartCount) {
      (window as any).updateCartCount(1);
    }
    
    // Store in localStorage for cart page
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const existingItem = cartItems.find((item: any) => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cartItems.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    console.log(`Added 1 ${product.name} to cart`);
  };

  const decreaseQuantity = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      
      // Update cart count
      if ((window as any).updateCartCount) {
        (window as any).updateCartCount(-1);
      }
      
      // Update localStorage
      const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
      const existingItem = cartItems.find((item: any) => item.id === product.id);
      
      if (existingItem) {
        existingItem.quantity -= 1;
        if (existingItem.quantity <= 0) {
          const index = cartItems.findIndex((item: any) => item.id === product.id);
          cartItems.splice(index, 1);
        }
      }
      
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  };

  return (
    <div 
      className="bg-white border border-gray-200 rounded overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-[420px] cursor-pointer"
    >
      <div className="relative">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-52 object-contain p-2"
          />
        ) : (
          <div className="w-full h-52 flex items-center justify-center bg-gray-100">
            <Package className="w-20 h-20 text-gray-400" />
          </div>
        )}
        {product.isNew && (
          <Badge className="absolute top-2 left-2 bg-green-600">New</Badge>
        )}
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-semibold text-center mb-2 line-clamp-2 text-sm">{product.name}</h3>
        
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
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
