import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', children, ...props }) => {
  const baseStyle = "group relative inline-flex items-center justify-center px-8 py-3 text-sm font-bold tracking-widest uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-paper-gold overflow-hidden transition-all duration-300 rounded-sm";
  
  let variantClasses = "";
  let fillClasses = "";
  let textClasses = "";
  
  if (variant === 'primary') {
    variantClasses = "bg-paper-gold text-white";
    fillClasses = "bg-paper-black";
    textClasses = "text-white";
  } else if (variant === 'outline') {
    variantClasses = "bg-transparent text-paper-black border-2 border-paper-black";
    fillClasses = "bg-paper-black";
    textClasses = "group-hover:text-white transition-colors duration-300";
  } else if (variant === 'ghost') {
    variantClasses = "bg-transparent text-paper-black";
    fillClasses = "bg-gray-100";
    textClasses = "text-paper-black";
  }

  return (
    <button className={`${baseStyle} ${variantClasses} ${className}`} {...props}>
      <span className={`absolute inset-0 w-full h-full transform translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${fillClasses}`}></span>
      <span className={`relative z-10 flex items-center ${textClasses}`}>
        {children}
      </span>
    </button>
  );
};