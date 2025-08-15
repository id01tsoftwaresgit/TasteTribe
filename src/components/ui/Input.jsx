import React from 'react';

const Input = ({ id, name, type = 'text', placeholder, ...props }) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      className="block w-full px-3 py-2 border border-ui-border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
      {...props}
    />
  );
};

export default Input;
