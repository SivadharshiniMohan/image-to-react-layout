
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
            <Link to="/products" className="text-white hover:text-gray-200 font-medium">Products</Link>
            <Link to="/contact" className="text-white hover:text-gray-200 font-medium">Contact</Link>
          </nav>

          {/* Action Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" aria-label="Search" className="text-white hover:bg-red-800">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Cart" className="text-white hover:bg-red-800">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute top-0 right-0 bg-white text-primary text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
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
            <Link to="/products" className="text-white hover:text-gray-300 font-medium py-2" onClick={toggleMenu}>Products</Link>
            <Link to="/contact" className="text-white hover:text-gray-300 font-medium py-2" onClick={toggleMenu}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
