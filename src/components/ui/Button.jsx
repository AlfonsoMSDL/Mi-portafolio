import React from 'react';
import { buttonClass } from './buttonStyles';

const Button = ({ children, onClick, href, variant, size, className = '', ...rest }) => {
  const classes = buttonClass({ variant, size, className });

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
