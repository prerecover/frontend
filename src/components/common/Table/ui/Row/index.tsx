import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLTableRowElement> {
  className?: string;
}

export const Row = ({ className, children }: Props) => {
  return <tr className={cn(className)}>{children}</tr>;
};
