
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
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/8e07233f-c210-4d28-84f4-83521141248d.png" 
                alt="K2G Crackers Logo" 
                className="h-20 w-auto mr-4"
              />
            </div>
            <p className="text-white mb-4 text-sm">
              Your trusted partner for premium quality fireworks and crackers. Making celebrations brighter since 2023.
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
            <h3 className="text-lg font-bold mb-4 text-yellow-300">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white hover:text-gray-300">About Us</Link></li>
              <li><Link to="/products" className="text-white hover:text-gray-300">Products</Link></li>
              <li><Link to="/about" className="text-white hover:text-gray-300">Gallery</Link></li>
              <li><Link to="/services" className="text-white hover:text-gray-300">Services</Link></li>
              <li><Link to="/contact" className="text-white hover:text-gray-300">Contact</Link></li>
              <li><Link to="/about" className="text-white hover:text-gray-300">Support</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-300">Products</h3>
            <ul className="space-y-2">
              <li><Link to="/products/combo-packages" className="text-white hover:text-gray-300">Combo Packages</Link></li>
              <li><Link to="/products/ground-chakkar" className="text-white hover:text-gray-300">Ground Chakkar</Link></li>
              <li><Link to="/products/sparklers" className="text-white hover:text-gray-300">Sparklers</Link></li>
              <li><Link to="/products/fancy-sparklers" className="text-white hover:text-gray-300">Fancy Sparklers</Link></li>
              <li><Link to="/products/new-arrivals" className="text-white hover:text-gray-300">New Arrivals</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-300">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-white flex-shrink-0 mt-1" />
                <span className="text-sm">Sivakasi, Tamil Nadu</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-white flex-shrink-0" />
                <div className="text-sm">
                  <div>+91 75502 29158</div>
                  <div>+91 63830 78082</div>
                </div>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-white flex-shrink-0" />
                <span className="text-sm">k2gcrackers@gmail.com</span>
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
