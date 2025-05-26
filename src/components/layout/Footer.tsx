
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-8 pb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">K2G Crackers</h3>
            <p className="text-white mb-4">
              Providing premium quality crackers and biscuits since 1995. Our commitment is to use the finest ingredients for the perfect taste.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-white hover:text-gray-300">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-white hover:text-gray-300">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-white hover:text-gray-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>
              <li><Link to="/about" className="text-white hover:text-gray-300">About Us</Link></li>
              <li><Link to="/products" className="text-white hover:text-gray-300">Products</Link></li>
              <li><Link to="/contact" className="text-white hover:text-gray-300">Contact Us</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link to="/products/crackers" className="text-white hover:text-gray-300">Crackers</Link></li>
              <li><Link to="/products/biscuits" className="text-white hover:text-gray-300">Biscuits</Link></li>
              <li><Link to="/products/cookies" className="text-white hover:text-gray-300">Cookies</Link></li>
              <li><Link to="/products/wafers" className="text-white hover:text-gray-300">Wafers</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-white flex-shrink-0 mt-1" />
                <span>123 Cracker Street, Biscuit City, 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-white flex-shrink-0" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-white flex-shrink-0" />
                <span>info@k2gcrackers.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-red-800 mt-8 pt-6">
          <p className="text-center text-white text-sm">
            © {new Date().getFullYear()} K2G Crackers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
