
import React, { useState, useEffect } from 'react';
import { ShoppingCart, Package, DollarSign } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const CartSummary = () => {
  const [cartSummary, setCartSummary] = useState({
    totalItems: 0,
    totalQuantity: 0,
    totalPrice: 0
  });

  useEffect(() => {
    const updateCartSummary = () => {
      const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
      const totalItems = cartItems.length;
      const totalQuantity = cartItems.reduce((sum: number, item: any) => sum + item.quantity, 0);
      const totalPrice = cartItems.reduce((sum: number, item: any) => {
        const price = item.offerPrice || item.price;
        return sum + (price * item.quantity);
      }, 0);

      setCartSummary({ totalItems, totalQuantity, totalPrice });
    };

    // Initial load
    updateCartSummary();

    // Listen for cart updates
    const handleCartUpdate = () => {
      updateCartSummary();
    };

    window.addEventListener('cartUpdate', handleCartUpdate);
    window.addEventListener('storage', updateCartSummary);

    return () => {
      window.removeEventListener('cartUpdate', handleCartUpdate);
      window.removeEventListener('storage', updateCartSummary);
    };
  }, []);

  if (cartSummary.totalItems === 0) return null;

  return (
    <Card className="bg-primary text-white shadow-lg max-w-md">
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2 justify-center">
          <ShoppingCart className="w-5 h-5" />
          Cart Summary
        </h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="flex flex-col items-center gap-1">
            <Package className="w-4 h-4" />
            <span className="text-xs">Items</span>
            <span className="font-bold">{cartSummary.totalItems}</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <ShoppingCart className="w-4 h-4" />
            <span className="text-xs">Quantity</span>
            <span className="font-bold">{cartSummary.totalQuantity}</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <DollarSign className="w-4 h-4" />
            <span className="text-xs">Total</span>
            <span className="font-bold">₹{cartSummary.totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CartSummary;
