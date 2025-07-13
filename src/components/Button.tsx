import type { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  children: ReactNode;
  href?: string;
  iconOnly?: boolean;
}

const Button = ({ 
  variant = 'primary', 
  size = 'medium', 
  children, 
  href, 
  iconOnly = false,
  className = '',
  ...props 
}: ButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary/50 font-sans relative overflow-hidden group btn-elegant";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-secondary to-secondary-hover text-black hover:from-secondary-hover hover:to-secondary-active shadow-lg hover:shadow-secondary/50 magnetic-hover wave-effect",
    secondary: "bg-gray-800/80 text-white hover:bg-gray-700/80 backdrop-blur-sm border border-secondary/25 hover:border-secondary/45 hover:text-secondary text-hover-glow",
    outline: "border-2 border-secondary/50 text-secondary hover:bg-secondary hover:text-black hover:border-secondary shimmer-effect wave-effect",
    ghost: "text-white hover:bg-secondary/10 hover:text-secondary text-hover-glow icon-hover wave-effect"
  };

  const sizeClasses = {
    small: iconOnly ? "p-2" : "px-4 py-2 text-sm",
    medium: iconOnly ? "p-3" : "px-6 py-3 text-base",
    large: iconOnly ? "p-4" : "px-8 py-4 text-lg"
  };

  const classNames = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  ].filter(Boolean).join(' ');

  if (href) {
    return (
      <a 
        href={href}
        className={classNames}
        {...(props as any)}
      >
        <span className="relative z-10">{children}</span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out shimmer-overlay"></div>
      </a>
    );
  }

  return (
    <button className={classNames} {...props}>
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out shimmer-overlay"></div>
    </button>
  );
};

export default Button;
