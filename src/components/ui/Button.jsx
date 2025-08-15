import React from 'react';

const Button = ({ children, onClick, variant = 'primary', type = 'button', ...props }) => {
  const baseStyles = 'px-4 py-2 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-opacity';

  const variants = {
    primary: 'bg-brand-primary text-white hover:opacity-90 focus:ring-brand-primary',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
    danger: 'bg-red-600 text-white hover:opacity-90 focus:ring-red-600',
    ghost: 'bg-transparent text-gray-800 hover:bg-gray-100',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
