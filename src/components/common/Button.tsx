import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils/format';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
    const variants = {
      primary:
        'bg-accent-walnut text-white hover:bg-neutral-800 focus:ring-accent-walnut',
      secondary:
        'bg-accent-sand text-neutral-900 hover:bg-neutral-300 focus:ring-accent-sand',
      outline:
        'border-2 border-accent-walnut text-accent-walnut hover:bg-accent-walnut hover:text-white focus:ring-accent-walnut',
      ghost: 'text-accent-walnut hover:bg-neutral-100 focus:ring-accent-walnut',
    };
    const sizes = {
      sm: 'px-3 py-1.5 text-sm rounded-sm',
      md: 'px-4 py-2 text-base rounded-md',
      lg: 'px-6 py-3 text-lg rounded-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;

