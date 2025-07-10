import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLElement> {
  className?: string;
}

export const TBody = ({ children, className }: Props) => {
  return <tbody className={cn(className)}>{children}</tbody>;
};
