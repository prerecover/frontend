import { FC, PropsWithChildren } from 'react';
import { PropsWithClassName } from '@/shared/types';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';

export const ConfirmModalDescription: FC<
  PropsWithChildren<PropsWithClassName>
> = ({ children, className }) => {
  return (
    <Text
      className={cn(
        'mt-3 text-lg font-medium text-center text-dark',
        className
      )}
      type="p"
    >
      {children}
    </Text>
  );
};
