import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Compass } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Discover' },
    { href: '/creators', label: 'Creators' },
    { href: '/features', label: 'Features' },
  ];

  return (
    <header className="bg-ui-surface border-b border-ui-border shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Compass className="h-8 w-8 text-brand-primary" />
            <span className="text-xl font-bold text-gray-800">TasteTribe</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.href} to={link.href} className="text-gray-600 hover:text-brand-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="text-gray-600 hover:text-brand-primary transition-colors">Log In</Link>
            <Link to="/signup" className="bg-brand-primary text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">Sign Up</Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-brand-primary">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-ui-surface border-t border-ui-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link key={link.href} to={link.href} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-primary hover:bg-ui-hover">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-ui-border">
            <div className="px-5 space-y-2">
              <Link to="/login" className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-primary hover:bg-ui-hover">Log In</Link>
              <Link to="/signup" className="block w-full text-left bg-brand-primary text-white px-3 py-2 rounded-lg hover:opacity-90 transition-opacity">Sign Up</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
