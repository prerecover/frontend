import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLTableSectionElement> {
  className?: string;
}

export const THead = ({ className, children }: Props) => {
  return <thead className={cn(className)}>{children}</thead>;
};
