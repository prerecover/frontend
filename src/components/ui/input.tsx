import * as React from 'react';

import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const variants = cva(
  'w-full border border-blue-200 hover:border-blue ease-linear duration-200 bg-white placeholder:text-grey',
  {
    variants: {
      sizes: {
        sm: '',
        lg: 'h-12 p-4 placeholder:text-sm rounded-lg placeholder:font-normal',
        xl: '',
      },
    },

    defaultVariants: {
      sizes: 'lg',
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof variants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, sizes, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(variants({ sizes }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
