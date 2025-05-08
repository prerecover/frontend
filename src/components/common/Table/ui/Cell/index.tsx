import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLTableCellElement> {
  className?: string;
  tag?: 'th' | 'td';
}

export const Cell = ({ className, children, tag = 'td' }: Props) => {
  const Tag = tag;

  return (
    <Tag
      className={cn(
        'text-sm text-center text-dark p-1 w-full',
        {
          'font-medium bg-blue-100 min-w-44 min-h-14': tag === 'th',
          'h-24 odd:bg-white-background': tag === 'td',
        },
        className
      )}
    >
      {children}
    </Tag>
  );
};
