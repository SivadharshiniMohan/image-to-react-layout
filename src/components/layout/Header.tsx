
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Function to update cart count (will be called from product cards)
  const updateCartCount = (count: number) => {
    setCartCount(prev => prev + count);
  };

  // Make updateCartCount available globally
  useEffect(() => {
    (window as any).updateCartCount = updateCartCount;
    
    // Initialize cart count from localStorage
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const totalCount = cartItems.reduce((sum: number, item: any) => sum + item.quantity, 0);
    setCartCount(totalCount);

    // Listen for cart updates from Cart page
    const handleCartUpdate = (event: CustomEvent) => {
      setCartCount(event.detail);
    };

    window.addEventListener('cartUpdate', handleCartUpdate as EventListener);

    return () => {
      window.removeEventListener('cartUpdate', handleCartUpdate as EventListener);
    };
  }, []);

  const handleNavClick = (path: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(path);
    setIsMenuOpen(false);
  };

  const handleCartClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/cart');
  };

  return (
    <header className="bg-primary text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" onClick={() => handleNavClick('/')} className="flex items-center">
            <span className="text-xl font-bold text-white">K2G Crackers</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleNavClick('/')} className="text-white hover:text-gray-200 font-medium">Home</button>
            <button onClick={() => handleNavClick('/about')} className="text-white hover:text-gray-200 font-medium">About</button>
            <button onClick={() => handleNavClick('/services')} className="text-white hover:text-gray-200 font-medium">Services</button>
            <button onClick={() => handleNavClick('/safety-tips')} className="text-white hover:text-gray-200 font-medium">Safety Tips</button>
            <button onClick={() => handleNavClick('/payment-info')} className="text-white hover:text-gray-200 font-medium">Payment Info</button>
            <button onClick={() => handleNavClick('/contact')} className="text-white hover:text-gray-200 font-medium">Contact</button>
          </nav>

          {/* Action Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" aria-label="Cart" className="text-white hover:bg-red-800 relative" onClick={handleCartClick}>
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-white text-primary text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-red-800" onClick={toggleMenu} aria-label="Menu">
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-red-800 pt-2 pb-4 px-4">
          <nav className="flex flex-col space-y-3">
            <button onClick={() => handleNavClick('/')} className="text-white hover:text-gray-300 font-medium py-2 text-left">Home</button>
            <button onClick={() => handleNavClick('/about')} className="text-white hover:text-gray-300 font-medium py-2 text-left">About</button>
            <button onClick={() => handleNavClick('/services')} className="text-white hover:text-gray-300 font-medium py-2 text-left">Services</button>
            <button onClick={() => handleNavClick('/safety-tips')} className="text-white hover:text-gray-300 font-medium py-2 text-left">Safety Tips</button>
            <button onClick={() => handleNavClick('/payment-info')} className="text-white hover:text-gray-300 font-medium py-2 text-left">Payment Info</button>
            <button onClick={() => handleNavClick('/contact')} className="text-white hover:text-gray-300 font-medium py-2 text-left">Contact</button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
