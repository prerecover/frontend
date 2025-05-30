import { FC, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  children: ReactNode;
}

const Cell: FC<Props> = ({ children, className }) => {
  return (
    <td
      className={cn(
        'border-blue-100 min-w-48 max-w-48 border font-normal px-2 py-1 text-center',
        className
      )}
    >
      <div className="inline-block whitespace-pre-wrap text-center max-h-32 overflow-auto scroll-hide align-middle w-full">
        {children}
      </div>
    </td>
  );
};

export { Cell };
