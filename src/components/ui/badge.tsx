import cn from 'clsx';
import { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'error';
  size?: 'sm' | 'lg';
}

export const Badge = ({
  children,
  className,
  variant = 'default',
  size = 'lg',
}: Props) => {
  return (
    <div
      className={cn(
        'flex justify-center items-center text-center w-max',
        {
          'bg-[#f1f1ef] text-dark': variant === 'default',
          'bg-[#ffe1e1] text-dark': variant === 'error',
          'text-sm rounded-xl p-2': size === 'lg',
          'text-xs rounded-lg p-1.5': size === 'sm',
        },
        className
      )}
    >
      {children}
    </div>
  );
};
