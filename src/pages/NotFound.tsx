import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Search, Phone, Mail } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4">
      <motion.div 
        className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-6xl font-serif font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-serif font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <Link to="/" className="btn-primary flex items-center justify-center">
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
          <Link to="/contact" className="btn-outline flex items-center justify-center">
            <Phone className="mr-2 h-5 w-5" />
            Contact Us
          </Link>
        </div>
        
        <div className="border-t border-gray-200 pt-6">
          <p className="text-gray-600 mb-4">Looking for something specific?</p>
          <div className="flex items-center">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search..."
                className="input-field pl-10 pr-4 py-2 w-full"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
            <button className="ml-2 btn-primary py-2">
              Search
            </button>
          </div>
        </div>
        
        <div className="mt-8 text-sm text-gray-500">
          <p>Need assistance? Contact us:</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="tel:+15551234567" className="flex items-center text-primary hover:text-primary-dark">
              <Phone className="h-4 w-4 mr-1" />
              +1 (555) 123-4567
            </a>
            <a href="mailto:info@luxehaven.com" className="flex items-center text-primary hover:text-primary-dark">
              <Mail className="h-4 w-4 mr-1" />
              info@luxehaven.com
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;