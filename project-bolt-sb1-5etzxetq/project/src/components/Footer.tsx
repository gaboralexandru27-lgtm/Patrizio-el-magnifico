import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-xl font-bold">PeakSupps</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted source for premium health and performance supplements. 
              Quality guaranteed, performance delivered.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/products/vitamins" className="text-gray-400 hover:text-white transition-colors">Vitamins</Link></li>
              <li><Link to="/products/pre-workout" className="text-gray-400 hover:text-white transition-colors">Pre-Workout</Link></li>
              <li><Link to="/products/protein" className="text-gray-400 hover:text-white transition-colors">Protein</Link></li>
              <li><Link to="/products/performance-enhancers" className="text-gray-400 hover:text-white transition-colors">Performance Enhancers</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/legal/shipping" className="text-gray-400 hover:text-white transition-colors">Shipping Info</Link></li>
              <li><Link to="/legal/returns" className="text-gray-400 hover:text-white transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="/legal/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/legal/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/legal/track-order" className="text-gray-400 hover:text-white transition-colors">Track Your Order</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-emerald-600" />
                <span className="text-gray-400">support@peaksupps.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-emerald-600" />
                <span className="text-gray-400">1-800-PEAK-SUP</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span className="text-gray-400">123 Fitness Ave, Health City, HC 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2024 PeakSupps. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/legal/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/legal/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/legal/disclaimers" className="text-gray-400 hover:text-white transition-colors">Disclaimers</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;