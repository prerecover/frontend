import { FC, PropsWithChildren } from 'react';
import { PropsWithClassName } from '@/shared/types';
import { cn } from '@/lib/utils';

export const ConfirmModalIcon: FC<PropsWithChildren<PropsWithClassName>> = ({
  children,
  className,
}) => {
  return (
    <div className={cn('mx-auto flex justify-center', className)}>
      {children}
    </div>
  );
};
