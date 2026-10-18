import React from 'react';

const Card = ({ children, className = '', bodyClassName = 'p-6' }) => {
  return (
    <div className={`rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-soft transform transition duration-200 hover:-translate-y-1 hover:shadow-lg ${className}`}>
      <div className={bodyClassName}>
        {children}
      </div>
    </div>
  );
};

export default Card;
