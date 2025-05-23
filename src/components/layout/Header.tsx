
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-primary">K2G Crackers</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary font-medium">About</Link>
            <Link to="/products" className="text-gray-700 hover:text-primary font-medium">Products</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary font-medium">Contact</Link>
          </nav>

          {/* Action Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" aria-label="Search">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Cart">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute top-0 right-0 bg-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu} aria-label="Menu">
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pt-2 pb-4 px-4">
          <nav className="flex flex-col space-y-3">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium py-2" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary font-medium py-2" onClick={toggleMenu}>About</Link>
            <Link to="/products" className="text-gray-700 hover:text-primary font-medium py-2" onClick={toggleMenu}>Products</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary font-medium py-2" onClick={toggleMenu}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
