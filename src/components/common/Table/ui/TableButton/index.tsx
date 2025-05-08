import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const TableButton = ({ className, children }: Props) => {
  return (
    <button
      className={cn(
        'text-[inherit] font-[inherit] text-center text-blue',
        className
      )}
    >
      {children}
    </button>
  );
};
