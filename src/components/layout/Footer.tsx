
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-8 pb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info with Logo */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/26408662-96a6-4028-a301-0458d1ec8373.png" 
                alt="K2G Crackers Logo" 
                className="h-16 w-auto mr-4"
              />
            </div>
            <p className="text-white mb-4">
              Your trusted partner for premium quality fireworks and crackers. Making celebrations brighter since 2023.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white hover:text-yellow-400">About Us</Link></li>
              <li><Link to="/products" className="text-white hover:text-yellow-400">Products</Link></li>
              <li><Link to="/contact" className="text-white hover:text-yellow-400">Gallery</Link></li>
              <li><Link to="/contact" className="text-white hover:text-yellow-400">Services</Link></li>
              <li><Link to="/contact" className="text-white hover:text-yellow-400">Contact</Link></li>
              <li><Link to="/contact" className="text-white hover:text-yellow-400">Support</Link></li>
            </ul>
          </div>

          {/* Products - Empty for now as per image */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-400">Products</h3>
            {/* Empty section as shown in the image */}
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-400">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-yellow-400 flex-shrink-0" />
                <span>+91 75502 29158, +91 63830 78082</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-yellow-400 flex-shrink-0" />
                <span>k2gcrackers@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-yellow-400 flex-shrink-0 mt-1" />
                <span>Sivakasi, Tamil Nadu</span>
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
