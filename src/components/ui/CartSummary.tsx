
import React, { useState, useEffect } from 'react';
import { ShoppingCart, Package, IndianRupee } from 'lucide-react';

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
    <div className="bg-red-600 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="flex items-center justify-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            <div className="text-center">
              <div className="text-sm opacity-90">Total Items</div>
              <div className="text-2xl font-bold">{cartSummary.totalItems}</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Package className="w-5 h-5" />
            <div className="text-center">
              <div className="text-sm opacity-90">Quantity</div>
              <div className="text-2xl font-bold">{cartSummary.totalQuantity}</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <IndianRupee className="w-5 h-5" />
            <div className="text-center">
              <div className="text-sm opacity-90">Total Price</div>
              <div className="text-2xl font-bold">₹{cartSummary.totalPrice.toFixed(0)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
