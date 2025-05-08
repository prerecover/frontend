import { HTMLAttributes } from 'react';
import cn from 'clsx';
import styles from './styles.module.scss';
import { Text } from '@/components/ui/text';

interface Props extends HTMLAttributes<HTMLParagraphElement> {
  className?: string;
}

export const EmptyText = ({ children, className }: Props) => {
  return (
    <Text className={cn(styles.emptyText, className)} type="p">
      {children}
    </Text>
  );
};
