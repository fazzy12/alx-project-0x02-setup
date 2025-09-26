import React from 'react';
import { type ButtonProps } from '@/interfaces';


const getButtonClasses = (size: ButtonProps['size'], shape: ButtonProps['shape']) => {
  let classes = 'font-bold transition duration-150 ease-in-out ';

  switch (size) {
    case 'small':
      classes += 'py-1 px-3 text-sm ';
      break;
    case 'large':
      classes += 'py-3 px-6 text-lg ';
      break;
    case 'medium':
    default:
      classes += 'py-2 px-4 text-base ';
      break;
  }

  switch (shape) {
    case 'rounded-sm':
      classes += 'rounded-sm ';
      break;
    case 'rounded-full':
      classes += 'rounded-full ';
      break;
    case 'rounded-md':
    default:
      classes += 'rounded-md ';
      break;
  }
  
  classes += 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50';

  return classes.trim();
};


const Button: React.FC<ButtonProps> = ({ size = 'medium', shape = 'rounded-md', children, onClick }) => {
  const className = getButtonClasses(size, shape);
  
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;