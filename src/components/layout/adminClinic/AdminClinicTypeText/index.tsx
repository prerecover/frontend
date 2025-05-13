import { Text } from '@/components/ui/text';
import cn from 'clsx';
import { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  variant?: 'success' | 'error';
}

export const AdminClinicTypeText = ({
  children,
  className,
  variant,
}: Props) => {
  return (
    <Text
      className={cn('text-center mx-auto inline-flex', className)}
      type="p"
      color={variant === 'success' ? '#00CC5E' : '#D64657'}
    >
      {children}
    </Text>
  );
};
