
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
    <div className="fixed bottom-4 right-4 z-50">
      <Card className="bg-primary text-white shadow-lg">
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            Cart Summary
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Package className="w-4 h-4" />
              <span>Items: {cartSummary.totalItems}</span>
            </div>
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              <span>Quantity: {cartSummary.totalQuantity}</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              <span>Total: ₹{cartSummary.totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CartSummary;
