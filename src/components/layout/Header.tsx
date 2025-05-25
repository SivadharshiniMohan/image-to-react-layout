
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Function to update cart count (will be called from product cards)
  const updateCartCount = (count: number) => {
    setCartCount(prev => prev + count);
  };

  // Make updateCartCount available globally
  React.useEffect(() => {
    (window as any).updateCartCount = updateCartCount;
  }, []);

  return (
    <header className="bg-primary text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-white">K2G Crackers</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-gray-200 font-medium">Home</Link>
            <Link to="/about" className="text-white hover:text-gray-200 font-medium">About</Link>
            <Link to="/services" className="text-white hover:text-gray-200 font-medium">Services</Link>
            <Link to="/safety-tips" className="text-white hover:text-gray-200 font-medium">Safety Tips</Link>
            <Link to="/payment-info" className="text-white hover:text-gray-200 font-medium">Payment Info</Link>
            <Link to="/contact" className="text-white hover:text-gray-200 font-medium">Contact</Link>
          </nav>

          {/* Action Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" aria-label="Search" className="text-white hover:bg-red-800">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Cart" className="text-white hover:bg-red-800 relative">
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
            <Link to="/" className="text-white hover:text-gray-300 font-medium py-2" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="text-white hover:text-gray-300 font-medium py-2" onClick={toggleMenu}>About</Link>
            <Link to="/services" className="text-white hover:text-gray-300 font-medium py-2" onClick={toggleMenu}>Services</Link>
            <Link to="/safety-tips" className="text-white hover:text-gray-300 font-medium py-2" onClick={toggleMenu}>Safety Tips</Link>
            <Link to="/payment-info" className="text-white hover:text-gray-300 font-medium py-2" onClick={toggleMenu}>Payment Info</Link>
            <Link to="/contact" className="text-white hover:text-gray-300 font-medium py-2" onClick={toggleMenu}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
