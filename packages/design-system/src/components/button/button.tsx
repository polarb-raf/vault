import React from 'react';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  primary?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ primary, className, ...props }) => {
  const classes = `${primary ? 'bg-primary' : 'bg-blue-500'} px-4 py-3 text-white-500 ${className}`;

  return (
    <button {...props} className={`${classes} ${className}`}>
      button!
    </button>
  );
};
