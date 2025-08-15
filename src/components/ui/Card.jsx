import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    <div className={`bg-ui-surface border border-ui-border rounded-xl shadow-soft overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export default Card;
