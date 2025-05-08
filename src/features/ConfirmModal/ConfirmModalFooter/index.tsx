import { FC, PropsWithChildren } from 'react';
import { PropsWithClassName } from '@/shared/types';
import { cn } from '@/lib/utils';

export const ConfirmModalFooter: FC<PropsWithChildren<PropsWithClassName>> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        'flex gap-4 mt-3 [&>button]:flex-grow max-md:flex-col',
        className
      )}
    >
      {children}
    </div>
  );
};
