import { HTMLAttributes } from 'react';
import cn from 'clsx';
import { Text } from '@/components/ui/text';

interface Props extends HTMLAttributes<HTMLParagraphElement> {
  className?: string;
}

export const EmptyText = ({ children, className }: Props) => {
  return (
    <Text
      className={cn(
        'text-center italic flex-grow flex justify-center items-center',
        className
      )}
      type="p"
    >
      {children}
    </Text>
  );
};
