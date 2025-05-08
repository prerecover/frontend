import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Table = ({ className, children }: Props) => {
  return (
    <div className="overflow-x-auto overflow-y-hidden w-full">
      <table
        className={cn('w-full border-collapse border-spacing-0', className)}
      >
        {children}
      </table>
    </div>
  );
};
