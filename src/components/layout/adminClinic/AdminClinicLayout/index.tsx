import { cn } from '@/lib/utils';
import { PropsWithClassName } from '@/shared/types';
import { FC, PropsWithChildren } from 'react';

export const AdminClinicLayout: FC<PropsWithChildren<PropsWithClassName>> = ({
  children,
  className,
}) => {
  return (
    <div className={cn('flex flex-col flex-grow min-h-dvh', className)}>
      {children}
    </div>
  );
};
