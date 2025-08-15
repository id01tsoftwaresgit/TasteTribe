import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Twitter, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Company': [
      { href: '/about', label: 'About' },
      { href: '/creators', label: 'For Creators' },
      { href: '/contact', label: 'Contact Us' },
    ],
    'Legal': [
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Service' },
    ],
  };

  const socialLinks = [
    { href: '#', icon: Twitter },
    { href: '#', icon: Instagram },
    { href: '#', icon: Facebook },
  ];

  return (
    <footer className="bg-white border-t border-ui-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <Compass className="h-8 w-8 text-brand-primary" />
              <span className="text-xl font-bold text-gray-800">TasteTribe</span>
            </Link>
            <p className="mt-4 text-gray-500 text-sm">
              Discover and share unique local experiences.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">{title}</h3>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="text-base text-gray-500 hover:text-gray-900">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 border-t border-ui-border pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-base text-gray-400 md:order-1">&copy; {new Date().getFullYear()} TasteTribe. All rights reserved.</p>
          <div className="flex space-x-6 md:order-2 mt-4 md:mt-0">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{link.icon.displayName}</span>
                <link.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
