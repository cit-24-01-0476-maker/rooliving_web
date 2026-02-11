import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  type?: 'button' | 'submit';
  fullWidth?: boolean;
  disabled?: boolean;
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  type = 'button',
  fullWidth = false,
  disabled = false,
}: ButtonProps) {
  // fx-btn: subtle lift/shadow hover effect (defined in globals.css)
  const baseClasses = 'fx-btn px-6 py-3 rounded-lg font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1a1a]';
  
  const variantClasses = {
    primary: 'bg-orange-600 text-white hover:bg-orange-700 disabled:bg-gray-300',
    secondary: 'bg-black text-white hover:bg-gray-800 disabled:bg-gray-300',
    outline: 'border-2 border-orange-600 text-orange-600 hover:bg-orange-50 disabled:border-gray-300 disabled:text-gray-300',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass}`}
    >
      {children}
    </button>
  );
}
