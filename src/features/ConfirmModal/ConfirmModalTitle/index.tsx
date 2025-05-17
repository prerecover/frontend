import { cn } from '@/lib/utils';
import { PropsWithClassName } from '@/shared/types';
import { FC, PropsWithChildren } from 'react';

export const ConfirmModalTitle: FC<PropsWithChildren<PropsWithClassName>> = ({
  children,
  className,
}) => {
  return (
    <h4
      className={cn(
        'mt-4 text-center text-2xl font-medium text-dark',
        className
      )}
    >
      {children}
    </h4>
  );
};
